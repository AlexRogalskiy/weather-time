import { Optional } from '../../typings/standard-types'
import { WeatherPattern } from '../../typings/enum-types'
import { StyleOptions, WeatherLayoutOptions } from '../../typings/domain-types'

/**
 * WeatherRecord
 * @desc Type representing weather configuration options
 */
export type WeatherLayoutRecord = Record<WeatherPattern, WeatherLayoutOptions>

/**
 * Weather mappings
 * @desc Type representing supported weather mappings
 */
const weathers: Readonly<WeatherLayoutRecord> = {
    default: {
        style: (options: StyleOptions) => {
            return `
                    ${options}
                `
        },
        template: () => {
            return `
                    <div class="container">
                      <div class="canvas">
                        <div class="clouds">
                          <div class="cloud"></div>
                          <div class="cloud"></div>
                          <div class="cloud"></div>
                        </div>
                      </div>
                    </div>
                `
        },
    },
    cloudy: {
        style: (options: StyleOptions) => {
            return `
                    ${options}
                `
        },
        template: () => {
            return `
                    <div class="container">
                      <div class="canvas">
                        <div class="clouds">
                          <div class="cloud"></div>
                          <div class="cloud"></div>
                          <div class="cloud"></div>
                        </div>
                      </div>
                    </div>
                `
        },
    },
}

/**
 * Returns {@link WeatherLayoutOptions} by input {@link WeatherPattern} value
 * @param value initial input {@link WeatherPattern} to fetch by
 */
export const getWeatherLayout = (value: Optional<WeatherPattern>): WeatherLayoutOptions => {
    return value ? weathers[value] : weathers[WeatherPattern.default]
}
