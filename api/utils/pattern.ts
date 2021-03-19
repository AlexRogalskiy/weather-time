import { layouts } from '../layouts/layouts'
import { randomEnum, strToEnum } from './commons'
import { LayoutMapper, LayoutOptions, LayoutMode } from '../../typings/types'

const layoutMapper: LayoutMapper = strToEnum(Object.values(LayoutMode), v => layouts[v])

const getPattern = (layout: LayoutMode | undefined, opacity: string, colorPattern: string): string => {
    const layoutOperator: LayoutOptions =
        typeof layout === 'undefined' ? layoutMapper[randomEnum(LayoutMode)] : layoutMapper[layout]

    return layoutOperator(colorPattern, opacity)
}

export default getPattern
