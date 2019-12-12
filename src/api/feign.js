import request from '@/utils/request'

export function placeOrderByAdmin(data) {
  return request({
    url: '/food-feign/placeOrder/placeOrderByAdmin',
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
