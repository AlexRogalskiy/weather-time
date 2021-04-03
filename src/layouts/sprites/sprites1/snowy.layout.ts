import { WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
import { WeatherPattern } from '../../../../typings/enum-types'

const snowyLayout: Record<WeatherPattern.snowy, WeatherTemplateLayoutOptions> = {
    [WeatherPattern.snowy]: {
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
                        }

                        .clouds {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                        }

                        @keyframes cloudColorChange {
                            0%, 100% {
                                background: #fffafa;
                            }
                            50% {
                                background: #a3a3a3;
                            }
                        }

                        .clouds .cloud {
                            position: absolute;
                            background: #fffafa;
                            border-radius: 44% 56% 49% 51%/71% 63% 37% 29%;
                        }

                        .clouds .cloud:before {
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

                        .clouds .cloud:after {
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

                        .clouds .cloud .cloud-copy {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            background: inherit;
                            border-radius: inherit;
                            z-index: 2;
                        }

                        .clouds .cloud .cloud-copy:before {
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

                        .clouds .cloud .cloud-copy:after {
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

                        .clouds .cloud:nth-of-type(1) {
                            width: 20%;
                            height: 20%;
                            top: 10%;
                            left: 20%;
                            animation: cloudColorChange 3s linear infinite;
                        }

                        .clouds .cloud:nth-of-type(2) {
                            width: 30%;
                            height: 30%;
                            top: 45%;
                            right: 20%;
                            animation: cloudColorChange 3s 1s linear infinite;
                        }

                        .clouds .rain {
                            position: absolute;
                            width: 140%;
                            height: 100%;
                            left: -20%;
                            top: 80%;
                            z-index: 1;
                            overflow: hidden;
                        }

                        .clouds .rain .drop:nth-of-type(1) {
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

                        .clouds .rain .drop:nth-of-type(2) {
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

                        .clouds .rain .drop:nth-of-type(3) {
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

                        .clouds .rain .drop:nth-of-type(4) {
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

                        .clouds .rain .drop:nth-of-type(5) {
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

                        .clouds .rain .drop:nth-of-type(6) {
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

                        .clouds .rain .drop:nth-of-type(7) {
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

                        .clouds .rain .drop:nth-of-type(8) {
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

                        .clouds .rain .drop:nth-of-type(9) {
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

                        .clouds .rain .drop:nth-of-type(10) {
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
                `
        },
        template: () => {
            return `
                        <div class="container">
                            <div class="canvas">
                                <div class="clouds">
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
                                        </div>
                                    </div>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
        },
    },
}

export default snowyLayout
