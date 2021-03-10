// import express from "express";
// const query = require("./test-query.sql");
const express = require("express");
const { Client } = require("pg");

async function connectLocal() {
    const client = new Client({
        user: 'matthewman',
        host: 'localhost',
        database: 'musicbase',
        password: '',
        port: '5432',
    });
    await client.connect().then(console.log("Connected"));
    const res = await client.query("SELECT * FROM artists")
    console.log(res.rows);
};


const app = express();

app.get("/", () => {
    console.log("The connection works - root"); 
    connectLocal();
});


app.listen(4000, () => console.log("App is running on local host 4000"));

