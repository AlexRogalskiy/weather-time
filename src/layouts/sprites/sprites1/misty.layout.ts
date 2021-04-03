import { WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
import { WeatherPattern } from '../../../../typings/enum-types'

const mistyLayout: Record<WeatherPattern.misty, WeatherTemplateLayoutOptions> = {
    [WeatherPattern.misty]: {
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

                        .mist {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                        }

                        .mist .mist-line:nth-of-type(1) {
                            position: absolute;
                            height: 7%;
                            background: #fffafa;
                            border-radius: 10rem;
                            width: 40%;
                            top: 16%;
                            right: 25%;
                        }

                        .mist .mist-line:nth-of-type(2) {
                            position: absolute;
                            height: 7%;
                            background: #fffafa;
                            border-radius: 10rem;
                            width: 40%;
                            top: 31%;
                            left: 20%;
                        }

                        .mist .mist-line:nth-of-type(3) {
                            position: absolute;
                            height: 7%;
                            background: #fffafa;
                            border-radius: 10rem;
                            width: 50%;
                            top: 46%;
                            left: 25%;
                        }

                        .mist .mist-line:nth-of-type(4) {
                            position: absolute;
                            height: 7%;
                            background: #fffafa;
                            border-radius: 10rem;
                            width: 40%;
                            top: 61%;
                            right: 20%;
                        }

                        .mist .mist-line:nth-of-type(5) {
                            position: absolute;
                            height: 7%;
                            background: #fffafa;
                            border-radius: 10rem;
                            width: 50%;
                            top: 76%;
                            left: 25%;
                        }
                `
        },
        template: () => {
            return `
                        <div class="container">
                            <div class="canvas">
                                <div class="mist">
                                    <div class="mist-line"></div>
                                    <div class="mist-line"></div>
                                    <div class="mist-line"></div>
                                    <div class="mist-line"></div>
                                    <div class="mist-line"></div>
                                </div>
                            </div>
                        </div>
                `
        },
    },
}

export default mistyLayout
