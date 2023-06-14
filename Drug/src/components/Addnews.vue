<template>
	<div class="contentBox">
		<el-form ref="form" :model="form" label-width="80px" label-position="left">
			<el-row :gutter="20">
			  <el-col :span="10">
				  <div class="grid-content bg-purple">
					<el-form-item label="药品名称">
						<el-input v-model="form.name" placeholder="请输入药品名称"></el-input>
					</el-form-item>
				  </div>
			  </el-col>

			  <el-col :span="10">
				  <div class="grid-content bg-purple">
					<el-form-item label="药品编号">
						<el-input v-model="form.name" placeholder="请输入药品编号"></el-input>
					</el-form-item>
				  </div>
			  </el-col>
			  
			  <el-col :span="10">
				  <div class="grid-content bg-purple">
					<el-form-item label="保质期">
						<el-input v-model="form.name" placeholder="请输入保质期"></el-input>
					</el-form-item>
				  </div>
			  </el-col>

			  <el-col :span="5">
				  <div class="grid-content bg-purple">
					<el-form-item label="药品规格">
					    <el-select v-model="form.region" placeholder="请选择药品规格">
					      <el-option label="胶囊" value="shanghai"></el-option>
					      <el-option label="口服液" value="beijing"></el-option>
						  <el-option label="颗粒" value="beijing"></el-option>
						  <el-option label="贴片" value="beijing"></el-option>
						  <el-option label="注射剂" value="beijing"></el-option>
					    </el-select>
					</el-form-item>
				  </div>
			  </el-col>
			  <el-col :span="5">
			  	  <div class="grid-content bg-purple">
					  <el-form-item label="是否OTC">
					      <el-select v-model="form.Whether" placeholder="请选择是否OTC">
					        <el-option label="是" value="1"></el-option>
					        <el-option label="否" value="0"></el-option>
					      </el-select>
					  </el-form-item>
				  </div>
			  </el-col>
			  <!-- <el-col :span="10">
			  	  <div class="grid-content bg-purple">
					  <el-form-item label="药品库存">
						  <el-switch v-model="form.delivery"></el-switch>
					  </el-form-item>
				  </div>
			  </el-col> -->
			  </el-row>
			  <el-row :gutter="20">
			  <el-col :span="10">
			  	  <div class="grid-content bg-purple">
					  <el-form-item label="生产地">
					      <el-input type="textarea" row="10" v-model="form.desc" placeholder="请输入内容"></el-input>
					  </el-form-item>
			  	  </div>
			  </el-col>
			  </el-row>

			  <el-row :gutter="20">
			  <el-col :span="10">
			  	  <div class="grid-content bg-purple">
					  <el-form-item label="生产商">
					      <el-input type="textarea" row="10" v-model="form.desc" placeholder="请输入内容"></el-input>
					  </el-form-item>
			  	  </div>
			  </el-col>
			  </el-row>

			  <el-col :span="5">
				  <div class="grid-content bg-purple">
					<el-form-item label="数量">
						<el-input v-model="form.name" placeholder="请输入药品数量"></el-input>
					</el-form-item>
				  </div>
			  </el-col>

			  <el-col :span="10">
				  <div class="grid-content bg-purple">
					<el-form-item label="入库时间">
						<el-input v-model="form.name" placeholder="请输入药品名称"></el-input>
					</el-form-item>
				  </div>
			  </el-col>

			  <el-col :span="20">
				  <el-form-item label="图片上传">
			  	  <div class="grid-content bg-purple">
					  <el-upload
					    action="https://jsonplaceholder.typicode.com/posts/"
					    list-type="picture-card"
					    :on-preview="handlePictureCardPreview"
					    :on-remove="handleRemove">
					    <i class="el-icon-plus"></i>
					  </el-upload>
					  <el-dialog :visible.sync="dialogVisible">
					    <img width="100%" :src="dialogImageUrl" alt="">
					  </el-dialog>
			  	  </div>
				  </el-form-item>
			  </el-col>
			  <el-col :span="20">
			  		<el-form-item label="主要内容">
					  <div class="grid-content bg-purple">
							第三方富文本编辑器待引入	 
					  </div>
			  		</el-form-item>
			  </el-col>
			  <el-col :span="10">
			  	  <div class="grid-content bg-purple">
			  			<el-form-item>
			  			  <el-button type="primary" >立即添加</el-button>
			  			</el-form-item>		  
			  	  </div>
			  </el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
				  name: '',
				  region: '',
				  Whether: '1',
				  delivery:'false',
				  desc:''
				},
				dialogImageUrl: '',
				dialogVisible: false
			}
		},
		components: {
		    
		},
		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			}
		},
		created () {
			
		},
		mounted () {
			
		}
	}
	
</script>
	
<style>
	textarea{
		height: 6.25rem;
	}
</style>
