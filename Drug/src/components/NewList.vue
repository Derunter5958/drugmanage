<template>
	<div class="contentBox">
		<div class="topSearch">
			<el-row :gutter="30">
			  <el-col :span="4">
				<div class="grid-content bg-purple">
					<el-input v-model="searchQuery" placeholder="请输入关键词"></el-input>  
				</div>
			  </el-col>
			  <el-col :span="6.5">
				  <div class="grid-content bg-purple">
					  <el-date-picker
						v-model="value2"
						type="daterange"
						align="right"
						unlink-panels
						range-separator="至"
						start-placeholder="开始日期"
						end-placeholder="结束日期"
						:picker-options="pickerOptions">
					  </el-date-picker>
				  </div>
			  </el-col>
			  <el-col :span="4">
				  <div class="grid-content bg-purple">
					    <el-select v-model="value3" placeholder="请选择规格">
					      <el-option
					        v-for="item in options"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value">
					      </el-option>
					    </el-select>
				  </div>
			  </el-col>
			  <el-col :span="8">
				  <div class="grid-content bg-purple">
					<el-button type="primary" icon="el-icon-search" @click="sigleuserlist">查询</el-button>
					<el-button @click="dialogVisible = true" type="warning">添加药品信息</el-button>
					  <el-button type="danger">批量删除</el-button>
				  </div>
			  </el-col>
			</el-row>
		</div>
		<div class="boxList">
			<el-table
			    ref="multipleTable"
			    :data="tableData"
			    tooltip-effect="dark"
			    style="width: 100%"
				height="80%"
			    @selection-change="handleSelectionChange">
			    <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>

			    <el-table-column
			      prop="Medicine_Name"
			      label="药品名"
			      width="120">
			    </el-table-column>

				<el-table-column
			      prop="Medicine_Picture"
			      label="图片"
			      width="100">
			    </el-table-column>

			    <el-table-column
			      prop="Medicine_Id"
			      label="编号"
			      width="100">
			    </el-table-column>

				<el-table-column
			      prop="Medicine_Specifications"
			      label="规格"
			      width="100">
			    </el-table-column>

				<el-table-column
			      prop="Medicine_Expired"
			      label="过期时间"
			      show-overflow-tooltip>
			    </el-table-column>

				<el-table-column
				  prop="Medicine_Inventory"
				  label="库存数"
				  width="70">
				</el-table-column>

				<el-table-column
				  prop="Medicine_Otc"
				  label="非处方"
				  width="120">
				  
				</el-table-column>

				<el-table-column
				  prop="Medicine_Production"
				  label="生产地"
				  width="120">
				</el-table-column>

				<el-table-column
				  prop="Medicine_Manufacturers"
				  label="生产商"
				  width="120">
				</el-table-column>

			    <el-table-column
			      prop="Medicine_StorageTime"
			      label="入库时间"
			      show-overflow-tooltip>
			    </el-table-column>

				<el-table-column
				  fixed="right"
				  label="操作"
				  width="180">
				  <template slot-scope="scope">
					<el-button type="text" @click="edituserlist">编辑</el-button>
					<el-button @click="deleteLi" type="text">删除</el-button>
				  </template>
				</el-table-column>
			  </el-table>
			  <!-- 分页 -->
			  <el-pagination
			    background
			    layout="prev, pager, next"
			    :total="100">
			  </el-pagination>
		</div>


		<el-dialog title="添加药品" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<add-role></add-role>
		</el-dialog>


	</div>
</template>

<script>
import AddRole  from "./Add/addrole"
	 export default {
		components:{
			AddRole
		},
	    data() {
	      return {
			searchQuery:'',
			dialogVisible: false,
	        pickerOptions: {
	        //   shortcuts: [{
	        //     text: '最近一周',
	        //     onClick(picker) {
	        //       const end = new Date();
	        //       const start = new Date();
	        //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
	        //       picker.$emit('pick', [start, end]);
	        //     }
	        //   }, {
	        //     text: '最近一个月',
	        //     onClick(picker) {
	        //       const end = new Date();
	        //       const start = new Date();
	        //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
	        //       picker.$emit('pick', [start, end]);
	        //     }
	        //   }, {
	        //     text: '最近三个月',
	        //     onClick(picker) {
	        //       const end = new Date();
	        //       const start = new Date();
	        //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
	        //       picker.$emit('pick', [start, end]);	            }
	        //   }]
	        },
			options: [{
			  value: '选项1',
			  label: '胶囊'
			}, {
			  value: '选项2',
			  label: '口服液'
			}, {
			  value: '选项3',
			  label: '颗粒'
			}, {
			  value: '选项4',
			  label: '贴片'
			}, {
			  value: '选项5',
			  label: '注射剂'
			}],
			
			tableData: [{
			  Medicine_Name: '',
			  Medicine_Id: '',
			  Medicine_StorageTime: '',
			  Medicine_Inventory:'',
			  Medicine_Otc:'',
			  Medicine_Specifications:'',
			  Medicine_Expired:'',
			  Medicine_Manufacturers:'',
			  Medicine_Production:'',
			}],
			multipleSelection: [],
			value0: '',
	        value1: '',
	        value2: '',
			value3: '',
			value4:true,
			dialogVisible: false
	      };
	    },
		mounted(){
			this.userlist();
		},
		methods: {
			userlist(){
				this.$axios({
					method:'get',
					url:'/api/userlist',
					data:{}
	
				}).then(res=>{
					console.log(res.data)
					this.tableData=res.data 
					
				})
			},

			edituserlist(){     //	修改
				this.$axios({
					method:'post',
					url:'/api/edituserlist',
					data:{}
				}).then(res=>{
					console.log(res.data)
					this.tableData=res.data;
				})
			},

			sigleuserlist(){    //查询
				this.$axios({
					method:'get',
					url:'/api/sigleuserlist',
					data:{}
				}).then(res=>{
					console.log(res.data)
					this.tableData=res.data;
				})
			},

		  handleSelectionChange(val) {
			this.multipleSelection = val;
		  },
		//   deleteLi() {
		// 	  this.$alert('是否删除这一条数据', '温馨提示', {
		// 		confirmButtonText: '确定',
		// 		callback: action => {
		// 			if(action == 'confirm'){

		// 			this.$axios({   //删除
		// 				method:'get',
		// 				url:'/api/deletelist',
		// 				data:{}
		// 				}).then(res=>{
		// 			console.log(res.data)
		// 				})

		// 				this.$message({
		// 					type: 'info',
		// 					message: `删除成功!`
		// 				});
		// 			}
				  
		// 		}
		// 	  });
		//   },


		//   openAdd(){
		// 	  this.$router.push({path: '/addnews'})
		//   }
		}
	  };
</script>
	
<style>
	.boxList{
		height: 30rem;
	}
	  .el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
	  .topSearch{
		  width: 100%;
		  background-color: #f2f2f2;
		  height: 4rem;
		  line-height: 4rem;
		  padding-left: 0.9375rem;
		  box-sizing: border-box;
		  border-left: 0.2rem solid #409EFF;
		  overflow: hidden;
		  margin-bottom: 0.9375rem;
	  }
	  .el-pagination{
		  float: right;
		  margin-top: 0.9375rem;
	   }
</style>
