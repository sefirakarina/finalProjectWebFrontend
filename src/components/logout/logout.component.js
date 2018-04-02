import Operator from '../../utils/model/operator/index';

//import 	UserModel from '../../models/book/logout.model';
import 	UserService from '../../services/book/logout.service';

import LoadingPanel from '../commons/loading-pannel/loading-panel.common.vue';
import ErrorPanel  from '../commons/error-pannel/error-pannel.common.vue';
import Toast from '../commons/toast/toast.common.vue';

export default {
	methods: {
		
		logout() {
			UserService.logout(this)
			.then(
				res => {
					localStorage.removeItem('id');
					localStorage.removeItem('role');
					localStorage.removeItem('accessToken');
					this.$router.push({ path:'/' });
				},
				err => {
					window.alert("error logging out");
				}
			);
		},
		noLogout(){
			if(this.$route.params.role=='customer'){
				this.$router.push({ path:'/cusHome/customer' });
			}
			else if(this.$route.params.role=='admin'){
				this.$router.push({ path:'/adminHome/admin' });
			}
		}
	}
}