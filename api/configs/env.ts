import { ProfileOptions } from '../../typings/domain-types'
import { CONFIG } from './config'

const getProfile = (): ProfileOptions => {
    return process.env.AWS_LAMBDA_FUNCTION_VERSION ? CONFIG.prod : CONFIG.dev
}

export const profile = getProfile()
