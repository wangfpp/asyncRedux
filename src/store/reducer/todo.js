import { ADD_TODO } from '../action/actionTypes'

const todo = (state = "", actions) => {
    switch(actions.type) {
        case ADD_TODO:
            return actions.payload;
        default:
            return state;
    }
}

export default  todo;