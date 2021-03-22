import gradient from 'gradient-string'
import randomColor from 'randomcolor'

import { ImageOptions, ParsedRequestData, StyleOptions, WeatherOptions } from '../../typings/domain-types'

import * as weatherClient from '../clients/weatherClient'

import { delim, mergeProps, toFormatString } from '../utils/commons'
import { profile } from '../configs/env'
import { getTheme } from '../themes/themes'
import { getLayout } from '../layouts/layouts'
import { getFont } from '../fonts/fonts'
import { getAnimation } from '../animations/animations'
import { getSvgTemplate } from '../models/template'

export async function weatherRenderer(requestData: ParsedRequestData): Promise<string> {
    const { fontPattern, themePattern, animationPattern, layoutPattern, query, width, height } = requestData

    const layout = getLayout(layoutPattern)

    const font = getFont(fontPattern)
    const theme = getTheme(themePattern)
    const animation = getAnimation(animationPattern)

    const style: StyleOptions = { font, theme, animation }
    const image: ImageOptions = mergeProps(profile.imageOptions, { width, height })

    const weather: WeatherOptions = await weatherClient.getWeatherDataByQuery(query)

    const lineDelim = gradient(randomColor(), randomColor())(delim)

    console.log(
        `
        ${lineDelim}
        Generating image view with parameters:
        layout=${layout},
        style options=${toFormatString(style)},
        image options=${toFormatString(image)},
        weather options=${toFormatString(weather)}
        ${lineDelim}
        `
    )

    return await getSvgTemplate({ layout, style, weather, image })
}
