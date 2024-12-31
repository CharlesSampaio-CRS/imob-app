const { app, BrowserWindow } = require('electron');
const path = require('path');

app.disableHardwareAcceleration();

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1600,  // Aumentando a largura da janela
        height: 1000, // Aumentando a altura da janela
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: true,
        },
       // autoHideMenuBar: true,
    });

    mainWindow.loadFile(path.join(__dirname, 'src', 'pages/index.html'));

    mainWindow.on('resize', () => {
        const { width, height } = mainWindow.getContentBounds();
    });
}

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
