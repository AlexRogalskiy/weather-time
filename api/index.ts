import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'

import { weatherRenderer } from '../utils/quote'
import { toString } from '../utils/commons'
import { LayoutMode, LayoutPattern } from '../typings/types'

export default async function render(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const { mode, layout, width, height, backgroundColor, fontColor, opacity, colorPattern } = req.query

        const weather = await weatherRenderer({
            mode: LayoutMode[toString(mode)] as LayoutMode,
            pattern: LayoutPattern[toString(layout)],
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
