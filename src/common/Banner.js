// @ts-check
export class Banner {
    /**
     * Instance a Banner class.
     * 
     * @param {Object} options - Banner options.
     * @param {number} [options.width] - Banner width.
     * @param {number} [options.height] - Banner height.
     * @param {string} [options.backgroundColor] - Banner background color.
     */
    constructor({ 
        width = 1830,
        height = 700,
        backgroundColor = 'black'
    } = {}) {
        this.width = width
        this.height = height
        this.backgroundColor = backgroundColor

        this.borderColor = '#232323'
        this.borderRadius = 15
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