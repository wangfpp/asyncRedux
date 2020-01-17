import axios from 'axios';

export const Api = {
    getTeachers: _ => {
        return new Promise((resolve, reject) => {
            axios.get('/usr/group/*/teacher').then(res => {
                resolve(res.data);
              }, err => {
                reject(err);
              })
        })
    },
    randomEmail: _ => {
        return new Promise((resolve, reject) => {
            axios.get('https://randomuser.me/api/',{headers: {'content-type': 'application/json'}}).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }
}