import boxen from 'boxen'

import { Optional } from './standard-types'
import {
    AnimationPattern,
    FontPattern,
    LayoutPattern,
    SpritePattern,
    ThemePattern,
    TimeOfDay,
    WeatherPattern,
} from './enum-types'

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
    readonly fontSrc: string
}
//--------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------
/**
 * ThemeOptions
 * @desc Type representing theme options
 */
export type ThemeOptions = {
    /**
     * Theme primary text color
     */
    readonly primaryColor?: string
    /**
     * Theme secondary text color
     */
    readonly secondaryColor?: string
    /**
     * Theme background color
     */
    readonly bgColor?: string
    /**
     * Theme color pattern
     */
    readonly colorPattern?: string
    /**
     * Theme background opacity
     */
    readonly opacity?: string
}
//--------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------
/**
 * TemplateOptions
 * @desc Type representing template options
 */
export type TemplateOptions = {
    /**
     * Weather refresh timestamp
     */
    readonly datetime: string
    /**
     * Weather location point
     */
    readonly location: string
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
//--------------------------------------------------------------------------------------------------
/**
 * LayoutOptions
 * @desc Type representing layout options
 */
export type LayoutOptions<S, T> = {
    /**
     * Creates style by input {@link StyleOptions}
     * @param options initial input {@link StyleOptions}
     */
    readonly style: (options: S) => string
    /**
     * Creates template by input {@link TemplateOptions}
     * @param options initial input {@link TemplateOptions}
     */
    readonly template: (options: T) => string
}

/**
 * TemplateLayoutOptions
 * @desc Type representing template layout options
 */
export type TemplateLayoutOptions = LayoutOptions<StyleOptions, TemplateOptions>

/**
 * WeatherTemplateLayoutOptions
 * @desc Type representing weather template layout options
 */
export type WeatherTemplateLayoutOptions = LayoutOptions<StyleOptions, TemplateOptions>
//--------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------
/**
 * QueryOptions
 * @desc Type representing query options
 */
export type QueryOptions = {
    /**
     * Query base url
     */
    readonly baseUrl: string
    /**
     * Query label
     */
    readonly query: string
}
//--------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profile options
 */
export type ProfileOptions = {
    /**
     * Image query options.
     */
    readonly queryOptions: QueryOptions
    /**
     * Image configuration options.
     */
    readonly imageOptions: ImageOptions
    /**
     * Style configuration options.
     */
    readonly styleOptions?: StyleOptions
    /**
     * Layout configuration options.
     */
    readonly layoutOptions?: TemplateLayoutOptions
    /**
     * Date format configuration options.
     */
    readonly dateFormatOptions: DateFormatOptions
    /**
     * Output options
     */
    readonly outputOptions?: boxen.Options
}
//--------------------------------------------------------------------------------------------------
/**
 * TemplateData
 * @desc Type representing template data
 */
export type TemplateData<S, T, L extends LayoutOptions<S, T>> = {
    /**
     * Template layout options
     */
    readonly layout: L
    /**
     * Template style options
     */
    readonly style: S
    /**
     * Template image options
     */
    readonly image: ImageOptions
    /**
     * Template data options
     */
    readonly template: T
}
//--------------------------------------------------------------------------------------------------
/**
 * ParsedRequestData
 * @desc Type representing parsed request data
 */
export type ParsedRequestData = {
    /**
     * Request image options
     */
    readonly imageOptions: Partial<ImageOptions>
    /**
     * Request query options
     */
    readonly queryOptions: Partial<QueryOptions>
    /**
     * Request theme options
     */
    readonly themeOptions: Partial<ThemeOptions>
    /**
     * Request theme pattern
     */
    readonly themePattern?: Optional<ThemePattern>
    /**
     * Request layout pattern
     */
    readonly layoutPattern?: Optional<LayoutPattern>
    /**
     * Request animation pattern
     */
    readonly animationPattern?: Optional<AnimationPattern>
    /**
     * Request font pattern
     */
    readonly fontPattern?: Optional<FontPattern>
}
//--------------------------------------------------------------------------------------------------
/**
 * WeatherPatternLayout
 * @desc Type representing weather pattern layouts
 */
export type WeatherPatternLayout = Record<WeatherPattern, WeatherTemplateLayoutOptions>
//--------------------------------------------------------------------------------------------------
/**
 * WeatherOperator
 * @desc Type representing weather operator
 */
export type WeatherOperator = (timeOfDay?: TimeOfDay) => SpritePattern

/**
 * WeatherPatternOperator
 * @desc Type representing weather pattern operators
 */
export type WeatherPatternOperator = Record<WeatherPattern, WeatherOperator>
//--------------------------------------------------------------------------------------------------
/**
 * SpriteOptions
 * @desc Type representing sprite options
 */
export type SpriteOptions = {
    width?: string
    height?: string
    fill?: string
    opacity?: string
}

/**
 * SpriteOperator
 * @desc Type representing sprite operator
 */
export type SpriteOperator = (options?: SpriteOptions) => string

/**
 * SpritePatternOperator
 * @desc Type representing sprite pattern operators
 */
export type SpritePatternOperator = Record<SpritePattern, SpriteOperator>
//--------------------------------------------------------------------------------------------------
