import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'

import { AnimationPattern, FontPattern, LayoutPattern, ThemePattern } from '../../typings/enum-types'

import { toString } from '../utils/commons'

import * as weatherService from '../services/template.service'

export async function templateController(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const { theme, layout, animation, font, query, width, height, ...rest } = req.query
        const { primaryColor, secondaryColor, bgColor, colorPattern, opacity } = rest

        const queryOptions = { query: toString(query) }
        const imageOptions = { width: toString(width), height: toString(height) }
        const themeOptions = {
            primaryColor: toString(primaryColor),
            secondaryColor: toString(secondaryColor),
            bgColor: toString(bgColor),
            colorPattern: toString(colorPattern),
            opacity: toString(opacity),
        }

        const svgResponse = await weatherService.templateRenderer({
            themePattern: ThemePattern[toString(theme)],
            layoutPattern: LayoutPattern[toString(layout)],
            animationPattern: AnimationPattern[toString(animation)],
            fontPattern: FontPattern[toString(font)],
            queryOptions,
            imageOptions,
            themeOptions,
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
