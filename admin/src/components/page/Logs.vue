<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-text"></i> 日志管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="danger" icon="el-icon-delete" class="handle-del mr10" @click="delAllSelection">批量删除</el-button>
                <el-button  @click="resetDateFilter">清除日期过滤器</el-button>
                <el-button  @click="clearFilter">清除所有过滤器</el-button>
            </div>
            

            <el-table ref="filterTable" :data="tableData" style="width: 100%">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    width="180"
                    column-key="date"
                    :filters="[
                        { text: '2016-05-01', value: '2016-05-01' },
                        { text: '2016-05-02', value: '2016-05-02' },
                        { text: '2016-05-03', value: '2016-05-03' },
                        { text: '2016-05-04', value: '2016-05-04' }
                    ]"
                    :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column prop="name" label="名称" width="180"> </el-table-column>
                <el-table-column prop="address" label="信息" :formatter="formatter"> </el-table-column>
                <el-table-column
                    prop="tag"
                    label="级别"
                    width="100"
                    :filters="[
                        { text: 'info', value: 'info' },
                        { text: 'warn', value: 'warn' },
                        { text: 'error', value: 'error' }
                    ]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end"
                >
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.tag === 'info' ? 'success' : scope.row.tag === 'warn' ? 'warning' : 'danger'"
                            disable-transitions
                            >{{ scope.row.tag }}</el-tag
                        >
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)"
                            >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="日期">
                    <el-input readonly v-model="form.date"></el-input>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input readonly v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="信息">
                    <el-input readonly type="textarea" size="medium" resize="none" autosize v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="级别">
                    <el-input readonly v-model="form.tag"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editVisible: false,
            form: {},
            multipleSelection: [],
            delList: [],
            tableData: [
                {
                    date: '2016-05-02',
                    name: 'NullPointerException',
                    address: 'NullPointerException',
                    tag: 'info'
                },
                {
                    date: '2016-05-04',
                    name: 'NullPointerException',
                    address: 'NullPointerException',
                    tag: 'info'
                },
                {
                    date: '2016-05-01',
                    name: 'NullPointerException',
                    address: 'NullPointerException',
                    tag: 'warn'
                },
                {
                    date: '2016-05-03',
                    name: 'NullPointerException',
                    address: 'NullPointerException',
                    tag: 'error'
                }
            ]
        };
    },
    methods: {
        resetDateFilter() {
            this.$refs.filterTable.clearFilter('date');
        },
        clearFilter() {
            this.$refs.filterTable.clearFilter();
        },
        formatter(row, column) {
            return row.address;
        },
        filterTag(value, row) {
            return row.tag === value;
        },
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
        // 查看日志信息操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 确定
        saveEdit() {
            this.editVisible = false;
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        //批量删除
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
.example-p {
    height: 45px;
    display: flex;
    align-items: center;
}
.search-box {
    text-align: center;
    margin-top: 10px;
}
.search {
    width: 300px;
}
ul,
li {
    list-style: none;
}
.icon-li {
    display: inline-block;
    padding: 10px;
    width: 120px;
    height: 120px;
}
.icon-li-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.icon-li-content i {
    font-size: 36px;
    color: #606266;
}
.icon-li-content span {
    margin-top: 10px;
    color: #787878;
}
</style>