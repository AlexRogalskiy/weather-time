import { ColorOptions, ImageOptions, ModePattern, ParsedRequest, WeatherData } from '../typings/types'
import gradient from 'gradient-string'
import randomColor from 'randomcolor'

import { delim, mergeProps, randomElement, randomEnum, toFormatString } from './commons'
import { css } from './getCss'
import { profile } from './env'

export async function weatherRenderer(parsedRequest: ParsedRequest): Promise<string> {
    const { mode, width, height, ...rest } = parsedRequest

    const colorOptions: ColorOptions = mergeProps(profile.colorOptions, rest)
    const imageOptions: ImageOptions = mergeProps(profile.imageOptions, { width, height })

    console.log(
        `
        ${gradient(randomColor(), randomColor())(delim)}
        Generating quote with parameters:
        mode=${mode},
        colorOptions=${toFormatString(colorOptions)}
        imageOptions=${toFormatString(imageOptions)}
        ${gradient(randomColor(), randomColor())(delim)}
        `
    )

    const widget: WeatherData = getLayoutData(mode)

    return `
    <svg
        width="${imageOptions.width}"
        height="${imageOptions.height}"
        xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="${imageOptions.width}" height="${imageOptions.height}">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div class="quote-wrapper">
                <div class="quote-wrapper-desc">
                  <div class="line"></div>
                  <p class="font-monserratRegular">${widget.quote}</p>
                  <div class="line"></div>
                  <h3 class="font-monserrat700">${widget.author}</h3>
                </div>
              </div>
            </div>
        </foreignObject>
        <style>${css(colorOptions)}</style>
      </svg>
  `
}

const getLayoutData = (mode: string | undefined): WeatherData => {
    const layouts = []
    const data: WeatherData[] = mode ? layouts[mode] : layouts[randomEnum(ModePattern)]
    return randomElement(data)
}
