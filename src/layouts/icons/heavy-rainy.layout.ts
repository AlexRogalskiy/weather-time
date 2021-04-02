import { WeatherTemplateLayoutOptions } from '../../../typings/domain-types'
import { IconPattern } from '../../../typings/enum-types'

const heavyRainyLayout: Record<IconPattern.heavy_rainy, WeatherTemplateLayoutOptions> = {
    [IconPattern.heavy_rainy]: {
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

                        .rainbig {
                            position: absolute;
                            z-index: 2;
                            top: 50%;
                            left: 50%;
                            width: 3.75em;
                            height: 3.75em;
                            margin: 0.375em 0 0 -2em;
                            background: currentColor;
                        }

                        .rain:after {
                            content: '';
                            position: absolute;
                            z-index: 2;
                            top: 50%;
                            left: 50%;
                            width: 1.125em;
                            height: 1.125em;
                            margin: -1em 0 0 -0.25em;
                            background: #00FFFF;
                            border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
                            box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                            -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                            -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
                            transform: rotate(-28deg);
                            animation: rain 3s linear infinite;
                        }

                        .rainbig:after {
                            content: '';
                            position: absolute;
                            z-index: 2;
                            top: 50%;
                            left: 50%;
                            width: 1.125em;
                            height: 1.125em;
                            margin: -1em 0 0 -0.25em;
                            background: #0cf;
                            border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
                            box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.9),
                            -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.9),
                            -1.375em -0.125em 0 rgba(255, 255, 255, 0.9);
                            transform: rotate(-28deg);
                            animation: rain 1s linear infinite;
                        }

                        /* Animations */
                        @keyframes rain {
                            0% {
                                background: #0cf;
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -1.375em -0.125em 0 #0cf;
                            }
                            25% {
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em #0cf,
                                -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
                            }
                            50% {
                                background: rgba(255, 255, 255, 0.3);
                                box-shadow: 0.625em 0.875em 0 -0.125em #0cf,
                                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
                            }
                            100% {
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -1.375em -0.125em 0 #0cf;
                            }
                        }

                        @keyframes rainbig {
                            0% {
                                background: #0cf;
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -1.375em -0.125em 0 #0cf;
                            }
                            25% {
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em #0cf,
                                -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
                            }
                            50% {
                                background: rgba(255, 255, 255, 0.3);
                                box-shadow: 0.625em 0.875em 0 -0.125em #0cf,
                                -0.875em 1.125em 0 -0.125em rgba(30, 38, 139, 0.2),
                                -1.375em -0.125em 0 rgba(30, 38, 139, 0.2);
                            }
                            100% {
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(30, 38, 139, 0.2),
                                -0.875em 1.125em 0 -0.125em rgba(30, 38, 139, 0.2),
                                -1.375em -0.125em 0 #0cf;
                            }
                        }
                `
        },
        template: () => {
            return `
                        <div class="icon big rainy">
                            <div class="cloud"></div>
                            <div class="cloud"></div>
                            <div class="rainbig"></div>
                        </div>
                `
        },
    },
}

export default heavyRainyLayout
