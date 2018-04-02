<style type="text/css">
	#main_block{
		font-family:Arial, Helvetica, sans-serif;
		font-size:11px;
		color:#E0E0E0;
		overflow:hidden;
		width:750px;
	}
</style>

<template>
	<div class="container">
		<div class="jumbotron">
			<!--<h1>{{ message }}</h1>-->
			<div class="row" align="center">
				<div id="main_block">
					<img src="https://cdn.pixabay.com/photo/2017/08/02/15/09/book-2572015_960_720.jpg" style="height: 100px; width: auto;">
					<h1 style="color: black">Welcome to Periminus</h1>
					<h2></h2>
				<p>
					<button type="button" class="btn btn-sm btn-success"  @click="goToLogin()">Login</button>
				 	<button type="button" class="btn btn-sm btn-success"  @click="goToSignup()">Sign Up</button>
				</p>
			</div>
		</div>
	</div>
</div>
</template>

<script src="./home.component.js"></script>