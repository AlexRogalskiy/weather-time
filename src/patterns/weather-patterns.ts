import { Optional } from '../../typings/standard-types'
import { WeatherPattern } from '../../typings/enum-types'
import { StyleOptions, WeatherLayoutOptions } from '../../typings/domain-types'

/**
 * WeatherRecord
 * @desc Type representing weather configuration options
 */
export type WeatherLayoutRecord = Record<WeatherPattern, WeatherLayoutOptions>

/**
 * Weather mappings
 * @desc Type representing supported weather mappings
 */
const weathers: Readonly<WeatherLayoutRecord> = {
    default: {
        style: (options: StyleOptions) => {
            const {
                theme: { primaryColor, bgColor, secondaryColor },
                animation: { animation, keyframes },
            } = options

            return `
                    * {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                    }
                    .container {
                        font-family: Arial, Helvetica, sans-serif;
                        padding: 40px 20px;
                        width: 600px;
                        background-color: #${bgColor};
                        border: 1px solid rgba(0, 0, 0, 0.2);
                        border-radius: 5px;
                        ${animation};
                    }
                    ${keyframes}
                    .container h3 {
                        font-size: 19px;
                        margin-bottom: 5px;
                        font-weight: 500;
                        font-style: oblique;
                        color: #${primaryColor};
                    }
                    .container h3::before {
                        content: open-quote;
                        font-size: 25px;
                    }
                    .container h3::after {
                        content: close-quote;
                        vertical-align: sub;
                        font-size: 25px;
                    }
                    .container p {
                        /* float: right; */
                        /* margin-right: 20px; */
                        font-style: italic;
                        padding: 5px;
                        text-align: right;
                        color: #${secondaryColor};
                    }
                `
        },
        template: () => {
            return `
                    <div class="container"></div>
                `
        },
    },
    jigsaw: {
        style: (options: StyleOptions) => {
            const {
                theme: { primaryColor, bgColor, secondaryColor },
                animation: { animation, keyframes },
            } = options

            return `
                    * {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                    }
                    .container {
                        font-family: Arial, Helvetica, sans-serif;
                        padding: 40px 20px;
                        width: 600px;
                        background-color: #${bgColor};
                        border: 1px solid rgba(0, 0, 0, 0.2);
                        border-radius: 5px;
                        ${animation};
                    }
                    ${keyframes}
                    .container h3 {
                        font-size: 19px;
                        margin-bottom: 5px;
                        font-weight: 500;
                        font-style: oblique;
                        color: #${primaryColor};
                    }
                    .container h3::before {
                        content: open-quote;
                        font-size: 25px;
                    }
                    .container h3::after {
                        content: close-quote;
                        vertical-align: sub;
                        font-size: 25px;
                    }
                    .container p {
                        /* float: right; */
                        /* margin-right: 20px; */
                        font-style: italic;
                        padding: 5px;
                        text-align: right;
                        color: #${secondaryColor};
                    }
                `
        },
        template: () => {
            return `
                    <div class="container"></div>
                `
        },
    },
}

/**
 * Returns {@link WeatherLayoutOptions} by input {@link WeatherPattern} value
 * @param value initial input {@link WeatherPattern} to fetch by
 */
export const getWeatherLayout = (value: Optional<WeatherPattern>): WeatherLayoutOptions => {
    return value ? weathers[value] : weathers[WeatherPattern.default]
}
