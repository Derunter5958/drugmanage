<template>
	<div id="app">
		<el-container class="main">
			<el-aside v-bind:style="{ width: width + 'rem' }">
				<el-menu :collapse-transition="true" :collapse="isCollapse" :router="true" :default-active="$route.path" @select="handleSelect"
				 class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#409EFF">
					<!-- 左侧导航列表 -->
					<el-menu-item class="logo" v-bind:style="{ width: width + 'rem' }">
						<i class="el-icon-eleme" style="color: #FFFFFF;font-size: 1.3rem;"></i>
						{{logo}}
					</el-menu-item>
					<!--单级菜单-->
					<el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path">
						<i :class="item.icon"></i>
						<span slot="title">{{item.title}}</span>
					</el-menu-item>
					<!-- 多级菜单-->
					<el-submenu :index="item.path" v-for="(item,index) in hasChildren" :key="index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span>{{item.title}}</span> </template>
						<el-menu-item-group>
							<el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex">
								{{subItem.title}}
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<el-menu class="el-menu-demo" mode="horizontal" background-color="#393D49" text-color="#fff" active-text-color="#409EFF">
						<el-menu-item v-bind:class="classObject" @click="leftListhide" :label="true"></el-menu-item>
						<el-menu-item style="float: right;">
							<el-dropdown @command="handleCommand">
								<span class="el-dropdown-link">
									<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
									<i class="el-icon-arrow-down el-icon--right"></i>
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
									<el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</el-menu-item>
						<el-menu-item style="float: right;">admin，欢迎您！</el-menu-item>
						<el-tooltip class="item" effect="dark" content="数据可视化大屏页面" placement="bottom">
							<el-menu-item @click="bigScreen"  class="el-icon-data-line"></el-menu-item>
						</el-tooltip>
						<el-tooltip class="item" effect="dark" content="锁屏" placement="bottom">
						<el-menu-item @click="openLockscreen"  class="el-icon-lock"></el-menu-item>
						</el-tooltip>
						<el-menu-item @click="openNews" style="float: right;" class="el-icon-bell"> 通知公告</el-menu-item>
					</el-menu>
				</el-header>
				<!-- 中间主体内容 -->
				<el-main class="maincontent">
					<!-- 面包屑 -->
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item v-for="o in breadcrumbList" :key="o.id">{{o.title}}
						</el-breadcrumb-item>
					</el-breadcrumb>
					<!-- 路由 -->
					<transition name="el-fade-in">
					    <router-view v-show="true" class="transition-box"></router-view>
					</transition>
				</el-main>
				<el-footer>2023 &copy</el-footer>
			</el-container>
		</el-container>
		<transition name="el-zoom-in-center">
		       <lock-screen v-show="true" v-if="type" @changeComponent="lockscreen" ></lock-screen>
		</transition>
	</div>
</template>

<script>
	
	import LockScreen from './HomeAssembly/LockScreen.vue' //锁屏组件
	
	
	export default {
		data() {
			return {
				asideMenu: [{
					title: '首页',
					icon: 'el-icon-s-home',
					path: '/home'
				},{
					title: '欢迎页',
					icon: 'el-icon-star-off',
					path: '/welcome'
				},
				{
					title: '采购管理',
					icon: 'el-icon-shopping-cart-full',
					path: '/purchase'
				} ,{
					title: '库存管理',
					icon: 'el-icon-notebook-1',
					path: '库存管理',
					children: [{
						title: '药品列表',
						icon: 'el-icon-s-home',
						path: '/newList',
					}
					// , {
					// 	title: '药品添加',
					// 	icon: 'el-icon-s-home',
					// 	path: '/addnews'
					// }
					, {
						title: '过期销毁',
						icon: 'el-icon-notebook-2',
						path: '/category'
					}]
				}, {
					title: '销售管理',
					icon: 'el-icon-copy-document',
					path: '权限管理',
					children: [{
						title: '药品销售',
						icon: 'el-icon-s-home',
						path: '/user'
					},{
						title: '结算管理',
						icon: 'el-icon-s-home',
						path: '/role'
					}]
				}, {
					title: '我的设置',
					icon: 'el-icon-setting',
					path: '个人中心',
					children: [{
						title: '个人中心',
						icon: 'el-icon-s-home',
						path: '/usercenter'
					}]
				}],
				width: 12.5,
				type:false,
				logo: '药品管理系统',
				indexBreadcrumbs: this.$route.path,
				isCollapse: false,
				classObject: {
					'el-icon-d-arrow-left': true,
					'el-icon-d-arrow-right': false
				}
			};
		},
		components: {
			LockScreen
		},
		watch: {
			$route() {
				this.indexBreadcrumbs = this.$route.path
			}
		},
		computed: {
			// 判断是多级菜单还是一级菜单
			noChildren() {
				return this.asideMenu.filter(item =>
					!item.children
				)
			},
			hasChildren() {
				return this.asideMenu.filter(item =>
					item.children
				)
			},
			breadcrumbList() {
				let breadcrumbs = []
				let menuList = this.asideMenu;
				function _find(list, item) {
					for (let i = 0; i < list.length; i++) {
						if (list[i].path == item) {
							return {
								i,
								item
							};
						}
					}
					return {
						i: -1,
						item
					};
				}
				for (let i = 0; i < menuList.length; i++) {
					var _t = menuList[i].children;
					if (_t) {
						var _rs = _find(_t, this.indexBreadcrumbs).i;
						if (_rs != -1) {
							breadcrumbs = breadcrumbs.concat(menuList[i], _t[_rs]);
							break;
						}
					} else if (menuList[i].path == this.indexBreadcrumbs) {
						breadcrumbs = breadcrumbs.concat(menuList[i]);
						break;
					}

				}
				return breadcrumbs
			}
		},
		methods: {
			logout() {
				// 退出登录
				this.$router.replace({
					path: '/Login'
				})
			},
			userCenter(){
				// 个人中心
				this.$router.replace({
					path: '/usercenter'
				})
			},
			bigScreen(){
				// this.$router.replace({
				// 	path: '/bigScreen'
				// })
				window.open("http://")
			},
			handleCommand(command) {
				this[command]();
			},
			handleSelect(key, keyPath) {
				this.indexBreadcrumbs = key;
			},
			addDate() {
				var nowDate = new Date();
				let date = {
					year: nowDate.getFullYear(),
					month: nowDate.getMonth() + 1,
					date: nowDate.getDate(),
				}
				let systemDate = date.year + ' 年 ' + date.month + ' 月 ' + date.date + ' 日 ';
				this.systemDate = systemDate
				console.log(date);
			},
			openNews() {
				this.$notify.info({
				  title: '通知公告',
				  message: '药品管理系统开发进行中'
				});
			},
			openLockscreen(){
				this.type = true;
				// 设置为锁屏
				sessionStorage.setItem("LockscreenType",true);
			},
			lockscreen(params) {
				// 密码正确进行解锁
				if(params == '123456'){
					this.type = false;
					sessionStorage.setItem("LockscreenType",false);
				}else{
					this.$message.error('密码输入错误请重新输入！');
				}
			},
			leftListhide() {
				if (this.isCollapse == true) {
					this.isCollapse = false;
					this.width = 12.5;
					this.logo = "后台管理系统";
					this.$set(this.classObject, 'el-icon-d-arrow-left', true);
					this.$set(this.classObject, 'el-icon-d-arrow-right', false);
				} else {
					this.isCollapse = true;
					this.width = 4;
					this.logo = "";
					this.$set(this.classObject, 'el-icon-d-arrow-left', false);
					this.$set(this.classObject, 'el-icon-d-arrow-right', true);
				}

			},
		},
		created() {
			var _this = this;
			this.addDate();
			// 判断锁屏状态
			if(sessionStorage.getItem("LockscreenType") == 'true'){
				_this.type = true
			}else{
				_this.type = false
			}
			
		}
	}
</script>

<style>
	.logo {
		font-size: 1.125rem;
		text-align: center;
		height: 3.75rem;
		/* background-color: rgb(57, 61, 73) !important; */
	}

	.el-header {
		padding: 0;
	}

	.el-menu {
		border: none;
	}

	.main {
		height: 100vh;
		padding: 0
	}

	.el-aside {
		height: 100% !important;
		background-color: #545c64;
	}

	.el-breadcrumb {
		width: 100%;
		height: 3.125rem;
		line-height: 3.125rem;
		border-bottom: 1px solid #E2E2E2;
		padding: 0 0.9375rem;
		float: left;
	}

	.maincontent {
		width: 100% !important;
		padding: 0 !important;
		margin: 0 !important;
	}

	.contentBox {
		padding: 1.25rem;
		margin-top: 3.125rem;
		padding-bottom: 6rem;
	}
	.el-footer{
		height: 2.5rem !important;
		text-align: center;
		line-height: 2.5rem !important;
		background-color: #E4E7ED;
		color: #909399;
		font-size: 0.875rem;
	}
</style>
