import { ConfigProfile } from '../../typings/enum-types'
import { FormatOptions, ProfileOptions } from '../../typings/types'

export type ConfigRecord = Record<ConfigProfile, ProfileOptions>

/**
 * Format configuration options
 */
export const FORMAT_CONFIG: Readonly<FormatOptions> = {
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
    directions: ['north', 'north-west', 'west', 'south-west', 'south', 'south-east', 'east', 'north-east'],
}

/**
 * Configuration options
 */
export const CONFIG: Readonly<ConfigRecord> = {
    dev: {
        baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
        // colorOptions: {
        //     colorPattern: '#FFE0E9',
        //     fontColor: '#0A83DC',
        //     backgroundColor: '#FFFFFF',
        //     opacity: '0.3',
        // },
        imageOptions: {
            width: '100%',
            height: '100%',
        },
        // layoutOptions: {
        //     theme: ThemeMode.light,
        //     layout: LayoutMode.large,
        //     action: ActionMode.spinning,
        // },
    },
    prod: {
        baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
        // colorOptions: {
        //     colorPattern: '#FFE0E9',
        //     fontColor: '#0A83DC',
        //     backgroundColor: '#FFFFFF',
        //     opacity: '0.3',
        // },
        imageOptions: {
            width: '100%',
            height: '100%',
        },
        // layoutOptions: {
        //     theme: ThemeMode.light,
        //     layout: LayoutMode.large,
        //     action: ActionMode.spinning,
        // },
    },
}
