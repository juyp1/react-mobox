import axios from 'axios'
class HttpRequest {
  // eslint-disable-next-line no-undef
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      withCredentials: true
    }
    return config
  }

  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }

  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      console.log('----',config.url)
      if (!config.url.includes('/login')) {
        //config.headers['Authorization'] = getToken()
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.distroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.distroy(url)
      if (!error.response) {
        // Message.error('连接服务器异常')
      } else if (error.response.status === 401) {
        //removeToken()
       // Message.error(error.response.data.message)
        window.location.href = '#/signin'
      } else if (error.response.data) 
      //Message.error(error.response.data.message)
      // 对响应错误做点什么
      //Message.error(error.response.data.message)
      return Promise.reject(error.response.data.message)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
