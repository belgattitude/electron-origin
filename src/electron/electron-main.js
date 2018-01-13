'use strict'

import { app, BrowserWindow } from 'electron'

const isDevelopment = process.env.NODE_ENV !== 'production'
const windowStateKeeper = require('electron-window-state')

global.ffmpegpath = require('ffmpeg-static').path.replace('app.asar', 'app.asar.unpacked');

// Global reference to mainWindow
// Necessary to prevent win from being garbage collected
let mainWindow;

function createMainWindow() {
  // Construct new BrowserWindow

  // Load the previous state with fallback to defaults
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });

  // Create the window using the state information
  let window = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height
  });

  // Let us register listeners on the window, so we can update the state
  // automatically (the listeners will be removed when the window is closed)
  // and restore the maximized or full screen state
  mainWindowState.manage(window);

  // Set url for `win`
  // points to `webpack-dev-server` in development
  // points to `index.html` in production
  const url = isDevelopment
    ? `http://localhost:3000`
    : `file://${__dirname}/index.html`

  if (true) {
    window.webContents.openDevTools()
  }

  window.loadURL(url)

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// Quit application when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications to stay open
  // until the user explicitly quits
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  // On macOS it is common to re-create a window
  // even after all windows have been closed
  if (mainWindow === null) mainWindow = createMainWindow()
})

// Create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
})