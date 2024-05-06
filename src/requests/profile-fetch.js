// @ts-check
import { headers } from '../common/utils.js'

const DISCORD_API = 'https://discord.com/api/v10'
const MAX_NAME_LENGTH = 17
const DEFAULT_AVATAR_IMAGE = ''

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
        let response = await fetch(`${DISCORD_API}/users/@me`, headers(token))
        if (!response.ok) throw Error(response.statusText);
        
        const { id, global_name, username, avatar, banner, premium_type } = await response.json()

        const profile = {
            name: '',
            username: '',
            avatar_url: '',
            banner_url: null,
            badges: [],
            created_at: new Date(),
            last_login: new Date(),
            premium: false
        }

        profile.name =  global_name.length > MAX_NAME_LENGTH ? global_name.slice(0, 17).concat('...') : global_name
        profile.username = username.length > MAX_NAME_LENGTH ? username.slice(0, 17).concat('...') : username
        profile.avatar_url = avatar ? `https://cdn.discordapp.com/avatars/${id}/${avatar}` : DEFAULT_AVATAR_IMAGE
        // @ts-ignore
        profile.banner_url = banner ? `https://cdn.discordapp.com/banners/${id}/${banner}` : null
        profile.premium = premium_type > 0 ? true : false

        return profile
    } catch (error) {
        throw Error(`Request error message: ${error}`)
    }
}