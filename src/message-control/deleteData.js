const electron = window.require("electron");
const { ipcRenderer } = electron;

export default function deleteData(sql) {
    return new Promise((resolve) => {
        ipcRenderer.once("deleteData-reply", (_, arg) => {
            resolve(arg);
        });
        ipcRenderer.send("deleteData-message", sql);
    });
}
