
export default {
	
	
	mounted() {

		if(localStorage.getItem('role') != 'customer'){
			window.alert("you have to log in");
			this.$router.push({ path:'/login/auth' });
		}
		else{}
	}
		
}

