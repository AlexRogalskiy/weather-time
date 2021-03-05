import { layouts } from './layouts'
import { randomEnum, strToEnum } from './commons'
import { LayoutMapper, LayoutOperator, LayoutPattern } from '../typings/types'

const layoutMapper: LayoutMapper = strToEnum(Object.values(LayoutPattern), v => layouts[v])

const getPattern = (layout: LayoutPattern | undefined, opacity: string, colorPattern: string): string => {
    const operator: LayoutOperator =
        typeof layout === 'undefined' ? layoutMapper[randomEnum(LayoutPattern)] : layoutMapper[layout]

    return operator(colorPattern, opacity)
}

export default getPattern
