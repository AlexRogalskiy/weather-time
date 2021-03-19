import { Optional } from './standard-types'
import { AnimationPattern, FontPattern, LayoutPattern, ThemePattern } from './enum-types'

// export enum ActionMode {
//     spinning = 'spinning',
// }
//
// export enum ThemeMode {
//     dark = 'dark',
//     light = 'light',
// }
//
// export enum LayoutMode {
//     small = 'small',
//     medium = 'medium',
//     large = 'large',
// }

export interface FontOptions {
    readonly fontFamily: string
    readonly fontData: string
}

export interface AnimationOptions {
    readonly animation: string
    readonly keyframes: string
}

export interface ThemeOptions {
    readonly quoteColor: string
    readonly authorColor: string
    readonly bgColor: string
    readonly fontColor: string
}

export interface StyleOptions {
    /**
     * Template font options
     */
    readonly font: FontOptions
    /**
     * Template theme options
     */
    readonly theme: ThemeOptions
    /**
     * Template animation options
     */
    readonly animation: AnimationOptions
}

export interface WeatherOptions {
    /**
     * Request timestamp
     */
    readonly refreshDate: Date
    /**
     * Weather temperature
     */
    readonly temperature: number
    /**
     * Weather pressure
     */
    readonly pressure: number
    /**
     * Weather humidity
     */
    readonly humidity: number
    /**
     * Weather clouds
     */
    readonly clouds: number
    /**
     * Weather wind
     */
    readonly wind: number
    /**
     * Weather wind direction
     */
    readonly windDirection: string
    /**
     * Weather description
     */
    readonly weather: string
    /**
     * Weather icon
     */
    readonly weatherIcon: string
    /**
     * Sunrise data
     */
    readonly sunrise: string
    /**
     * Sunset data
     */
    readonly sunset: string
}

export type LayoutOptions = {
    /**
     * Creates style by input {@link StyleOptions}
     * @param options initial input {@link StyleOptions}
     */
    readonly style: (options: StyleOptions) => string
    /**
     * Creates template by input {@link WeatherOptions}
     * @param options initial input {@link WeatherOptions}
     */
    readonly template: (options: WeatherOptions) => string
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

export type TemplateData = {
    /**
     * Template layout options
     */
    layout: LayoutOptions
    /**
     * Template style options
     */
    style: StyleOptions
    /**
     * Template weather options
     */
    weather: WeatherOptions
    /**
     * Template image options
     */
    image: ImageOptions
}

export type DateFormatOptions = {
    /**
     * Weekday format
     */
    readonly weekday?: string
    /**
     * Month format
     */
    readonly month?: string
    /**
     * Day format
     */
    readonly day?: string
    /**
     * Hour format
     */
    readonly hour?: string
    /**
     * Minute format
     */
    readonly minute?: string
    /**
     * Timezone name format
     */
    readonly timeZoneName?: string
    /**
     * Timezone format
     */
    readonly timeZone?: string
}

export type FormatOptions = {
    /**
     * Locale configuration.
     */
    readonly locale: string
    /**
     * Image configuration options.
     */
    readonly shortDateFormat: Pick<DateFormatOptions, 'hour' | 'minute' | 'timeZone'>
    /**
     * Layout configuration options.
     */
    readonly longDateFormat: DateFormatOptions
    /**
     * Direction configuration options.
     */
    readonly directions: string[]
}

export interface ProfileOptions {
    /**
     * Base url.
     */
    readonly baseUrl: string
    // /**
    //  * Color configuration options.
    //  */
    // readonly colorOptions: ColorOptions
    /**
     * Image configuration options.
     */
    readonly imageOptions: ImageOptions
    // /**
    //  * Layout configuration options.
    //  */
    // readonly layoutOptions: LayoutOptions
}

// export interface LayoutOptions {
//     /**
//      * Layout mode
//      */
//     readonly layout: LayoutMode
//     /**
//      * Theme mode
//      */
//     readonly theme: ThemeMode
//     /**
//      * Action mode
//      */
//     readonly action: ActionMode
// }

// export type LayoutData = {
//     /**
//      * Weather data
//      */
//     data: string
//     /**
//      * Weather link
//      */
//     link: string
// }

export interface ParsedRequest {
    /**
     * Theme pattern
     */
    theme?: Optional<ThemePattern>
    /**
     * Layout pattern
     */
    layout?: Optional<LayoutPattern>
    /**
     * Animation pattern
     */
    animation?: Optional<AnimationPattern>
    /**
     * Font pattern
     */
    font?: Optional<FontPattern>
    /**
     * Quote image width
     */
    width?: string
    /**
     * Quote image height
     */
    height?: string
    // /**
    //  * Quote image color pattern
    //  */
    // colorPattern?: string | string[]
    // /**
    //  * Quote text font color
    //  */
    // fontColor?: string | string[]
    // /**
    //  * Quote image background color
    //  */
    // backgroundColor?: string | string[]
    // /**
    //  * Quote image background opacity
    //  */
    // opacity?: string | string[]
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
    // /**
    //  * Image background layout
    //  */
    // readonly pattern?: LayoutMode | undefined
}
