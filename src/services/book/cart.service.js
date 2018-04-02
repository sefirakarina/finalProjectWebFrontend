import Config from '../config';
export default{
 	url: Config.api + '/cart',
 	fetch(v,id){
 		return v.$http.get(this.url + '/' + 'all' +'/'+id);
 	},
 	find(v, id){
 		return v.$http.get(this.url + '/' + 'show' + id);
	 },
 	store(v, params){
  		return v.$http.post(this.url + '/' + 'add', params);
 	},
 	delete(v, id){
  		return v.$http.get(this.url + '/' + 'delete' + '/' + id);
 	},
 	update(v, id, params){
  		return v.$http.patch(this.url + '/'+'admin' +'/'+'update' +'/'+ id, params);
 	},
 	order(v, user_id,books_id,quantity){
  		return v.$http.post(this.url + '/' +'make' +'/'+ user_id + '/' + books_id + '/' +quantity);
 	}
}