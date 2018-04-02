/*export default {
	data() {
		return {
			message: 'Welcome,Admin'
		}
	}
}*/

/*import Operator from '../../utils/model/operator/index';

import BookModel from '../../models/book/book.model';
import 	BookService from '../../services/book/book.service';
import 	CartService from '../../services/book/cart.service';
import OrderModel from '../../models/book/order.model';

import LoadingPanel from '../commons/loading-pannel/loading-panel.common.vue';
import ErrorPanel  from '../commons/error-pannel/error-pannel.common.vue';
import Toast from '../commons/toast/toast.common.vue';*/

export default {
	/*components: {
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
		}
	},*/
	/*mounted() {
		this.bindBooks();
	},*/
	methods: {
		
		goToLogin() {
			this.$router.push({ path:'/login/auth' });
		},
		goToSignup() {
			this.$router.push({ path:'/signup/auth' });
		}
	}
}