import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/food-user/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/food-user/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/food-user/user/logout',
    method: 'post'
  })
}

export function updateUser(data) {
  return request({
    url: '/food-user/user/updateUser',
    method: 'post',
    data
  })
}

export function changePwd(data) {
  return request({
    url: '/food-user/user/changePwd',
    method: 'post',
    data
  })
}

export function uploadUserImage(data) {
  return request({
    url: '/food-user/user/uploadUserImage',
    method: 'post',
    headers: { "Content-Type": "multipart/form-data" },
    data: data
  })
}

export function addUser(data) {
  return request({
    url: '/food-user/user/addUser',
    method: 'post',
    data
  })
}
