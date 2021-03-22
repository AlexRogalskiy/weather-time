import { Optional } from './standard-types'
import { AnimationPattern, FontPattern, LayoutPattern, ThemePattern } from './enum-types'

/**
 * FontOptions
 * @desc Type representing font options
 */
export type FontOptions = {
    /**
     * Font family
     */
    readonly fontFamily: string
    /**
     * Font data
     */
    readonly fontData: string
}

/**
 * AnimationOptions
 * @desc Type representing animation options
 */
export type AnimationOptions = {
    /**
     * Animation type
     */
    readonly animation: string
    /**
     * Animation keyframes
     */
    readonly keyframes: string
}

/**
 * ThemeOptions
 * @desc Type representing theme options
 */
export type ThemeOptions = {
    /**
     * Theme quote text color
     */
    readonly quoteColor: string
    /**
     * Theme author text color
     */
    readonly authorColor: string
    /**
     * Theme background color
     */
    readonly bgColor: string
    /**
     * Theme color pattern
     */
    readonly colorPattern: string | string[]
    /**
     * Theme text font color
     */
    readonly fontColor?: string
    /**
     * Theme background opacity
     */
    readonly opacity?: string
}

/**
 * StyleOptions
 * @desc Type representing style options
 */
export type StyleOptions = {
    /**
     * Style font options
     */
    readonly font: FontOptions
    /**
     * Style theme options
     */
    readonly theme: ThemeOptions
    /**
     * Style animation options
     */
    readonly animation: AnimationOptions
}

/**
 * WeatherOptions
 * @desc Type representing weather options
 */
export type WeatherOptions = {
    /**
     * Weather refresh timestamp
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
 * DateFormatOptions
 * @desc Type representing date format options
 */
export type DateFormatOptions = {
    /**
     * Locale configuration.
     */
    readonly locale: string
    /**
     * Short date format configuration options.
     */
    readonly shortDateFormat: Pick<Intl.DateTimeFormatOptions, 'hour' | 'minute' | 'timeZone'>
    /**
     * Long date format configuration options.
     */
    readonly longDateFormat: Intl.DateTimeFormatOptions
}

/**
 * ProfileOptions
 * @desc Type representing profile options
 */
export type ProfileOptions = {
    /**
     * Profile base url.
     */
    readonly baseUrl: string
    /**
     * Profile image configuration options.
     */
    readonly imageOptions: ImageOptions
    /**
     * Profile date format configuration options.
     */
    readonly dateFormatOptions: DateFormatOptions
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
 * ParsedRequest
 * @desc Type representing parsed request data
 */
export type ParsedRequestData = {
    /**
     * Request theme pattern
     */
    theme?: Optional<ThemePattern>
    /**
     * Request layout pattern
     */
    layout?: Optional<LayoutPattern>
    /**
     * Request animation pattern
     */
    animation?: Optional<AnimationPattern>
    /**
     * Request font pattern
     */
    font?: Optional<FontPattern>
    /**
     * Request query
     */
    query: string
    /**
     * Request image width
     */
    width?: string
    /**
     * Request image height
     */
    height?: string
}
