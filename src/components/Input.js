import React from 'react';
import ReactDOM from 'react-dom'

export default class Input extends React.Component {

    render() {
        const {label, type, name, change, value} = this.props
        return (
            <div>
                <label>{label}</label>
                <input type={type} name={name} onChange={change} value={value} />
            </div>
        )
    }

}
