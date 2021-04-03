import { WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
import { WeatherPattern } from '../../../../typings/enum-types'

const sunnyLayout: Record<WeatherPattern.sunny, WeatherTemplateLayoutOptions> = {
    [WeatherPattern.sunny]: {
        style: () => {
            return `
                        // color palette: https://coolors.co/212f45-fdac49-fcd422-fffafa

                        $background: #212f45;
                        $orange: #fdac49;
                        $yellow: #fcd422;
                        $white: #fffafa;
                        $gray: #a3a3a3;

                        $triangleUp: polygon(50% 0%, 0% 100%, 100% 100%);
                        $triangleDown: polygon(50% 100%, 0 0, 100% 0);

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
                            }
                        }

                        .sun {
                            position: absolute;
                            width: 70%;
                            height: 70%;
                            top: 15%;
                            left: 15%;
                            background: radial-gradient($orange, $yellow);
                            border-radius: 50%;
                            animation: spinSun 20s linear infinite;

                            &:after {
                                content: "";
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                top: 0%;
                                left: 0%;
                                background: inherit;
                                border-radius: 50%;
                            }

                            @mixin sharedBeam {
                                position: absolute;
                                width: 15%;
                                height: 140%;
                                top: -20%;
                                left: 42.5%;
                                outline: 1px solid $background;

                                &:before {
                                    content: "";
                                    position: absolute;
                                    width: 100%;
                                    height: 13%;
                                    clip-path: $triangleUp;
                                }

                                &:after {
                                    content: "";
                                    position: absolute;
                                    bottom: 0;
                                    width: 100%;
                                    height: 13%;
                                    clip-path: $triangleDown;
                                }
                            }

                            .beam:nth-child(even) {
                                &:before {
                                    background: $orange;
                                }

                                &:after {
                                    background: $orange;
                                }
                            }

                            .beam:nth-child(odd) {
                                &:before {
                                    background: $yellow;
                                }

                                &:after {
                                    background: $yellow;
                                }
                            }

                            .beam:nth-of-type(1) {
                                @include sharedBeam;
                            }

                            .beam:nth-of-type(2) {
                                @include sharedBeam;
                                transform: rotate(22.5deg);
                            }

                            .beam:nth-of-type(3) {
                                @include sharedBeam;
                                transform: rotate(45deg);
                            }

                            .beam:nth-of-type(4) {
                                @include sharedBeam;
                                transform: rotate(67.5deg);
                            }

                            .beam:nth-of-type(5) {
                                @include sharedBeam;
                                transform: rotate(90deg);
                            }

                            .beam:nth-of-type(6) {
                                @include sharedBeam;
                                transform: rotate(112.5deg);
                            }

                            .beam:nth-of-type(7) {
                                @include sharedBeam;
                                transform: rotate(135deg);
                            }

                            .beam:nth-of-type(8) {
                                @include sharedBeam;
                                transform: rotate(157.5deg);
                            }

                            @keyframes spinSun {
                                0% {
                                    transform: rotate(0deg);
                                }
                                100% {
                                    transform: rotate(360deg);
                                }
                            }
                        }
                `
        },
        template: () => {
            return `
                        <div class="container">
                            <div class="canvas">
                                <div class="sun">
                                    <div class="beam"></div>
                                    <div class="beam"></div>
                                    <div class="beam"></div>
                                    <div class="beam"></div>
                                    <div class="beam"></div>
                                    <div class="beam"></div>
                                    <div class="beam"></div>
                                    <div class="beam"></div>
                                </div>
                            </div>
                        </div>
                `
        },
    },
}

export default sunnyLayout
