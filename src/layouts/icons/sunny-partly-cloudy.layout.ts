import { WeatherTemplateLayoutOptions } from '../../../typings/domain-types'
import { IconPattern } from '../../../typings/enum-types'

const sunnyPartlyCloudyLayout: Record<IconPattern.sunny_partly_cloudy, WeatherTemplateLayoutOptions> = {
    [IconPattern.sunny_partly_cloudy]: {
        style: () => {
            return `
                        html {
                            box-sizing: border-box;
                        }

                        html *,
                        html *:before,
                        html *:after {
                            box-sizing: inherit;
                        }

                        body {
                            max-width: 42em;
                            padding: 2em;
                            margin: 0 auto;
                            color: #0C5585;
                            font-family: 'Roboto', sans-serif;
                            text-align: center;
                            background-color: currentColor;
                        }

                        h1 {
                            margin-bottom: 1.375em;
                            color: #fff;
                            font-weight: 100;
                            font-size: 2em;
                            text-transform: uppercase;
                        }

                        p,
                        a {
                            color: rgba(255, 255, 255, 0.3);
                            font-size: small;
                        }

                        p {
                            margin: 1.375rem 0;
                        }

                        .icon {
                            position: relative;
                            display: inline-block;
                            width: 12em;
                            height: 10em;
                            font-size: 1em; /* control icon size here */
                        }

                        .cloud4 {
                            position: absolute;
                            z-index: 1;
                            top: 60%;
                            left: 50%;
                            width: 3.6875em;
                            height: 3.6875em;
                            margin: -1.84375em;
                            background: #898989;
                            border-radius: 50%;
                            box-shadow: -2.1875em 0.6875em 0 -0.6875em,
                            2.0625em 0.9375em 0 -0.9375em,
                            0 0 0 0.375em #898989,
                            -2.1875em 0.6875em 0 -0.3125em #898989,
                            2.0625em 0.9375em 0 -0.5625em #898989;
                        }

                        .cloud4:after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: -0.5em;
                            display: block;
                            width: 4.5625em;
                            height: 1em;
                            background: #898989;
                            box-shadow: 0 0.4375em 0 -0.0625em #898989;
                        }

                        .cloud4:nth-child(2) {
                            z-index: 0;
                            background: #898989;
                            box-shadow: -2.1875em 0.6875em 0 -0.6875em #898989,
                            2.0625em 0.9375em 0 -0.9375em #898989,
                            0 0 0 0.375em #898989,
                            -2.1875em 0.6875em 0 -0.3125em #898989,
                            2.0625em 0.9375em 0 -0.5625em #898989;
                            opacity: 0;
                            transform: scale(0.) translate(6em, -3em);
                            animation: cloud4 7s linear infinite;
                        }

                        .cloud4:nth-child(2):after {
                            background: #898989;
                        }

                        .cloud4:nth-child(2):after {
                            background: #898989;
                        }

                        .sun {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 2.5em;
                            height: 2.5em;
                            margin: -1.25em;
                            background: #FFC900;
                            border-radius: 50%;
                            box-shadow: 0 0 0 0.375em;
                            animation: spin 12s infinite linear;
                        }

                        .rays {
                            position: absolute;
                            top: -2em;
                            left: 50%;
                            display: block;
                            width: 0.375em;
                            height: 1.125em;
                            margin-left: -0.1875em;
                            background: #FFA600;
                            border-radius: 0.25em;
                            box-shadow: 0 5.375em #FFA600;
                        }

                        .rays:before,
                        .rays:after {
                            content: '';
                            position: absolute;
                            top: 0em;
                            left: 0em;
                            display: block;
                            width: 0.375em;
                            height: 1.125em;
                            transform: rotate(60deg);
                            transform-origin: 50% 3.25em;
                            background: #FFA600;
                            border-radius: 0.25em;
                            box-shadow: 0 5.375em #FFA600;
                        }

                        .rays:before {
                            transform: rotate(120deg);
                        }

                        /* Animations */
                        @keyframes spin {
                            100% {
                                transform: rotate(360deg);
                            }
                        }

                        @keyframes cloud4 {
                            0% {
                                opacity: 1;
                            }
                            50% {
                                opacity: 0.8;
                            }
                            100% {
                                opacity: 0.6;
                                transform: scale(0.5) translate(170%, 0em);
                            }
                        }
                `
        },
        template: () => {
            return `
                        <div class="icon cloudy go sunny">
                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            <div class="cloud4"></div>
                        </div>
                `
        },
    },
}

export default sunnyPartlyCloudyLayout
