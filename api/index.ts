import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'

import { weatherRenderer } from '../utils/quote'
import { toString } from '../utils/commons'
import { ModePattern, LayoutPattern } from '../typings/types'

export default async function render(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const { mode, layout, width, height, backgroundColor, fontColor, opacity, colorPattern } = req.query

        const weather = await weatherRenderer({
            mode: ModePattern[toString(mode)] as ModePattern,
            layout: LayoutPattern[toString(layout)],
            width: toString(width),
            height: toString(height),
            backgroundColor,
            fontColor,
            opacity,
            colorPattern,
        })

        res.setHeader('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
        res.setHeader('Pragma', 'no-cache')
        res.setHeader('Expires', '-1')
        res.setHeader('Content-type', 'image/svg+xml')
        res.setHeader('X-Powered-By', 'Vercel')

        return res.send(weather)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message,
        })
    }
}
