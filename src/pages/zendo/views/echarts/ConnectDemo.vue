<template>
    <div class="echarts-container">
        <div class="cell" ref="chart1"></div>
        <div class="cell" ref="chart2"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const chart1 = ref(null);
const chart2 = ref(null);


onMounted(() => {
    const myChart1 = echarts.init(chart1.value);
    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: 'ECharts 示例1'
        },
        tooltip: {},
        xAxis: {
            type: 'category',
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: [
            {
                type: 'value',
                position: 'left',
                name: '左侧 y 轴'

            },
            {
                type: 'value',
                position: 'right',
                name: '右侧 y 轴',
                // 对于右侧 y 轴，可以设置对应的刻度刻度刻度刻度样式、最大最小值等
                // 例如，使右侧 y 轴的最大值为 100
                max: 100
            }
        ],
        series: [{
            name: '左侧 y 轴数据',
            type: 'bar',
            yAxisIndex: 0,
            data: [20, 30, 40, 50, 60, 70, 80]
        },
        {
            name: '右侧 y 轴数据',
            type: 'line',
            yAxisIndex: 1,
            data: [10, 20, 30, 40, 50, 60, 70]
        }]
    };

    // 使用第一个配置项和数据配置第一个图表
    myChart1.setOption(option1);

    // 第二个图表与第一个图表数据连接
    const myChart2 = echarts.init(chart2.value);

    myChart2.setOption({
        xAxis: {
            // type: 'category',
            // data: ['星期一', '星期二', '星期三', '星期四']
        },
        yAxis: {
            // type: 'category',
            // data: ['a', 'b', 'm', 'n', 'p', 'q']
        },
        series: [{
            name: '点击量',
            type: 'line',
            // data: [23,  44,  55,  19]
            data: [
                [12, 33],
                [34, 313],
                {
                    value: [56, 44],
                    label: {
                        show: true,
                        formatter: [
                            '{a|这段文本采用样式a}',
                            '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
                        ].join('\n'),
                        rich: {
                            a: {
                                color: 'red',
                                lineHeight: 10
                            },
                            b: {
                                backgroundColor: {
                                    image: 'xxx/xxx.jpg'
                                },
                                height: 40
                            },
                            x: {
                                fontSize: 18,
                                fontFamily: 'Microsoft YaHei',
                                borderColor: '#449933',
                                borderRadius: 4
                            },
                        }
                    },
                    itemStyle: {
                        color: 'red'
                    },
                    symbol: 'arrow',
                    symbolSize: 14,
                    labelLine: {
                        show: true
                    }

                },
                [10, 33]
            ]
        }]
    });

    // 连接两个图表
    // echarts.connect([myChart1, myChart2]);

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