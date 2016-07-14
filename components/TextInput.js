import React, { Component } from 'react';

import TextDisplay from './TextDisplay';

class TextInput extends Component {
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

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Your text here, sweet"
                    value={this.state.inputText}
                    onChange={this.handleChange}/>
                <TextDisplay text={this.state.inputText} />
            </div>

        );
    }
}

export default TextInput;