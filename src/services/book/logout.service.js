import Config from '../config';
export default{
 	url: Config.api + '/auth',
 
 	logout(v){
  		return v.$http.post(this.url + '/' + 'logout');
 	}
}