import request from '@/utils/request';

export async function uploadFile(file) {
  return request('files', {
    method: 'POST',
    data: file,
  });
}
