/**
 *
 * @returns Object containing guild count
 */
declare function getGuildCount(): Promise<any>;
/**
 *
 * @returns Object containing user count
 */
declare function getUserCount(): Promise<any>;
/**
 *
 * @returns Object containing channel count
 */
declare function getChannelCount(): Promise<any>;
/**
 *
 * @returns Object containing all bans
 */
declare function getBans(): Promise<any>;
/**
 *
 * @param {string} user User ID to check ban status of
 * @returns Object containing ban status & info
 */
declare function getBan(user: string): Promise<any>;
/**
 *
 * @param {string} reason Reason for ban
 * @returns Object containing all bans with reason
 */
declare function getBansByReason(reason: string): Promise<any>;
/**
 *
 * @param {string} date Date to check bans for
 * @returns Object containing all bans for date
 */
declare function getBansByDate(date: string): Promise<any>;
/**
 *
 * @param {string} evidence Evidence to check bans for
 * @returns Object containing all bans with supplied evidence
 */
declare function getBansByEvidence(evidence: string): Promise<any>;
/**
 *
 * @param {string} severity Severity of bans to check for
 * @returns Object containing all bans with supplied severity
 */
declare function getBansBySeverity(severity: string): Promise<any>;
/**
 *
 * @returns Object containing ban count
 */
declare function getBanCount(): Promise<any>;
export { getGuildCount, getUserCount, getChannelCount, getBans, getBan, getBansByReason, getBansByDate, getBansByEvidence, getBansBySeverity, getBanCount };
