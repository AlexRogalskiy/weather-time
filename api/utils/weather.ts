import gradient from 'gradient-string'
import randomColor from 'randomcolor'

import { ImageOptions, ParsedRequestData, StyleOptions, WeatherOptions } from '../../typings/domain-types'

import { delim, mergeProps, toFormatString } from './commons'
import { profile } from '../configs/env'
import { getTheme } from '../themes/themes'
import { getLayout } from '../layouts/layouts'
import { getFont } from '../fonts/fonts'
import { getAnimation } from '../animations/animations'
import { getSvgTemplate } from '../models/template'

export async function weatherRenderer(parsedRequest: ParsedRequestData): Promise<string> {
    const { width, height } = parsedRequest

    const font = getFont(parsedRequest.font)
    const theme = getTheme(parsedRequest.theme)
    const animation = getAnimation(parsedRequest.animation)

    const layout = getLayout(parsedRequest.layout)

    const style: StyleOptions = { font, theme, animation }
    const weather: WeatherOptions = {
        clouds: 0,
        humidity: 0,
        pressure: 0,
        refreshDate: new Date(),
        sunrise: '',
        sunset: '',
        temperature: 0,
        weather: '',
        weatherIcon: '',
        wind: 0,
        windDirection: '',
    }
    const image: ImageOptions = mergeProps(profile.imageOptions, { width, height })

    console.log(
        `
        ${gradient(randomColor(), randomColor())(delim)}
        Generating view with parameters:
        theme=${toFormatString(theme)},
        font=${toFormatString(font)}
        animation=${toFormatString(animation)},
        layout=${toFormatString(layout)}
        image options=${toFormatString(image)}
        ${gradient(randomColor(), randomColor())(delim)}
        `
    )

    return getSvgTemplate({ layout, style, weather, image })
}
