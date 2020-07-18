/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/**
 * 异常处理程序
 */
const errorHandler = (error) => {
  const { response } = error;
  const { status, statusText, url } = response;
  if (response && status >= 200 && status < 300) {
    return response;
  }

  if (status === 401) {
    notification.error({
      message: `未登录或登录已过期，请重新登录`,
    });
    sessionStorage.removeItem('access_token');
    window.location.href = '/user/login';

    return false;
  }

  const errorText = codeMessage[status] || statusText;
  notification.error({
    message: `请求错误 ${status}: ${url}`,
    description: errorText,
  });

  const myError = new Error(errorText);
  myError.name = response.status;
  myError.response = response;
  throw error;
};
/**
 * 配置request请求时的默认参数
 */
const request = extend({
  timeout: 5000,
  getResponse: true,
  errorHandler,
  credentials: 'include', // 默认请求是否带上cookie
  mode: 'cors',
});

// 使用中间件对请求做前后处理
request.use(async (ctx, next) => {
  const { url, options } = ctx.req;
  const defaultOptions = {
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      // 'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
    },
  };
  const newOptions = { ...options, ...defaultOptions };
  if (newOptions.method === 'post' || newOptions.method === 'put') {
    if (url === 'login') {
      ctx.req.url = `/auth/${url}`;
      newOptions.headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json;charset=UTF-8',
      };
    } else {
      ctx.req.url = `/api/v1/${url}`;
      // newOptions.body undefined ，所以才用data, 此处FormData采用系统自动设置的content-type
      if (!(newOptions.data instanceof FormData)) {
        newOptions.headers.set('Content-Type', 'application/vnd.api+json');
      }
    }
  }
  ctx.req.options = newOptions;
  console.log('request', ctx.req);

  await next();
});

export default request;
