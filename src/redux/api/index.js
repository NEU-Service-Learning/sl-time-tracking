import fetch from 'isomorphic-fetch'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

const baseURL = 'http://ec2-54-147-212-27.compute-1.amazonaws.com'

const request = (endpoint, data, moreHeaders, method) => {
  const token = localStorage.getItem('key')
  return fetch(baseURL + endpoint, {
      method,
      mode: 'cors',
      headers: { ...headers, ...moreHeaders, Authorization: token === '' || token === null && typeof token === 'object' ? '': `Token ${token}` },
      body: JSON.stringify(data),
    })
    .then(blob => {
      const { status } = blob
      const data = blob.json()
      if (status === 200) {
        return data
      }
      throw data
    })
  }


export const GET = (endpoint, data, headers) => request(endpoint, data, headers, 'GET')
export const POST = (endpoint, data, headers) => request(endpoint, data, headers, 'POST')
export const PUT = (endpoint, data, headers) => request(endpoint, data, headers, 'PUT')
export const DELETE = (endpoint, data, headers) => request(endpoint, data, headers, 'DELETE')
