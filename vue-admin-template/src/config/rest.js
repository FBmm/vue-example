const API_V1 = {
  home: {
    get: '/home'
  },
  provision: {
    volume: {
      get: '/provision/volumes'
    }
  }
}

function createApi_V1(api) {
  console.log(Object.entries(api))
}

function ApiFactory() {
  createApi_V1(API_V1);
  return {};
}
const rest = new ApiFactory();
export default rest
