import { WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
import { WeatherPattern } from '../../../../typings/enum-types'

const thunderstormLayout: Record<WeatherPattern.thunderstorm, WeatherTemplateLayoutOptions> = {
    [WeatherPattern.thunderstorm]: {
        style: () => {
            return `
                        // color palette: https://coolors.co/212f45-fdac49-fcd422-fffafa

                        *,
                        *:before,
                        *:after {
                            box-sizing: border-box;
                        }

                        body {
                            width: 100%;
                            height: 100vh;
                            display: grid;
                            place-items: center;
                            background: #212f45;
                        }

                        .container {
                            width: 100%;
                            max-width: 40%;
                        }

                        .container .canvas {
                            position: relative;
                            padding-top: 100%;
                            overflow: hidden;
                        }

                        .cloud {
                            position: absolute;
                            width: 40%;
                            height: 40%;
                            top: 27.5%;
                            left: 30%;
                            background: #fffafa;
                            border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
                            animation: cloudColorChange 3s linear infinite;
                        }

                        @keyframes cloudColorChange {
                            0%, 100% {
                                background: #fffafa;
                            }
                            50% {
                                background: #a3a3a3;
                            }
                        }

                        .cloud:before {
                            content: "";
                            position: absolute;
                            width: 85%;
                            height: 85%;
                            top: 10%;
                            left: -50%;
                            right: -50%;
                            background: inherit;
                            right: unset;
                            border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
                        }

                        .cloud:after {
                            content: "";
                            position: absolute;
                            width: 85%;
                            height: 85%;
                            top: 10%;
                            left: -50%;
                            right: -50%;
                            background: inherit;
                            left: unset;
                            border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
                        }

                        .cloud .cloud-copy {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            background: inherit;
                            border-radius: inherit;
                            z-index: 2;
                        }

                        .cloud .cloud-copy:before {
                            content: "";
                            position: absolute;
                            width: 85%;
                            height: 85%;
                            top: 10%;
                            left: -50%;
                            right: -50%;
                            background: inherit;
                            right: unset;
                            border-radius: 52% 48% 58% 42%/43% 61% 39% 57%;
                        }

                        .cloud .cloud-copy:after {
                            content: "";
                            position: absolute;
                            width: 85%;
                            height: 85%;
                            top: 10%;
                            left: -50%;
                            right: -50%;
                            background: inherit;
                            left: unset;
                            border-radius: 52% 48% 49% 51%/43% 61% 39% 57%;
                        }

                        .cloud .rain {
                            position: absolute;
                            width: 140%;
                            height: 100%;
                            left: -20%;
                            top: 80%;
                            z-index: 1;
                            overflow: hidden;
                        }

                        @keyframes rainDropFall {
                            15% {
                                opacity: 1;
                            }
                            75% {
                                opacity: 0;
                            }
                            100% {
                                top: 120%;
                                opacity: 0;
                            }
                        }

                        .cloud .rain .drop:nth-of-type(1) {
                            position: absolute;
                            width: 3%;
                            height: 20%;
                            top: -20%;
                            background: #fffafa;
                            border-radius: 1rem;
                            transform: rotate(22deg);
                            animation: rainDropFall 4s 1s linear infinite;
                            left: 10%;
                        }

                        .cloud .rain .drop:nth-of-type(2) {
                            position: absolute;
                            width: 3%;
                            height: 20%;
                            top: -20%;
                            background: #fffafa;
                            border-radius: 1rem;
                            transform: rotate(22deg);
                            animation: rainDropFall 4s linear infinite;
                            left: 28.5%;
                        }

                        .cloud .rain .drop:nth-of-type(3) {
                            position: absolute;
                            width: 3%;
                            height: 20%;
                            top: -20%;
                            background: #fffafa;
                            border-radius: 1rem;
                            transform: rotate(22deg);
                            animation: rainDropFall 4s 1s linear infinite;
                            left: 47%;
                        }

                        .cloud .rain .drop:nth-of-type(4) {
                            position: absolute;
                            width: 3%;
                            height: 20%;
                            top: -20%;
                            background: #fffafa;
                            border-radius: 1rem;
                            transform: rotate(22deg);
                            animation: rainDropFall 4s linear infinite;
                            right: 28.5%;
                        }

                        .cloud .rain .drop:nth-of-type(5) {
                            position: absolute;
                            width: 3%;
                            height: 20%;
                            top: -20%;
                            background: #fffafa;
                            border-radius: 1rem;
                            transform: rotate(22deg);
                            animation: rainDropFall 4s 1s linear infinite;
                            right: 10%;
                        }

                        .cloud .rain .drop:nth-of-type(6) {
                            position: absolute;
                            width: 3%;
                            height: 20%;
                            top: -20%;
                            background: #fffafa;
                            border-radius: 1rem;
                            transform: rotate(22deg);
                            animation: rainDropFall 4s 2s linear infinite;
                            left: 28.5%;
                        }

                        .cloud .rain .drop:nth-of-type(7) {
                            position: absolute;
                            width: 3%;
                            height: 20%;
                            top: -20%;
                            background: #fffafa;
                            border-radius: 1rem;
                            transform: rotate(22deg);
                            animation: rainDropFall 4s 2s linear infinite;
                            right: 28.5%;
                        }

                        .cloud .rain .drop:nth-of-type(8) {
                            position: absolute;
                            width: 3%;
                            height: 20%;
                            top: -20%;
                            background: #fffafa;
                            border-radius: 1rem;
                            transform: rotate(22deg);
                            animation: rainDropFall 4s 3s linear infinite;
                            left: 10%;
                        }

                        .cloud .rain .drop:nth-of-type(9) {
                            position: absolute;
                            width: 3%;
                            height: 20%;
                            top: -20%;
                            background: #fffafa;
                            border-radius: 1rem;
                            transform: rotate(22deg);
                            animation: rainDropFall 4s 3s linear infinite;
                            left: 47%;
                        }

                        .cloud .rain .drop:nth-of-type(10) {
                            position: absolute;
                            width: 3%;
                            height: 20%;
                            top: -20%;
                            background: #fffafa;
                            border-radius: 1rem;
                            transform: rotate(22deg);
                            animation: rainDropFall 4s 3s linear infinite;
                            right: 10%;
                        }

                        .cloud .rain .lightning {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            animation: lightningFlash 2s linear infinite;
                        }

                        @keyframes lightningFlash {
                            0%, 39% {
                                opacity: 0;
                            }
                            40%, 60% {
                                opacity: 1;
                            }
                            61%, 100% {
                                opacity: 0;
                            }
                        }

                        .cloud .rain .lightning:before {
                            content: "";
                            position: absolute;
                            width: 10%;
                            height: 50%;
                            left: 47%;
                            top: 5%;
                            right: 47%;
                            bottom: 5%;
                            transform: rotate(20deg);
                            background: #fcd422;
                            bottom: unset;
                            right: unset;
                            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                        }

                        .cloud .rain .lightning:after {
                            content: "";
                            position: absolute;
                            width: 10%;
                            height: 50%;
                            left: 47%;
                            top: 5%;
                            right: 47%;
                            bottom: 5%;
                            transform: rotate(20deg);
                            background: #fcd422;
                            top: unset;
                            left: unset;
                            clip-path: polygon(50% 100%, 0 0, 100% 0);
                        }
                `
        },
        template: () => {
            return `
                        <div class="container">
                            <div class="canvas">
                                <div class="cloud">
                                    <div class="cloud-copy"></div>
                                    <div class="rain">
                                        <div class="drop"></div>
                                        <div class="drop"></div>
                                        <div class="drop"></div>
                                        <div class="drop"></div>
                                        <div class="drop"></div>
                                        <div class="drop"></div>
                                        <div class="drop"></div>
                                        <div class="drop"></div>
                                        <div class="drop"></div>
                                        <div class="drop"></div>
                                        <div class="lightning"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
        },
    },
}

export default thunderstormLayout
