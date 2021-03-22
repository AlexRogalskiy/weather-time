import { RouteFunction } from '../../typings/service-types'
import { RoutePattern } from '../../typings/enum-types'
import { Optional } from '../../typings/standard-types'

import * as weatherController from '../controllers/weatherController'

/**
 * RouteRecord
 * @desc Type representing route config options
 */
export type RouteRecord = Record<RoutePattern, RouteFunction>

/**
 * Route mappings
 * @desc Type representing supported route mappings
 */
const routes: Readonly<RouteRecord> = {
    default: weatherController.weatherController,
}

/**
 * Returns {@link RouteFunction} by input {@link RoutePattern} value
 * @param value initial input {@link RoutePattern} to fetch by
 */
export const getRoute = (value: Optional<RoutePattern>): RouteFunction => {
    return value ? routes[value] : routes[RoutePattern.default]
}