<template>
	<div class="contentBox">
		<div class="topSearch">
			<el-row :gutter="30">
				<el-col :span="4">
					<div class="grid-content bg-purple">
						<el-input v-model="value0" placeholder="请输入关键词"></el-input>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple">
						<el-button type="primary" icon="el-icon-search">查询</el-button>
						<!-- <el-button @click="dialogVisible = true" type="warning">添加药品</el-button> -->
					</div>
				</el-col>
			</el-row>
		</div>
		<div>
			<el-table
			    :data="tableData"
			    stripe
			    style="width: 100%">
				
				<el-table-column
			      prop="Medicine_Id"
			      label="编号"
				  width="100">
			    </el-table-column>

			    <el-table-column
			      prop="Medicine_Name"
			      label="药品名"
			      width="120">
			    </el-table-column>

				<el-table-column
			      prop="Medicine_Specifications"
			      label="规格"
				  width="100">
			    </el-table-column>

				<el-table-column
			      prop="Medicine_Life"
			      label="保质期"
				  width="100">
			    </el-table-column>

				<el-table-column
			      prop="Medicine_Production"
			      label="生产地"
				  width="100">
			    </el-table-column>

				<el-table-column
			      prop="Medicine_Manufacturers"
			      label="生产商"
				  width="100">
			    </el-table-column>

				<el-table-column
				  prop="Medicine_Otc"
				  label="是否OTC"
				  width="100">
				</el-table-column>

				<el-table-column
				  prop="Medicine_Price"
				  label="单价">
				</el-table-column>

				<el-table-column
			      prop="Medicine_Types"
			      label="药品种类"
				  width="100">
			    </el-table-column>

				<el-table-column
			      
			      label="购入数量"
				  >
				  <template slot-scope="scope">
      				<el-input v-model="scope.row.quantity"></el-input>
    				</template>
				  <!-- <button @click="count--">-</button>
  					<input type="number" v-model="count" min="1">
  					<button @click="increaseCount()">+</button> -->
			    </el-table-column>

				<el-table-column
			      
			      label="总价">
				  <template slot-scope="scope">
      				{{ scope.row.Medicine_Price * scope.row.quantity }}
    				</template>
			    </el-table-column>

				<el-table-column
				  fixed="right"
				  label="操作"
				  width="100">
				  <template slot-scope="scope">
					<el-button type="text" size="small" @click="purchase()">采购</el-button>
					<!-- <el-button  @click="deleteLi" type="text" size="small">删除</el-button> -->
				  </template>
				</el-table-column>
			  </el-table>
		</div>
		<!-- 添加角色 -->
		<!-- <el-dialog title="添加药品" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<add-role></add-role>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog> -->
	</div>
	
</template>

<script>
	// import AddRole  from "./Add/addrole"
	
	export default {
		// components:{
		// 	AddRole
		// },
		data() {
			return {
				dialogVisible: false,
				value0: '',
				count: 1,
				price:'',
				tableData: [{
				Medicine_Name: '',
			  	Medicine_Id: '',
			  	Medicine_StorageTime: '', //没显示
			  	Medicine_Price:'',
			  	Medicine_Specifications:'',
			  	Medicine_Life:'',
			  	Medicine_Manufacturers:'',
			  	Medicine_Production:'',
				Medicine_Otc:'',
				
				}]
			}
		},
		mounted(){
			this.newslist();
			},
		// computed: {
  		// 	totalPrice() {
		// 		price=this.Medicine_Price
   		//  	   return this.count * price
  		// 		}
		// 	},

		methods: {
			newslist(){
				this.$axios({
					method:'get',
					url:'/api/newslist',
					data:{}
					
				}).then(res=>{
					console.log(res.data)
					this.tableData=res.data;
				})
			},
			handleClose(done) {
				done();
			},

			purchase(){           //采购的函数
				this.$axios({
					method:'post',
					url:'/api/addnewslist',
					data:{}

				}).then(res=>{
					console.log(res)
					// console.log(res.data)
					// this.tableData=res.data;
				})
				alert('采购成功')
			}

			// increaseCount() {
    		// 	this.count++
    		// 		if (this.count < 1) {
      		// 	this.count = 1
    		// 	}
  			// },
			// deleteLi() {
			//   this.$alert('是否删除这一条数据', '温馨提示', {
			// 	confirmButtonText: '确定',
			// 	callback: action => {
			// 		if(action == 'confirm'){
			// 			this.$message({
			// 				type: 'info',
			// 				message: `删除成功!`
			// 			});
			// 		}
				  
			// 	}
			// });
			// }
		}
		
		
	
		
	}
</script>

<style>
</style>
