import Api from './BaseApi';

export function getListMember(){
    return Api.get('/members/findAll');
}

