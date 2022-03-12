<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-pie-chart"></i> schart图表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="schart-box">
                <div class="content-title">柱状图</div>
                <schart class="schart" canvasId="bar" :options="options1"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">折线图</div>
                <schart class="schart" canvasId="line" :options="options2"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">饼状图</div>
                <schart class="schart" canvasId="pie" :options="options3"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">环形图</div>
                <schart class="schart" canvasId="ring" :options="options4"></schart>
            </div>
        </div>
    </div>
</template>

<script>
import Schart from 'vue-schart';
export default {
    name: 'basecharts',
    components: {
        Schart
    },
    data() {
        return {
            options1: {
                type: 'bar',
                title: {
                    text: '考试成绩分析'
                },
                bgColor: '#fbfbfb',
                labels: ['第一次测试', '第二次测试', '第三次测试', '第四次测试', '第五次测试'],
                datasets: [
                    {
                        label: '高数',
                        fillColor: 'rgba(249, 49, 74, 0.5)',
                        data: [60, 78, 96, 110, 149]
                    },
                    {
                        label: '线性代数',
                        data: [90, 80, 87, 95, 96]
                    },
                    {
                        label: '概率论',
                        data: [99, 98, 50, 35, 100]
                    }
                ]
            },
            options2: {
                type: 'line',
                title: {
                    text: '成绩折线图'
                },
                bgColor: '#fbfbfb',
                labels: ['第一次测试', '第二次测试', '第三次测试', '第四次测试', '第五次测试'],
                datasets: [
                    {
                        label: '高等数学',
                        data: [60, 78, 96, 110, 149]
                    },
                    {
                        label: '线性代数',
                        data: [90, 80, 87, 95, 96]
                    },
                    {
                        label: '概率论与数理统计',
                        data: [99, 98, 50, 35, 100]
                    }
                ]
            },
            options3: {
                type: 'pie',
                title: {
                    text: '高等数学章节测试得分情况'
                },
                legend: {
                    position: 'left'
                },
                bgColor: '#fbfbfb',
                labels: ['极限与连续', '一元函数微分学', '中值定理的证明', '定积分、不定积分', '反常积分', '级数', '二重积分'],
                datasets: [
                    {
                        data: [100, 99, 30, 90, 90, 40, 60]
                    }
                ]
            },
            options4: {
                type: 'ring',
                title: {
                    text: '成绩组成'
                },
                showValue: true,
                legend: {
                    position: 'bottom',
                    bottom: 40
                },
                bgColor: '#fbfbfb',
                labels: ['课堂成绩', '作业情况', '期末成绩'],
                datasets: [
                    {
                        data: [100, 90, 80]
                    }
                ]
            }
        };
    }
};
</script>

<style scoped>
.schart-box {
    display: inline-block;
    margin: 20px;
}
.schart {
    width: 600px;
    height: 400px;
}
.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
</style>