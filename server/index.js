let express = require("express");
let vjm     = require("vue-jwt-mongo");
let multer  = require("multer");
let upload  = multer({dest: "../client/data"});
let Mclient = require("mongodb").MongoClient;
let url = "mongodb://localhost", dbName = "photofeed";

let app = express();

function getKey() {
	return "cPcdYCrmnbkfl1CsrUJk9Yc7PZiufrGW4M0w8yWQpn2rLRKWs5rWxtguMV6QfKO";
}

let vjmServer = vjm.Server({
	mongoUrl: url + "/" + dbName,
	jwtSecret: getKey()
});

app.use(express.static("../client"));

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login"   , vjmServer.loginHandler);
app.post("/upload", [vjmServer.jwtProtector, 
	                               upload.single("picture")],
	function (req, res){
		insertRecord(req.user.username, req.file.filename);
		res.sendStatus(200);
	});
app.get("/feed",vjmServer.jwtProtector, function (req, res) {
	console.log("call photos");
	database.collection("files").find({}).sort({date:-1})
	                                        .limit(10).toArray(
		function(err, doc){
			console.log(doc);
			let string = JSON.stringify(doc);
			res.send(string);
		});
});

Mclient.connect(url, function(err, client){
	database = client.db(dbName);
	app.listen(8080);
})


function insertRecord(user, file) {
	let date = new Date();
	var record = {user: user, file: file, date: date};
	database.collection("files").insertOne(record, 
		                               function(err, res){});
}