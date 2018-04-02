<template>
	<div class="container">
		<div class="jumbotron">
			<div class="row">
				<p class="text-center">Are you sure you want to logout? <br><br>
					<button type="button" class="btn btn-sm btn-success"  @click="logout()">Yes</button>
					<button type="button" class="btn btn-sm btn-success"  @click="noLogout()">No</button>
				</p>
			</div>
		</div>
	</div>
</template>

<script src="./logout.component.js"></script>