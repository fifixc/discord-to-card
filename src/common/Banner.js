// @ts-check

/** @typedef {import('../banners/types').BannerOptions} BannerOptions */

export class Banner {
    /**
     * Instance a Banner class.
     * 
     * @param {BannerOptions} options - Banner options.
     */
    constructor({ 
        width = 1830,
        height = 700,
        backgroundColor = 'black',
        borderColor = '#232323',
        borderRadius = 15
    } = {}) {
        this.width = width
        this.height = height
        this.backgroundColor = backgroundColor
        this.borderColor = borderColor
        this.borderRadius = borderRadius
        this.borderSize = 1
        this.css = ''
    }

    setCSS(styles) {
        this.css = styles
    }

    render(body) {
        return `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 ${this.width} ${this.height}"
                width="${this.width}"
                height="${this.height}"
            >
                <defs>
                    <style>
                        
                        ${this.css}
                    </style>
                </defs>
                <rect 
                    xmlns="http://www.w3.org/2000/svg"
                    x=".5" 
                    y=".5" 
                    width="${--this.width}" 
                    height="${--this.height}" 
                    rx="${this.borderRadius - 0.5}" 
                    ry="${this.borderRadius - 0.5}" 
                    fill="${this.backgroundColor}"
                    stroke="${this.borderColor}"
                    stroke-width="${this.borderSize}"
                />

                ${body}
            </svg>
        `
    }
}