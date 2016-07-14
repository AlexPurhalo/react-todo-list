import React, { Component } from 'react';

class TextDisplay extends Component {
    render() {
        return (
            <div>
                <p><strong>Your text: </strong>{this.props.text}</p>
            </div>
        )
    }
}

export default TextDisplay;