
export default {
	
	
	mounted() {

		if(localStorage.getItem('role') != 'admin'){
			window.alert("you have to log in");
			this.$router.push({ path:'/login/auth' });
		}
		else{}
	}
		
}

