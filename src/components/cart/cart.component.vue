<template>
  
 <div class="container">
 <toast ref="toast"></toast>
  <loading-panel message="Fetch carts from server" v-if="cartConfig.loading && !cartConfig.error"></loading-panel>
  <error-panel message="Failed fetch carts from server" v-if="!cart.loading && cartConfig.error" @onErrorHandled="bindCarts()"></error-panel>
  <div class="row" v-if="!cartConfig.loading && !cartConfig.error">
   <div class="col-md-12">
    <div class="table-responsive">
     <table class="table table-striped">
      <thead>
       <tr>
        <th class="text-center" style="width: 5%">#ID</th>
            <th class="text-center">About</th>
            <th class="text-center">Image</th>
            <th class="text-center">Price</th>
            <th class="text-center">Quantity</th>
       </tr>
      </thead>
      <tbody>
       <tr v-for="cart in carts">
        <td class="text-center">{{ cart.id }}</td>
        <td class="text-center">
          <p align="left">
            <label>Book id :</label>{{ cart.books_id }}<br>
            <label>Title :</label>{{ cart.title }}<br>
          </p>
        </td>
        <td class="text-center">
          <img :src="cart.book_img" style="height:120px; width: auto;">
        </td>
         <td class="text-center">{{ cart.price }}</td>
         <td class="text-center">{{ cart.quantity }}</td>
          <button type="button" class="btn btn-sm btn-success"  @click="orderBook(cart)">Order</button>
          <button type="button" class="btn btn-sm btn-danger" @click="deleteCart(cart)">Remove</button>
        </td>




        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>
</template>

<script src="./cart.component.js"></script>

<!--<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="jumbotron">
					<div class="row">
						<div class="col-md-12">
							<table class="table table-striped">
								<thead>
									<tr>
										<th class="text-center" style="width: 5%">isbn</th>
										<th class="text-center" style="width: 20%">title/th>
              							<th class="text-center" style="width: 20%">quantity</th>
									</tr>
								</thead>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<table class="table table-striped"></table>
	</div>
</template>-->