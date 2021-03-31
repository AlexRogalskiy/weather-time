import { Optional } from '../../typings/standard-types'
import { ProfileOptions } from '../../typings/domain-types'
import { Profile } from '../../typings/enum-types'

import { hasProperty } from './commons'

import { CONFIG } from '../configs/config'

export const getProfile = (): Optional<Profile> => {
    return process.env.NODE_ENV && Profile[process.env.NODE_ENV]
}

export const isDev = Profile.dev === getProfile()

export const getConfigByEnv = (env: Optional<string> = process.env.NODE_ENV): ProfileOptions => {
    return env && hasProperty(CONFIG, env) ? CONFIG[env] : CONFIG[Profile.dev]
}

const getConfig = (): ProfileOptions => {
    return process.env.AWS_LAMBDA_FUNCTION_VERSION ? CONFIG.prod : getConfigByEnv()
}

/**
 * Get environment variable or empty string.
 * Used for easy mocking.
 * @param key variable name
 */
export const getEnv = (key: string): Optional<string> => {
    return process.env[key] ? process.env[key] : ''
}

export const profile = getConfig()
