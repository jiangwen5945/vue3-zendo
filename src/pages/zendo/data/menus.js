const menuList = [
  {
    name: '首页',
    path: '/home',
    component: 'HomeView',
    icon: 'House'
  },
  // 自定义指令
  {
    name: '自定义指令',
    path: 'directives',
    icon: 'Paperclip',
    children: [
      {
        name: '元素平滑上升',
        path: '/sildeIn',
        component: 'SildeInView',
        icon: ''
      },
      {
        name: '水印',
        path: '/waterMarker',
        component: 'WaterMarker',
        icon: ''
      },
      {
        name: '元素拖拽',
        path: '/draggable',
        component: 'DraggableView',
        icon: ''
      }
    ]
  },
  // CSS效果
  {
    name: 'CSS效果',
    path: 'css',
    icon: 'MagicStick',
    children: [
      {
        name: '94款阴影样式',
        path: '/shadow',
        component: 'ShadowView',
        icon: ''
      },
      {
        name: '水波纹',
        path: '/waves',
        component: 'WavesView',
        icon: ''
      },
      {
        name: '照片翻转',
        path: '/rotate',
        component: 'RotateView',
        icon: ''
      },
      {
        name: '扫光效果',
        path: '/sharktext',
        component: 'SharkText',
        icon: ''
      },
      {
        name: '网格布局动画',
        path: '/grid',
        component: 'GridView',
        icon: ''
      }
    ]
  },
  // 牛刀小试
  {
    name: '牛刀小试',
    path: 'demo',
    icon: 'Dish',
    children: [
      {
        name: '蜂巢布局效果',
        path: '/honeycombView',
        component: 'HoneycombView',
        icon: ''
      },
      {
        name: '歌词滚动效果',
        path: '/musicView',
        component: 'MusicView',
        icon: ''
      },
      {
        name: '通用动画函数',
        path: '/com-animation',
        component: 'ComAnimation',
        icon: ''
      },
      {
        name: '小球点击跟随',
        path: '/ball-animation',
        component: 'BallAnimation',
        icon: '',
        name: '小球点击跟随'
      },
      {
        name: '图片懒加载',
        path: '/lazyImg',
        component: 'LazyImg',
        icon: ''
      },
      {
        name: '组件懒加载',
        path: '/lazyComp',
        component: 'LazyComp',
        icon: ''
      },
      {
        name: 'Sass样例',
        path: '/sassDemo',
        component: 'SassDemo',
        icon: ''
      }
    ]
  },
  // Element相关
  {
    name: 'Element相关',
    path: 'element',
    icon: 'Eleme',
    children: [
      {
        name: '通用Table封装',
        path: '/package',
        component: 'PackageView',
        icon: ''
      }
    ]
  },
  // Echarts演示
  {
    name: 'Echarts演示',
    path: 'echarts',
    icon: 'DataAnalysis',
    children: [
      {
        name: '基本类型',
        path: '/echarts',
        component: 'BaseDemo',
        icon: ''
      },
      {
        name: '多图表联动 🚧',
        path: '/echarts_connect',
        component: 'ConnectDemo',
        icon: ''
      },
      {
        name: '地图示例 🚧',
        path: '/echarts_map',
        component: 'MapDemo',
        icon: ''
      }
    ]
  }
]

export default menuList
