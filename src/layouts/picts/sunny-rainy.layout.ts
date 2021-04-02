import { WeatherTemplateLayoutOptions } from '../../../typings/domain-types'
import { WeatherPattern } from '../../../typings/enum-types'

const sunnyRainyLayout: Record<WeatherPattern.sunny_rainy, WeatherTemplateLayoutOptions> = {
    'sunny-rainy': {
        style: () => {
            return `
                        // color palette: https://coolors.co/212f45-fdac49-fcd422-fffafa

                        $background: #212f45;
                        $orange: #fdac49;
                        $yellow: #fcd422;
                        $white: #fffafa;
                        $grey: #f1f4f8;

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

                        .sun {
                            position: absolute;
                            width: 42%;
                            height: 42%;
                            top: 10%;
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
                            top: 27.5%;
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

                            $cloudLeftBorderRadius: 52% 48% 58% 42% / 43% 61% 39% 57%;
                            $cloudRightBorderRadius: 52% 48% 49% 51% / 43% 61% 39% 57%;

                            &:before {
                                @include sharedCloudSides;
                                right: unset;
                                border-radius: $cloudLeftBorderRadius;
                            }

                            &:after {
                                @include sharedCloudSides;
                                left: unset;
                                border-radius: $cloudRightBorderRadius;
                            }

                            .cloud-copy {
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                top: 0;
                                left: 0;
                                background: inherit;
                                border-radius: inherit;
                                z-index: 2;

                                &:before {
                                    @include sharedCloudSides;
                                    right: unset;
                                    border-radius: $cloudLeftBorderRadius;
                                }

                                &:after {
                                    @include sharedCloudSides;
                                    left: unset;
                                    border-radius: $cloudRightBorderRadius;
                                }
                            }

                            .rain {
                                position: absolute;
                                width: 140%;
                                height: 100%;
                                left: -20%;
                                top: 80%;
                                z-index: 1;
                                overflow: hidden;

                                @mixin sharedDrop {
                                    position: absolute;
                                    width: 3%;
                                    height: 20%;
                                    top: -20%;
                                    background: $white;
                                    border-radius: 1rem;
                                    transform: rotate(22deg);
                                }

                                $firstRain: rainDropFall 4s linear infinite;
                                $secondRain: rainDropFall 4s 1s linear infinite;
                                $thirdRain: rainDropFall 4s 2s linear infinite;
                                $fourthRain: rainDropFall 4s 3s linear infinite;

                                .drop:nth-of-type(1) {
                                    @include sharedDrop;
                                    animation: $secondRain;
                                    left: 10%;
                                }

                                .drop:nth-of-type(2) {
                                    @include sharedDrop;
                                    animation: $firstRain;
                                    left: 28.5%;
                                }

                                .drop:nth-of-type(3) {
                                    @include sharedDrop;
                                    animation: $secondRain;
                                    left: 47%;
                                }

                                .drop:nth-of-type(4) {
                                    @include sharedDrop;
                                    animation: $firstRain;
                                    right: 28.5%;
                                }

                                .drop:nth-of-type(5) {
                                    @include sharedDrop;
                                    animation: $secondRain;
                                    right: 10%;
                                }

                                .drop:nth-of-type(6) {
                                    @include sharedDrop;
                                    animation: $thirdRain;
                                    left: 28.5%;
                                }

                                .drop:nth-of-type(7) {
                                    @include sharedDrop;
                                    animation: $thirdRain;
                                    right: 28.5%;
                                }

                                .drop:nth-of-type(8) {
                                    @include sharedDrop;
                                    animation: $fourthRain;
                                    left: 10%;
                                }

                                .drop:nth-of-type(9) {
                                    @include sharedDrop;
                                    animation: $fourthRain;
                                    left: 47%;
                                }

                                .drop:nth-of-type(10) {
                                    @include sharedDrop;
                                    animation: $fourthRain;
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
                `
        },
    },
}

export default sunnyRainyLayout
