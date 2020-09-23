import { login } from '@/api/UserApi';
import { getListMember } from '@/api/MemberApi';

// const state = {
//     token: getToken(),
//     name: '',
//     avatar: '',
//     introduction: '',
//     roles: []
// }

const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
}

const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, user) {
        state.status = 'success'
        state.user = user
        state.token = user.token
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = ''
        state.token = ''
    }
}


const actions = {

    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            login(user)
                .then(resp => {
                    const user = resp.data.payload
                    localStorage.setItem('token', user.token);
                    commit('auth_success', user);
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error')
                    reject(err)
                })
        })
    },

    register({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios.post("http://localhost:8085/api/v1/auth/register", user)
                .then(resp => {
                    const token = resp.data.token
                    const user = resp.data.user
                    localStorage.setItem('token', token)
                    commit('auth_success', token, user)
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error', err)
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit('logout')
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    },

    getMembers({ commit }) {
        console.log("Run this")
        return new Promise((resolve, reject) => {
            getListMember().then(res => {
                console.log("Run ")
                console.log(res.data);
                resolve(res);
            })
                .catch((err) => {
                    reject(err);
                })
        })
    }
} 

const getters = {
    isLoggedIn: state => !!state.token, // change when have token or not
    authStatus: state => state.status,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }
  