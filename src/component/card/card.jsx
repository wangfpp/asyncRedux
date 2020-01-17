import React, { Component } from 'react';
import { Api } from '../../api/index';
import { connect } from 'react-redux';
import { todoAsync } from '../../store/action/actions'


class Card extends Component {
    fetchData() {
        this.props.todoAsync()
    }
    render() {
        console.log(this.props)
        return (
            <div className="card">
                {this.props.todo ?  <div>{this.props.todo}</div> : null}
                <button onClick={this.fetchData.bind(this)}>一个卡片的按钮</button>
            </div>
        )
    }
}

const mapStoreToProps = state => {
    console.log(state);
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeToDo: payload => {
            dispatch({type: 'ADD_TODO', payload})
        }
    }
}
export default  connect(mapStoreToProps ,  {...mapDispatchToProps, todoAsync})(Card);