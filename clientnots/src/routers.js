
const views = [
  {
    path: 'star',
    title: '星星页面'
  },
  {
    path: 'save',
    title: '保存页面'
  },
  {
    path: 'changeColor',
    title: '变换颜色'
  },
  {
    path: 'value',
    title: '判断值'
  },
  {
    path: 'grid',
    title: '网格布局'
  }
]

const routers = views.map((item) => {
  const obj = {
    path: `/${item.path}`,
    name: `${item.path}`,
    component: () => import(`./views/${item.path}.vue`),
    meta: {
      title: `${item.title}`
    }
  }
  return obj
})

export default routers