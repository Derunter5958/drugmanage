<template>
	<div class="EchartsCrad EchartsBar">
		<el-card class="box-card" shadow="hover">
			<div id="myChartBar" :style="{width: '100%', height: '17.5rem'}"></div>
		</el-card>
	</div>
</template>

<script>
	// 双柱状图示例组件
	export default {
		data() {
			return {}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChartBar'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '药品收支情况',
						textStyle: {
							align: 'center',
							color: '#666',
							fontSize: 18,
							fontWeight: "normal"
						},
						top: '0',
						left: '0',
					},
					tooltip: { //提示框组件
							trigger: 'axis',
							formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
							axisPointer: {
								type: 'shadow',
								label: {
									backgroundColor: '#6a7985'
								}
							},
							textStyle: {
								color: '#fff',
								fontStyle: 'normal',
								fontSize: 12,
							}
						},
						grid: {
							left: '1%',
							right: '0%',
							bottom: '0%',
							top:'18%',
							padding:'0 0 10 0',
							containLabel: true,
						},
					    legend: {//图例组件，颜色和名字
					        right:10,
							top:3,
							itemGap: 16,
							itemWidth: 18,
							itemHeight: 10,
					        data:[{
					            name:'购入',
					            //icon:'image://../wwwroot/js/url2.png', //路径
					        },
					        {
					            name:'售出',
					        }],
					        textStyle: {
								color: '#a8aab0',
								fontStyle: 'normal',
								fontFamily: '微软雅黑',
								fontSize: 12,            
					        }
					    },
						xAxis: [
							{
								type: 'category',
								boundaryGap: true,//坐标轴两边留白
								data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10'],
								axisLabel: { //坐标轴刻度标签的相关设置。
									interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
									margin:15,
									textStyle: {
										color: '#a8aab0',
										fontStyle: 'normal',
										fontFamily: '微软雅黑',
										fontSize: 12,
									}
								},
								axisTick:{//坐标轴刻度相关设置。
									show: false,
								},
								axisLine:{//坐标轴轴线相关设置
									lineStyle:{
										color:'#fff',
										opacity:0.2
									}
								},
								splitLine: { //坐标轴在 grid 区域中的分隔线。
									show: false,
								}
							}
						],
						yAxis: [
							{
								type: 'value',
								splitNumber: 5,
								axisLabel: {
									textStyle: {
										color: '#a8aab0',
										fontStyle: 'normal',
										fontFamily: '微软雅黑',
										fontSize: 12,
									}
								},
								axisLine:{
									show: false
								},
								axisTick:{
									show: false
								},
								splitLine: {
									show: true,
									lineStyle: {
										color: ['#fff'],
										opacity:0.06
									}
								}
					
							}
						],
					    series : [
					        {
					            name:'流入',
					            type:'bar',
					            data:[49, 73, 92, 56, 77, 56, 42, 36, 60, 64],
					            barWidth: 10,
					            barGap:0,//柱间距离
					            label: {//图形上的文本标签
					                normal: {
					                   show: true,
					                   position: 'top',
					                   textStyle: {
					                       color: '#a8aab0',
					                       fontStyle: 'normal',
					                       fontFamily: '微软雅黑',
					                       fontSize: 12,   
					                   },
					                },
					            },
					            itemStyle: {//图形样式
					                normal: {
										color:'#FC6C8E'
					                },
					            },
					        },
					        {
					            name:'流出',
					            type:'bar',
					            data:[29, 50, 44, 27, 57, 46, 12, 27, 48, 60],
					            barWidth: 10,
					            barGap:0.2,//柱间距离
					            label: {//图形上的文本标签
					                normal: {
					                   show: true,
					                   position: 'top',
					                   textStyle: {
					                       color: '#a8aab0',
					                       fontStyle: 'normal',
					                       fontFamily: '微软雅黑',
					                       fontSize: 12,   
					                   },
					                },
					            },
					            itemStyle: {//图形样式
					                normal: {
					                    color:'#7571F9'
					                },
					            },
					        }
					    ]
					
				})
					
			}
		}
	}
</script>

<style>
	
</style>
