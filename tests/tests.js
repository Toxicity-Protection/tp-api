const tpAPI = require('../lib/main');

console.log("Starting TP API tests...");

//Get TP's guild count
tpAPI.getGuildCount().then((res) => {
    console.log("Guild Count: " + res.response);
});

//Get TP's user count
tpAPI.getUserCount().then((res) => {
    console.log("User Count: " + res.response);
});

//Get TP's channel count
tpAPI.getChannelCount().then((res) => {
    console.log("Channel Count: " + res.response);
});

//Get all bans from TP
tpAPI.getBans().then((res) => {
    const bans = JSON.stringify(res.response);
    console.log("Bans: " + bans);
});

//Get a user's ban status
tpAPI.getBan("955879228044374070").then((res) => {
    console.log("Ban: " + JSON.stringify(res.response));
});

//Get bans via reason
tpAPI.getBansByReason("Spam").then((res) => {
    console.log("Bans by reason: " + JSON.stringify(res.response));
});

//Get bans via date
tpAPI.getBansByDate("2020-01-01").then((res) => {
    console.log("Bans by date: " + JSON.stringify(res.response));
});

//Get bans via evidence
tpAPI.getBansByEvidence("https://i.imgur.com/XqQZQ.jpg").then((res) => {
    console.log("Bans by evidence: " + JSON.stringify(res.response));
});

//Get bans via severity
tpAPI.getBansBySeverity("high").then((res) => {
    console.log("Bans by severity: " + JSON.stringify(res.response));
});

//Get ban count 
tpAPI.getBanCount().then((res) => {
    console.log("Ban Count: " + res.response);
});