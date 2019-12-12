import request from '@/utils/request'

export function getOrdersByParam(params) {
  return request({
    url: '/food-order/order/getOrdersByParam',
    method: 'get',
    params
  })
}

export function completeOrder(data) {
  return request({
    url: '/food-order/order/completeOrder',
    method: 'post',
    data
  })
}
