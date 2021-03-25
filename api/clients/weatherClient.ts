import { TemplateOptions } from '../../typings/domain-types'

import { fetchAsJson, getApiUrl } from '../utils/requests'
import { profile } from '../utils/profiles'
import { getDirection, getFormatDate } from '../utils/commons'
import { DIRECTION_OPTIONS } from '../constants/constants'

export async function getWeatherDataByQuery(query: string): Promise<TemplateOptions> {
    const url = getApiUrl(profile.baseUrl, query, process.env.OPEN_WEATHER_MAP_KEY)
    const response = await fetchAsJson(url)

    const { locale, shortDateFormat, longDateFormat } = profile.dateFormatOptions

    return {
        refreshDate: getFormatDate(Date.now(), locale, longDateFormat),
        temperature: Math.round(response.main.temp),
        pressure: Math.round(response.main.pressure),
        humidity: Math.round(response.main.humidity),
        clouds: Math.round(response.clouds.all),
        wind: Math.round(response.wind.speed),
        windDirection: getDirection(response.wind.deg, DIRECTION_OPTIONS),
        weather: response.weather[0].description,
        weatherIcon: response.weather[0].icon,
        sunrise: getFormatDate(response.sys.sunrise, locale, shortDateFormat),
        sunset: getFormatDate(response.sys.sunset, locale, shortDateFormat),
    }
}
