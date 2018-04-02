import Config from '../config';
export default{
 	url: Config.api + '/auth',
 
 	store(v, params){
  		return v.$http.post(this.url + '/' + 'login', params);
 	}
}