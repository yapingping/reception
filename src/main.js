import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 封装request实例
// import { request } from './network/request'

createApp(App).use(store).use(router).mount('#app')


// request({
//     // url:'/home/multidata'
// },res=>{
//     console.log(res)
// },err=>{
//     console.log(err)
// })