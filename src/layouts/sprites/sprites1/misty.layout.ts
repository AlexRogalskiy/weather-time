import { WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
import { WeatherPattern } from '../../../../typings/enum-types'

const mistyLayout: Record<WeatherPattern.misty, WeatherTemplateLayoutOptions> = {
    [WeatherPattern.misty]: {
        style: () => {
            return `
                        // color palette: https://coolors.co/212f45-fdac49-fcd422-fffafa

                        $background: #212f45;
                        $orange: #fdac49;
                        $yellow: #fcd422;
                        $white: #fffafa;
                        $gray: #a3a3a3;

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
                            background: $background;
                        }

                        .container {
                            width: 100%;
                            max-width: 40%;

                            .canvas {
                                position: relative;
                                padding-top: 100%;
                                overflow: hidden;
                            }
                        }

                        .mist {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;

                            @mixin sharedMistLine {
                                position: absolute;
                                height: 7%;
                                background: $white;
                                border-radius: 10rem;
                            }

                            .mist-line:nth-of-type(1) {
                                @include sharedMistLine;
                                width: 40%;
                                top: 16%;
                                right: 25%;
                            }

                            .mist-line:nth-of-type(2) {
                                @include sharedMistLine;
                                width: 40%;
                                top: 31%;
                                left: 20%;
                            }

                            .mist-line:nth-of-type(3) {
                                @include sharedMistLine;
                                width: 50%;
                                top: 46%;
                                left: 25%;
                            }

                            .mist-line:nth-of-type(4) {
                                @include sharedMistLine;
                                width: 40%;
                                top: 61%;
                                right: 20%;
                            }

                            .mist-line:nth-of-type(5) {
                                @include sharedMistLine;
                                width: 50%;
                                top: 76%;
                                left: 25%;
                            }
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
