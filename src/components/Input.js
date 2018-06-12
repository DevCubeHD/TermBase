import React from 'react';
import ReactDOM from 'react-dom'

export class Input extends React.Component {

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

export class RadioInput extends React.Component {

    render() {
        const {label, name, change, value, active} = this.props
        return (
            <div className='radio'>
                <input type='radio' name={name} onChange={change} value={value} checked={value === active} />
                <label>{label}</label>
            </div>
        )
    }

}

export class FileInput extends React.Component {

    render() {
        const {label, name, change, value} = this.props
        return (
            <div>
                <label>{label}</label>
                <input type='file' name={name} onChange={change} value={value} />
            </div>
        )
    }

}
