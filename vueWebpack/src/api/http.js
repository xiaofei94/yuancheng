import { post } from './api'
import store from '../store/index'

const newpromise = function(fileName, callback) {
    return new Promise((resolve, reject) => {
        post(fileName).then(callback)
    })
}

const login = function(custid, code, callback) {
    // return new Promise((resolve, reject) => {
    post("customerSmsLogin", {
            CUST_ID: custid,
            SMS_CODE: code,
        }).then(callback)
        // })
}
const list = function(page, callback) {
    post("orderListByPage_v32", {
        // CUST_ID: window.localStorage.getItem('userid'),
        // TOKEN: window.localStorage.getItem('token'),
        PAGE: page + '',
    }).then(callback)
}
const getMerchants = function(page, params, callback) {
    post("optBuList_v34", {
        AREA: '',
        CAR_ID: params.CAR_ID,
        CAR_UUID: params.CAR_UUID,
        CITY: "",
        GIFT_SID: ',,,,',
        GPS_DATA: 'baidu',
        LAT: "",
        LENGTH: "",
        LNG: "",
        MA: "1241",
        MA_ALL_MATCH: "true",
        MA_COUNT: '',
        PAGE: page,
        PDU_ID: '',
        PROV_DLV: 'false',
        PROV_RANK: '',
        SORT: '[]',
        TYPE: '',
        HOL_EXC: 'no',
        TOTAL_PRICE: "0",
        SEARCH_NAME: params.SEARCH_NAME?params.SEARCH_NAME:'',
        QM_CENTER: ''
    }).then(callback)
}
const messageNotifyBO = function(callback) {
    post('messageNotifyBO', {

    }).then(callback)
}

export {
    login,
    list,
    getMerchants,
    messageNotifyBO,
}