const {app, BrowserWindow} = require('electron')
const path = require('path'),
    url = require('url')

let window,
    dev = false

if(process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
    dev = true
}

function create() {

    window = new BrowserWindow({
        width: 1000, height: 800, show: false, center: true, title: 'TermBase', frame: false, backgroundColor: '#4C5359'
    })

    let path

    if (dev && process.argv.indexOf('--noDevServer') === -1) {

        path = url.format({
            protocol: 'http:',
            host: 'localhost:8080',
            pathname: 'index.html',
            slashes: true
        })

    } else {

        path = url.format({
            protocol: 'file:',
            pathname: path.join(__dirname, 'dist', 'index.html'),
            slashes: true
        })

    }

    window.loadURL(path)

    window.once('ready-to-show', () => {
        window.show()
    })

    window.on('closed', function() {
        window = null
    })

}

app.on('ready', create)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (window === null) {
        create()
    }
})
