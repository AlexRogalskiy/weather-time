import { Profile } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { FORMAT_OPTIONS, IMAGE_OPTIONS, OUTPUT_OPTIONS, QUERY_OPTIONS } from '../constants/constants'

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
        queryOptions: QUERY_OPTIONS,
        imageOptions: IMAGE_OPTIONS,
        dateFormatOptions: FORMAT_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        queryOptions: QUERY_OPTIONS,
        imageOptions: IMAGE_OPTIONS,
        dateFormatOptions: FORMAT_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        queryOptions: QUERY_OPTIONS,
        imageOptions: IMAGE_OPTIONS,
        dateFormatOptions: FORMAT_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
}
