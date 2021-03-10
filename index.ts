// import express from "express";
const express = require("express")
const app = express();

app.get("/", () => console.log("The connection works - root"))

app.listen(4000, () => console.log("App is running on local host 4000"));

