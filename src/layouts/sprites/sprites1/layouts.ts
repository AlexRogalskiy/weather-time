// import { Optional } from '../../../../typings/standard-types'
// import { WeatherPattern } from '../../../../typings/enum-types'
// import { WeatherLayoutRecord, WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
//
// import defaultLayout from './default.layout'
// import cloudyLayout from './cloudy.layout'
// import rainyLayout from './rainy.layout'
// import snowyLayout from './snowy.layout'
// import sunnyLayout from './sunny.layout'
// import partlyCloudyLayout from './partly-cloudy.layout'
// import thunderstormLayout from './thunderstorm.layout'
// import mistyLayout from './misty.layout'
// import partlyRainyLayout from './partly-rainy.layout'
//
// /**
//  * Weather layouts
//  * @desc Type representing supported weather layouts
//  */
// const layouts: Readonly<WeatherLayoutRecord> = {
//     ...defaultLayout,
//     ...cloudyLayout,
//     ...rainyLayout,
//     ...snowyLayout,
//     ...mistyLayout,
//     ...sunnyLayout,
//     ...partlyRainyLayout,
//     ...partlyCloudyLayout,
//     ...thunderstormLayout,
// }
//
// /**
//  * Returns {@link WeatherTemplateLayoutOptions} by input {@link WeatherPattern} value
//  * @param value initial input {@link WeatherPattern} to fetch by
//  */
// export const getLayout = (value: Optional<WeatherPattern>): WeatherTemplateLayoutOptions => {
//     return value ? layouts[value] : layouts[WeatherPattern.default]
// }
export default {}
