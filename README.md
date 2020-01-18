### 学习异步redux

### 建立actions
 创建异步action
 ```javascript
    import { ADD_TODO } from './actionTypes';
import { Api } from '../../api/index.js';

const  todo =  (payload) =>  {
    return {
        type: ADD_TODO,
        payload
    }
}

const todoAsync = () => { 
    return dispatch => {
        Api.randomEmail().then(res => {
            let result = res.results;
            let email = result.length ? result[0]['email'] : "";
            dispatch(todo(email))
        }).catch(err => {
            dispatch({type: ADD_TODO, payload: 'error'})
        })
    }
}
export  {todo, todoAsync};
 ```


 组件中调用这个异步方法就好
 ```javascript
 // 引入
 import { bindActionCreators } from 'redux';
import { todoAsync } from '../../store/action/actions'

// connect连接
const mapDispatchToProps = (dispatch) => {
    return {
        changeToDo: payload => {
            dispatch({type: 'ADD_TODO', payload})
        },
        todoAsync:  bindActionCreators(todoAsync, dispatch)
    }
}
export default  connect(mapStoreToProps , mapDispatchToProps)(Card);

// 调用
 fetchData() { // 异步方式
        this.props.todoAsync()
    }
    setData() {　// 同步方式
        this.props.changeToDo('同步的方式啊哈哈哈')
    }
 ```
 