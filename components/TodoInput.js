import React, { Component } from 'react';

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
        this.props.addTodo(this.state.inputText);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                    type="text"
                    placeholder="Your text here, sweet"
                    value={this.state.inputText}
                    onChange={this.handleChange}/>
                <input
                    type="submit"
                    text="Submit" />
            </form>

        );
    }
}

export default TodoInput;