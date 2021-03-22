import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'

/**
 * RouteFunction
 * @desc Route function type representing single unit of work
 */
export type RouteFunction = (req: NowRequest, res: NowResponse) => Promise<VercelResponse>
