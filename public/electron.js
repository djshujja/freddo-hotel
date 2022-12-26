const { app, BrowserWindow } = require("electron");
const path = require("path");
const sqlite3 = require("sqlite3");
const { ipcMain } = require("electron");
const fs = require("fs");

const getDBPath = (filename) => {
    let base = app.getAppPath();
    let userData = app.getPath("userData");
    const _path = path.join(userData);
    console.log("file on", _path);
    // TOOD: Create file if doesn't exist
    // fs.writeFile(`${_path}/db.sqlite3`, '', () => console.log('created'))
    // if (app.isPackaged) {
    //   base = base.replace('/app.asar', '', )
    // }
    return path.resolve(_path, "db.sqlite3");
};

const dbUrl = getDBPath("db.sqlite3");
console.log("dbURL", dbUrl);

const CREATE_TABLE_QUERY =
    "CREATE TABLE IF NOT EXISTS HotelData(ID INTEGER PRIMARY KEY AUTOINCREMENT,CustomerRef varchar(255), FirstName varchar(255) NOT NULL,  SurName varchar(255),  Address varchar(255),  PostCode varchar(255),  Email varchar(255),  Mobile varchar(255),  Nationality varchar(255),  Gender varchar(255),  DOB varchar(255),  IDType varchar(255),  IDNo varchar(255),  DriverName varchar(255),  DriverPhone varchar(255),  DriverIDType varchar(255),   DriverIDNo varchar(255),   RoomType varchar(255),   RoomNo varchar(255),  RoomExtNo varchar(255),  Date varchar(255),  LastRentDate varchar(255),   CheckInTime varchar(255),   CheckOutTime varchar(255), TotalDays varchar(255),   SubTotal varchar(255),   Tax varchar(255),   Total varchar(255), CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP  )";
const EMPLOYEE_TABLE_QUERY =
    "CREATE TABLE IF NOT EXISTS EmployeeData(ID INTEGER PRIMARY KEY AUTOINCREMENT,Name varchar(255), Pin varchar(255) NOT NULL,  EmpID varchar(255),  Address varchar(255),  Email varchar(255),  Mobile varchar(255), DOB varchar(255), IDNo varchar(255), Role INTEGER NOT NULL, CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP  )";

const appURL = app.isPackaged
    ? `file://${path.join(__dirname, "../build/index.html")}`
    : "http://localhost:3000";

const database = new sqlite3.Database(dbUrl, (err) => {
    if (err) console.error("Database opening error: ", err);
});

database.run(CREATE_TABLE_QUERY);
database.run(EMPLOYEE_TABLE_QUERY);

const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: dbUrl,
    },
});

require("@electron/remote/main").initialize();

// const appURL = 'http://localhost:3000'

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

ipcMain.on("deleteData-message", (event, ID) => {
    knex("HotelData")
        .where("ID", ID)
        .del()
        .then((res) => {
            event.reply("deleteData-reply", {
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
