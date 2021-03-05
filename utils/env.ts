import { WidgetOptions } from '../typings/types'
import { CONFIG } from './config'

const quoteOptions = (): WidgetOptions => {
    return process.env.AWS_LAMBDA_FUNCTION_VERSION ? CONFIG.prod : CONFIG.dev
}

export const profile = quoteOptions()
