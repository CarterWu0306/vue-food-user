import request from '@/utils/request'

export function sumEvaluation() {
  return request({
    url: '/food-evaluation/evaluation/sumEvaluation',
    method: 'get'
  })
}

export function getEvaluationByParams(params) {
  return request({
    url: '/food-evaluation/evaluation/getAllEvaluationByParam',
    method: 'get',
    params
  })
}

export function uploadImage(data) {
  return request({
    url: '/food-evaluation/evaluation/uploadImage',
    method: 'post',
    headers: { "Content-Type": "multipart/form-data" },
    data: data
  })
}
