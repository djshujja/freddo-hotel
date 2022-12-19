const electron = window.require("electron");
const { ipcRenderer } = electron;

export default function get(sql) {
    return new Promise((resolve) => {
        ipcRenderer.once("getData-reply", (_, arg) => {
            resolve(arg);
        });
        ipcRenderer.send("getData-message", sql);
    });
}
