import { Optional } from '../../typings/standard-types'
import { SpritePattern } from '../../typings/enum-types'
import { SpriteOperator, SpritePatternOperator } from '../../typings/domain-types'

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
import unknown from '../../images/sprites/default.svg'

/**
 * Sprite pattern mappings
 * @desc Type representing supported sprite pattern mappings
 */
const spritePatterns: Readonly<SpritePatternOperator> = {
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
    [SpritePattern.default]: unknown,
}

/**
 * Returns {@link SpriteOperator} by input {@link SpritePattern} value
 * @param value initial input {@link SpritePattern} to fetch by
 */
export const getSpritePattern = (value: Optional<SpritePattern>): SpriteOperator => {
    return value ? spritePatterns[value] : spritePatterns[SpritePattern.default]
}
