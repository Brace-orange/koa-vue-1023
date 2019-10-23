import fetch from 'isomorphic-fetch'
import queryString from 'query-string'

export default function install(Vue) {
  Vue.prototype.fetch = fetch
  Vue.prototype.queryString = queryString
}