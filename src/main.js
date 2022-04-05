const axios = require('axios');

const tpAPIRequest = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

async function getGuildCount() {
    try {
        const response = await tpAPIRequest.get('/guilds');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

async function getUserCount() {
    try {
        const response = await tpAPIRequest.get('/users');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

async function getChannelCount() {
    try {
        const response = await tpAPIRequest.get('/channels');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

async function getBans() {
    try {
        const response = await tpAPIRequest.get('/bans');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

async function getBanCount() {
    try {
        const response = await tpAPIRequest.get('/bancount');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    getGuildCount,
    getUserCount,
    getChannelCount,
    getBans,
    getBanCount
};