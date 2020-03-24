export const menuConfig = [{
  name: 'home',
  title: '首页',
  route: '/home',
  icon: '',
  hidden: false
}, {
  name: 'provision',
  title: '资源分配',
  route: '/provision',
  icon: '',
  hidden: false,
  children: [{
    name: 'host',
    title: '主机',
    route: '/provision/host',
    icon: '',
    hidden: false
  }, {
    name: 'volume',
    title: '卷',
    route: '/provision/volume',
    icon: '',
    hidden: false
  }]
}]
