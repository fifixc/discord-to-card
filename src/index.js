// @ts-check
import { createProfileBanner } from './banners/index.js'
import { fetchProfile } from './requests/index.js'
import { toImage } from './common/toImage.js'

export { createProfileBanner } from './banners/index.js'

/**
 * @typedef {import("./banners/types").ProfileOptions} ProfileOptions
 */

/**
 * Get Discord profile banner
 * 
 * @param {string} token - The Discord user token.
 * @param {Partial<ProfileOptions>} options - The options object for profile banner.
 * @returns {Promise<Buffer>} Banner image **WEBP** buffer.
 */
export async function getProfile(token, options = {}) {
        const data = await fetchProfile(token)
        const banner = await createProfileBanner(data, options)
        const image = await toImage(Buffer.from(banner))
        return image
}


// example usage
/*
getProfile(process.env.DISCORD_TOKEN, {
    showBadges: false
})
*/