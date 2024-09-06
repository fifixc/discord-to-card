/**
 * Get the default avatar from a Discord user.
 * @param {string} userId - The Discord user ID.
 * @returns string
 */
export const getDefaultAvatar = userId => 
    `https://cdn.discordapp.com/embed/avatars/${Math.floor((userId >> 22) % 6)}.png`

/**
 * Send a fetch request using GET method.
 * @param {string} path - The URL path.
 * @param {string} token - The Discord token authorization.
 */
export async function get(path, token) {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    }
    return fetch(path, options).then(res => res.json())
}