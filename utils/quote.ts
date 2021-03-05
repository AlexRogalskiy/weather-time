import {
    ColorOptions,
    ImageOptions,
    LayoutMode,
    LayoutOptions,
    ParsedRequest,
    LayoutData,
} from '../typings/types'
import gradient from 'gradient-string'
import randomColor from 'randomcolor'

import { delim, mergeProps, randomElement, randomEnum, toFormatString } from './commons'
import { css } from './getCss'
import { profile } from './env'

export async function weatherRenderer(parsedRequest: ParsedRequest): Promise<string> {
    const { pattern, mode, width, height, ...rest } = parsedRequest

    const layoutOptions: LayoutOptions = mergeProps(profile.layoutOptions, { pattern, mode })
    const imageOptions: ImageOptions = mergeProps(profile.imageOptions, { width, height })
    const colorOptions: ColorOptions = mergeProps(profile.colorOptions, rest)

    console.log(
        `
        ${gradient(randomColor(), randomColor())(delim)}
        Generating quote with parameters:
        mode=${mode},
        layout options=${toFormatString(layoutOptions)}
        image options=${toFormatString(imageOptions)}
        color options=${toFormatString(colorOptions)}
        ${gradient(randomColor(), randomColor())(delim)}
        `
    )

    const layoutData: LayoutData = getLayoutData(mode)

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
                  <p class="font-monserratRegular">${layoutData.data}</p>
                  <div class="line"></div>
                  <h3 class="font-monserrat700">${layoutData.link}</h3>
                </div>
              </div>
            </div>
        </foreignObject>
        <style>${css(colorOptions)}</style>
      </svg>
  `
}

const getLayoutData = (mode: string | undefined): LayoutData => {
    const layouts = []
    const data: LayoutData[] = mode ? layouts[mode] : layouts[randomEnum(LayoutMode)]
    return randomElement(data)
}
