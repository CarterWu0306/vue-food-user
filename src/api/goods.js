import request from '@/utils/request'

export function getAllGoodsList() {
  return request({
    url: '/food-goods/goods/selAllGoodsList',
    method: 'get'
  })
}


export function selGoodsLabel() {
  return request({
    url: '/food-goods/goods/selGoodsLabel',
    method: 'get'
  })
}
