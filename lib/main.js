"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBanCount = exports.getBansBySeverity = exports.getBansByEvidence = exports.getBansByDate = exports.getBansByReason = exports.getBan = exports.getBans = exports.getChannelCount = exports.getUserCount = exports.getGuildCount = void 0;
var axios_1 = require("axios");
var tpAPIRequest = axios_1.default.create({
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
function getGuildCount() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tpAPIRequest.get('/guilds')];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
exports.getGuildCount = getGuildCount;
;
/**
 *
 * @returns Object containing user count
 */
function getUserCount() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tpAPIRequest.get('/users')];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
exports.getUserCount = getUserCount;
;
/**
 *
 * @returns Object containing channel count
 */
function getChannelCount() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tpAPIRequest.get('/channels')];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
exports.getChannelCount = getChannelCount;
;
/**
 *
 * @returns Object containing all bans
 */
function getBans() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tpAPIRequest.get('/bans')];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
exports.getBans = getBans;
;
/**
 *
 * @param {string} user User ID to check ban status of
 * @returns Object containing ban status & info
 */
function getBan(user) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tpAPIRequest.get('/bans/user/' + user)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
exports.getBan = getBan;
;
/**
 *
 * @param {string} reason Reason for ban
 * @returns Object containing all bans with reason
 */
function getBansByReason(reason) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tpAPIRequest.get('/bans/reason/' + reason)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
                case 2:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
exports.getBansByReason = getBansByReason;
;
/**
 *
 * @param {string} date Date to check bans for
 * @returns Object containing all bans for date
 */
function getBansByDate(date) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tpAPIRequest.get('/bans/date/' + date)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
                case 2:
                    error_7 = _a.sent();
                    console.log(error_7);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
exports.getBansByDate = getBansByDate;
;
/**
 *
 * @param {string} evidence Evidence to check bans for
 * @returns Object containing all bans with supplied evidence
 */
function getBansByEvidence(evidence) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tpAPIRequest.get('/bans/evidence/' + evidence)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
                case 2:
                    error_8 = _a.sent();
                    console.log(error_8);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
exports.getBansByEvidence = getBansByEvidence;
;
/**
 *
 * @param {string} severity Severity of bans to check for
 * @returns Object containing all bans with supplied severity
 */
function getBansBySeverity(severity) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tpAPIRequest.get('/bans/severity/' + severity)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
                case 2:
                    error_9 = _a.sent();
                    console.log(error_9);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
exports.getBansBySeverity = getBansBySeverity;
;
/**
 *
 * @returns Object containing ban count
 */
function getBanCount() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tpAPIRequest.get('/bancount')];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
                case 2:
                    error_10 = _a.sent();
                    console.log(error_10);
                    return [3 /*break*/, 3];
                case 3:
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
exports.getBanCount = getBanCount;
;
