<template>
	<div>
		<header-m></header-m>
		<photo-card v-for="record in records" v-bind:record="record"></photo-card>
	</div>
</template>

<script>
	let Header = require("./header.vue");
	let PhotoCard = require("./photoCard.vue");
	module.exports={
		components:{
			headerM: Header,
			photoCard: PhotoCard
		},
		data: function() {
			return {records: [1]}
		},
	}	
</script>