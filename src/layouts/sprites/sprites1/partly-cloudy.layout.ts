import { WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
import { WeatherPattern } from '../../../../typings/enum-types'

const partlyCloudyLayout: Record<WeatherPattern.partly_cloudy, WeatherTemplateLayoutOptions> = {
    [WeatherPattern.partly_cloudy]: {
        style: () => {
            return `
                        // color palette: https://coolors.co/212f45-fdac49-fcd422-fffafa

                        $background: #212f45;
                        $orange: #fdac49;
                        $yellow: #fcd422;
                        $white: #fffafa;
                        $gray: #f1f4f8;

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
                            width: 42%;
                            height: 42%;
                            top: 25%;
                            right: 15%;
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

                                &:before {
                                    content: "";
                                    position: absolute;
                                    width: 100%;
                                    height: 13%;
                                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                                }

                                &:after {
                                    content: "";
                                    position: absolute;
                                    bottom: 0;
                                    width: 100%;
                                    height: 13%;
                                    clip-path: polygon(50% 100%, 0 0, 100% 0);
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

                        .cloud {
                            position: absolute;
                            width: 40%;
                            height: 40%;
                            top: 40%;
                            left: 25%;
                            background: $white;
                            border-radius: 44% 56% 49% 51% / 71% 63% 37% 29%;

                            @mixin sharedCloudSides {
                                content: "";
                                position: absolute;
                                width: 85%;
                                height: 85%;
                                top: 10%;
                                left: -50%;
                                right: -50%;
                                background: inherit;
                            }

                            &:before {
                                @include sharedCloudSides;
                                right: unset;
                                border-radius: 52% 48% 58% 42% / 43% 61% 39% 57%;
                            }

                            &:after {
                                @include sharedCloudSides;
                                left: unset;
                                border-radius: 52% 48% 49% 51% / 43% 61% 39% 57%;
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
                                <div class="cloud"></div>
                            </div>
                        </div>
                `
        },
    },
}

export default partlyCloudyLayout
