import { Optional } from '../../typings/standard-types'
import { SpritePattern, TimeOfDay, WeatherForecast } from '../../typings/enum-types'

// @ts-ignore
import sun from '../../images/sprites/sun.svg'
// @ts-ignore
import moon from '../../images/sprites/moon.svg'
// @ts-ignore
import snowflake from '../../images/sprites/snowflake.svg'
// @ts-ignore
import cloudy from '../../images/sprites/cloudy.svg'
// @ts-ignore
import fog from '../../images/sprites/fog.svg'
// @ts-ignore
import hail from '../../images/sprites/hail.svg'
// @ts-ignore
import haze from '../../images/sprites/haze.svg'
// @ts-ignore
import lightRain from '../../images/sprites/light_rain.svg'
// @ts-ignore
import cloud from '../../images/sprites/cloud.svg'
// @ts-ignore
import cloudSun from '../../images/sprites/cloud_sun.svg'
// @ts-ignore
import cloudMoon from '../../images/sprites/cloud_moon.svg'
// @ts-ignore
import rain from '../../images/sprites/rain.svg'
// @ts-ignore
import stormSun from '../../images/sprites/storm_sun.svg'
// @ts-ignore
import stormMoon from '../../images/sprites/storm_moon.svg'
// @ts-ignore
import showerSun from '../../images/sprites/shower_sun.svg'
// @ts-ignore
import showerMoon from '../../images/sprites/shower_moon.svg'
// @ts-ignore
import sleet from '../../images/sprites/sleet.svg'
// @ts-ignore
import snow from '../../images/sprites/snow.svg'
// @ts-ignore
import thunderstorm from '../../images/sprites/thunderstorm.svg'
// @ts-ignore
import unknown from '../../images/sprites/unknown.svg'

/**
 * PatternOperator
 * @desc Type representing pattern operator
 */
type SpritePatternOperator = (width?: string, height?: string, fill?: string, opacity?: string) => string

/**
 * SpritePatternRecord
 * @desc Type representing sprite pattern options
 */
export type SpritePatternRecord = Record<SpritePattern, SpritePatternOperator>

/**
 * Sprite pattern mappings
 * @desc Type representing supported sprite pattern mappings
 */
const spritePatterns: Readonly<SpritePatternRecord> = {
    [SpritePattern.cloud_moon]: cloudMoon,
    [SpritePattern.cloud_sun]: cloudSun,
    [SpritePattern.light_rain]: lightRain,
    [SpritePattern.shower_moon]: showerMoon,
    [SpritePattern.shower_sun]: showerSun,
    [SpritePattern.storm_moon]: stormMoon,
    [SpritePattern.storm_sun]: stormSun,
    [SpritePattern.cloud]: cloud,
    [SpritePattern.cloudy]: cloudy,
    [SpritePattern.fog]: fog,
    [SpritePattern.hail]: hail,
    [SpritePattern.haze]: haze,
    [SpritePattern.moon]: moon,
    [SpritePattern.rain]: rain,
    [SpritePattern.sleet]: sleet,
    [SpritePattern.snow]: snow,
    [SpritePattern.snowflake]: snowflake,
    [SpritePattern.sun]: sun,
    [SpritePattern.thunderstorm]: thunderstorm,
    [SpritePattern.unknown]: unknown,
}

/**
 * Returns {@link SpritePatternOperator} or {@link string} by input {@link SpritePattern} value
 * @param value initial input {@link SpritePattern} to fetch by
 */
export const getSpritePattern = (value: Optional<SpritePattern>): SpritePatternOperator => {
    return value ? spritePatterns[value] : spritePatterns[SpritePattern.unknown]
}

/**
 * WeatherPatternOperator
 * @desc Type representing weather pattern operator
 */
type WeatherPatternOperator = (timeOfDay?: TimeOfDay) => SpritePattern

/**
 * WeatherPatternRecord
 * @desc Type representing weather pattern options
 */
export type WeatherPatternRecord = Record<WeatherForecast, WeatherPatternOperator>

/**
 * Weather pattern mappings
 * @desc Type representing supported weather pattern mappings
 */
const weatherPatterns: Readonly<WeatherPatternRecord> = {
    [WeatherForecast.clear]: timeOfDay =>
        timeOfDay === TimeOfDay.day ? SpritePattern.sun : SpritePattern.moon,
    [WeatherForecast.light_rain]: () => SpritePattern.light_rain,
    [WeatherForecast.mostly_cloudy]: () => SpritePattern.cloud,
    [WeatherForecast.mostly_sunny]: () => SpritePattern.sun,
    [WeatherForecast.partly_cloudy]: timeOfDay =>
        timeOfDay === TimeOfDay.day ? SpritePattern.cloud_sun : SpritePattern.cloud_moon,
    [WeatherForecast.partly_sunny]: () => SpritePattern.cloud_sun,
    [WeatherForecast.scattered_clouds]: () => SpritePattern.cloudy,
    [WeatherForecast.scattered_thunderstorms]: timeOfDay =>
        timeOfDay === TimeOfDay.day ? SpritePattern.storm_sun : SpritePattern.storm_moon,
    [WeatherForecast.blizzard]: () => SpritePattern.snowflake,
    [WeatherForecast.cloudy]: () => SpritePattern.cloudy,
    [WeatherForecast.fog]: () => SpritePattern.fog,
    [WeatherForecast.hail]: () => SpritePattern.hail,
    [WeatherForecast.haze]: () => SpritePattern.haze,
    [WeatherForecast.mist]: () => SpritePattern.haze,
    [WeatherForecast.overcast]: () => SpritePattern.cloudy,
    [WeatherForecast.rain]: () => SpritePattern.rain,
    [WeatherForecast.showers]: timeOfDay =>
        timeOfDay === TimeOfDay.day ? SpritePattern.shower_sun : SpritePattern.shower_moon,
    [WeatherForecast.sleet]: () => SpritePattern.sleet,
    [WeatherForecast.snow]: () => SpritePattern.snow,
    [WeatherForecast.sunny]: () => SpritePattern.sun,
    [WeatherForecast.thunderstorm]: () => SpritePattern.thunderstorm,
    [WeatherForecast.unknown]: () => SpritePattern.unknown,
}

/**
 * Returns {@link WeatherPatternOperator} by input {@link WeatherForecast} value
 * @param value initial input {@link WeatherForecast} to fetch by
 */
export const getWeatherPattern = (value: Optional<WeatherForecast>): WeatherPatternOperator => {
    return value ? weatherPatterns[value] : weatherPatterns[WeatherForecast.unknown]
}
