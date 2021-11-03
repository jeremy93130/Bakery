import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        const { handleClick, text } = this.props
        console.log(this.props)
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleClick} >
                    {text}
                </button>
            </div>
        );
    }
}

export default Buttons;