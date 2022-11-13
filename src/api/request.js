import axios from 'axios';
import { Message } from "element-ui";
import Router from '@/router/router';

const service = axios.create({
    baseURL: 'http://127.0.0.1:8081',
    timeout: 5000
});

// 设置请求拦截器
service.interceptors.request.use(config => {
    const token = localStorage.getItem('TOKEN')
    if (token) {
        //如果token存在
        config.headers['Authorization'] = token;
    }
    return config;
},
    error => {
        Promise.reject(error);
    }
);

// 设置响应拦截器
// 这里拦截401错误，并重新跳入登页重新获取token
service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        if (response.data.status === 1 && response.data.message === "身份认证失败") {
            // token过期,清除token,强制退回到login
            localStorage.removeItem('TOKEN');
            Message.error({ message: "身份过期，请重新登录" })
            Router.replace('/login');
        }
        return response
    },
    error => {
        return Promise.reject(error)
    }
);

export default service;