import * as layout from './layouts'
import { isBlankString, randomEnum, strToEnum } from './commons'
import { LayoutPattern } from '../typings/types'

type LayoutOperator = (fill: string, opacity: string) => string

type PatternMapper = { [K in LayoutPattern]: LayoutOperator }

const patternMapping: PatternMapper = strToEnum(Object.values(LayoutPattern), v => layout[v])

const getPattern = (pattern: string, opacity: string, colorPattern: string): string => {
    const patternFunc: LayoutOperator = isBlankString(pattern)
        ? patternMapping[randomEnum(LayoutPattern)]
        : patternMapping[pattern]

    return patternFunc(colorPattern, opacity)
}

export default getPattern
