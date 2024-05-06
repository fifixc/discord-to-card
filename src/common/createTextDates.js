
/**
 * Create text dates
 * 
 * @param {Date} createdAt - Discord created at date.
 * @param {Date} lastLogin - Discord last login date.
 * @returns {string} Text dates SVG string
 */
export const createTextDates = (createdAt, lastLogin) => {
    return `
    <g xmlns="http://www.w3.org/2000/svg" transform="translate(-60, 0)">
        <text xmlns="http://www.w3.org/2000/svg" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" transform="translate(-160, 0)">
            <tspan xmlns="http://www.w3.org/2000/svg" x="0" y="100" class="text_date">Created at</tspan>
            <tspan xmlns="http://www.w3.org/2000/svg" x="135" y="100" class="date">${createdAt.toLocaleDateString()}</tspan>
        </text>
        <text xmlns="http://www.w3.org/2000/svg" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" transform="translate(160, 0)">
            <tspan xmlns="http://www.w3.org/2000/svg" x="0" y="100" class="text_date">Last login on</tspan>
            <tspan xmlns="http://www.w3.org/2000/svg" x="145" y="100" class="date">${lastLogin.toLocaleDateString()}</tspan>
        </text>
    </g>
    `
}