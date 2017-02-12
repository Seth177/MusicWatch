const {
    remote
} = require('electron');

document.getElementById('close').addEventListener('click', (event) => {
    remote.getCurrentWindow().close();
});

document.getElementById('minimize').addEventListener('click', (event) => {
    remote.getCurrentWindow().minimize();
});