// import express from "express";
// const query = require("./test-query.sql");
const express = require("express");
const { Client } = require("pg");

require("dotenv").config()

async function connectLocal() {
        const client = new Client({
        user: process.env.LOCAL_USER,
        host: process.env.LOCAL_HOST,
        database: process.env.DATABASE,
        password: process.env.LOCAL_PASSWORD,
        port: process.env.LOCAL_PORT,
    });
    await client.connect(err => {
        if (err) {
          console.error('connection error', err.stack)
        } else {
          console.log('connected')
    }});
    const res = await client.query("SELECT * FROM artists");
    return res.rows;
};


const app = express();

app.get("/", async (req, res) => {
    console.log("The connection works - root"); 
    const result = await connectLocal();
    res.json(result);
});


app.listen(4000, () => console.log("App is running on local host 4000"));

