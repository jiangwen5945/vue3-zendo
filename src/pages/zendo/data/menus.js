const menuList = [
  {
    name: '首页',
    path: '/home',
    component: 'HomeView',
    icon: ''
  },
  {
    name: '自定义指令',
    path: '',
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
  {
    name: 'CSS效果',
    path: '',
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
  {
    name: '通用Table封装',
    path: '/package',
    component: 'PackageView',
    icon: ''
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
    name: 'Echarts样例',
    path: '/echarts',
    component: 'EchartsDemo',
    icon: ''
  },
  {
    name: 'Sass样例',
    path: '/sassDemo',
    component: 'SassDemo',
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
  }
]

export default menuList
