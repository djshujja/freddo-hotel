const { app, BrowserWindow } = require("electron");
const path = require("path");

require("@electron/remote/main").initialize();

const appURL = `file://${path.join(__dirname, '../build/index.html')}`


function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });

    win.loadURL(appURL);
}




app.on("ready", createWindow);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});


const { ipcMain } = require("electron");
const sqlite3 = require("sqlite3");

const database = new sqlite3.Database("./public/db.sqlite3", (err) => {
    if (err) console.error("Database opening error: ", err);
});

const CREATE_TABLE_QUERY =
    "CREATE TABLE IF NOT EXISTS HotelData(ID INTEGER PRIMARY KEY AUTOINCREMENT,CustomerRef varchar(255), FirstName varchar(255) NOT NULL,  SurName varchar(255),  Address varchar(255),  PostCode varchar(255),  Email varchar(255),  Mobile varchar(255),  Nationality varchar(255),  Gender varchar(255),  DOB varchar(255),  IDType varchar(255),  IDNo varchar(255),  DriverName varchar(255),  DriverPhone varchar(255),  DriverIDType varchar(255),   DriverIDNo varchar(255),   RoomType varchar(255),   RoomNo varchar(255),  RoomExtNo varchar(255),  Date varchar(255),  LastRentDate varchar(255),   CheckInTime varchar(255),   CheckOutTime varchar(255), TotalDays varchar(255),   SubTotal varchar(255),   Tax varchar(255),   Total varchar(255), CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP  )";

database.run(CREATE_TABLE_QUERY);

const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./public/db.sqlite3",
    },
});

ipcMain.on("saveData-message", (event, arg) => {
    knex("HotelData")
        .insert(arg)
        .then((res) => {
            event.reply("saveData-reply", {
                success: true,
                data: res,
            });
        });
});

ipcMain.on("getData-message", async (event, arg) => {
    const data = await knex.select("*").from("HotelData");
    event.reply("getData-reply", {
        success: true,
        data,
    });
});
