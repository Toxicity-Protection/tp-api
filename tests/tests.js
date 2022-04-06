const tpAPI = require('../src/main');

console.log("Starting TP API tests...");

tpAPI.getGuildCount().then((res) => {
    console.log("Guild Count: " + res.response);
});

tpAPI.getUserCount().then((res) => {
    console.log("User Count: " + res.response);
});

tpAPI.getChannelCount().then((res) => {
    console.log("Channel Count: " + res.response);
});

tpAPI.getBans().then((res) => {
    console.log("Bans: " + JSON.stringify(res.response));
});

tpAPI.getBan("955879228044374070").then((res) => {
    console.log("Ban: " + JSON.stringify(res.response));
});

tpAPI.getBansByReason("Spam").then((res) => {
    console.log("Bans by reason: " + JSON.stringify(res.response));
});

tpAPI.getBansByDate("2020-01-01").then((res) => {
    console.log("Bans by date: " + JSON.stringify(res.response));
});

tpAPI.getBansByEvidence("https://i.imgur.com/XqQZQ.jpg").then((res) => {
    console.log("Bans by evidence: " + JSON.stringify(res.response));
});

tpAPI.getBansBySeverity("high").then((res) => {
    console.log("Bans by severity: " + JSON.stringify(res.response));
});

tpAPI.getBanCount().then((res) => {
    console.log("Ban Count: " + res.response);
});