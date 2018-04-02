<template>
 <div class="container">
 <toast ref="toast"></toast>
  <loading-panel message="Fetch books from server" v-if="bookConfig.loading && !bookConfig.error"></loading-panel>
  <error-panel message="Failed fetch books from server" v-if="!book.loading && bookConfig.error" @onErrorHandled="bindBooks()"></error-panel>
  <div class="row" v-if="!bookConfig.loading && !bookConfig.error">
   <div class="col-md-12">
    <div class="table-responsive">
     <table class="table table-striped">
      <thead>
       <tr>
        <th class="text-center" style="width: 5%">#ID</th>
            <th class="text-center">ISBN</th>
            <th class="text-center">Image</th>
            <th class="text-center">About</th>
            <th class="text-center">Stock</th>
            <th class="text-center">Price</th>
            <th class="text-center" style="width: 5%">Order</th>
       </tr>
      </thead>
      <tbody>
       <tr v-for="book in books">
        <td class="text-center">{{ book.id }}</td>
        <td class="text-center">
            {{ book.isbn }} 
        </td>
        <td class="text-center">
          <img :src="book.book_img" style="height:120px; width: auto;">
        </td>
        <td class="text-center">
          <p align="left">
            <label>Title: </label>{{ book.title }}<br>
            <label>Genre: </label>{{ book.genre }}<br>
            <label>Author: </label>{{ book.author }}<br>
            <label>Publisher: </label>{{ book.publisher }}<br>
            <p align="center"><label>Book description: </label><br>{{ book.description }}</p>
          </p>
        </td>
         <td class="text-center">
            {{ book.stock }}
        </td>
         <td class="text-center">
            {{ book.price }}
        </td>
        <td>
         <input type="number" placeholder="quantity" v-model="quantity">
          <button type="button" class="btn btn-sm btn-success"  @click="orderBook(book)">Add to Cart</button>
        </td>

         <!--<button type="button" class="btn btn-sm btn-success" v-if="!book.onedit" @click="editBook(book)">Edit</button>
         <button type="button" class="btn btn-sm btn-success" v-if="book.onedit" :disabled="book.id == '' || book.title == ''" @click="updateBook(book)">Save</button>
         
         <button type="button" class="btn btn-sm btn-danger" @click="deleteBook(book)">Delete</button>-->


        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>
</template>

<script src="./items.component.js"></script>