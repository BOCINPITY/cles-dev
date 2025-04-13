import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
})

// 请求拦截器
request.interceptors.request.use(
  (config) => config,
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.error('API Error:', error.response || error.message)
    return Promise.reject(error)
  },
)

export default request
