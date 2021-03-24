import boxen from 'boxen'

import { ImageOptions, ParsedRequestData, StyleOptions, WeatherOptions } from '../../typings/domain-types'

import * as weatherClient from '../clients/weatherClient'

import { mergeProps } from '../utils/commons'
import { serialize } from '../utils/serializers'
import { getTheme } from '../themes/themes'
import { getLayout } from '../layouts/layouts'
import { getFont } from '../fonts/fonts'
import { getAnimation } from '../animations/animations'
import { getSvgTemplate } from '../models/template'

import { profile } from '../utils/profiles'

export async function weatherRenderer(requestData: ParsedRequestData): Promise<string> {
    const { fontPattern, themePattern, animationPattern, layoutPattern, query, width, height } = requestData

    const layout = getLayout(layoutPattern)

    const font = getFont(fontPattern)
    const theme = getTheme(themePattern)
    const animation = getAnimation(animationPattern)

    const style: StyleOptions = { font, theme, animation }
    const image: ImageOptions = mergeProps(profile.imageOptions, { width, height })

    const weather: WeatherOptions = await weatherClient.getWeatherDataByQuery(query)

    console.log(
        boxen(
            `
        Generating image view with parameters:
        layout=${layout},
        style options=${serialize(style)},
        image options=${serialize(image)},
        weather options=${serialize(weather)}
        `,
            profile.outputOptions
        )
    )

    return await getSvgTemplate({ layout, style, weather, image })
}
