import request from '@/utils/request';

export async function getCars() {
  return request('/api/v1/brands', {
    method: 'GET',
  });
}

export async function getCar(params) {
  return request('/api/v1/brands', {
    method: 'POST',
    data: params,
  });
}
