const menuList = [
  {
    label: '自定义指令',
    url: '',
    children: [
      {
        label: '元素平滑上升',
        url: '/sildeIn',
        component: 'SildeInView',
        icon: ''
      },
      {
        label: '水印',
        url: '/waterMarker',
        component: 'WaterMarker',
        icon: ''
      },
      {
        label: '元素拖拽',
        url: '/draggable',
        component: 'DraggableView',
        icon: ''
      }
    ]
  },
  {
    label: '通用Table封装',
    url: '/package',
    component: 'PackageView',
    icon: ''
  },
  {
    label: '94款CSS阴影样式',
    url: '/shadow',
    component: 'ShadowView',
    icon: ''
  },
  {
    label: 'CSS实现水波纹效果',
    url: '/waves',
    component: 'WavesView',
    icon: ''
  },
  {
    label: '组件懒加载',
    url: '/lazyComp',
    component: 'LazyComp',
    icon: ''
  },
  {
    label: '蜂巢布局效果',
    url: '/honeycombView',
    component: 'HoneycombView',
    icon: ''
  }
]

export default menuList
