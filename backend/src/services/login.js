import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/login', {
    method: 'POST',
    data: params,
  });
}
// 手机验证码登录
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
