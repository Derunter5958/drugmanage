<template>
	<div class="addadmin">
		<el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			
			<el-form-item label="药品名称" >
				<el-input v-model="form.Medicine_Name" placeholder="请输入药品名称"></el-input>
			</el-form-item>

			<el-form-item label="药品编号" >
				<el-input v-model="form.Medicine_Id" placeholder="请输入药品编号"></el-input>
			</el-form-item>

			<el-form-item label="药品规格" >
				<el-input v-model="form.Medicine_Specifications" placeholder="请输入药品规格"></el-input>
			</el-form-item>

			<el-form-item label="药品保质期" >
				<el-input v-model="form.Medicine_Life" placeholder="请输入保质期"></el-input>
			</el-form-item>

			<el-form-item label="药品生产地" >
				<el-input v-model="form.Medicine_Production" placeholder="请输入生产地"></el-input>
			</el-form-item>

			<el-form-item label="药品生产商" >
				<el-input v-model="form.Medicine_Manufacturers" placeholder="请输入生产商"></el-input>
			</el-form-item>

			<el-form-item label="药品入库时间" >
				<el-input v-model="form.Medicine_StorageTime" placeholder="请输入入库时间"></el-input>
			</el-form-item>

			<el-form-item label="药品单价" >
				<el-input v-model="form.Medicine_Price" placeholder="请输入单价"></el-input>
			</el-form-item>

			<el-form-item label="药品种类" >
				<el-input v-model="form.Medicine_Types" placeholder="请输入种类"></el-input>
			</el-form-item>

			

			<el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
				},
				rules: {
					name: [{
							required: true,
							message: '请输入角色名称',
							trigger: 'blur'
						}
					]
				}
			};
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			submitForm(formName) {
			        this.$refs[formName].validate((valid) => {
			          if (valid) {
			            alert('submit!');
			          } else {
			            console.log('error submit!!');
			            return false;
			          }
			        });
			      },
			      resetForm(formName) {
			        this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
	.addadmin .el-select {
		width: 100%;
	}
</style>
