'use strict'
//@ts-check

import { get, getDefaultAvatar } from '../common/utils.js'

const DISCORD_API = 'https://discord.com/api/v10'
const DISCORD_CDN = 'https://cdn.discordapp.com'
const MAX_NAME_LENGTH = 17

/**
 * @typedef {import('./types').ProfileData} ProfileData
 */

/**
 * Fetch profile for a given Discord token.
 *
 * @param {string} token - The Discord user token.
 * @returns {Promise<ProfileData>} The Discord profile data.
 */
export const fetchProfile = async token => {
    try {
        if (typeof token !== 'string' && !token) throw Error('Token invalid!');
        
        let profile = await getProfileData(token)
        profile.name = profile.name.length > MAX_NAME_LENGTH ? profile.name.slice(0, 17).concat('...') : profile.name
        profile.avatar = profile.avatar ? `${DISCORD_CDN}/avatars/${profile.id}/${profile.avatar}` : getDefaultAvatar(profile.id)
        profile.banner = profile.banner ? `${DISCORD_CDN}/banners/${profile.id}/${profile.banner_url}` : null
        profile.badges = profile.badges.map(icon => `https://cdn.discordapp.com/badge-icons/${icon}.png`)

        return profile
    } catch (error) {
        throw Error(`Request error message: ${error}`)
    }
}

/**
 * @param {string} token - The Discord user token.
 * @returns {Promise<ProfileData>}
 */
async function getProfileData(token) {
    const account = await get(`${DISCORD_API}/users/@me`, token)
    const profile = await get(`${DISCORD_API}/users/${account.id}/profile`, token)
    const logins = await get(`${DISCORD_API}/auth/sessions`, token)
    
    const session = logins.user_sessions.sort(
        ({ approx_last_used_time: a, approx_last_used_time: b }) => a.localeCompare(b)
    ).at(0)

    return {
        id: account.id,
        name: account.global_name,
        username: account.username,
        avatar: account.avatar,
        banner: account.banner,
        bio: profile.user.bio,
        badges: profile.badges.map(badge => badge.icon),
        premium: account.premium_type > 1 ? true : false,
        location: session.client_info.location,
        last_login: new Date(session.approx_last_used_time),
        created_at: new Date(),
    }
}