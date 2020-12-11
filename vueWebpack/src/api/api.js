import axios from 'axios'
import { promised } from 'q';
import { router } from '../router';

// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = 'http://tester.wedrive.com.cn:51518/express-ws/AjaxService?method=CallWsWs'
// } else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = ''
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = ''
// }

axios.defaults.timeout = 5000;

axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"
axios.interceptors.request.use(
    config => {
        // const token = store.state.token;
        config.data = config.data;
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        return config
    },
    error => {
        return Promise.error(error)
    }
)
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
        if (response.data.code == 100) {
            router.push({
                path: "/login",
                querry: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
            })
        }

    },
    error => {
        if (error.response.status) {
            // switch (reeor.response.status) {

            // if (true) {
            //     sessionStorage.removeItem('token')
            //     console.log("出来了")
            // }
            // break;
            // }
            return Promise.reject(error.response);
        }
    }
)

export function post(code, param) {
    return new Promise((resolve, reject) => {
        let token = window.sessionStorage.getItem('token'),
            userid = window.sessionStorage.getItem('userid'),
            // userid = this.$store.state.userid,
            passwed = window.sessionStorage.getItem('passwed'),
            companyid = window.sessionStorage.getItem('EXPRESS_COMPANY_ID');
        if (token != null && token != "undefined" && token.length > 0) param.TOKEN = token;
        if (userid != null && userid != "undefined" && userid.length > 0) param.CUST_ID = userid;
        // if (companyid != null && companyid != "undefined" && !param.EXPRESS_COMPANY_ID && companyid.length > 0) param.EXPRESS_COMPANY_ID = companyid;
        axios({
                url: "http://tester.wedrive.com.cn:51518/daappgate/AjaxService?method=CallWsWs",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
                data: "&data=" + JSON.stringify({
                    CODE: code,
                    PARAMS: param
                }),

            })
            .then(res => {
                if (res.data.code == 100) {
                    console.log("过不去")
                        // sessionStorage.removeItem('token')
                    router.push({
                        path: "/login",
                        querry: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
                    })
                }
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    })
}