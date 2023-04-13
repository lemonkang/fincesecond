import axios, { AxiosRequestConfig } from "axios";
import { ResultType } from "./requestType";

const baseURL = "http://localhost:8080/"
const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,

});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
 
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response ;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

const axiosGet =<T>({ url, params, headers={} }: AxiosRequestConfig):Promise<ResultType<T>> => {
  headers["Content-Type"] = 'application/json;charset=utf-8'
  return new Promise(async (resolve, reject) => {
    try {
      const result =await instance({
        url,
        method: "get",
        params: params,
        headers
      })
      const resultData=result.data as ResultType<T>
      resolve(resultData)

  
    } catch (error) {

      reject(error)
    }
  })
}
const _post = ({ url, data, headers }: AxiosRequestConfig) => {
  return new Promise(async(resolve, reject) => {
    try {
      const result =await instance({
        url,
        method: "post",
        data: data,
        headers
      })
      const resultData=result.data
      resolve(resultData)
    } catch (error) {

      reject(error)
    }
  })
}
const axiosPostJSON = ({ url, data, headers = {} }: AxiosRequestConfig) => {
  headers["Content-Type"] = 'application/json;charset=utf-8'
  return _post({ url, data, headers })
}
const axiosPostUrlencoded = ({ url, data, headers = {} }: AxiosRequestConfig) => {
  headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return _post({ url, data, headers })
}

const axiosPostFormData = ({ url, data, headers = {} }: AxiosRequestConfig) => {
  headers['Content-Type'] = 'multipart/form-data'
  return _post({ url, data, headers })
}

export {axiosGet,axiosPostJSON,axiosPostUrlencoded,axiosPostFormData}