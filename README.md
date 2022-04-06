# Toxicity Protection API 
The API Wrapper for interacting with the Toxicity Protection API.

## Installation
```bash
npm install toxicity-protection-api
```
After installing the package, you can use the API wrapper by importing it:
```js
const tpAPI = require('toxicity-protection-api');
```

## Basic Usage
```js
const tpAPI = require('toxicity-protection-api');

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
```

## Warning
This is a beta version of the API wrapper. It is not recommended to use this API wrapper in production yet. Please use with caution. 
(NOT USABLE AT ALL YET. API IS NOT READY FOR PUBLIC USE)