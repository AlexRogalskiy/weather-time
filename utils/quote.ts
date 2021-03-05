import { ModePattern, ColorOptions, ImageOptions, ParsedRequest, WeatherData } from '../typings/types'
import gradient from 'gradient-string'
import randomColor from 'randomcolor'

import { delim, getSearchResults, mergeProps, randomElement, randomEnum, toFormatString } from './commons'
import { css } from './getCss'
import { idx } from './search'
import { profile } from './env'

import quotes from './quotes'

export async function quoteRenderer(parsedRequest: ParsedRequest): Promise<string> {
    const { category, keywords, width, height, ...rest } = parsedRequest

    const colorOptions: ColorOptions = mergeProps(profile.colorOptions, rest)
    const imageOptions: ImageOptions = mergeProps(profile.imageOptions, { width, height })

    console.log(
        `
        ${gradient(randomColor(), randomColor())(delim)}
        Generating quote with parameters:
        category=${category},
        keywords=${keywords},
        colorOptions=${toFormatString(colorOptions)}
        imageOptions=${toFormatString(imageOptions)}
        ${gradient(randomColor(), randomColor())(delim)}
        `
    )

    const quoteData: WeatherData | null = keywords
        ? getQuoteByKeywords(keywords)
        : getQuoteByCategory(category)

    return quoteData
        ? `
    <svg
        width="${imageOptions.width}"
        height="${imageOptions.height}"
        xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="${imageOptions.width}" height="${imageOptions.height}">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div class="quote-wrapper">
                <div class="quote-wrapper-desc">
                  <div class="line"></div>
                  <p class="font-monserratRegular">${quoteData.quote}</p>
                  <div class="line"></div>
                  <h3 class="font-monserrat700">${quoteData.author}</h3>
                </div>
              </div>
            </div>
        </foreignObject>
        <style>${css(colorOptions)}</style>
      </svg>
  `
        : ''
}

const getQuoteByKeywords = (keywords: string | string[]): WeatherData | null => {
    const query = typeof keywords === 'string' ? keywords.split(',') : keywords
    const results = getSearchResults(idx, query.join(' '))
    const result = randomElement(results)

    if (result) {
        const data = result.ref.split(profile.indexOptions.delim)
        return quotes[data[0]][data[1]]
    }

    return null
}

const getQuoteByCategory = (category: string | undefined): WeatherData => {
    const data: WeatherData[] = category ? quotes[category] : quotes[randomEnum(ModePattern)]
    return randomElement(data)
}
