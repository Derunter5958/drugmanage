<template>
	<div class="contentBox">
		<!-- <div class="topSearch">
			<el-row :gutter="30">
				<el-col :span="4">
					<div class="grid-content bg-purple">
						<el-input v-model="value0" placeholder="请输入关键词"></el-input>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple">
						<el-button type="primary" icon="el-icon-search">查询</el-button>
						<el-button @click="dialogVisible = true" type="warning">添加角色</el-button>
					</div>
				</el-col>
			</el-row>
		</div> -->
		<div>
			<el-table
			    :data="tableData"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="name"
			      label="药品名"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="cname"
			      label="药品编号">
			    </el-table-column>
				<el-table-column
				  prop="num"
				  label="数量">
				</el-table-column>

				<el-table-column
				  prop="price"
				  label="单价">
				</el-table-column>

				<el-table-column
				  prop="sum"
				  label="总额">
				</el-table-column>

				<el-table-column
				  fixed="right"
				  label="操作"
				  width="100">
				  <template slot-scope="scope">
					<el-button type="text" size="small">结算</el-button>
					<el-button  @click="deleteLi" type="text" size="small">删除</el-button>
				  </template>

				</el-table-column>
			  </el-table>
		</div>
		<!-- 添加角色 -->
		<el-dialog title="添加角色" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<add-role></add-role>
			<!-- <span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span> -->
		</el-dialog>
	</div>
	
</template>

<script>
	import AddRole  from "./Add/addrole"//添加角色
	
	export default {
		components:{
			AddRole
		},
		data() {
			return {
				dialogVisible: false,
				value0: '',
				tableData: [{
				  name: 'amxl',
				  data:'',
				  num:'6',
				  cname:'6666',
				  price:'20元',
				  sum: '120'
				}]
				// {
				//   role: '管理员',
				//   data:'2023-05-01 15:30:25',
				//   cname:'admin',
				//   content:'备注一下',
				//   address: '上海市普陀区金沙江路 1518 弄'
				// },{
				//   role: '普通用户',
				//   data:'2023-05-01 15:30:25',
				//   cname:'admin',
				//   content:'备注一下',
				//   address: '上海市普陀区金沙江路 1518 弄'
				// },{
				//   role: '街道管理员',
				//   data:'2023-05-01 15:30:25',
				//   cname:'admin',
				//   content:'备注一下',
				//   address: '上海市普陀区金沙江路 1518 弄'
				// },{
				//   role: '区级管理员',
				//   data:'2023-05-01 15:30:25',
				//   cname:'admin',
				//   content:'备注一下',
				//   address: '上海市普陀区金沙江路 1518 弄'
				// }]
			}
		},
		methods: {
			handleClose(done) {
				done();
			},
			deleteLi() {
			  this.$alert('是否不删除该药品', '温馨提示', {
				confirmButtonText: '确定',
				callback: action => {
					if(action == 'confirm'){
						this.$message({
							type: 'info',
							message: `删除成功!`
						});
					}
				  
				}
			});
			},
		},
		created() {
	
		},
		mounted() {
	
		}
	}
</script>

<style>
</style>
