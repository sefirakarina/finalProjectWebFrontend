import Config from '../config';
export default{
 	url: Config.api + '/book',
 	fetch(v){
 		return v.$http.get(this.url + '/' + 'all');
 	},
 	find(v, id){
 		return v.$http.get(this.url + '/' + id);
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