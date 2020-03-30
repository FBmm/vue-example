const rest = {
  home: {
    get: '/home',
    post: '/home'
  },
  provision: {
    volume: {
      get: { url: '/provision/volumes', name: '卷列表' },
      post: '/provision/volumes'
    },
    host: {
      post: '/provision/volumes'
    }
  }
}
// 版本控制
function createApi_V1(api) {}
function ApiFactory() {
  createApi_V1(API_V1);
  return {};
}
// const rest = new ApiFactory();

export default rest
