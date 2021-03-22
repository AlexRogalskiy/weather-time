import { Profile } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { FORMAT_OPTIONS, IMAGE_OPTIONS } from '../constants/constants'

/**
 * ConfigRecord
 * @desc Type representing profile config options
 */
export type ConfigRecord = Record<Profile, ProfileOptions>

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
        imageOptions: IMAGE_OPTIONS,
        formatOptions: FORMAT_OPTIONS,
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
        imageOptions: IMAGE_OPTIONS,
        formatOptions: FORMAT_OPTIONS,
        // layoutOptions: {
        //     theme: ThemeMode.light,
        //     layout: LayoutMode.large,
        //     action: ActionMode.spinning,
        // },
    },
}
