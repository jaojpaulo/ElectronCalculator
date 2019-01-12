const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
let win

function createWindow(){
    win = new BrowserWindow({ width: 400, height: 600, resizable: false })
    win.setMenu(null)
    win.loadURL(url.format({
        pathname:path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes:true,
    }))

    win.on('closed', ()=> {
        win = null
    })
}

app.on('ready', createWindow)
