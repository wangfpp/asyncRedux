import { ADD_TODO } from './actionTypes';
import { Api } from '../../api/index.js';

const  todo =  (payload) =>  {
    return {
        type: ADD_TODO,
        payload
    }
}

const todoAsync = dispatch => { 
    return dispatch => {
        Api.randomEmail().then(res => {
            let result = res.results;
            let email = result.length ? result[0]['email'] : "";
            dispatch(todo(email))
        }).catch(err => {
            dispatch(todo('error'))
        })
    }
}
export  {todo, todoAsync};