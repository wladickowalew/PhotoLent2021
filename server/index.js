let express = require("express");
let vjm     = require("vue-jwt-mongo");
let multer  = require("multer");
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

Mclient.connect(url, function(err, client){
	database = client.db(dbName);
	app.listen(8080);
})