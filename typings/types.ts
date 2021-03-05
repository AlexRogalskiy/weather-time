export enum ModePattern {
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

export type WeatherData = {
    /**
     * Quote identifier
     */
    id?: string
    /**
     * Quote text
     */
    quote: string
    /**
     * Quote author
     */
    author: string
}

export interface ParsedRequest {
    /**
     * Layout mode
     */
    mode?: ModePattern | undefined
    /**
     * Layout category
     */
    layout?: LayoutPattern | undefined
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
    readonly layout?: LayoutPattern
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

export enum Profile {
    dev = 'dev',
    prod = 'prod',
}

export interface WidgetOptions {
    /**
     * Color configuration options.
     */
    readonly colorOptions: ColorOptions
    /**
     * Image configuration options.
     */
    readonly imageOptions: ImageOptions
}

/**
 * Profile configuration options.
 */
export type ConfigOptions = {
    readonly [K in Profile]: WidgetOptions
}
