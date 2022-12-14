const electron = window.require("electron");
const { ipcRenderer } = electron;

export default function save(sql) {
    return new Promise((resolve) => {
        ipcRenderer.once("saveData-reply", (_, arg) => {
            resolve(arg);
        });
        ipcRenderer.send("saveData-message", sql);
    });
}
