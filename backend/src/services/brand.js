import request from '@/utils/request';
export async function query() {
  return request('/api/v1/brands');
}
export async function queryCurrent() {
  return request('/api/');
}
export async function queryNotices() {
  return request('/api/notices');
}
