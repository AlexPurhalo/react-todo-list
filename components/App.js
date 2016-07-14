import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoInput from './TodoInput';
import TodoList from './TodoList';
import UserInfo from './UserInfo'

import actions from '../redux/actions';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <UserInfo
                    user={this.props.user}
                    createNewUserId={this.props.actions.createNewUserId}/>
                <TodoInput
                    addTodo={this.props.actions.addTodo} />
                <TodoList
                    todos={this.props.todos}
                    actions={this.props.actions} />
            </div>
        )
    }

}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)