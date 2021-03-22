import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'

import { RoutePattern } from '../typings/enum-types'

import { toString } from './utils/commons'
import { getRoute } from './routes/routes'

export default async function render(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const routePattern = RoutePattern[toString(req.query.operation)]

        console.log(`Processing rendering operation by route: ${routePattern}`)

        const route = getRoute(routePattern)

        return route(req, res)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message,
        })
    }
}
