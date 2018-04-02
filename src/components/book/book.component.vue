<template>
 <div class="container">
 <toast ref="toast"></toast>
  <div class="row">
   <div class="col-md-12">
    <div class="jumbotron">
     <div class="row">
      <!--<div class="col-md-6">
       <h1>{{ message }}</h1>
       <p>{{ description }}</p>
      </div>-->
      <div class="col-md-12">
       <p class="text-center">
        <strong>Create New Book</strong>
       </p>
       <form role="form" @submit.prevent="storeBook()">
        <div class="form-group">
         <input type="text" class="form-control" placeholder="Title" required v-model="book.title">
        </div>
        <div class="form-group">
         <input type="text" class="form-control" placeholder="Author" required v-model="book.author">
        </div>
        <div class="form-group">
         <input type="text" class="form-control" placeholder="Publisher" required v-model="book.publisher">
        </div>
        <div class="form-group">
         <input type="text" class="form-control" placeholder="ISBN" required v-model="book.isbn">
        </div>
        <div class="form-group">
         <input type="text" class="form-control" placeholder="Genre" required v-model="book.genre">
        </div>
        <div class="form-group">
         <input type="text" class="form-control" placeholder="description" required v-model="book.description">
        </div>
        <div class="form-group">
         <input type="number" class="form-control" placeholder="Stock" required v-model="book.stock">
        </div>
        <div class="form-group">
         <input type="number" class="form-control" placeholder="Price" required v-model="book.price">
        </div>
        <div class="form-group">
         <input type="text" class="form-control" placeholder="book_img" required v-model="book.book_img">
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
  <loading-panel message="Fetch books from server" v-if="bookConfig.loading && !bookConfig.error"></loading-panel>
  <error-panel message="Failed fetch books from server" v-if="!book.loading && bookConfig.error" @onErrorHandled="bindBooks()"></error-panel>
  <div class="row" v-if="!bookConfig.loading && !bookConfig.error">
   <div class="col-md-12">
    <div class="table-responsive">
     <table class="table table-striped">
      <thead>
       <tr>
        <th class="text-center" style="width: 5%">#ID</th>
              <th class="text-center" style="width: 12%">Title</th>
              <th class="text-center" style="width: 12%">Author</th>
              <th class="text-center" style="width: 12%">Publisher</th>
              <th class="text-center" style="width: 12%">ISBN</th>
              <th class="text-center" style="width: 12%">Genre</th>
              <th class="text-center" style="width: 12%">Description</th>
              <th class="text-center" style="width: 12%">Stock</th>
              <th class="text-center" style="width: 12%">Price</th>
              <th class="text-center" style="width: 12%">Image</th>
              <!--<th class="text-center" style="width: 20%">Created at</th>
              <th class="text-center" style="width: 20%">Updated at</th>
              <th class="text-center">...</th>-->
       </tr>
      </thead>
      <tbody>
       <tr v-for="book in books">
        <td class="text-center">{{ book.id }}</td>
        <td class="text-center">
         <span v-if="!book.onedit">{{ book.title }}</span>
         <input type="text" class="form-control" v-model="book.title" v-if="book.onedit" placeholder="Title">
        </td>
        <td class="text-center">
         <span v-if="!book.onedit">{{ book.author }}</span>
         <input type="text" class="form-control" v-model="book.author" v-if="book.onedit" placeholder="Author">
        </td>
        <td class="text-center">
         <span v-if="!book.onedit">{{ book.publisher }}</span>
         <input type="text" class="form-control" v-model="book.publisher" v-if="book.onedit" placeholder="Publisher">
        </td>
        <td class="text-center">
         <span v-if="!book.onedit">{{ book.isbn }}</span>
         <input type="text" class="form-control" v-model="book.isbn" v-if="book.onedit" placeholder="ISBN">
        </td>
        <td class="text-center">
         <span v-if="!book.onedit">{{ book.genre }}</span>
         <input type="text" class="form-control" v-model="book.genre" v-if="book.onedit" placeholder="Genre">
        </td>
        <td class="text-center">
         <span v-if="!book.onedit">{{ book.description }}</span>
         <input type="text" class="form-control" v-model="book.description" v-if="book.onedit" placeholder="Description">
        </td>
         <td class="text-center">
         <span v-if="!book.onedit">{{ book.stock }}</span>
         <input type="text" class="form-control" v-model="book.stock" v-if="book.onedit" placeholder="Stock">
        </td>
         <td class="text-center">
         <span v-if="!book.onedit">{{ book.price }}</span>
         <input type="text" class="form-control" v-model="book.price" v-if="book.onedit" placeholder="Price">
        </td>
        <td class="text-center">
          <span v-if="!book.onedit">{{ book.book_img }}</span>
         <input type="text" class="form-control" v-model="book.book_img" v-if="book.onedit" placeholder="Image">
        </td>
       
        <!--<td class="text-center">
         <span v-if="!book.onedit"><img src="book.book_img"></span>
         <input type="text" class="form-control" v-model="book.book_img" v-if="book.onedit" placeholder="img">
        </td>-->
       <!-- <td class="text-center">{{ book.created_at }}</td>
        <td class="text-center">{{ book.updated_at }}</td>
        <td class="text-center">-->
         <!--<button type="button" class="btn btn-sm btn-success" v-if="!book.onedit" @click="editBook(book)">Edit</button>-->
         <button type="button" class="btn btn-sm btn-success" v-if="!book.onedit" @click="editBook(book)">Edit</button>
         <button type="button" class="btn btn-sm btn-success" v-if="book.onedit" :disabled="book.id == '' || book.title == ''" @click="updateBook(book)">Save</button>
         
         <button type="button" class="btn btn-sm btn-danger" @click="deleteBook(book)">Delete</button>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>
</template>

<script src="./book.component.js"></script>