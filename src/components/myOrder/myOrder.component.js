import Operator from '../../utils/model/operator/index';

import OrderModel from '../../models/book/order.model';
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
			orderConfig: {
				loading: true,
				error: false
			},
			order: OrderModel,
			orders: []
		}
	},
	mounted() {

		if(localStorage.getItem('role') != 'customer'){
			window.alert("You have to log in as customer");
			this.$router.push({ path:'/login/auth' });
		}
		else{
			this.bindOrders();
		}
	},
	methods: {
		bindOrders() {
			this.orderConfig.loading = true;
			this.orderConfig.error = false;

			OrderService.find(this,localStorage.getItem('id'))
			.then(
				 res => {
					this.orders = Operator.map(OrderModel, res.body.data);
					this.orderConfig.loading = false;
				},
				 err => {
					this.orderConfig.loading = false;
					this.orderConfig.error = true;
				}
			);
		},
		/*storeBook() {
			BookService.store(this, this.book)
			.then(
				res => {
					this.books.push(Operator.single(BookModel, res.body.data));
					this.book = Operator.reset(BookModel);
				},
				err => {
					this.$refs.toast.setMessage('Error store book,check your input again');
					this.$refs.toast.show();
				}
			)
		},*/
		deleteOrder(order) {
			OrderService.delete(this, order.id)
			.then(
				res => {
					this.orders.splice(this.orders.indexOf(order), 1);
				},
				err => {
					this.$refs.toast.setMessage('Error delete order');
					this.$refs.toast.show();
				}
			)
		}
		/*editOrder(order) {
			this.orders[this.orders.indexOf(order)].onedit = true;
		},
		updateOrder(order) {
			OrderService.update(this, order.id, order)
			.then(
				res => {
					this.orders[this.orders.indexOf(order)].onedit = false;
				},
				err => {
					this.$refs.toast.setMessage('Error update book');
					this.$refs.toast.show();
				}
			);
		}*/
	}
} 