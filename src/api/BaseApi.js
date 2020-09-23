import axios from 'axios';
import store from '@/store';

const instance = axios.create({
    baseURL: 'http://localhost:8085/api/v1'
});

instance.interceptors.request.use(request => {
    // console.log("Run here")
    // console.log(store.state)
    request.headers.Authorization =  store.state.auth.token;
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    if(response.status === 401) {
        //add your code
        alert("You are not authorized");
   }
   return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
export default instance;