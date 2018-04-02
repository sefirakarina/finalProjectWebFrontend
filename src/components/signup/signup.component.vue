<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="jumbotron">
					<div class="row">
						<p class="text-center">Sign Up</p>
					</div>
					<div class="row">
						<div class="col-md-12">
							 <form role="form" @submit.prevent="storeUser()">
							 	<div class="form-group">
         							<input type="text" class="form-control" placeholder="Name" required v-model="user.name">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="E-mail" required v-model="user.email">
       							</div>
       							<div class="form-group">
         							<input type="password" class="form-control" placeholder="Password" required v-model="user.password">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="Gender(f/m)" required v-model="user.cus_gender">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="Address" required v-model="user.cus_address">
       							</div>
       							<div class="form-group">
         							<input type="date" class="form-control" placeholder="DOB" required v-model="user.cus_dob">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="CC Number" required v-model="user.cc_num">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="CC Type" required v-model="user.cc_type">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="CC Name" required v-model="user.cc_name">
       							</div>
       							<div class="form-group">
         							<input type="number" class="form-control" placeholder="Exp. Month" required v-model="user.cc_exmonth">
       							</div>
       							<div class="form-group">
         							<input type="number" class="form-control" placeholder="Exp. Year" required v-model="user.cc_exyear">
       							</div>
       							<div class="form-group">
         							<input type="number" class="form-control" placeholder="CVV" required v-model="user.cc_cvv">
         							<!--<input type="hidden" value="customer" required v-model="user.role">-->
                      <!--<input type="hidden" :value="customer" required v-model="user.role">-->
       							</div>
       							<div class="text-right">
         							<button type="submit" class="btn btn-primary">Sign Up</button>
       							 </div>
							 </form>
							 
						</div>
					</div>
				</div>
			</div>
		</div>
		<table class="table table-striped"></table>
	</div>
</template>

<script src="./signup.component.js"></script>

<!--<template>
 <div class="container">
 <toast ref="toast"></toast>
  <div class="row">
   <div class="col-md-12">
    <div class="jumbotron">
     <div class="row">
      <div class="col-md-6">
       <h1>{{ message }}</h1>
       <p>{{ description }}</p>
      </div>
      <div class="col-md-12">
       <p class="text-center">
        <strong>Create New Book</strong>
       </p>
       <form role="form" @submit.prevent="storeBook()">
        <div class="form-group">
         							<input type="text" class="form-control" placeholder="name" required v-model="book.name">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="email" required v-model="book.email">
       							</div>
       							<div class="form-group">
         							<input type="password" class="form-control" placeholder="password" required v-model="book.password">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="gender(f/m)" required v-model="book.cus_gender">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="address" required v-model="book.cus_address">
       							</div>
       							<div class="form-group">
         							<input type="date" class="form-control" placeholder="DOB" required v-model="book.cus_dob">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="cc number" required v-model="book.cc_num">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="cc type" required v-model="book.cc_type">
       							</div>
       							<div class="form-group">
         							<input type="text" class="form-control" placeholder="cc name" required v-model="book.cc_name">
       							</div>
       							<div class="form-group">
         							<input type="number" class="form-control" placeholder="ex month" required v-model="book.cc_exmonth">
       							</div>
       							<div class="form-group">
         							<input type="number" class="form-control" placeholder="ex year" required v-model="book.cc_exyear">
       							</div>
       							<div class="form-group">
         							<input type="number" class="form-control" placeholder="cvv" required v-model="book.cc_cvv">
         							<input type="hidden" value="customer" required v-model="book.role">
       							</div>
        <div class="text-right">
         <button type="submit" class="btn btn-primary">Create Book</button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div> 
  </div>
 

 </div>
</template>

<script src="./signup.component.js"></script>-->