// import { Optional } from '../../../../typings/standard-types'
// import { WeatherPattern } from '../../../../typings/enum-types'
// import { WeatherLayoutRecord, WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
//
// import cloudyLayout from './cloudy.layout'
// import heavyRainyLayout from './heavy-rainy.layout'
// import rainyLayout from './rainy.layout'
// import thunderstormLayout from './thunderstorm.layout'
// import snowyLayout from './snowy.layout'
// import sunnyLayout from './sunny.layout'
// import sunnyCloudyLayout from './sunny-cloudy.layout'
// import partlyCloudyRainyLayout from './partly-cloudy-rainy.layout'
// import partlyRainyLayout from '../sprites1/partly-rainy.layout'
// import partlySnowyLayout from './partly-snowy.layout'
//
// /**
//  * Weather layouts
//  * @desc Type representing supported weather layouts
//  */
// const layouts: Readonly<WeatherLayoutRecord> = {
//     ...cloudyLayout,
//     ...heavyRainyLayout,
//     ...rainyLayout,
//     ...thunderstormLayout,
//     ...snowyLayout,
//     ...sunnyLayout,
//     ...partlyRainyLayout,
//     ...sunnyCloudyLayout,
//     ...partlyCloudyRainyLayout,
//     ...partlySnowyLayout,
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
