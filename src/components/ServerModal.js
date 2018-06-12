import React from 'react';
import ReactDOM from 'react-dom'
import {Input, RadioInput, FileInput} from './Input'

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

    submit(e) {
        console.log(this.state)
        //TODO CHECK VALUES

        //IF CHECK FAILED e.preventDefault(); return;

        //IF CHECK SUCCESSFULL
        //PERSISTENT STORAGE
        this.props.close(e)
    }

    render() {

        const {name, address, ssh_user, ssh_password, ssh_port, ssh_key, ftp_protocol, ftp_user, ftp_password, ftp_directory, ftp_port} = this.state

        return (
            <div className='modal' style={{display: this.props.show ? 'block' : 'none'}}>
                <div>
                    <form className='server' onSubmit={this.submit}>
                        <h2>GENERAL</h2>
                        <section>
                            <Input type='text' id='name' name='name' value={name} onChange={this.change} label='Name' />
                            <Input type='text' id='address' name='address' value={address} onChange={this.change} label='Address' />
                        </section>
                        <h2>{'SSH' + (ftp_protocol !== 'FTP' ? ' / ' + ftp_protocol : '')}</h2>
                        <section>
                            <Input type='text' name='ssh_user' value={ssh_user} change={this.change} label='User' />
                            <Input type='password' name='ssh_password' value={ssh_password} change={this.change} label='Password' />
                            <Input type='number' name='ssh_port' value={ssh_port} change={this.change} label='Port' />
                            <FileInput name='ssh_key' value={ssh_key} change={this.change} label='Key' />
                        </section>
                        <RadioInput name='ftp_protocol' value='SFTP' change={this.change} label='SFTP' active={ftp_protocol} />
                        <RadioInput name='ftp_protocol' value='FTP' change={this.change} label='FTP' active={ftp_protocol} />
                        <RadioInput name='ftp_protocol' value='SCP' change={this.change} label='SCP' active={ftp_protocol} />
                        <section className={ftp_protocol !== 'FTP' ? 'disabled' : 'enabled'} >
                            <div className={ftp_protocol !== 'FTP' ? 'disabled' : 'overlay'}>
                                <p>Only available in FTP protocol</p>
                            </div>
                            <Input type='text' name='ftp_user' value={address} onChange={this.change} label='User' />
                            <Input type='text' name='ftp_password' value={address} onChange={this.change} label='Password' />
                            <Input type='number' name='ftp_port' value={ftp_port} onChange={this.change} label='Port' />
                            <Input type='text' name='ftp_directory' value={ftp_port} onChange={this.change} label='Directory' />
                        </section>
                        <div className='buttons'>
                            <button onClick={this.props.close}>Close</button>
                            <button type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}
