const { ipcRenderer } = require('electron');

document.getElementById('config').addEventListener('click', () => {
    ipcRenderer.send('show-link-registration');
});


document.getElementById('logout').addEventListener('click', () => {
    if (confirm('Você tem certeza que deseja sair?')) {
        ipcRenderer.send('logout-success');
    }
});

document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
        const eventName = `show-${item.id}`;
        ipcRenderer.send(eventName);
    });
});
