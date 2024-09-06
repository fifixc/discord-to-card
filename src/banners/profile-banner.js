// @ts-check
/**
 * @typedef {import('../requests/types').ProfileData} ProfileData
 * @typedef {import('./types').ProfileOptions} ProfileOptions
 */

import { Banner } from '../common/Banner.js'
import { createTextDates } from '../common/createTextDates.js'


/**
 * Retrieves the text elements with profile data
 * 
 * @param {ProfileData} profile - The Discord profile data.
 * @param {Record<string, number>} size - The size banner object.
 * @returns {string} Texts SVG object.
 */
const getTextsElements = (profile, size) => {
    const TEXT_SIZE = 48
    const CIRCLE_SIZE = 105

    const centerX = size.width / 2
    const centerY = size.height / 2
    const textY = centerY - (TEXT_SIZE / 2) + CIRCLE_SIZE
        
    return `
    <g transform="translate(${centerX}, ${textY})">
        <text 
            xmlns="http://www.w3.org/2000/svg" 
            class="name" 
            x="50%" 
            y="50%" 
            dominant-baseline="middle" 
            text-anchor="middle"
        >
            <tspan x="0" y="0">${profile.name}</tspan>
        </text>
        <text 
            xmlns="http://www.w3.org/2000/svg" 
            class="username" 
            x="50%" 
            y="50%" 
            dominant-baseline="middle" 
            text-anchor="middle"
        >
            <tspan x="0" y="50">@${profile.username}</tspan>
        </text>

        ${createTextDates(profile.created_at, profile.last_login)}
    </g>
    <circle xmlns="http://www.w3.org/2000/svg" fill="white" cx="915" cy="530" r="3.5"/>
    `
}

/**
 * Create a banner for a Discord profile.
 * 
 * @param {ProfileData} profile - The Discord profile data.
 * @param {Partial<ProfileOptions>} options - The options object for banner.
 * @returns {Promise<string>} The profile banner SVG object.
 */
export async function createProfileBanner(profile, options) {
    const {
        showBadges
    } = options
    const banner = new Banner()
    const size = { 
        width: banner.width, 
        height: banner.height 
    }

    banner.setCSS(`
        .name {
            font-family: Poppins-Medium, Poppins;
            font-weight: 500;
            font-size: 48px;
            fill: white;
        }
        .username {
            font-family: Poppins-Regular, Poppins;
            font-size: 31px;
            fill: #ccc;
        }
        .text_date {
            font-family: Poppins-Regular, Poppins;
            font-size: 24px;
            fill: #bbb;
        }
        .date {
            font-family: Poppins-Medium, Poppins;
            font-weight: 500;
            font-size: 24px;
            fill: white;
        }
    `)
        
    return banner.render(`
        ${getTextsElements(profile, size)}
    `)
}