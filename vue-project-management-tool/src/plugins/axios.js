import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://my-api-url.com',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

export default instance
