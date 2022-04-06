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
    const bans = JSON.stringify(res.response);
    console.log("Bans: " + bans);
});

tpAPI.getBanCount().then((res) => {
    console.log("Ban Count: " + res.response);
});