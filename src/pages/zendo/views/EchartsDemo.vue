<template>
    <div class="echarts-container">
        <div class="cell" ref="chart"></div>
        <div class="cell" ref="chart2"></div>
        <div class="cell" ref="chart3"></div>
        <div class="cell" ref="chart4"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const chart = ref(null);
const chart2 = ref(null);
const chart3 = ref(null);
const chart4 = ref(null);

onMounted(() => {
    // 柱状图
    const myChart = echarts.init(chart.value);
    const option = {
        // ECharts 配置项
        title: {
            text: '柱状图示例'
        },
        legend: {},
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    myChart.setOption(option);

    // 折线图
    const myChart2 = echarts.init(chart2.value);
    const option2 = {
        title: {
            text: '折线图示例'
        },
        legend:{

        },
        xAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {
            type: 'value',
            name: '亿元',
            nameTextStyle: {
                align: "right",
            },
            axisLine: {
                symbol: 'arrow',
                lineStyle: {
                    type: 'dashed'
                    // ...
                }
            }
        },
        series: [
            {
                name: '点击量',
                data: [10, 22, 28, 43, 49],
                type: 'line',
                // smooth: true,
                lineStyle: {
                    color: 'green',
                    width: 4,
                    type: 'dashed'

                },
                label: {
                    show: true,
                    position: 'top',
                    fontSize: 12
                }
            },
            {
                name: '访客数',
                data: [5, 4, 3, 5, 10],
                type: 'line',
                stack: 'x'
            }
        ]
    };
    myChart2.setOption(option2);

    // 饼状图
    const myChart3 = echarts.init(chart3.value);
    const option3 = {
        title: {
            text: '饼状图示例'
        },
        legend:{},
        series: [
            {
                type: 'pie',
                data: [
                    {
                        value: 335,
                        name: '直接访问'
                    },
                    {
                        value: 234,
                        name: '联盟广告'
                    },
                    {
                        value: 1548,
                        name: '搜索引擎'
                    }
                ]
            }
        ]
    };
    myChart3.setOption(option3);

    // 散点图
    const myChart4 = echarts.init(chart4.value);
    const option4 = {
        title: {
            text: '散点图示例'
        },
        legend:{
            show: false
        },
        xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {},
        series: [
            {
                name: '周流量',
                type: 'scatter',
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
    };
    myChart4.setOption(option4);
});
</script>

<style scoped lang="scss">
.echarts-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px 400px;
    column-gap: 20px;
    row-gap: 1ch;

    .cell {
        border: 1px solid #eee;
    }

}
</style>