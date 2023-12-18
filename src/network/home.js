// import {request} from './request'
// 将首页所有的请求数据统一管理
// 在main.vue组件中直接使用


// 获取主页数据
export function getMainData(){
   return request({
   //  url:'/system'
   })
}

// 查询精彩栏目
export function getColumnData(){
   return request({
   //  url:'/system/column/list'
   })
}