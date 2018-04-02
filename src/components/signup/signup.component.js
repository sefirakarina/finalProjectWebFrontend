import Operator from '../../utils/model/operator/index';

import 	UserModel from '../../models/book/user.model';
import 	UserService from '../../services/book/user.service';

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
			userConfig: {
				loading: true,
				error: false
			},
			user: UserModel,
			users: []
		}
	},
	mounted() {
		this.bindUsers();
	},
	methods: {
		bindUsers() {
			this.userConfig.loading = true;
			this.userConfig.error = false;

			UserService.fetch(this)
			.then(
				 res => {
					this.users = Operator.map(UserModel, res.body.data);
					this.userConfig.loading = false;
				},
				 err => {
					this.userConfig.loading = false;
					this.userConfig.error = true;
				}
			);
		},
		storeUser() {
			UserService.store(this, this.user)
			.then(
				res => {
					this.users.push(Operator.single(UserModel, res.body.data));
					this.user = Operator.reset(UserModel);
					window.alert("Successfully signed up. Enjoy your shopping!");
					this.$router.push({path:'/login/auth'});
				},
				err => {
					this.$refs.toast.setMessage('Error store user,check your input again');
					this.$refs.toast.show();
				}
			)
		}
		/*deleteUser(user) {
			UserService.delete(this, user.id)
			.then(
				res => {
					this.users.splice(this.users.indexOf(user), 1);
				},
				err => {
					this.$refs.toast.setMessage('Error delete user');
					this.$refs.toast.show();
				}
			)
		},
		editUser(user) {
			this.users[this.users.indexOf(user)].onedit = true;
		},
		updateUser(user) {
			UserService.update(this, user.id, user)
			.then(
				res => {
					this.users[this.users.indexOf(user)].onedit = false;
				},
				err => {
					this.$refs.toast.setMessage('Error update user');
					this.$refs.toast.show();
				}
			);
		}*/
	}
}

/*import Operator from '../../utils/model/operator/index';

import BookModel from '../../models/book/user.model';
import 	BookService from '../../services/book/user.service';

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
			books: []
		}
	},
	mounted() {
		this.bindBooks();
	},
	methods: {
		bindBooks() {
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
		storeBook() {
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
		},
		deleteBook(book) {
			BookService.delete(this, book.id)
			.then(
				res => {
					this.books.splice(this.books.indexOf(book), 1);
				},
				err => {
					this.$refs.toast.setMessage('Error delete book');
					this.$refs.toast.show();
				}
			)
		},
		editBook(book) {
			this.books[this.books.indexOf(book)].onedit = true;
		},
		updateBook(book) {
			BookService.update(this, book.id, book)
			.then(
				res => {
					this.books[this.books.indexOf(book)].onedit = false;
				},
				err => {
					this.$refs.toast.setMessage('Error update book');
					this.$refs.toast.show();
				}
			);
		}
	}
}*/