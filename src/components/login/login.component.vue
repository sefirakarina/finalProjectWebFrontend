<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="jumbotron">
					<div class="row"><p align="center">Login</p></div>
					<div class="row">
						<form role="form" @submit.prevent="storeUser()">
							<div class="form-group">
         						<input type="text" class="form-control" placeholder="email" required v-model="user.email">
       						</div>
       						<div class="form-group">
         						<input type="password" class="form-control" placeholder="password" required v-model="user.password">
       						</div>
       						<div class="text-right">
         						<button type="submit" class="btn btn-primary">Login</button>
       						 </div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="./login.component.js"></script>