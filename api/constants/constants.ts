import { DateFormatOptions, ImageOptions } from '../../typings/domain-types'

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
