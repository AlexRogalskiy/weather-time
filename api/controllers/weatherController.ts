import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'

import { AnimationPattern, FontPattern, LayoutPattern, ThemePattern } from '../../typings/enum-types'

import * as weatherService from '../services/weatherService'

import { toString } from '../utils/commons'

export const weatherController = async (req: NowRequest, res: NowResponse): Promise<VercelResponse> => {
    try {
        const { theme, layout, font, animation, query, width, height } = req.query

        const svgResponse = await weatherService.weatherRenderer({
            theme: ThemePattern[toString(theme)],
            layout: LayoutPattern[toString(layout)],
            font: FontPattern[toString(font)],
            animation: AnimationPattern[toString(animation)],
            query: toString(query),
            width: toString(width),
            height: toString(height),
        })

        res.setHeader('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
        res.setHeader('Pragma', 'no-cache')
        res.setHeader('Expires', '-1')
        res.setHeader('Content-type', 'image/svg+xml')
        res.setHeader('X-Powered-By', 'Vercel')

        return res.send(svgResponse)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message,
        })
    }
}
