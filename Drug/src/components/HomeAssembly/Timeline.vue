<template>
	<div class="TimelineBox">
		<el-card class="box-card" shadow="hover">
			<div class="block">
			  <el-timeline>
			    <el-timeline-item timestamp="2018/4/12" placement="top">
			      <el-card class="box">
			        <h4>开始</h4>
			        <p> 2018/4/12 20:46</p>
			      </el-card>
			    </el-timeline-item>
			    <el-timeline-item timestamp="2019/4/3" placement="top">
			      <el-card class="box">
			        <h4>更新</h4>
			        <p> 2019/4/3 20:46</p>
			      </el-card>
			    </el-timeline-item>
			    <el-timeline-item timestamp="2020/4/2" placement="top">
			      <el-card class="box"> 
			        <h4>加强</h4>
			        <p> 2020/4/2 20:46</p>
			      </el-card>
			    </el-timeline-item>
				<el-timeline-item timestamp="2021/4/2" placement="top">
				  <el-card class="box"> 
				    <h4>改组</h4>
				    <p> 2021/4/2 20:46</p>
				  </el-card>
				</el-timeline-item>
				<el-timeline-item timestamp="2022/4/2" placement="top">
				  <el-card class="box"> 
				    <h4>完全体</h4>
				    <p> 2022/4/2 20:46</p>
				  </el-card>
				</el-timeline-item>
			  </el-timeline>
			</div>
		</el-card>
	</div>
</template>

<script>
	
</script>

<style>
	.TimelineBox {
		
	}
	.TimelineBox > div > .el-card__body{
		height: 26rem;
		overflow-y: scroll
	}
	.TimelineBox .box .el-card__body{
		height: auto;
	}
	.TimelineBox h4{
		margin: 0;
	}
	.TimelineBox p{
		margin-bottom: 0;
	}
	.TimelineBox .el-timeline{
		padding: 0 1.25rem;
	}
	
	/*自定义滚动条样式*/
	.TimelineBox ::-webkit-scrollbar {
	    width: 0;
	    height: 0px;
	}
</style>
