<template>
  <div class="page">
    <div class="com-chart" ref="refChart" id="myEcharts" @dblclick="revertMap"></div>
  </div>
</template>

<script setup name="comMap">
import api from '@/api'
// import axios from 'axios'
import { onMounted, onUnmounted, ref, reactive, getCurrentInstance, markRaw, defineExpose, computed, watch } from 'vue'
import { formatProvinceMapInfo, formatCityMapInfo } from '@/utils/map_utils'
import * as echarts from 'echarts';

const refChart = ref('')
const { proxy } = getCurrentInstance()

const data = reactive({
  chartInstance: null,
  store: null,
  titleFontSize: 0,
  mapCache: {}
})

// 初始化echart
const initChart = async () => {
  // 1. 获取并注册中国地图
  // const chinaMap = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
  const chinaMap = await api.getLocalChinaMap()
  echarts.registerMap('china', chinaMap)
  // 初始化对象
  data.chartInstance = echarts.init(refChart.value);
  // 初始化配置
  const initOption = {
    // title: {
    //   text: '▍商家分布',
    //   top: 20,
    //   left: 20
    // },
    geo: {
      type: 'map',
      map: 'china',
      top: '5%',
      bottom: '5%',
      roam: false, // 是否可拖动缩放
      itemStyle: {
        areaColor: '#2E72BF',
        borderColor: '#333'
      }
    },
    legend: {
      left: '5%',
      bottom: '5%',
      orient: 'vertical'
    }
  }
  data.chartInstance.setOption(initOption)
  // 监听地图点击
  data.chartInstance.on('click', async (e) => {
    console.log('1.监听地图点击', e)
    // 获取省份| 城市信息
    const provinceInfo = formatProvinceMapInfo(e.name)
    const cityInfo = formatCityMapInfo(e.name)
    console.log('获取省份| 城市信息', provinceInfo +'|'+ cityInfo);
    if (provinceInfo.key) {
      // 获取省份信息
      console.log('2.获取省份信息', provinceInfo)
      // 如果不存在该省的缓存,则请求数据
      if (!data.mapCache[provinceInfo.key]) {
        const provinceMap = await api.getLocalMap(provinceInfo.path)
        data.mapCache[provinceInfo.key] = provinceMap.data // 保存到缓存
        echarts.registerMap(provinceInfo.key, provinceMap)
      }
    } else if (cityInfo.key)  {
      // 获取城市信息
      console.log('2.获取城市信息', cityInfo)
       // 如果不存在该市的缓存,则请求数据
       if (!data.mapCache[cityInfo.key]) {
        const cityMap = await api.getLocalMap(cityInfo.path)
        data.mapCache[cityInfo.key] = cityMap.data // 保存到缓存
        echarts.registerMap(cityInfo.key, cityMap)
      }
    } else {
      return 
    }
    const changeOption = {
      geo: {
        map: provinceInfo.key || cityInfo.key,
        label: {
          show: true
        }
      }
    }
    console.log('changeOption', changeOption);
    
    data.chartInstance.setOption(changeOption)
  })
  // 初始化触发屏幕适配
  screenAdapter()
}

// 获取数据
const getMapData = async () => {
  data.store = await api.getMapData()
  updateChart()
}

// 更新图表
const updateChart = () => {
  const legendArr = data.store.map(v => v.name)
  const seriesArr = data.store.map(v => {
    return {
      type: 'effectScatter',
      rippleEffect: { // 涟漪效果设置
        scale: 5,
        brushType: 'stroke'
      },
      name: v.name,
      data: v.children,
      coordinateSystem: 'geo'
    }
  })
  const dataOption = {
    series: seriesArr,
    legend: {
      data: legendArr
    }
  }
  data.chartInstance.setOption(dataOption)
}
// 屏幕适配
const screenAdapter = () => {
  data.titleFontSize = refChart.value.offsetWidth / 100 * 3.6
  const adapterOption = {
    title: {
      textStyle: {
        fontSize: data.titleFontSize
      }
    },
    legend: {
      itemWidth: data.titleFontSize / 2,
      itemHeight: data.titleFontSize / 2,
      itemGap: data.titleFontSize / 2,
      textStyle: {
        fontSize: data.titleFontSize / 3
      }
    }
  }
  data.chartInstance.setOption(adapterOption)
  data.chartInstance.resize()
}

// 回到主地图
const revertMap = () => {
  const revertOption = {
    geo: {
      map: 'china',
      label: {
        show: false
      }
    }
  }
  data.chartInstance.setOption(revertOption)
}

onMounted(() => {
  initChart()
  getMapData()
  window.addEventListener('resize', screenAdapter)
})
onUnmounted(() => {
  window.removeEventListener('resize', screenAdapter)
})

// 对外暴露方法
defineExpose({
  screenAdapter
})
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
}

.com-chart {
  height: 100%;
}
</style>