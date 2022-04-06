import axios from 'axios';

const tpAPIRequest = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

/**
 * 
 * @returns Object containing guild count
 */
async function getGuildCount(){
    try {
        const response = await tpAPIRequest.get('/guilds');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @returns Object containing user count
 */
async function getUserCount(){
    try {
        const response = await tpAPIRequest.get('/users');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};


/**
 * 
 * @returns Object containing channel count
 */
async function getChannelCount(){
    try {
        const response = await tpAPIRequest.get('/channels');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @returns Object containing all bans
 */
async function getBans(){
    try {
        const response = await tpAPIRequest.get('/bans');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @param {string} user User ID to check ban status of
 * @returns Object containing ban status & info
 */
async function getBan(user: string){
    try {
        const response = await tpAPIRequest.get('/bans/user/' + user);
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @param {string} reason Reason for ban
 * @returns Object containing all bans with reason
 */
async function getBansByReason(reason: string){
    try {
        const response = await tpAPIRequest.get('/bans/reason/' + reason);
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @param {string} date Date to check bans for
 * @returns Object containing all bans for date
 */
async function getBansByDate(date: string){
    try {
        const response = await tpAPIRequest.get('/bans/date/' + date);
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @param {string} evidence Evidence to check bans for
 * @returns Object containing all bans with supplied evidence
 */
async function getBansByEvidence(evidence: string){
    try {
        const response = await tpAPIRequest.get('/bans/evidence/' + evidence);
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @param {string} severity Severity of bans to check for
 * @returns Object containing all bans with supplied severity
 */
async function getBansBySeverity(severity: string){
    try {
        const response = await tpAPIRequest.get('/bans/severity/' + severity);
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

/**
 * 
 * @returns Object containing ban count
 */
async function getBanCount(){
    try {
        const response = await tpAPIRequest.get('/bancount');
        return response.data.response;
    } catch (error) {
        console.log(error);
    };
};

export {
    getGuildCount,
    getUserCount,
    getChannelCount,
    getBans,
    getBan,
    getBansByReason,
    getBansByDate,
    getBansByEvidence,
    getBansBySeverity,
    getBanCount
};