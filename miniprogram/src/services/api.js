import { buildApi, get, post, patch, destroy } from "redux-bees";
import { BASE_URL } from "../config";

const apiEndpoints = {
  getBrands: { method: get, path: "/brands" },
  getCarType: { method: get, path: "/brands/:brandId/relationships/cart-type" }
  //   getConfiguration: { method: get, path: "/brands/:brandId/relationships/cart-type" }
};

const config = {
  baseUrl: BASE_URL
  //   configureHeaders(headers) {
  //     return {
  //       ...headers,
  //       'Authorization': `Bearer ${store.getState().session.bearerToken}`,
  //     };
  //   },
};

const api = buildApi(apiEndpoints, config);
