import { LayoutMapper, LayoutOperator } from '../typings/types'

const small: LayoutOperator = (fill: string, opacity: string): string => fill + opacity

const medium: LayoutOperator = (fill: string, opacity: string): string => fill + opacity

const large: LayoutOperator = (fill: string, opacity: string): string => fill + opacity

export const layouts: LayoutMapper = {
    small,
    medium,
    large,
}
