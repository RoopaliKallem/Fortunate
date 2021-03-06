const functions = require("firebase-functions");
const app = require("express")();

const { login, signup } = require("./handlers/users");
const marketSummary = require("./api/yahoo-finance-api")

// Users Routes
app.post("/login", login);
app.post("/signup", signup);

app.post("/market-summary", marketSummary);

exports.api = functions.https.onRequest(app);
