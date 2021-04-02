import { Optional } from '../../../typings/standard-types'
import { IconPattern } from '../../../typings/enum-types'
import { WeatherTemplateLayoutOptions } from '../../../typings/domain-types'

import cloudyLayout from './cloudy.layout'
import heavyRainyLayout from './heavy-rainy.layout'
import partlyCloudyLayout from './partly-cloudy.layout'
import rainyLayout from './rainy.layout'
import rainyLightningLayout from './rainy-lightning.layout'
import snowyLayout from './snowy.layout'
import sunnyLayout from './sunny.layout'
import sunnyCloudyLayout from './sunny-cloudy.layout'
import sunnyCloudyRainyLayout from './sunny-cloudy-rainy.layout'
import sunnyPartlyCloudyLayout from './sunny-partly-cloudy.layout'
import sunnyRainyLayout from '../picts/sunny-rainy.layout'
import sunnyCloudySnowyLayout from './sunny-cloudy-snowy.layout'

/**
 * IconLayoutRecord
 * @desc Type representing weather template layout configuration options
 */
export type IconLayoutRecord = Record<IconPattern, WeatherTemplateLayoutOptions>

/**
 * Icon pattern mappings
 * @desc Type representing supported icon pattern mappings
 */
const layouts: Readonly<IconLayoutRecord> = {
    ...cloudyLayout,
    ...heavyRainyLayout,
    ...partlyCloudyLayout,
    ...rainyLayout,
    ...rainyLightningLayout,
    ...snowyLayout,
    ...sunnyLayout,
    ...sunnyRainyLayout,
    ...sunnyCloudyLayout,
    ...sunnyCloudyRainyLayout,
    ...sunnyPartlyCloudyLayout,
    ...sunnyCloudySnowyLayout,
}

/**
 * Returns {@link WeatherTemplateLayoutOptions} by input {@link IconPattern} value
 * @param value initial input {@link IconPattern} to fetch by
 */
export const getIcon = (value: Optional<IconPattern>): WeatherTemplateLayoutOptions => {
    return value ? layouts[value] : layouts[IconPattern.default]
}
