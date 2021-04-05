import {
    AnimationOptions,
    FontOptions,
    ImageOptions,
    ParsedRequestData,
    QueryOptions,
    TemplateLayoutOptions,
    TemplateOptions,
    ThemeOptions,
} from '../../typings/domain-types'

import { mergeProps } from '../utils/commons'
import { serialize } from '../utils/serializers'
import { profile } from '../utils/profiles'
import { boxenLogs } from '../utils/loggers'

import { getTheme } from '../themes/themes'
import { getLayout } from '../layouts/layouts'
import { getFont } from '../fonts/fonts'
import { getAnimation } from '../animations/animations'
import { getSvgTemplate } from '../models/template'

import * as weatherClient from '../clients/weather.client'

export async function templateRenderer(requestData: ParsedRequestData): Promise<string> {
    const {
        themePattern,
        animationPattern,
        layoutPattern,
        fontPattern,
        queryOptions,
        imageOptions,
        themeOptions,
    } = requestData

    const query = mergeProps<QueryOptions>(profile.queryOptions, queryOptions)
    const layout = mergeProps<TemplateLayoutOptions>(profile.layoutOptions, getLayout(layoutPattern))
    const font = mergeProps<FontOptions>(profile.styleOptions?.font, getFont(fontPattern))
    const theme = mergeProps<ThemeOptions>(profile.styleOptions?.theme, getTheme(themePattern), themeOptions)
    const animation = mergeProps<AnimationOptions>(
        profile.styleOptions?.animation,
        getAnimation(animationPattern)
    )
    const style = { font, theme, animation }
    const image = mergeProps<ImageOptions>(profile.imageOptions, imageOptions)

    const template: TemplateOptions = await weatherClient.getWeatherDataByQuery(query)

    boxenLogs(
        `
        Generating image view with parameters:
        layout=${layout},
        style options=${serialize(style)},
        image options=${serialize(image)},
        template options=${serialize(template)}
        `
    )

    return await getSvgTemplate({ layout, style, template, image })
}
