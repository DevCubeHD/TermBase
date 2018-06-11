import React from 'react';
import ReactDOM from 'react-dom'
import ServerModal from './components/ServerModal'

const {remote} = require('electron')

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {servermodal: false}
        this.openServerModal = this.openServerModal.bind(this)
    }

    minimize() {
        remote.BrowserWindow.getFocusedWindow().minimize()
    }

    maximize() {
        remote.BrowserWindow.getFocusedWindow().maximize()
    }

    close() {
        remote.BrowserWindow.getFocusedWindow().close()
    }

    openServerModal() {
        this.setState({servermodal: true})
    }

    render() {

        const {servermodal} = this.state

        return (
            <div>
                <ServerModal show={servermodal} />
                <div className='sidebar'>
                    <span className='logo'>
                        <i className='fas fa-terminal'></i>
                        <h1>TermBase</h1>
                    </span>
                    <div>
                        <ul>
                            <li className='active'>CloudSystem.iO</li>
                            <li>TimoCloud</li>
                            <li>CloudNet</li>
                        </ul>
                        <span onClick={this.openServerModal}><i className='fas fa-plus'></i>Add Server</span>
                    </div>
                </div>
                <div className='navbar'>
                    <ul className='menu'>

                    </ul>
                    <ul className='window'>
                        <li onClick={this.minimize}><i className='far fa-window-minimize'></i></li>
                        <li onClick={this.maximize}><i className='far fa-window-maximize'></i></li>
                        <li onClick={this.close}><i className='fas fa-times'></i></li>
                    </ul>
                </div>
            </div>
        )
    }

}

ReactDOM.render((
    <App />
), document.getElementById('app'))

//TODO Remove for Production
module.hot.accept()
