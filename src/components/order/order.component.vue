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
										<th class="text-center">Order ID</th>
										<th class="text-center">Customer ID</th>
										<th class="text-center">Customer Name</th>
										<th class="text-center">Customer E-mail</th>
										<th class="text-center">Customer Address</th>
										<th class="text-center">Customer Phone</th>
										<th class="text-center">ISBN</th>
										<th class="text-center">Title</th>
              							<th class="text-center">Quantity</th>
              						<!--	<th class="text-center">status</th>-->
									</tr>
								</thead>
								<tbody>
									<tr v-for="order in orders">
										<td class="text-center">{{ order.id }}</td>
										<td class="text-center">{{ order.user_id }}</td>
										<td class="text-center">{{ order.name }}</td>
										<td class="text-center">{{ order.email }}</td>
										<td class="text-center">{{ order.cus_address }}</td>
										<td class="text-center">{{ order.cus_phone }}</td>
										<td class="text-center">{{ order.isbn }}</td>
										<td class="text-center">{{ order.title }}</td>
										<td class="text-center">{{ order.quantity }}</td>
										<td>
											<button type="button" class="btn btn-sm btn-danger" @click="deleteOrder(order)">Sent</button>
										</td>
										<!--<td class="text-center">
         									<span v-if="!order.onedit">{{ order.order_status }}</span>
         									<input type="text" class="form-control" v-model="order.order_status" v-if="order.onedit" placeholder="order_status">
        								</td>
        								<button type="button" class="btn btn-sm btn-success" v-if="!order.onedit" @click="editOrder(order)">Edit</button>
         								<button type="button" class="btn btn-sm btn-success" v-if="order.onedit" :disabled="order.id == '' || order.order_status == ''" @click="updateOrder(order)">Save</button>-->
										<!--<td class="text-center">
        									<span v-if="!user.onedit">{{ order.order_status }}</span>
         									<input type="hidden" class="form-control" v-model="order.order_status" value="shipped" placeholder="order_status" v-if="order.onedit">
        								</td>
        								<button type="button" class="btn btn-sm btn-success" v-if="order.onedit" :disabled="order.order_status == ''" @click="updateBook(book)">Shipped</button>-->
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

<script src="./order.component.js"></script>