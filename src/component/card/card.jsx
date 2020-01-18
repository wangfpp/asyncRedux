import React, { Component } from 'react';
import { Api } from '../../api/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todoAsync } from '../../store/action/actions'

class Card extends Component {
    fetchData() {
        this.props.todoAsync()
    }
    setData() {
        this.props.changeToDo('同步的方式啊哈哈哈')
    }
    render() {
        return (
            <div className="card">
                {this.props.todo ?  <div>{this.props.todo}</div> : null}
                <button onClick={this.fetchData.bind(this)}>一个卡片的按钮</button>
                <button onClick={this.setData.bind(this)}>同步的</button>
            </div>
        )
    }
}

const mapStoreToProps = state => {
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeToDo: payload => {
            dispatch({type: 'ADD_TODO', payload})
        },
        todoAsync:  bindActionCreators(todoAsync, dispatch)
    }
}
export default  connect(mapStoreToProps , mapDispatchToProps)(Card);