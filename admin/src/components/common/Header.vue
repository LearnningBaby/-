<template>
    <div class="header">
        <div class="logo">教考分离系统</div>
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message ? `有${message}条未读消息` : `消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../../assets/img/img.jpg" />
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="hover" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{ username }}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu  slot="dropdown">
                        <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
                        <el-dropdown-item divided command="updatePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item divided command="findPassword">找回密码</el-dropdown-item>
                        <el-dropdown-item divided command="loginOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <!-- form修改密码 -->
        <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="原密码" :label-width="formLabelWidth">
                    <el-input v-model="form.oldPassword" autocomplete="off"></el-input>
                </el-form-item>
                 <el-form-item label="新密码" :label-width="formLabelWidth">
                    <el-input v-model="form.newPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" :label-width="formLabelWidth">
                    <el-input v-model="form.newPassword" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="updatePassword">保 存</el-button>
            </div>
        </el-dialog>
         <!-- form个人信息 -->
        <el-dialog title="个人信息" :visible.sync="dialogFormVisibleU">
            <el-form :model="form">
                <el-form-item label="头像" :label-width="formLabelWidth">
                        <el-avatar :size="50" :src="form.thumb"></el-avatar>
                </el-form-item>
                <el-form-item label="用户名"  :label-width="formLabelWidth">
                    <el-input v-model="form.userName" autocomplete="off"></el-input>
                </el-form-item>
                 <el-form-item label="权限" :label-width="formLabelWidth">
                    <el-input  disabled v-model="form.permissions" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisibleU = false">取 消</el-button>
                <el-button type="primary" @click="userInfo">保 存</el-button>
            </div>
        </el-dialog>
        <!-- form找回密码 -->
        <el-dialog title="修改密码" :visible.sync="dialogFormVisibleF">
            <el-form :model="form">
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.eamil" autocomplete="off"></el-input>
                </el-form-item>
                 <el-form-item label="新密码" :label-width="formLabelWidth">
                    <el-input v-model="form.newPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" :label-width="formLabelWidth">
                    <el-input v-model="form.newPassword" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisibleF = false">取 消</el-button>
                <el-button type="primary" @click="findPassword">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            fullscreen: false,
            name: 'linxin',
            message: 2,
            dialogFormVisible: false,
            dialogFormVisibleU: false,
            dialogFormVisibleF: false,
            form: {
                thumb: '../../assets/img/img.jpg',
                userName: '',
                permissions: '超级管理员',
                oldPassword: '',
                newPassword: '',
                email: ''
               
            },
            formLabelWidth: '100px'
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            //退出登录
            if (command == 'loginOut') {
                var _this = this;
                this.$confirm('确认退出吗?', '提示', {})
                    .then(() => {
                        sessionStorage.removeItem('ms_username');
                        _this.$router.push('/login');
                    })
                    .catch(() => {});
                return;
            }
            //个人信息
            if (command == 'userInfo') {
                this.dialogFormVisibleU=true;
                return;
            }
            //修改密码
            if (command == 'updatePassword') {
                this.dialogFormVisible=true;
                return;
            }
            //找回密码
            if(command == 'findPassword') {
                this.dialogFormVisibleF=true;
                return;
            }
        },
        //修改密码
        updatePassword(){
            //发请求
            this.dialogFormVisible=false;
            this.$message.success("修改成功!");
        },
        //修改个人信息
        userInfo(){
            //发请求
            this.dialogFormVisibleU=false;
            this.$message.success("修改成功!");
        },
        //找回密码
        findPassword(){
            this.dialogFormVisibleF=false;
            this.$message.success("找回成功!");
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
};
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 200px;
    padding-left: 35px;
    line-height: 70px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
