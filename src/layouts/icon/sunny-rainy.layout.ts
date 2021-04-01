import { WeatherTemplateLayoutOptions } from '../../../typings/domain-types'
import { WeatherPattern } from '../../../typings/enum-types'

const sunnyRainyLayout: Record<WeatherPattern.sunny_rainy, WeatherTemplateLayoutOptions> = {
    'sunny-rainy': {
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

                        /* CLOUD3 */

                        .cloud3 {
                            position: absolute;
                            z-index: 1;
                            top: 60%;
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

                        .cloud3:after {
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

                        .cloud3:nth-child(2) {
                            z-index: 0;
                            background: #fff;
                            box-shadow: -2.1875em 0.6875em 0 -0.6875em #fff,
                            2.0625em 0.9375em 0 -0.9375em #fff,
                            0 0 0 0.375em #fff,
                            -2.1875em 0.6875em 0 -0.3125em #fff,
                            2.0625em 0.9375em 0 -0.5625em #fff;
                            opacity: 1.0;
                            transform: scale(0.5) translate(5em, -3em);
                            animation: cloud 9s linear infinite;
                        }


                        .cloud3:nth-child(2):after {
                            background: #fff;
                        }

                        /* FIN CLOUD3 */

                        /* CLOUD4 */
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

                        /* FIN CLOUD4 */

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

                        .sun2 {
                            position: absolute;
                            top: 40%;
                            left: 70%;
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

                        .rays2 {
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

                        .rays2:before,
                        .rays2:after {
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

                        .rays2:before {
                            transform: rotate(120deg);
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

                        .cloud + .sun {
                            margin: -2em 1em;
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

                        /* RAIN3 */

                        .rain3 {
                            position: absolute;
                            z-index: 2;
                            top: 50%;
                            left: 50%;
                            width: 3.75em;
                            height: 3.75em;
                            margin: 0.375em 0 0 -2em;
                            background: rgba(255, 255, 255, 0.0);
                        }

                        .rain3:after {
                            content: '';
                            position: absolute;
                            z-index: 2;
                            top: 50%;
                            left: 50%;
                            width: 1.125em;
                            height: 1.125em;
                            margin: -1em 0 0 -0.25em;
                            background: #0547A5;
                            border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
                            box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.9),
                            -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.9),
                            -1.375em -0.125em 0 rgba(255, 255, 255, 0.9);

                            transform: rotate(-28deg);
                            animation: rain3 3s linear infinite;
                        }


                        /* FIN RAIN3 */

                        .bolt {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            margin: -0.25em 0 0 -0.125em;
                            color: #FFC300;
                            opacity: 0.9;
                            animation: lightning 1s linear infinite;
                        }

                        .bolt:nth-child(2) {
                            width: 0.5em;
                            height: 0.25em;
                            margin: -1.75em 0 0 -1.875em;
                            transform: translate(2.5em, 2.25em);
                            opacity: 0.2;
                            animation: lightning 1.5s linear infinite;
                        }

                        .bolt:before,
                        .bolt:after {
                            content: '';
                            position: absolute;
                            z-index: 2;
                            top: 50%;
                            left: 50%;
                            margin: -1.625em 0 0 -1.0125em;
                            border-top: 1.25em solid transparent;
                            border-right: 0.75em solid;
                            border-bottom: 0.75em solid;
                            border-left: 0.5em solid transparent;
                            transform: skewX(-10deg);
                        }

                        .bolt:after {
                            margin: -0.25em 0 0 -0.25em;
                            border-top: 0.75em solid;
                            border-right: 0.5em solid transparent;
                            border-bottom: 1.25em solid transparent;
                            border-left: 0.75em solid;
                            transform: skewX(-10deg);
                        }

                        .bolt:nth-child(2):before {
                            margin: -0.75em 0 0 -0.5em;
                            border-top: 0.625em solid transparent;
                            border-right: 0.375em solid;
                            border-bottom: 0.375em solid;
                            border-left: 0.25em solid transparent;
                        }

                        .bolt:nth-child(2):after {
                            margin: -0.125em 0 0 -0.125em;
                            border-top: 0.375em solid;
                            border-right: 0.25em solid transparent;
                            border-bottom: 0.625em solid transparent;
                            border-left: 0.375em solid;
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

                        @keyframes rain3 {
                            0% {
                                background: #0547A5;
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -1.375em -0.125em 0 #0547A5;
                            }
                            25% {
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em #0547A5,
                                -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
                            }
                            50% {
                                background: rgba(255, 255, 255, 0.3);
                                box-shadow: 0.625em 0.875em 0 -0.125em #0547A5,
                                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
                            }
                            100% {
                                box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
                                -1.375em -0.125em 0 #0547A5;
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

                        @keyframes lightning {
                            45% {
                                color: #FFC300;
                                background: #fff;
                                opacity: 0.2;
                            }
                            50% {
                                color: #FFC300;
                                background: #0cf;
                                opacity: 1;
                            }
                            55% {
                                color: #fff;
                                background: #fff;
                                opacity: 0.9;
                            }
                        }
                `
        },
        template: () => {
            return `
                        <div class="icon sun-shower">
                            <div class="cloud"></div>

                            <div class="sun">
                                <div class="rays"></div>
                            </div>
                            <div class="rain"></div>
                        </div>
                `
        },
    },
}

export default sunnyRainyLayout
