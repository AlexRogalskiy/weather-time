import fetch from 'isomorphic-unfetch'
import _ from 'lodash'
import lunr from 'lunr'
import { tmpdir } from 'os'

import { existsSync, mkdirSync } from 'fs'

export const delimiterBy = (value = '>', num = 80): string => value.repeat(num)

export const delim = delimiterBy()

export const tempDir = tmpdir()

export const random = (max: number): number => {
    return Math.floor(Math.random() * max)
}

export const randomElement = <T>(arr: T[]): T => arr[random(arr.length)]

export const ensureDirExists = (dir: string): void => {
    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
    }
}

export const toBase64ImageUrl = async (imgUrl): Promise<string> => {
    const fetchImageUrl = await fetch(imgUrl)
    const responseArrBuffer = await fetchImageUrl.arrayBuffer()

    return `data:${fetchImageUrl.headers.get('Content-Type') || 'image/png'};base64,${Buffer.from(
        responseArrBuffer
    ).toString('base64')}`
}

export const isString = (value): boolean => {
    return null !== value && typeof value === 'string'
}

export const isNonEmptyString = (str: string): boolean => {
    return str !== undefined && str !== null && str.length > 0
}

export const isBlankString = (str: string): boolean => {
    return !str || /^\s*$/.test(str)
}

export const toUrl = (str: string): string => {
    if (isBlankString(str)) throw Error('Source URL should not be blank or empty')
    str = str.startsWith('http') ? str : `http://${str}`
    str = str.endsWith('.json') ? str : `${str}.json`
    return str
}

export const notBlankOrElse = (str: string, defaultValue: string): string => {
    return isBlankString(str) ? defaultValue : str
}

export const toString = (str: string | string[]): string => {
    return Array.isArray(str) ? str[0] : str
}

export const toInt = (str: string, defaultValue?: number): number | undefined => {
    try {
        return parseInt(str) || defaultValue
    } catch (e) {
        return defaultValue
    }
}

export const getSearchResultSet = <T>(
    data: T[],
    index: lunr.Index,
    query: lunr.Index.QueryString
): (T | undefined)[] => {
    const results = getSearchResults(index, query)

    return results.map(result => {
        return data.find(item => result.ref === item['id'])
    })
}

export const getSearchResults = (index: lunr.Index, query: lunr.Index.QueryString): lunr.Index.Result[] => {
    // return index.query(q => {
    //         q.term(index.tokenizer("comment"), {
    //             wildcard: lunr.Query.wildcard.TRAILING,
    //             presence: lunr.Query.presence.REQUIRED
    //         });
    //     });
    return index.search(query)
}

export const randomEnum = <T>(anEnum: T): T[keyof T] => {
    const enumValues = (Object.values(anEnum) as unknown) as T[keyof T][]
    const randomIndex = random(enumValues.length)
    return enumValues[randomIndex]
}

export const toFormatString = (obj): string => {
    return `(${objToString(obj)})`
}

const objToString = (obj): string => {
    let str = ''
    let i = 0

    const entries = Object.entries(obj)
    for (const [key, value] of entries) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            str += `${key} => ${typeof value === 'object' ? `[${objToString(value)}]` : `${value}, `}`
        }
        if (++i === entries.length) {
            str = str.substring(0, str.length - 2)
        }
    }
    return str
}

export const mergeProps = <T>(...obj: unknown[]): T => {
    return _.mergeWith({}, ...obj, (o, s) => (_.isNull(s) ? o : s))
}

/**
 * Utility function to create a K:V from a list of strings
 * @param o initial input array to operate by
 * @param func
 */
export const strToEnum = <T extends string, V>(o: T[], func: (v: T) => V): { [K in T]: V } => {
    return o.reduce((res, key) => {
        res[key] = func(key)
        return res
    }, Object.create(null))
}
