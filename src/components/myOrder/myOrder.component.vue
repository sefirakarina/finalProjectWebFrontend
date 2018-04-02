<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="jumbotron">
					<div class="row">
						<p class="text-center">Orders</p>
					</div>
					<div class="row">
						<div class="col-md-12">
							<table class="table table-striped">
								<thead>
									<tr>
										<th class="text-center">order ID</th>
										<th class="text-center">title</th>
										<th class="text-center">price</th>
              							<th class="text-center">quantity</th>
              						<!--	<th class="text-center">status</th>-->
									</tr>
								</thead>
								<tbody>
									<tr v-for="order in orders">
										<td class="text-center">{{ order.id }}</td>
										<td class="text-center">{{ order.title }}</td>
										<td class="text-center">{{ order.price }}</td>
										<td class="text-center">{{ order.quantity }}</td>
										
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<table class="table table-striped"></table>
	</div>
</template>

<script src="./myOrder.component.js"></script>