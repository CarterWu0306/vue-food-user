import request from '@/utils/request'

export function placeOrderByUser(data) {
  return request({
    url: '/food-feign/placeOrder/placeOrderByUser',
    method: 'post',
    data
  })
}

export function appriseOrder(data) {
  return request({
    url: '/food-feign/appriseOrder/appriseOrder',
    method: 'post',
    data
  })
}
