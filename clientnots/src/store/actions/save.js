import api from '../api'
import 'whatwg-fetch'

export default {
  async saveUrl({ commit }, param) {
    const res = await window.fetch(`${api.save}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(param),
      method: 'POST',
      credentials: 'include',
    })
    // const resJSON = await res.json()
    return res
  }
}