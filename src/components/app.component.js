/*export default {
	data() {
		return {
			//this.isCustomer = meta.Customer;

		}
	},
	
}*/


export default {

	mounted() {
		this.isCustomer();
		this.isAdmin();
		this.isAuth();
	},
	methods: {

		isCustomer(){
			if(this.$route.params.role=='customer'){
				return true;
			
			}
			else{return false;}
		},
		isAdmin(){
			if(this.$route.params.role=='admin'){
				return true;
			
			}
			else{return false;}
		},
		isAuth(){
			if(this.$route.params.role=='auth'){
				return true;
			
			}
			else{return false;}
		}
	

	}
}

