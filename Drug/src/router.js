import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from './components/Main'

import Home from './components/Home'//主页
import Welcome from './components/Welcome'//欢迎页
import Login from './components/Login'//登录
import UserCenter from './components/UserCenter'//个人中心

import NewList from './components/NewList'//库存管理
import Addnews from './components/Addnews'//添加药品
import Category from './components/Category'//药品销毁管理

import User from './components/User'//药品销售
import Role from './components/Role'//结算管理
import Purchase from './components/Purchase' //采购管理
import BigScreen from './components/Datav/BigScreen'//数据可视化大屏页面


const router = new VueRouter({
	// mode: 'history',
	base: '/adminAir',
	routes: [{
		path: '', component: Main,
		children: [
			{path: '', redirect: '/home'},
			{path: '/home', component: Home},
			{path: '/newList', component: NewList},
			{path: '/category', component: Category},
			{path: '/addnews', component: Addnews},
			{path: '/role', component: Role},
			{path: '/user', component: User},
			{path: '/welcome', component: Welcome},
			{path: '/usercenter', component: UserCenter},
			{path: '/purchase', component: Purchase},
		]
	},
	{
		path: '/login', component: Login,
	},
	{
		path: '/bigScreen', component: BigScreen,
	}]
})


import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export {router};