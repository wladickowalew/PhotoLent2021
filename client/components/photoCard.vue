<style scoped>
	div{
		background: grey;
		margin: 20px;
	}
	a{
		font-size: 17px;
	}
</style>

<template>
	<div class="card" style="width: 18rem;">
		<div class="card-header">
			<h5 class="card-title">{{"Имя автора"}}</h5>
		</div>
		<img src="https://place-hold.it/500x500" class="card-img-top">
	</div>
</template>

<script>
	module.exports = {props: ["record"]};
</script>