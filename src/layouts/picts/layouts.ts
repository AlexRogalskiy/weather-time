import { Optional } from '../../../typings/standard-types'
import { WeatherPattern } from '../../../typings/enum-types'
import { WeatherTemplateLayoutOptions } from '../../../typings/domain-types'

import defaultLayout from './default.layout'
import cloudyLayout from './cloudy.layout'
import rainyLayout from './rainy.layout'
import snowyLayout from './snowy.layout'
import sunnyLayout from './sunny.layout'
import sunnyCloudyLayout from './sunny-cloudy.layout'
import rainyLightningLayout from './rainy-lightning.layout'
import mistLayout from './mist.layout'
import sunnyRainyLayout from './sunny-rainy.layout'

/**
 * WeatherLayoutRecord
 * @desc Type representing weather template layout configuration options
 */
export type WeatherLayoutRecord = Record<WeatherPattern, WeatherTemplateLayoutOptions>

/**
 * Weather pattern mappings
 * @desc Type representing supported weather pattern mappings
 */
const layouts: Readonly<WeatherLayoutRecord> = {
    ...defaultLayout,
    ...cloudyLayout,
    ...rainyLayout,
    ...snowyLayout,
    ...mistLayout,
    ...sunnyLayout,
    ...sunnyRainyLayout,
    ...sunnyCloudyLayout,
    ...rainyLightningLayout,
}

/**
 * Returns {@link WeatherTemplateLayoutOptions} by input {@link WeatherPattern} value
 * @param value initial input {@link WeatherPattern} to fetch by
 */
export const getLayout = (value: Optional<WeatherPattern>): WeatherTemplateLayoutOptions => {
    return value ? layouts[value] : layouts[WeatherPattern.default]
}
