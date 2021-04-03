import { WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
import { WeatherPattern } from '../../../../typings/enum-types'

const cloudyLayout: Record<WeatherPattern.cloudy, WeatherTemplateLayoutOptions> = {
    [WeatherPattern.cloudy]: {
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

                        .clouds .cloud:nth-of-type(1) {
                            width: 20%;
                            height: 20%;
                            top: 10%;
                            left: 25%;
                            animation: cloudColorChange 3s linear infinite;
                        }

                        .clouds .cloud:nth-of-type(2) {
                            width: 30%;
                            height: 30%;
                            top: 35%;
                            right: 20%;
                            animation: cloudColorChange 3s 1s linear infinite;
                        }

                        .clouds .cloud:nth-of-type(3) {
                            width: 20%;
                            height: 20%;
                            top: 72%;
                            left: 35%;
                            animation: cloudColorChange 3s 2s linear infinite;
                        }
                `
        },
        template: () => {
            return `
                        <div class="container">
                            <div class="canvas">
                                <div class="clouds">
                                    <div class="cloud"></div>
                                    <div class="cloud"></div>
                                    <div class="cloud"></div>
                                </div>
                            </div>
                        </div>
                `
        },
    },
}

export default cloudyLayout
