const express = require("express"),
    fs = require("fs"),
    path = require("path");

const JSONFile = path.join(process.cwd(), 'information.json');

let RawJSON = fs.readFileSync(JSONFile);
let ParsedJSON = JSON.parse(RawJSON);

const app = express()
const port = 6969

const APIVersion = ParsedJSON.API

    app.get("/", function (req, res) {
        res.send("what r u doing here :(");
    })

app.get("/api/" + APIVersion + "/script", function (req, res) {
    res.send("loadstring(game:HttpGet('https://raw.githubusercontent.com/Yxild/ass-hub/main/script.lua'), 1)()");
})

app.get("/api/" + APIVersion + "/information", function (req, res) {
    var info = req.headers.information

    if (info == "Version") {
        res.send(ParsedJSON.Version);
    } else if (info == "Build") {
        res.send(ParsedJSON.Build);
    }

    res.send("error occured lol, api version: " + ParsedJSON.API);
})

app.listen(port);
console.log("Server started!");
