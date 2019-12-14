import request from '@/utils/request'

export function getFlashSaleList(params) {
  return request({
    url: '/food-flashsale/flashSale/getFlashSaleList',
    method: 'get',
    params
  })
}

export function rush(data) {
  return request({
    url: '/food-flashsale/flashSale/rush',
    method: 'post',
    data
  })
}
