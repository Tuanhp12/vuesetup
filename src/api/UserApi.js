import Api from './BaseApi';

export function login(user){
    return Api.post('/auth/login', user);
} 

// export function UserRegister(user){
//     return Api.post('/')
// }