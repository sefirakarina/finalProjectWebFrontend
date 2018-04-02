import Config from '../config';
export default{
 	url: Config.api + '/user',
 	fetch(v){
 		return v.$http.get(this.url + '/' + 'all');
 	},
 	
 	store(v, params){
  		return v.$http.post(this.url + '/' + 'add', params);
 	},
 	delete(v, id){
  		return v.$http.get(this.url + '/' + 'delete' + '/' + id);
 	},
 	update(v, id, params){
  		return v.$http.patch(this.url + '/' +'update' +'/'+ id, params);
 	}
}