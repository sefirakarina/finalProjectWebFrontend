import Operator from '../../utils/model/operator/index';

import CartModel from '../../models/book/cart.model';
import 	CartService from '../../services/book/cart.service';
import 	OrderService from '../../services/book/order.service';

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
			cartConfig: {
				loading: true,
				error: false
			},
			cart: CartModel,
			carts: []
		}
	},
	mounted() {

		if(localStorage.getItem('role') != 'customer'){
			window.alert("You have to log in as customer");
			this.$router.push({ path:'/login/auth' });
		}
		else{
			this.bindCarts();
		}
	},
	methods: {
		bindCarts() {
			this.cartConfig.loading = true;
			this.cartConfig.error = false;

			CartService.fetch(this,localStorage.getItem('id'))
			.then(
				 res => {
					this.carts = Operator.map(CartModel, res.body.data);
					this.cartConfig.loading = false;
				},
				 err => {
					this.cartConfig.loading = false;
					this.cartConfig.error = true;
					//window.alert("Please login before viewing your cart");
					if(err.status == 401){
						window.alert("Please login before viewing your cart");
						this.$router.push({path:'/login/auth'});
					}
				}
			);
		},
		deleteCart(cart) {
			//console.log(cart.id)
			CartService.delete(this, cart.id)
			.then(
				res => {
					this.carts.splice(this.carts.indexOf(cart), 1);
					window.alert("Successfully removed your order");
				},
				err => {
					//this.$refs.toast.setMessage('Error delete book');
					//this.$refs.toast.show();
					window.alert("Please login before making changes to your cart");
					if(err.status == 401){
						this.$router.push({path:'/login/auth'});
					}
				}
			)
		},
		editCart(cart) {
			this.carts[this.carts.indexOf(cart)].onedit = true;
		},
		updateCart(cart) {
			CartService.update(this, cart.id, cart)
			.then(
				res => {
					this.carts[this.carts.indexOf(cart)].onedit = false;
				},
				err => {
					this.$refs.toast.setMessage('Error update book');
					this.$refs.toast.show();
					window.alert("Please login before making changes to your cart");
					if(err.status == 401){
						this.$router.push({path:'/login/auth'});
					}
				}
			);
		},
		orderBook(cart){

			console.log(localStorage.getItem('id'));
			console.log(cart.id);
			OrderService.order(this, localStorage.getItem('id'),cart.books_id,cart.quantity);
			//window.alert("I am an alert box!");
			CartService.delete(this, cart.id)
			.then(
				 res => {
				 	this.carts.splice(this.carts.indexOf(cart), 1);
				 	window.alert("Successfully placed your order");
					//this.$refs.toast.setMessage('Erbook');
					//this.$refs.toast.show();
				},
				 err => {
					//this.$refs.toast.setMessage('Error delete book');
					//this.$refs.toast.show();
					window.alert("Please login before making changes to your cart");
					if(err.status == 401){
						this.$router.push({path:'/login/auth'});
					}
				}
			);
			
		}
	}
}

