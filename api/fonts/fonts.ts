import { readFileSync } from 'fs'

import { Optional } from '../../typings/standard-types'
import { FontOptions } from '../../typings/types'
import { FontPattern } from '../../typings/enum-types'

export type FontRecord = Record<FontPattern, FontOptions>

const fonts: Readonly<FontRecord> = {
    'default': {
        fontFamily: 'Montserrat',
        fontData: readFileSync(`${__dirname}/../fonts/montserrat-v15-latin-700.woff2`).toString('base64'),
    },
    'monserrat-700': {
        fontFamily: 'Montserrat',
        fontData: readFileSync(`${__dirname}/../fonts/montserrat-v15-latin-700.woff2`).toString('base64'),
    },
    'monserrat-regular': {
        fontFamily: 'Montserrat',
        fontData: readFileSync(`${__dirname}/../fonts/montserrat-v15-latin-regular.woff2`).toString('base64'),
    },
}

export const getFont = (value: Optional<FontPattern>): FontOptions => {
    return value ? fonts[value] : fonts[FontPattern.default]
}