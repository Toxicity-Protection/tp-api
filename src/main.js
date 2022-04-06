const axios = require('axios');

const tpAPIRequest = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

/**
 * 
 * @returns {object} (Object containing guild count)
 */
async function getGuildCount() {
    try {
        const response = await tpAPIRequest.get('/guilds');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @returns {object} (Object containing user count)
 */
async function getUserCount() {
    try {
        const response = await tpAPIRequest.get('/users');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};


/**
 * 
 * @returns {object} (Object containing channel count)
 */
async function getChannelCount() {
    try {
        const response = await tpAPIRequest.get('/channels');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @returns {object} (Object containing all bans)
 */
async function getBans() {
    try {
        const response = await tpAPIRequest.get('/bans');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @param {string} user (User ID to check ban status of)
 * @returns {object} (Object containing ban status & info)
 */
async function getBan(user) {
    try {
        const response = await tpAPIRequest.get('/bans/' + user);
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
}

/**
 * 
 * @returns {object} (Object containing ban count)
 */
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
    getBan,
    getBanCount
};