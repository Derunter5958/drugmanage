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
						<el-button @click="topay" type="warning">去结算</el-button>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- <div class="leftBox">
			<el-card class="box-card" shadow="hover">
				<h4><i class="el-icon-user-solid"></i>药品种类列表</h4>
				<el-input placeholder="输入关键字搜索..." v-model="filterText">
				</el-input>
				<div class="clearfix"></div>
				<el-divider></el-divider>
				<el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode"
				 ref="tree">
				</el-tree>
			</el-card>
		</div> -->
		<div class="rightTable">
			<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
				<el-table-column type="index">
				</el-table-column>

				<el-table-column prop="no" width="80" label="编号">
				</el-table-column>

				<el-table-column prop="name" label="药品名" sortable width="200">
				</el-table-column>

				<el-table-column prop="kucun" width="120" label="库存">
				</el-table-column>

				<el-table-column prop="guige" label="规格" width="90">
				</el-table-column>

				<el-table-column prop="date" label="过期时间" sortable width="120">
				</el-table-column>

				<el-table-column prop="price" label="单价" width="90">
				</el-table-column>

				<el-table-column prop="add" label="添加数量" width="200" :formatter="formatter">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">-</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">+</el-button>
					</template>
				</el-table-column>

				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">加入购物车</el-button>
						<!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页 -->
			<el-pagination background layout="prev, pager, next" :total="100">
			</el-pagination>
		</div>
		<!-- 添加用户 -->
		<el-dialog title="添加管理员" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<add-admin></add-admin>
			<!-- <span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span> -->
		</el-dialog>

	</div>
</template>

<script>

	import AddAdmin  from "./Add/addadmin"//添加管理员
	
	export default {
		components:{
			AddAdmin
		},
		watch: {
			filterText(val) {
				this.$refs.tree.filter(val);
			}
		},
		data() {
			return {
				value0: '',
				dialogVisible: false,
				filterText: '',
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					no: '996',
					guige: '350ml',
					kucun: '15747859685',
					price: '55'
				} ],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		},
		methods: {
			topay(){
			  this.$router.push({path: '/role'})		  
			},
			formatter(row, column) {
				return row.address;
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			handleClose(done) {
				done();
			},
			handleNodeClick(data) {
				console.log(data);
			},
			filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			}
		},
		created() {

		},
		mounted() {

		}
	}
</script>

<style>
	.leftBox {
		width: 25%;
		margin-right: 5%;
		float: left;
	}

	.leftBox .el-card__body {
		height: 400px;
	}

	.leftBox h4 {
		margin: 0;
		float: left;
		height: 2.5rem;
		line-height: 2.5rem;
	}
	.leftBox .el-input{
		float: right;
		width: 50%;
		padding: 0;
		
	}
	.leftBox .el-input__inner{
		border: none !important;
		border-radius: inherit;
	}
	.el-divider--horizontal{
			margin-top: 0;
	}
	.leftBox h4 i {
		margin-right: 10px
	}

	.rightTable {
		width: 100%;
		float: right;
	}
	.clearfix{
		clear: both;
	}
</style>
