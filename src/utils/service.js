import axios from "axios";
import { Message } from "element-ui";
import { getToken } from "./auth";
const service=axios.create({
    baseURL:"localhost:8080",
    timeout:5000
})
// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const res=response.data
    if(!res.success){
        Message.error(res.message||"请求错误");
        return Promise.reject(new Error(res.message||"请求错误"))
    }else{
        return res
    }
  }, function (error) {
    // 对响应错误做点什么
    Message.error(error.message||"请求错误");
    return Promise.reject(error);
  });
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.Token=getToken()
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });  
export default service