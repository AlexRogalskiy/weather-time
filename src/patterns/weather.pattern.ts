import { Optional } from '../../typings/standard-types'
import { SpritePattern, TimeOfDay, WeatherPattern } from '../../typings/enum-types'
import { WeatherOperator, WeatherPatternOperator } from '../../typings/domain-types'

/**
 * Weather pattern mappings
 * @desc Type representing supported weather pattern mappings
 */
const weatherPatterns: Readonly<WeatherPatternOperator> = {
    [WeatherPattern.clear]: timeOfDay =>
        timeOfDay === TimeOfDay.day ? SpritePattern.sun : SpritePattern.moon,
    [WeatherPattern.hail]: () => SpritePattern.hail,
    [WeatherPattern.tornado]: timeOfDay =>
        timeOfDay === TimeOfDay.day ? SpritePattern.storm_sun : SpritePattern.storm_moon,
    [WeatherPattern.haze]: () => SpritePattern.haze,
    [WeatherPattern.misty]: timeOfDay =>
        timeOfDay === TimeOfDay.day ? SpritePattern.fog : SpritePattern.haze,
    [WeatherPattern.sleet]: () => SpritePattern.sleet,
    [WeatherPattern.sunny]: () => SpritePattern.sun,
    [WeatherPattern.thunderstorm]: timeOfDay =>
        timeOfDay === TimeOfDay.day ? SpritePattern.storm_sun : SpritePattern.storm_moon,

    [WeatherPattern.cloudy]: () => SpritePattern.cloudy,
    [WeatherPattern.partly_cloudy]: timeOfDay =>
        timeOfDay === TimeOfDay.day ? SpritePattern.cloud_sun : SpritePattern.cloud_moon,
    [WeatherPattern.mostly_cloudy]: () => SpritePattern.cloud,

    [WeatherPattern.snowy]: () => SpritePattern.snow,
    [WeatherPattern.light_snowy]: () => SpritePattern.snowflake,
    [WeatherPattern.heavy_snowy]: () => SpritePattern.snow,
    [WeatherPattern.partly_snowy]: () => SpritePattern.snowflake,
    [WeatherPattern.mostly_snowy]: () => SpritePattern.snowflake,

    [WeatherPattern.rainy]: timeOfDay =>
        timeOfDay === TimeOfDay.day ? SpritePattern.shower_sun : SpritePattern.shower_moon,
    [WeatherPattern.light_rainy]: () => SpritePattern.light_rain,
    [WeatherPattern.heavy_rainy]: () => SpritePattern.rain,
    [WeatherPattern.partly_rainy]: () => SpritePattern.light_rain,
    [WeatherPattern.mostly_rainy]: () => SpritePattern.light_rain,

    [WeatherPattern.default]: () => SpritePattern.default,
}

/**
 * Returns {@link WeatherOperator} by input {@link WeatherPattern} value
 * @param value initial input {@link WeatherPattern} to fetch by
 */
export const getWeather = (value: Optional<WeatherPattern>): WeatherOperator => {
    return value ? weatherPatterns[value] : weatherPatterns[WeatherPattern.default]
}
