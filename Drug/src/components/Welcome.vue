<template>
	<div class="weclome contentBox">
		<p>欢迎来到药品管理系统!</p>
	</div>
</template>

<script>

	export default {
		components:{
		},
		data() {
			return {
				
			}
		},
		methods: {
			open() {
				this.$notify.info({
				  title: '温馨提示',
				  message: '当主页没什么内容的时候，可以直接用此欢迎页作为主页！'
				});
			}
		},
		created() {
			this.open();
		},
		mounted() {
			
		}
	}
		
</script>

<style>
	.weclome {
		overflow: hidden;
		height: 60vh;
		background: url(../assets/wc.png) no-repeat center;
		background-size: 80% auto;
		background-position-y: 4rem;
	}
	.weclome p {
		color: #606266;
		text-align: center;
		font-size: 1.8rem;
		letter-spacing: 0.125rem;
		margin: 0;
	}
	.weclome img{
		width: 70%;
		display: block;
		margin: 0 auto;
	}
</style>
