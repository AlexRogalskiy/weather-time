import { getWeatherPattern } from '../patterns/patterns'

const WeatherSpriteService = {
    getSprite: (forecast, timeOfDay) => {
        return getWeatherPattern(forecast)(timeOfDay)
    },
}

export default WeatherSpriteService
