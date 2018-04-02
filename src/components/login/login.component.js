import Operator from '../../utils/model/operator/index';

import 	UserModel from '../../models/book/login.model';
import 	UserService from '../../services/book/login.service';

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

	methods: {

		storeUser() {
			UserService.store(this, this.user)
			.then(
				res => {
					this.users.push(Operator.single(UserModel, res.body.data));
					console.log(res.body.data.token);
					console.log(res.body.data.role);
					console.log(res.body.data.id);
					console.log(this.user);
					localStorage.setItem('accessToken','Bearer '+ res.body.data.token);
					localStorage.setItem('id',res.body.data.id);
					localStorage.setItem('role',res.body.data.role);
					console.log(localStorage.getItem('id'));

					if(res.body.data.role=='admin'){
						this.user = Operator.reset(UserModel);
						this.$router.push({ path:'/adminHome/admin' });
					}
					else{
						this.user = Operator.reset(UserModel);
						this.$router.push({ path:'/cusHome/customer'/*,params: { role: 'customer'  }*/ });
					}

				},
				err => {
					window.alert("Incorrect e-mail or password");
					//this.$refs.toast.setMessage('Error store user,check your input again');
					//this.$refs.toast.show();
				}
			)
		}

	}
}

