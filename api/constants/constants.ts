import boxen from 'boxen'

import { DateFormatOptions, ImageOptions } from '../../typings/domain-types'

/**
 * Output configuration options
 */
export const OUTPUT_OPTIONS: Readonly<boxen.Options> = {
    padding: 1,
    margin: 1,
    borderStyle: 'single',
    borderColor: 'yellow',
}

/**
 * Image configuration options
 */
export const IMAGE_OPTIONS: Readonly<ImageOptions> = {
    width: '100%',
    height: '100%',
}

/**
 * Date format configuration options
 */
export const FORMAT_OPTIONS: Readonly<DateFormatOptions> = {
    locale: 'en-GB',
    shortDateFormat: {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Moscow',
    },
    longDateFormat: {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        timeZone: 'Europe/Moscow',
    },
}

/**
 * Direction configuration options
 */
export const DIRECTION_OPTIONS = [
    'north',
    'north-west',
    'west',
    'south-west',
    'south',
    'south-east',
    'east',
    'north-east',
]
