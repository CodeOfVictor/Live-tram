const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        },
        frame: true // Keep the default window frame and controls
    });

    mainWindow.loadFile('index.html');

    // Create an empty menu to remove the default menu bar
    const emptyMenu = Menu.buildFromTemplate([]);
    Menu.setApplicationMenu(emptyMenu);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
