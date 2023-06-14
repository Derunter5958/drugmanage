<template>
	<div class="EchartsCrad">
		<el-card class="box-card" shadow="hover">
			<div id="myChartline" :style="{width: '100%', height: '17.5rem'}"></div>
		</el-card>
	</div>
</template>

<script>
	// 折线图
	import Empty from '../HomeAssembly/Empty.vue' //暂无数据组件
	export default {
		components: {
			Empty
		},
		data() {
			return {}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChartline'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '近期药品购买量',
						textStyle: {
							align: 'center',
							color: '#666',
							fontSize: 18,
							fontWeight: "normal"
						},
						top: '0',
						left: '0',
					},
					backgroundColor: '#FFF',
					grid: {
						top: '18%',
						bottom: '8%',
						left: '5%',
						right: '0%'
					},
					tooltip: {
						trigger: 'axis',
						label: {
							show: true
						}
					},
					xAxis: {
						boundaryGap: true, //默认，坐标轴留白策略
						axisLine: {
							show: false
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						},
						data: [
							'5月1日', '5月2日', '5月3日', '5月4日', '5月5日', '5月6日',
							'5月7日', '5月8日', '5月9日', '5月10日', '5月11日', '5月12日',
							'5月13日', '5月14日', '5月15日', '5月16日', '5月17日'
						]
					},
					yAxis: {
						axisLine: {
							show: false
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: 'dashed',
								color: 'rgba(33,148,246,0.2)'
							}
						},
						// axisTick: {
						//     show: false
						// },
						// splitArea: {
						//     show: true,
						//     areaStyle: {
						//         color: 'rgb(245,250,254)'
						//     }
						// }
					},
					series: [{
						type: 'line',
						symbol: 'circle',
						symbolSize: 7,
						lineStyle: {
							color: 'rgb(33,148,246)',
							shadowBlur: 12,
							shadowColor: 'rgb(33,148,246,0.9)',
							shadowOffsetX: 1,
							shadowOffsetY: 1
						},
						itemStyle: {
							color: 'rgb(33,148,246)',
							borderWidth: 1,
							borderColor: '#FFF'
						},
						label: {
							show: false,
							distance: 1
						},
						data: [
							200, 180, 280, 90, 160, 200,
							300, 203, 135, 190, 400, 300,
							200, 300, 420, 320, 380
						]
					}]
				});
			}
		}
	}
</script>

<style>
	.EchartsCrad .el-card__body {
		height: 17.5rem;
	}
</style>
