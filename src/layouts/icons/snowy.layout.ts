import { WeatherTemplateLayoutOptions } from '../../../typings/domain-types'
import { IconPattern } from '../../../typings/enum-types'

const snowyLayout: Record<IconPattern.snowy, WeatherTemplateLayoutOptions> = {
    [IconPattern.snowy]: {
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

                        .cloud {
                            position: absolute;
                            z-index: 1;
                            top: 50%;
                            left: 50%;
                            width: 3.6875em;
                            height: 3.6875em;
                            margin: -1.84375em;
                            background: currentColor;
                            border-radius: 50%;
                            box-shadow: -2.1875em 0.6875em 0 -0.6875em,
                            2.0625em 0.9375em 0 -0.9375em,
                            0 0 0 0.375em #fff,
                            -2.1875em 0.6875em 0 -0.3125em #fff,
                            2.0625em 0.9375em 0 -0.5625em #fff;
                        }

                        .cloud:after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: -0.5em;
                            display: block;
                            width: 4.5625em;
                            height: 1em;
                            background: currentColor;
                            box-shadow: 0 0.4375em 0 -0.0625em #fff;
                        }

                        .cloud:nth-child(2) {
                            z-index: 0;
                            background: #fff;
                            box-shadow: -2.1875em 0.6875em 0 -0.6875em #fff,
                            2.0625em 0.9375em 0 -0.9375em #fff,
                            0 0 0 0.375em #fff,
                            -2.1875em 0.6875em 0 -0.3125em #fff,
                            2.0625em 0.9375em 0 -0.5625em #fff;
                            opacity: 0.1;
                            transform: scale(0.5) translate(6em, -3em);
                            animation: cloud 5s linear infinite;
                        }

                        .cloud:nth-child(3) {
                            z-index: 0;
                            background: #fff;
                            box-shadow: -2.1875em 0.6875em 0 -0.6875em #fff,
                            2.0625em 0.9375em 0 -0.9375em #fff,
                            0 0 0 0.375em #fff,
                            -2.1875em 0.6875em 0 -0.3125em #fff,
                            2.0625em 0.9375em 0 -0.5625em #fff;
                            opacity: 0.1;
                            transform: scale(0.5) translate(16em, -3em);
                            animation: cloud 5s linear infinite;
                        }

                        .cloud:nth-child(2):after {
                            background: #fff;
                        }

                        .cloud:nth-child(2):after {
                            background: #fff;
                        }

                        .rain,
                        .lightning,
                        .snow {
                            position: absolute;
                            z-index: 2;
                            top: 50%;
                            left: 50%;
                            width: 3.75em;
                            height: 3.75em;
                            margin: 0.375em 0 0 -2em;
                            background: currentColor;
                        }

                        .flake:before,
                        .flake:after {
                            content: '\\2744';
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            margin: -1.025em 0 0 -1.0125em;
                            color: #ffffff;
                            list-height: 1em;
                            opacity: 0.9;
                            animation: spin 8s linear infinite reverse;
                        }

                        .flake:after {
                            margin: 0.125em 0 0 -1em;
                            font-size: 1.5em;
                            opacity: 0.9;
                            animation: spin 14s linear infinite;
                        }

                        .flake:nth-child(2):before {
                            margin: -0.5em 0 0 0.25em;
                            font-size: 1.25em;
                            opacity: 0.9;
                            animation: spin 10s linear infinite;
                        }

                        .flake:nth-child(2):after {
                            margin: 0.375em 0 0 0.125em;
                            font-size: 2em;
                            opacity: 0.9;
                            animation: spin 16s linear infinite reverse;
                        }

                        /* Animations */
                        @keyframes spin {
                            100% {
                                transform: rotate(360deg);
                            }
                        }

                        @keyframes cloud {
                            0% {
                                opacity: 0;
                            }
                            50% {
                                opacity: 0.8;
                            }
                            100% {
                                opacity: 0;
                                transform: scale(0.5) translate(-200%, -3em);
                            }
                        }
                `
        },
        template: () => {
            return `
                        <div class="icon flurries">
                            <div class="cloud"></div>
                            <div class="snow">
                                <div class="flake"></div>
                                <div class="flake"></div>
                            </div>
                        </div>
                `
        },
    },
}

export default snowyLayout
