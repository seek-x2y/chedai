import request from '@/utils/request';

export async function uploadFile(file) {
  return request('upload', {
    method: 'POST',
    data: file,
  });
}
