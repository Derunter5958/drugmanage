<template>
	<div class="grid-content bg-purple ListCrad">
		<el-card class="box-card" shadow="hover">
		  <div slot="header" class="clearfix">
		    <span>{{titleListName}}</span>
			<el-tooltip class="item" effect="dark" content="查看更多" placement="bottom">
			     <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-more-outline"></i></el-button>
			</el-tooltip>
		  </div>
		  <ul>
			  <li><el-link class="textli" :underline="false">阿莫西林胶囊</el-link></li>
			  <li><el-link class="textli" :underline="false">连花清瘟胶囊</el-link></li>
			  <li><el-link class="textli" :underline="false">布洛芬缓释胶囊</el-link></li>
			  <li><el-link class="textli" :underline="false">快克复方氨酚烷胺胶囊</el-link></li>
			  <li><el-link class="textli" :underline="false">板蓝根颗粒</el-link></li>
		  </ul>
		</el-card>
	</div>
</template>

<script>
	export default {
		props:["titleListName"],
		data() {
			return {}
		},
		methods: {
		},
		created() {
	
		},
		mounted() {
	
		},
		updated() {
	
		}
	}
</script>

<style>
	.ListCrad ul {
		padding: 0;
		margin: 0;
	}
	.ListCrad ul li{
		list-style: none;
		line-height: 2rem;
		overflow: hidden;
	}
	.textli{
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-align: left;
		float: left;
	}
	.el-card__body{
		height: 10rem;
	}
	.el-card__header{
		padding: 10px 20px;
	}
	.news{
		
	}
</style>
