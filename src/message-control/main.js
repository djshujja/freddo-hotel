const { ipcMain } = require("electron");
const sqlite3 = require("sqlite3");

// var db = new sqlite3.Database("../../public/db.sql");

const database = new sqlite3.Database("./public/db.sqlite3", (err) => {
    if (err) console.error("Database opening error: ", err);
});

const CREATE_TABLE_QUERY =
    "CREATE TABLE IF NOT EXISTS HotelData(ID INTEGER PRIMARY KEY AUTOINCREMENT,CustomerRef varchar(255), FirstName varchar(255) NOT NULL,  SurName varchar(255),  Address varchar(255),  PostCode varchar(255),  Email varchar(255),  Mobile varchar(255),  Nationality varchar(255),  Gender varchar(255),  DOB varchar(255),  IDType varchar(255),  IDNo varchar(255),  DriverName varchar(255),  DriverPhone varchar(255),  DriverIDType varchar(255),   DriverIDNo varchar(255),   RoomType varchar(255),   RoomNo varchar(255),  RoomExtNo varchar(255),  Date varchar(255),  LastRentDate varchar(255),   CheckInTime varchar(255),   CheckOutTime varchar(255), TotalDays varchar(255),   SubTotal varchar(255),   Tax varchar(255),   Total varchar(255), CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP  )";

database.run(CREATE_TABLE_QUERY);

const knex = require("knex")({
    client: "sqlite3", // or 'better-sqlite3'
    connection: {
        filename: "./public/db.sqlite3",
    },
});

ipcMain.on("saveData-message", async (event, arg) => {
    await knex("HotelData").insert(arg);
    const all = await knex.select("*").from("HotelData");

    event.reply("saveData-reply", {
        success: true,
        data: all,
    });
});

ipcMain.on("getData-message", (event, arg) => {
    knex.select("*").from("HotelData");
    event.reply("getData-reply", {
        success: true,
        data: arg,
    });
});
