import { WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
import { WeatherPattern } from '../../../../typings/enum-types'

const tornadoLayout: Record<WeatherPattern.tornado, WeatherTemplateLayoutOptions> = {
    [WeatherPattern.tornado]: {
        style: () => {
            return `
                        @charset "UTF-8";
                        @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css';
                        @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';

                        body {
                            font-family: Source Sans Pro;
                            background: #181c1d;
                            color: rgba(255, 255, 255, 0.5);
                        }

                        #rainy {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                        }

                        #thunder {
                            position: absolute;
                            top: 50%;
                        }

                        /*here is the icon class */
                        .icon {
                            position: relative;
                            display: inline-block;
                            background-color: #181c1d;
                            margin: 5%;
                            width: 4em;
                            height: 4em;
                            font-size: 1em;
                        }

                        .cloud2 {
                            color: #181c1d;
                            background: #181c1d;
                            position: absolute;
                            width: 3.4875em;
                            height: 3.4875em;
                            border-radius: 50%;
                            box-shadow: 2.0625em 0.9375em 0 -0.9375em, 0 0 0 0.375em white, 2.0625em 0.9375em 0 -0.5625em white;
                        }

                        .cloud2:after {
                            color: #181c1d;
                            background: #181c1d;
                            content: "";
                            position: absolute;
                            bottom: 0;
                            left: 1.8em;
                            display: block;
                            width: 2em;
                            height: 1em;
                            box-shadow: 0 0.4375em 0 -0.0625em white;
                        }

                        .small-cloud {
                            background: #181c1d;
                            box-shadow: 2.0625em 0.9375em 0 -0.9375em, 0 0 0 0.375em white, 2.0625em 0.9375em 0 -0.5625em white;
                            opacity: 0.3;
                            transform: scale(0.5) translate(6em, -3em);
                            animation: move 5s infinite linear;
                        }

                        .sun {
                            color: #181c1d;
                            background: #181c1d;
                            position: absolute;
                            width: 2.5em;
                            margin: 0.8em;
                            height: 2.5em;
                            border-radius: 50%;
                            box-shadow: 0 0 0 0.375em white;
                        }

                        .rays {
                            position: relative;
                            transform: translate(1.1em, -0.8em);
                        }

                        .ray {
                            color: #181c1d;
                            background: #181c1d;
                            position: absolute;
                            margin: 0.8em;
                            width: 0.4em;
                            height: 4.2em;
                            box-shadow: 0 0.5em 0 0 white, 0 -0.5em 0 0 white;
                        }

                        .ray:nth-child(1) {
                            animation: spin-0 10s infinite linear;
                        }

                        .ray:nth-child(2) {
                            transform: rotate(45deg);
                            animation: spin-45 10s infinite linear;
                        }

                        .ray:nth-child(3) {
                            transform: rotate(90deg);
                            animation: spin-90 10s infinite linear;
                        }

                        .ray:nth-child(4) {
                            transform: rotate(135deg);
                            animation: spin-135 10s infinite linear;
                        }

                        .thunder,
                        .snow,
                        .haze,
                        .drizzle,
                        .rain {
                            transform: translate(1.3em, 2.2em);
                            width: 2.8em;
                            height: 2.5em;
                            background: #181c1d;
                            position: absolute;
                        }

                        .extreme {
                            background: #181c1d;
                        }

                        .rain:after {
                            content: "";
                            position: absolute;
                            display: block;
                            z-index: 2;
                            color: white;
                            background: white;
                            width: 0.3em;
                            height: 1em;
                            border-radius: 0.15em;
                            transform: translate(0.4em, 0.2em) rotate(20deg);
                            animation: rain 2s infinite ease-in-out;
                            box-shadow: 0.6em 0.6em, 1.2em -0.2em, 1.2em 1.2em, 1.8em 0.2em;
                        }

                        .drizzle:after {
                            z-index: 2;
                            content: "";
                            position: absolute;
                            display: block;
                            color: white;
                            background: white;
                            width: 0.4em;
                            height: 0.4em;
                            border-radius: 50%;
                            transform: translate(0.1em, 0.6em);
                            box-shadow: 0.4em 0.4em, 0.8em 0em, 1.2em 0.4em, 1.6em 0em, 2em 0.4em, 0.8em 0.8em, 1.2em 0.4em, 1.6em 0.8em, 0.4em 1.2em, 1.2em 1.2em, 0.8em 1.6em;
                            animation: drizzle 2s infinite linear;
                        }

                        .flake {
                            position: absolute;
                            display: block;
                        }

                        .flake:nth-child(1) {
                            transform: scale(2) translate(0.1em, -0.2em);
                        }

                        .flake:nth-child(1):after {
                            z-index: 2;
                            color: white;
                            position: absolute;
                            animation: spin 7s infinite reverse linear;
                            display: block;
                            content: "❄";
                        }

                        .flake:nth-child(2) {
                            transform: scale(1.2) translate(0.6em, 1.3em);
                        }

                        .flake:nth-child(2):after {
                            z-index: 2;
                            color: white;
                            position: absolute;
                            display: block;
                            content: "❄";
                            animation: spin 3s infinite linear;
                        }

                        .flake:nth-child(3) {
                            transform: scale(1.4) translate(1.2em, 0.6em);
                        }

                        .flake:nth-child(3):after {
                            z-index: 2;
                            color: white;
                            position: absolute;
                            animation: spin 5s infinite linear;
                            display: block;
                            content: "❄";
                        }

                        .extreme {
                            margin: auto auto;
                            transform: rotate(-10deg);
                        }

                        .harsh-wind {
                            margin: 0.2em auto;
                        }

                        .harsh-wind:nth-child(1) {
                            background: white;
                            border-radius: 0.15em;
                            width: 4em;
                            height: 0.3em;
                            animation: harsh-wind 1s infinite linear;
                        }

                        .harsh-wind:nth-child(2) {
                            background: white;
                            border-radius: 0.15em;
                            width: 3em;
                            height: 0.3em;
                            animation: harsh-wind 1s infinite linear 0.2s forwards;
                        }

                        .harsh-wind:nth-child(3) {
                            background: white;
                            border-radius: 0.15em;
                            width: 2em;
                            height: 0.3em;
                            transform: translate(1em, 0em);
                            animation: harsh-wind 1s infinite linear 0.4s forwards;
                        }

                        .harsh-wind:nth-child(4) {
                            background: white;
                            border-radius: 0.15em;
                            width: 1.5em;
                            height: 0.3em;
                            animation: harsh-wind 1s infinite linear 0.6s forwards;
                        }

                        .harsh-wind:nth-child(5) {
                            background: white;
                            border-radius: 0.15em;
                            width: 1em;
                            height: 0.3em;
                            animation: harsh-wind 1s infinite linear 0.8s forwards;
                        }

                        .harsh-wind:nth-child(6) {
                            background: white;
                            border-radius: 0.15em;
                            width: 0.75em;
                            height: 0.3em;
                            animation: harsh-wind 1s infinite linear 1s forwards;
                        }

                        .harsh-wind:nth-child(7) {
                            background: white;
                            border-radius: 0.15em;
                            width: 0.5em;
                            height: 0.3em;
                            animation: harsh-wind 1s infinite linear 1.2s forwards;
                        }

                        /*
                        .thunder:after {
                          z-index: 2;
                          position: absolute;
                          color: $color-accent;
                          content: '⚡';
                          transform: rotate(-25deg) translate(0.5em, 1em) scale(4);
                          animation: lightning 5s infinite linear;
                        }


                        .bolt:after {
                          z-index: 2;
                          position: absolute;
                          color: $color-accent;
                          content: '⚡';
                          transform: rotate(-25deg) translate(1.2em, 2em) scale(2.2);
                          animation: lightning 2s infinite ease-in;
                        }
                        */
                        .bolt {
                            z-index: 1;
                            position: absolute;
                            background: white;
                            width: 2.5em;
                            height: 2em;
                            transform: translate(-0.1em, 0.2em) rotate(-45deg) scale(-0.8) skewX(-30deg);
                            color: white;
                            animation: lightning 5s infinite linear;
                        }

                        .bolt:before {
                            content: "";
                            z-index: 2;
                            display: block;
                            position: absolute;
                            background: #181c1d;
                            width: 1.3em;
                            height: 1.3em;
                            color: white;
                            transform: translate(1.85em, 0.3em) rotate(45deg);
                        }

                        .bolt:after {
                            content: "";
                            position: absolute;
                            display: block;
                            z-index: 2;
                            background: #181c1d;
                            width: 1.3em;
                            height: 1.3em;
                            transform: translate(-0.65em, 0.3em) rotate(45deg);
                        }

                        .bolt:nth-child(2) {
                            transform: translate(0.75em, 1.2em) scale(-0.3) rotate(-45deg) skewX(-30deg);
                            animation: lightning 2s infinite linear;
                        }

                        @keyframes harsh-wind {
                            0% {
                                transform: translate(-0.15em, 0em);
                            }
                            50% {
                                transform: translate(0.15em, 0em);
                            }
                            100% {
                                transform: translate(-0.15em, 0em);
                            }
                        }

                        @keyframes spin {
                            0% {
                                transform: rotate(0deg);
                            }
                            100% {
                                transform: rotate(360deg);
                            }
                        }

                        @keyframes spin-0 {
                            100% {
                                transform: rotate(360deg);
                            }
                        }

                        @keyframes spin-45 {
                            100% {
                                transform: rotate(405deg);
                            }
                        }

                        @keyframes spin-90 {
                            100% {
                                transform: rotate(450deg);
                            }
                        }

                        @keyframes spin-135 {
                            100% {
                                transform: rotate(495deg);
                            }
                        }

                        @keyframes drizzle {
                            0% {
                                background-color: rgba(255, 255, 255, 0.2);
                                box-shadow: 0.4em 0.4em rgba(255, 255, 255, 0.2), 0.8em 0em rgba(255, 255, 255, 0.2), 1.2em 0.4em rgba(255, 255, 255, 0.2), 1.6em 0em rgba(255, 255, 255, 0.2), 2em 0.4em rgba(255, 255, 255, 0.2), 0.8em 0.8em rgba(255, 255, 255, 0.2), 1.2em 0.4em rgba(255, 255, 255, 0.2), 1.6em 0.8em rgba(255, 255, 255, 0.2), 0.4em 1.2em rgba(255, 255, 255, 0.2), 1.2em 1.2em rgba(255, 255, 255, 0.2), 0.8em 1.6em rgba(255, 255, 255, 0.2);
                            }
                            40% {
                                background-color: white;
                                box-shadow: 0.4em 0.4em white, 0.8em 0em white, 1.2em 0.4em white, 1.6em 0em white, 2em 0.4em white, 0.8em 0.8em rgba(255, 255, 255, 0.2), 1.2em 0.4em rgba(255, 255, 255, 0.2), 1.6em 0.8em rgba(255, 255, 255, 0.2), 0.4em 1.2em rgba(255, 255, 255, 0.2), 1.2em 1.2em rgba(255, 255, 255, 0.2), 0.8em 1.6em rgba(255, 255, 255, 0.2);
                            }
                            60% {
                                background-color: rgba(255, 255, 255, 0.2);
                                box-shadow: 0.4em 0.4em rgba(255, 255, 255, 0.2), 0.8em 0em rgba(255, 255, 255, 0.2), 1.2em 0.4em rgba(255, 255, 255, 0.2), 1.6em 0em rgba(255, 255, 255, 0.2), 2em 0.4em rgba(255, 255, 255, 0.2), 0.8em 0.8em white, 1.2em 0.4em white, 1.6em 0.8em white, 0.4em 1.2em rgba(255, 255, 255, 0.2), 1.2em 1.2em rgba(255, 255, 255, 0.2), 0.8em 1.6em rgba(255, 255, 255, 0.2);
                            }
                            80% {
                                background-color: rgba(255, 255, 255, 0.2);
                                box-shadow: 0.4em 0.4em rgba(255, 255, 255, 0.2), 0.8em 0em rgba(255, 255, 255, 0.2), 1.2em 0.4em rgba(255, 255, 255, 0.2), 1.6em 0em rgba(255, 255, 255, 0.2), 2em 0.4em rgba(255, 255, 255, 0.2), 0.8em 0.8em rgba(255, 255, 255, 0.2), 1.2em 0.4em rgba(255, 255, 255, 0.2), 1.6em 0.8em rgba(255, 255, 255, 0.2), 0.4em 1.2em white, 1.2em 1.2em white, 0.8em 1.6em rgba(255, 255, 255, 0.2);
                            }
                            90% {
                                background-color: rgba(255, 255, 255, 0.2);
                                box-shadow: 0.4em 0.4em rgba(255, 255, 255, 0.2), 0.8em 0em rgba(255, 255, 255, 0.2), 1.2em 0.4em rgba(255, 255, 255, 0.2), 1.6em 0em rgba(255, 255, 255, 0.2), 2em 0.4em rgba(255, 255, 255, 0.2), 0.8em 0.8em rgba(255, 255, 255, 0.2), 1.2em 0.4em rgba(255, 255, 255, 0.2), 1.6em 0.8em rgba(255, 255, 255, 0.2), 0.4em 1.2em rgba(255, 255, 255, 0.2), 1.2em 1.2em rgba(255, 255, 255, 0.2), 0.8em 1.6em white;
                            }
                            100% {
                                background-color: rgba(255, 255, 255, 0.2);
                                box-shadow: 0.4em 0.4em rgba(255, 255, 255, 0.2), 0.8em 0em rgba(255, 255, 255, 0.2), 1.2em 0.4em rgba(255, 255, 255, 0.2), 1.6em 0em rgba(255, 255, 255, 0.2), 2em 0.4em rgba(255, 255, 255, 0.2), 0.8em 0.8em rgba(255, 255, 255, 0.2), 1.2em 0.4em rgba(255, 255, 255, 0.2), 1.6em 0.8em rgba(255, 255, 255, 0.2), 0.4em 1.2em rgba(255, 255, 255, 0.2), 1.2em 1.2em rgba(255, 255, 255, 0.2), 0.8em 1.6em rgba(255, 255, 255, 0.2);
                            }
                        }

                        @keyframes rain {
                            0% {
                                background-color: rgba(255, 255, 255, 0.2);
                                box-shadow: 0.6em 0.6em rgba(255, 255, 255, 0.2), 1.2em -0.2em rgba(255, 255, 255, 0.2), 1.2em 1.2em rgba(255, 255, 255, 0.2), 1.8em 0.2em rgba(255, 255, 255, 0.2);
                            }
                            30% {
                                background-color: white;
                                box-shadow: 0.6em 0.6em rgba(255, 255, 255, 0.2), 1.2em -0.2em white, 1.2em 1.2em rgba(255, 255, 255, 0.2), 1.8em 0.2em rgba(255, 255, 255, 0.2);
                            }
                            50% {
                                background-color: rgba(255, 255, 255, 0.2);
                                box-shadow: 0.6em 0.6em white, 1.2em -0.2em 0 rgba(255, 255, 255, 0.2), 1.2em 1.2em rgba(255, 255, 255, 0.2), 1.8em 0.2em white;
                            }
                            80% {
                                background-color: rgba(255, 255, 255, 0.2);
                                box-shadow: 0.6em 0.6em rgba(255, 255, 255, 0.2), 1.2em -0.2em rgba(255, 255, 255, 0.2), 1.2em 1.2em white, 1.8em 0.2em rgba(255, 255, 255, 0.2);
                            }
                            100% {
                                background-color: rgba(255, 255, 255, 0.2);
                                box-shadow: 0.6em 0.6em rgba(255, 255, 255, 0.2), 1.2em -0.2em rgba(255, 255, 255, 0.2), 1.2em 1.2em rgba(255, 255, 255, 0.2), 1.8em 0.2em rgba(255, 255, 255, 0.2);
                            }
                        }

                        @keyframes lightning {
                            0% {
                                background-color: white;
                            }
                            80% {
                                background-color: rgba(255, 255, 255, 0.2);
                            }
                            85% {
                                background-color: white;
                            }
                            90% {
                                background-color: rgba(255, 255, 255, 0.2);
                            }
                            100% {
                                background-color: white;
                            }
                        }

                        @keyframes move {
                            0% {
                                opacity: 0;
                            }
                            50% {
                                opacity: 0.5;
                            }
                            100% {
                                transform: scale(0.5) translate(-6em, -3em);
                                opacity: 0;
                            }
                        }
                `
        },
        template: () => {
            return `
                        <div class="icon">
                            <div class="extreme text-center">
                                <div class="harsh-wind"></div>
                                <div class="harsh-wind"></div>
                                <div class="harsh-wind"></div>
                                <div class="harsh-wind"></div>
                                <div class="harsh-wind"></div>
                                <div class="harsh-wind"></div>
                                <div class="harsh-wind"></div>
                            </div>
                        </div>
                `
        },
    },
}

export default tornadoLayout
