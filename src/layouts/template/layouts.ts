import { Optional } from '../../../typings/standard-types'
import { LayoutPattern } from '../../../typings/enum-types'
import { TemplateLayoutOptions } from '../../../typings/domain-types'

import defaultLayout from './default.layout'

/**
 * TemplateLayoutRecord
 * @desc Type representing template layout configuration options
 */
export type TemplateLayoutRecord = Record<LayoutPattern, TemplateLayoutOptions>

/**
 * Layout mappings
 * @desc Type representing supported template layout mappings
 */
const layouts: Readonly<TemplateLayoutRecord> = {
    ...defaultLayout,
}

/**
 * Returns {@link LayoutOptions} by input {@link LayoutPattern} value
 * @param value initial input {@link LayoutPattern} to fetch by
 */
export const getLayout = (value: Optional<LayoutPattern>): TemplateLayoutOptions => {
    return value ? layouts[value] : layouts[LayoutPattern.default]
}
