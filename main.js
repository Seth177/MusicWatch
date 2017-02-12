"use strict";
const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let intro

function createWindow () {
  intro = new BrowserWindow({width: 800, height: 600, frame: false})

  intro.loadURL(url.format({
    pathname: path.join(__dirname, 'assets/windows/intro.html'),
    protocol: 'file:',
    slashes: true
  }))
  intro.on('closed', function () {
    intro = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (intro === null) {
    createWindow()
  }
})
