import _ from 'lodash'
import { Optional } from '../../typings/standard-types'

export const delimiterBy = (value = '>', num = 80): string => value.repeat(num)

export const delim = delimiterBy()

export const random = (max: number): number => Math.floor(Math.random() * max)

export const randomElement = <T>(arr: T[]): T => arr[random(arr.length)]

export const randomEnum = <T>(value: T): T[keyof T] => {
    const enumValues = (Object.values(value) as unknown) as T[keyof T][]
    const randomIndex = random(enumValues.length)
    return enumValues[randomIndex]
}

export const toStringArray = (value: string | string[], delim = ','): string[] => {
    return _.isArray(value) ? value : value.split(delim)
}

export const join = (value?: string | string[], delim = ','): string => {
    return value ? (_.isArray(value) ? value.join(delim) : value) : ''
}

export const toString = (value: string | string[]): string => (_.isArray(value) ? value[0] : value)

export const getFunctionArgs = (func: any): string[] => {
    const args = func.toString().match(/(function\s)?.*?\(([^)]*)\)/)[2]

    return args
        .split(',')
        .map(arg => arg.replace(/\/\*.*\*\//, '').trim())
        .filter(arg => arg)
}

export const toFormatString = (obj): string => {
    return `(${objToString(obj)})`
}

const objToString = (obj: any, defaultValue = 'null'): string => {
    let res = ''
    let i = 0

    if (!obj) return defaultValue

    const entries = Object.entries(obj)
    for (const [key, value] of entries) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res += `${key} => ${typeof value === 'object' ? `[${objToString(value)}]` : `${value}, `}`
        }
        if (++i === entries.length) {
            res = res.slice(0, Math.max(0, res.length - 2))
        }
    }

    return res
}

export const capitalize = (input: string): string => {
    const inputArray = input.split(' ')
    const output: string[] = []

    for (const inputArrayItem of inputArray) {
        output.push(inputArrayItem.charAt(0).toUpperCase() + inputArrayItem.slice(1))
    }

    return output.join(' ')
}

export const iterateAsync = async <T>(
    obj,
    func: (item: T, index?: number) => Promise<void>
): Promise<void> => {
    await Promise.all(obj.map(async (item: T, index?: number) => await func(item, index)))
}

export const mergeProps = <T>(...obj: any[]): T =>
    _.mergeWith({}, ...obj, (o, s) => {
        return _.isArray(s) && _.isArray(o) ? _.union(o, s) : _.isNull(s) ? o : s
    })

export const hasPrototypeProperty = (obj: any, name: PropertyKey): boolean => {
    return !Object.prototype.hasOwnProperty.call(obj, name) && name in obj
}

export const hasProperty = (obj: any, prop: PropertyKey): boolean => {
    const proto = obj.__proto__ || obj.constructor.prototype

    //return (prop in obj) && (!(prop in proto) || proto[prop] !== obj[prop]);
    return prop in obj || prop in proto || proto[prop] === obj[prop]
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

/**
 * Returns formatted side direction by input angle in degrees
 * @param {number} angle initial input angle in degrees to calculate by
 * @param {string} directions initial input directions to format
 * @returns {string} formatted side direction
 */
export const getDirection = (angle: number, directions: string[]): string => {
    return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % directions.length]
}

/**
 * Returns formatted date by input date/time pattern
 * @param {number} value initial input date to format
 * @param {string} locale initial input locale to format by
 * @param {Intl.DateTimeFormatOptions} options initial input datetime format options
 * @returns {string} short formatted date
 */
export const getFormatDate = (
    value: number,
    locale?: string,
    options?: Intl.DateTimeFormatOptions
): string => {
    return new Date(value * 1000).toLocaleDateString(locale, options)
}

export const toFahrenheit = (value: number): number => {
    return (value * 9) / 5 + 32
}

export const toCelsius = (value: number): number => {
    return ((value - 32) * 5) / 9
}

export const direction = (deg: number, directions: string[]): Optional<string> => {
    const range = 360 / directions.length
    let low = 360 - range / 2
    let high = (low + range) % 360

    for (const direction of directions) {
        if (deg >= low && deg < high) {
            return direction
        }
        low = (low + range) % 360
        high = (high + range) % 360
    }

    return null
}
