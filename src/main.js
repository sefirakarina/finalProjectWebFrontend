import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

import AppComponent from './components/app.component.vue';
import HomeComponent from './components/home/home.component.vue';
import BookComponent from './components/book/book.component.vue';
import OrderComponent from './components/order/order.component.vue';
import SignupComponent from './components/signup/signup.component.vue';
import LoginComponent from './components/login/login.component.vue';
import ItemsComponent from './components/items/items.component.vue';
import CartComponent from './components/cart/cart.component.vue';
import MyOrderComponent from './components/myOrder/myOrder.component.vue';
//import BuyItemComponent from './components/items/buyItems.component.vue';
import CusHomeComponent from './components/otherHomes/cusHome.component.vue';
import AdminHomeComponent from './components/otherHomes/adminHome.component.vue';
import LogoutComponent from './components/logout/logout.component.vue';



const routes = [
	{
		path : '/',
		component: HomeComponent
	},
	{
		path : '/order/:role',
		component: OrderComponent
	},
	{
		path : '/signup/:role',
		component: SignupComponent
	},
	{
		path : '/login/:role',
		component: LoginComponent
	},
	{
		path : '/logout/:role',
		component: LogoutComponent
	},
	/*{
		path : '/buyItem/:role',
		component: BuyItemComponent
	},*/
	{
		path : '/items/:role',
		component: ItemsComponent
	},
	{
		path : '/myOrder/:role',
		component: MyOrderComponent
	},
	{
		path : '/cart/:role',
		component: CartComponent
	},
	{
		path : '/adminHome/:role',
		component: AdminHomeComponent
	},
	{
		path : '/cusHome/:role',
		component: CusHomeComponent
	},
	{
		path: '/book/:role',
		component: BookComponent
	}

];

const router = new Router({
	routes: routes
});

new Vue({
	router: router,
	render: h => h(AppComponent)
}).$mount('#app');

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', localStorage.getItem('accessToken'))
  request.headers.set('Accept', 'application/json')
  next()
})