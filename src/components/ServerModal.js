import React from 'react';
import ReactDOM from 'react-dom'
import Input from './Input'

export default class ServerModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {ftp_protocol: 'SFTP'}
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }

    change(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    submit() {
        console.log(this.state)
    }

    render() {

        const {name, address, ssh_user, ssh_password, ssh_port, ssh_key, ftp_protocol, ftp_user, ftp_password, ftp_directory, ftp_port} = this.state

        return (
            <div className='modal' style={{display: this.props.show ? 'block' : 'none'}}>
                <div>
                    <form className='server' onSubmit={this.submit}>
                        <Input type='text' id='name' name='name' value={name} onChange={this.change} label='Name' />
                        <Input type='text' id='address' name='address' value={address} onChange={this.change} label='Address' />
                        <h2>SSH</h2>
                        <section>
                            <Input type='text' name='ssh_user' value={ssh_user} change={this.change} label='User' />
                            <Input type='password' name='ssh_password' value={ssh_password} change={this.change} label='Password' />
                            <Input type='number' name='ssh_port' value={ssh_port} change={this.change} label='Port' />
                            <Input type='file' name='ssh_key' value={ssh_key} change={this.change} label='Key' />
                        </section>
                        <select name='ftp_protocol' value={ftp_protocol} onChange={this.change}>
                            <option value='SFTP'>SFTP</option>
                            <option value='FTP'>FTP</option>
                            <option value='SCP'>SCP</option>
                        </select>
                        <h2>{ftp_protocol}</h2>
                        <section style={{display: ftp_protocol === 'SFTP' ? 'none' : 'block'}}>
                            <Input type='text' name='ftp_user' value={address} onChange={this.change} label='User' />
                            <Input type='text' name='ftp_password' value={address} onChange={this.change} label='Password' />
                            <Input type='text' name='ftp_port' value={ftp_port} onChange={this.change} label='Port' />
                            <Input type='text' name='ftp_directory' value={ftp_port} onChange={this.change} label='Directory' />
                        </section>
                    </form>
                </div>
            </div>
        )
    }

}
