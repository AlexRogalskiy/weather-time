import { Optional } from '../../typings/standard-types'
import { ProfileOptions } from '../../typings/domain-types'

import { hasProperty } from './commons'

import { CONFIG } from '../configs/config'

export const getProfileByEnv = (env: Optional<string> = process.env.NODE_ENV): ProfileOptions => {
    return env && hasProperty(CONFIG, env) ? CONFIG[env] : CONFIG.dev
}

const getProfile = (): ProfileOptions => {
    return process.env.AWS_LAMBDA_FUNCTION_VERSION ? CONFIG.prod : getProfileByEnv()
}

export const profile = getProfile()
