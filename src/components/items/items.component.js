import Operator from '../../utils/model/operator/index';

import BookModel from '../../models/book/book.model';
import 	BookService from '../../services/book/book.service';
import 	CartService from '../../services/book/cart.service';
import OrderModel from '../../models/book/order.model';

import LoadingPanel from '../commons/loading-pannel/loading-panel.common.vue';
import ErrorPanel  from '../commons/error-pannel/error-pannel.common.vue';
import Toast from '../commons/toast/toast.common.vue';

export default {
	components: {
		'loading-panel': LoadingPanel,
		'error-panel': ErrorPanel,
		'toast': Toast
	},
	data() {
		return {
			message: 'Add book',
			description: 'Create new books at this page',
			bookConfig: {
				loading: true,
				error: false
			},
			book: BookModel,
			books: [],
			order: OrderModel,
			orders: []
			//message: 'Welcome,Admin'
		}
	},
	mounted() {

		if(localStorage.getItem('role') != 'customer'){
			window.alert("You have to log in as customer");
			this.$router.push({ path:'/login/auth' });
		}
		else{
			this.bindBooks();
		}
		//this.isCustomer();
	},
	methods: {
		/*isCustomer(){
			if(this.$route.params.role=='customer'){
				return true;
			}
			else{
				return false;
			}
		},*/
		bindBooks() {
			console.log(this.$route.params.role);
			this.bookConfig.loading = true;
			this.bookConfig.error = false;

			BookService.fetch(this)
			.then(
				 res => {
					this.books = Operator.map(BookModel, res.body.data);
					this.bookConfig.loading = false;
				},
				 err => {
					this.bookConfig.loading = false;
					this.bookConfig.error = true;
				}
			);
		},
		
		orderBook(book){

			console.log(localStorage.getItem('id'));
			console.log(this.quantity);
			console.log(book.stock);
			if(book.stock >= this.quantity){
				CartService.order(this, localStorage.getItem('id'),book.id,this.quantity)
			//this.$router.push({ path:'/buyItem/customer' })
			//window.alert("I am an alert box!");
				.then(
					 res => {
					 	window.alert("Successfully added to cart");
				 		//this.$router.push({ path:'/buyItem/customer' })
				 	//this.$router.push({ path:'/buyItem/customer' });
					//this.$refs.toast.setMessage('Erbook');
					//this.$refs.toast.show();
					},
					 err => {
					 	window.alert("something seems wrong");
						//this.$refs.toast.setMessage('Error delete book');
						//this.$refs.toast.show();
						window.alert("Please login before placing your order");
						if(err.status == 401){
							this.$router.push({ path:'/login/auth' });
						}
					}
				);
			}
			else{
				window.alert("we don't have that much stock");
			}
			
			
		}
	}
}