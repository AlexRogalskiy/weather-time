import { Optional } from '../../typings/standard-types'
import { WeatherPattern } from '../../typings/enum-types'
import { WeatherOptions } from '../../typings/domain-types'

/**
 * WeatherRecord
 * @desc Type representing weather configuration options
 */
export type WeatherRecord = Record<WeatherPattern, WeatherOptions>

/**
 * Weather mappings
 * @desc Type representing supported weather mappings
 */
const weathers: Readonly<WeatherRecord> = {
    default: (fill: string, opacity: string) => fill + opacity,
    jigsaw: (fill: string, opacity: string) => fill + opacity,
}

/**
 * Returns {@link WeatherOptions} by input {@link WeatherPattern} value
 * @param value initial input {@link WeatherPattern} to fetch by
 */
export const getWeather = (value: Optional<WeatherPattern>): WeatherOptions => {
    return value ? weathers[value] : weathers[WeatherPattern.default]
}
