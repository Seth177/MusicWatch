const {
    remote
} = require('electron');

document.getElementById('close').addEventListener('click', (event) => {
    remote.getCurrentWindow().close();
});

document.getElementById('exit').addEventListener('click', (event) => {
    remote.getCurrentWindow().close();
});

document.getElementById('minimize').addEventListener('click', (event) => {
    remote.getCurrentWindow().minimize();
});
document.getElementById('reload').addEventListener('click', (event) => {
	remote.createWindow()
    remote.getCurrentWindow().close();
});

