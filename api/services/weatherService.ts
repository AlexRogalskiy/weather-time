import gradient from 'gradient-string'
import randomColor from 'randomcolor'

import { ImageOptions, ParsedRequestData, StyleOptions, WeatherOptions } from '../../typings/domain-types'

import { delim, getDirection, getFormatDate, mergeProps, toFormatString } from '../utils/commons'
import { profile } from '../configs/env'
import { getTheme } from '../themes/themes'
import { getLayout } from '../layouts/layouts'
import { getFont } from '../fonts/fonts'
import { getAnimation } from '../animations/animations'
import { getSvgTemplate } from '../models/template'
import { fetchApiCall, getApiUrl } from '../utils/requests'

import { DIRECTION_OPTIONS } from '../constants/constants'

export async function weatherRenderer(parsedRequest: ParsedRequestData): Promise<string> {
    const { font, theme, animation, layout, query, width, height } = parsedRequest

    const imageFont = getFont(font)
    const imageTheme = getTheme(theme)
    const imageAnimation = getAnimation(animation)

    const style: StyleOptions = { font: imageFont, theme: imageTheme, animation: imageAnimation }
    const weather: WeatherOptions = await getWeatherDataByQuery(query)
    const image: ImageOptions = mergeProps(profile.imageOptions, { width, height })

    const lineDelim = gradient(randomColor(), randomColor())(delim)

    console.log(
        `
        ${lineDelim}
        Generating view with parameters:
        style=${toFormatString(style)},
        image=${toFormatString(image)}
        ${lineDelim}
        `
    )

    return getSvgTemplate({ layout: getLayout(layout), style, weather, image })
}

const getWeatherDataByQuery = async (query: string): Promise<WeatherOptions> => {
    const url = getApiUrl(profile.baseUrl, query, process.env.OPEN_WEATHER_MAP_KEY)
    const response = await fetchApiCall(url)

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
