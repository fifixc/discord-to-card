// @ts-check
import sharp from 'sharp'

const DEFAULT_OPTIONS = {
    quality: 75,
    alphaQuality: 90,
    lossless: true,
    effort: 6
}

/**
 * Create a **webp** image from a specified SVG file.
 *
 * @param {Buffer} svg - The SVG file buffer.
 * @returns {Promise<Buffer>} The buffer of the generated image.
 * @example
 * const file = fs.readFileSync('./example.svg', 'utf-8')
 * const buffer = Buffer.from(file)
 * await toImage(buffer)
 */
export const toImage = async svg => {
    const data = await sharp(svg)
        .webp(DEFAULT_OPTIONS)
        .toBuffer();
    return data
}