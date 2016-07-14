import React, { Component } from 'react';

import actions from '../redux/actions';

class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.state = { inputText: '' };

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(actions.addTodo(this.state.inputText));
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Your text here, sweet"
                    value={this.state.inputText}
                    onChange={this.handleChange}/>
                <button
                    onClick={this.handleSubmit.bind(this)}>
                    Submit</button>
            </div>

        );
    }
}

export default TodoInput;