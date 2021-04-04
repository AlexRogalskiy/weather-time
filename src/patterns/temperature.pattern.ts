import { Optional } from '../../typings/standard-types'
import { TemperatureUnit } from '../../typings/enum-types'
import { TemperatureOperator, TemperatureUnitOperator } from '../../typings/domain-types'

import { toCelsius, toFahrenheit } from '../utils/commons'

/**
 * Weather temperature mappings
 * @desc Type representing supported weather pattern mappings
 */
const temperaturePatterns: Readonly<TemperatureUnitOperator> = {
    [TemperatureUnit.fahrenheit]: value => toFahrenheit(value),
    [TemperatureUnit.celsius]: value => toCelsius(value),
}

/**
 * Returns {@link TemperatureOperator} by input {@link TemperatureUnit} value
 * @param value initial input {@link TemperatureUnit} to fetch by
 */
export const getTemperature = (value: Optional<TemperatureUnit>): TemperatureOperator => {
    return value ? temperaturePatterns[value] : temperaturePatterns[TemperatureUnit.celsius]
}
