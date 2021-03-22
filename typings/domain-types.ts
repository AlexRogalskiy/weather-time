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

/**
 * FontOptions
 * @desc Type representing font options
 */
export type FontOptions = {
    readonly fontFamily: string
    readonly fontData: string
}

/**
 * AnimationOptions
 * @desc Type representing animation options
 */
export type AnimationOptions = {
    readonly animation: string
    readonly keyframes: string
}

/**
 * ThemeOptions
 * @desc Type representing theme options
 */
export type ThemeOptions = {
    readonly quoteColor: string
    readonly authorColor: string
    readonly bgColor: string
    readonly fontColor?: string
}

/**
 * StyleOptions
 * @desc Type representing style options
 */
export type StyleOptions = {
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

/**
 * WeatherOptions
 * @desc Type representing weather options
 */
export type WeatherOptions = {
    /**
     * Request timestamp
     */
    readonly refreshDate: string
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

/**
 * LayoutOptions
 * @desc Type representing layout options
 */
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

/**
 * ImageOptions
 * @desc Type representing image options
 */
export type ImageOptions = {
    /**
     * Image width
     */
    readonly width: string
    /**
     * Image height
     */
    readonly height: string
}

/**
 * TemplateData
 * @desc Type representing template data
 */
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

/**
 * DateFormatOptions
 * @desc Type representing date format options
 */
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

/**
 * FormatOptions
 * @desc Type representing format options
 */
export type FormatOptions = {
    /**
     * Locale configuration.
     */
    readonly locale: string
    /**
     * Image configuration options.
     */
    readonly shortDateFormat: Pick<Intl.DateTimeFormatOptions, 'hour' | 'minute' | 'timeZone'>
    /**
     * Layout configuration options.
     */
    readonly longDateFormat: Intl.DateTimeFormatOptions
}

/**
 * FormatOptions
 * @desc Type representing profile options
 */
export type ProfileOptions = {
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
    /**
     * Format configuration options.
     */
    readonly formatOptions: FormatOptions
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

/**
 * ParsedRequest
 * @desc Type representing parsed request data
 */
export type ParsedRequestData = {
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
     * Request query
     */
    query: string
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

/**
 * ColorOptions
 * @desc Type representing color options
 */
export type ColorOptions = {
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
