<style type="text/css">p
{
padding:0px;
margin:0px;
}

#header{
height:50px;
background-color:#b8ffff;
width: 100%;
}

footer{
width:100%;
height: 90px;
bottom:0px;
background-color: #E0E0E0;
}	
</style>
<template>
	<div class="wrapper">
		<nav class="navbar navbar-static-top navbar-default" id="header"><!--v-bind="isCustomer"-->
			<div class="container">
				<div class="navbar-header">
					
					 <!--<router-link to="/signup" class="navbar-brand">signup</router-link>
					<router-link to="/login" class="navbar-brand">login</router-link>-
					<router-link to="/items/customer" class="navbar-brand">items</router-link>-->
					<!--<router-link to="/cart" class="navbar-brand">cart</router-link>
					<router-link to="/myOrder" class="navbar-brand">my order</router-link>-->
					<div v-if=isAuth()>
						<router-link to="/" class="navbar-brand">Home</router-link>
					</div>
					<div v-if=isAdmin()>
						<router-link to="/adminHome/admin" class="navbar-brand">Home</router-link>
						<router-link to="/book/admin" class="navbar-brand">Book</router-link>
						<router-link to="/order/admin" class="navbar-brand">Order</router-link>
						<router-link to="/logout/admin" class="navbar-brand">Logout</router-link>
					</div>
					<div v-if=isCustomer()>
				      <router-link to="/cusHome/customer" class="navbar-brand">Home</router-link>
					  <router-link to="/items/customer" class="navbar-brand">Items</router-link>
    				  <router-link to="/myOrder/customer" class="navbar-brand">My Order</router-link>
    				  <router-link to="/cart/customer" class="navbar-brand">Cart</router-link>
    				  <router-link to="/logout/customer" class="navbar-brand">Logout</router-link>
					</div>
				<!--<ul class="nav navbar-nav navbar-right">
					<li>
						<router-link to="/book">Book</router-link>
					</li>
				</ul>-->
				</div>
			</div>
		</nav>
		<main>
			<router-view></router-view>
		</main>
		<footer>
			<br/>
			<p class="text-center">Copyright &copy Periminus</p>
		</footer>
	</div>
</template>

<script src="./app.component.js"></script>
<link rel="stylesheet" type="text/css" href="../assets/fonts/bootstrap">