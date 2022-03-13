<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-apps"></i> 功能模块</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="学生功能" name="first">
                    <div class="div-container">
                        <template v-for="items in tableDataS">
                            <div class="function-moudel" :key="items.index">
                                <div class="icon">
                                    <el-image style="width: 65px; height: 65px; border-radius: 3px" :src="items.url"></el-image>
                                </div>
                                <div class="moudel">
                                    <div class="moudel-it">{{ items.name }}</div>
                                    <div class="moudel-item">{{ items.item }}</div>
                                </div>
                                <div class="swith-div">
                                    <div class="swith-one">
                                        <el-switch v-model="items.state1" @change="stateChangeS1(items)" active-color="#13ce66" inactive-text="启用"> </el-switch>
                                    </div>
                                    <div class="swith-one">
                                        <el-switch v-model="items.state2" @change="stateChangeS1(items)" active-color="#ff4949" inactive-text="禁用"> </el-switch>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="教师功能" name="second">
                    <div class="div-container">
                        <template v-for="items in tableDataT">
                            <div class="function-moudel" :key="items.index">
                                <div class="icon">
                                    <el-image style="width: 65px; height: 65px; border-radius: 3px" :src="items.url"></el-image>
                                </div>
                                <div class="moudel">
                                    <div class="moudel-it">{{ items.name }}</div>
                                    <div class="moudel-item">{{ items.item }}</div>
                                </div>
                                <div class="swith-div">
                                    <div class="swith-one">
                                        <el-switch v-model="items.state1" @change="stateChangeT1(items)" active-color="#13ce66" inactive-text="启用"> </el-switch>
                                    </div>
                                    <div class="swith-one">
                                        <el-switch v-model="items.state2" @change="stateChangeT2(items)" active-color="#ff4949" inactive-text="禁用"> </el-switch>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'first',
            tableDataS: [
                {
                    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    name: '参加考试',
                    item: '考试创建,组卷,设置,发布',
                    state1: true,
                    state2: false
                },
                {
                    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    name: '参加练习',
                    item: '考试创建,组卷,设置,发布',
                    state1: true,
                    state2: false
                },
                {
                    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    name: '学习课程',
                    item: '考试创建,组卷,设置,发布',
                    state1: true,
                    state2: false
                }
            ],
            tableDataT: [
                {
                    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    name: '创建考试',
                    item: '考试创建,组卷,设置,发布',
                    state1: true,
                    state2: false
                },
                {
                    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    name: '创建练习',
                    item: '考试创建,组卷,设置,发布',
                    state1: true,
                    state2: false
                },
                {
                    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    name: '创建课程',
                    item: '考试创建,组卷,设置,发布',
                    state1: true,
                    state2: false
                }
            ]
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        stateChangeT1(items){
            console.log(items);
        },
        stateChangeS1(items){
            console.log(items);
        },
        stateChangeT2(items){
            console.log(items);
        },
        stateChangeS2(items){
            console.log(items);
        },
    }
};
</script>

<style scoped>

.function-moudel:hover {
    background-color: aliceblue;
}
.swith-one {
    margin: 12px;
}
.swith-div {
    border-left: 2px solid rgb(248, 243, 243);
    flex: 2;
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
}
.div-container {
    display: flex;
}
.function-moudel {
    flex: 1;
    width: 250px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 5px;
}

.icon {
    flex: 1;
    margin-top: 17px;
    margin-left: 15px;
}
.moudel {
    flex: 2;
    margin-top: 15px;
    margin-left: 5px;
}

.moudel-item {
    margin-top: 5px;
    font-size: 13px;
    color: #666;
}
</style>