export enum LayoutMode {
    dark = 'dark',
    light = 'light',
}

export enum LayoutPattern {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export type LayoutOperator = (fill: string, opacity: string) => string

export type LayoutMapper = { [K in LayoutPattern]: LayoutOperator }

export type LayoutData = {
    /**
     * Weather data
     */
    data: string
    /**
     * Weather link
     */
    link: string
}

export interface ParsedRequest {
    /**
     * Layout mode
     */
    mode?: LayoutMode | undefined
    /**
     * Layout pattern
     */
    pattern?: LayoutPattern | undefined
    /**
     * Quote image width
     */
    width?: string
    /**
     * Quote image height
     */
    height?: string
    /**
     * Quote image color pattern
     */
    colorPattern?: string | string[]
    /**
     * Quote text font color
     */
    fontColor?: string | string[]
    /**
     * Quote image background color
     */
    backgroundColor?: string | string[]
    /**
     * Quote image background opacity
     */
    opacity?: string | string[]
}

export interface ColorOptions {
    /**
     * Image color pattern
     */
    readonly colorPattern: string | string[]
    /**
     * Image text font color
     */
    readonly fontColor: string | string[]
    /**
     * Image background color
     */
    readonly backgroundColor: string | string[]
    /**
     * Image background opacity
     */
    readonly opacity: string | string[]
    /**
     * Image background layout
     */
    readonly pattern?: LayoutPattern | undefined
}

export interface ImageOptions {
    /**
     * Image width
     */
    readonly width: string
    /**
     * Image height
     */
    readonly height: string
}

export interface LayoutOptions {
    /**
     * Layout pattern
     */
    readonly pattern: LayoutPattern
    /**
     * Layout mode
     */
    readonly mode: LayoutMode
}

export enum ConfigProfile {
    dev = 'dev',
    prod = 'prod',
}

export interface ProfileOptions {
    /**
     * Color configuration options.
     */
    readonly colorOptions: ColorOptions
    /**
     * Image configuration options.
     */
    readonly imageOptions: ImageOptions
    /**
     * Layout configuration options.
     */
    readonly layoutOptions: LayoutOptions
}

/**
 * Profile configuration options.
 */
export type ConfigOptions = {
    readonly [K in ConfigProfile]: ProfileOptions
}
