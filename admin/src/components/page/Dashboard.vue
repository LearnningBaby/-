<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height: 252px">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{ name }}</div>
                            <div>{{ role }}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        上次登录时间 ：
                        <span>2019-11-01</span>
                    </div>
                    <div class="user-info-list">
                        上次登录地点 ：
                        <span>东莞</span>
                    </div>
                </el-card>
                <el-card shadow="hover" style="height: 252px">
                    <div slot="header" class="clearfix">
                        <span>访问比例</span>
                    </div>
                        学生 <el-progress :percentage="visit.student" color="#42b983"></el-progress>
                        教师 <el-progress :percentage="visit.teacher" color="#f1e05a"></el-progress>
                        管理员 <el-progress :percentage="visit.admin"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">9999</div>
                                    <div>今日用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height: 403px">
                    <div slot="header" class="clearfix">
                        <span>待办事项</span>
                        <el-button
                            @click="dialogFormVisible = true"
                            style="float: right; padding: 5px 6px"
                            type="text"
                            class="el-icon-circle-plus-outline"
                        >
                            添加</el-button
                        >
                    </div>
                    <el-table :show-header="false" :data="todoList" style="width: 100%">
                        <el-table-column width="40">
                            <template slot-scope="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <div class="todo-item" :class="{ 'todo-item-del': scope.row.status }">{{ scope.row.title }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <div class="todo-item" :class="{ 'todo-item-del': scope.row.status }">{{ scope.row.time }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column width="60">
                            <template slot-scope="scope">
                                <el-button type="text" icon="el-icon-delete" class="red" @click="deleteItem(scope.$index, scope.row)"
                                    >删除</el-button
                                >
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
        <!-- 添加Form -->
        <el-dialog title="添加事项" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="事项内容" :label-width="formLabelWidth">
                    <el-input type="textarea" autosize v-model="form.text" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="时间" :label-width="formLabelWidth">
                    <div class="block">
                        <el-date-picker
                            v-model="form.time"
                            type="datetime"
                            placeholder="选择日期时间"
                            align="right"
                            :picker-options="pickerOptions"
                        >
                        </el-date-picker>
                    </div>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveItem">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Schart from 'vue-schart';
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),
            visit:{
                student: 71.3,
                teacher: 24.1,
                admin: 13.7
            },
            todoList: [
                {
                    title: '今天要修复100个bug',
                    time: '2022/3/22',
                    status: false
                },
                {
                    title: '今天要修复100个bug',
                    time: '2022/3/22',
                    status: false
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    time: '2022/3/22',
                    status: false
                },
                {
                    title: '今天要修复100个bug',
                    time: '2022/3/22',
                    status: false
                },
                {
                    title: '今天要修复100个bug',
                    time: '2022/3/22',
                    status: true
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    time: '2022/3/22',
                    status: true
                }
            ],
            data: [
                {
                    name: '2018/09/04',
                    value: 1083
                },
                {
                    name: '2018/09/05',
                    value: 941
                },
                {
                    name: '2018/09/06',
                    value: 1139
                },
                {
                    name: '2018/09/07',
                    value: 816
                },
                {
                    name: '2018/09/08',
                    value: 327
                },
                {
                    name: '2018/09/09',
                    value: 228
                },
                {
                    name: '2018/09/10',
                    value: 1065
                }
            ],
            dialogFormVisible: false,
            form: {
                text: '',
                time: '',
                status: 'false'
            },
            formLabelWidth: '120px',
            pickerOptions: {
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    },
                    {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    },
                    {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }
                ]
            }
        };
    },
    components: {
        Schart
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        },
        //保存代办事项
        saveItem() {
            this.dialogFormVisible = false;
            let time2 = this.form.time;
            const date = new Date(time2);
            this.form.time = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            console.log(this.form);
        },
        //删除事项
        deleteItem(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.todoList.splice(index, 1);
                })
                .catch(() => {});
        }
    }
};
</script>


<style scoped>
.red {
    color: #ff0000;
}
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 10px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
