import { WeatherTemplateLayoutOptions } from '../../../typings/domain-types'
import { WeatherPattern } from '../../../typings/enum-types'

const rainyLayout: Record<WeatherPattern.rainy, WeatherTemplateLayoutOptions> = {
    rainy: {
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
                            }
                        }

                        .clouds {
                            $cloudBorderRadiusLeft: 52% 48% 58% 42% / 43% 61% 39% 57%;
                            $cloudBorderRadiusMiddle: 44% 56% 49% 51% / 71% 63% 37% 29%;
                            $cloudBorderRadiusRight: 52% 48% 49% 51% / 43% 61% 39% 57%;
                            $cloudColorChange1: cloudColorChange 3s linear infinite;
                            $cloudColorChange2: cloudColorChange 3s 1s linear infinite;

                            @keyframes cloudColorChange {
                                0%,
                                100% {
                                    background: $white;
                                }
                                50% {
                                    background: $gray;
                                }
                            }

                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;

                            .cloud {
                                position: absolute;
                                background: $white;
                                border-radius: $cloudBorderRadiusMiddle;

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
                                    border-radius: $cloudBorderRadiusLeft;
                                }

                                &:after {
                                    @include sharedCloudSides;
                                    left: unset;
                                    border-radius: $cloudBorderRadiusRight;
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
                                        border-radius: $cloudBorderRadiusLeft;
                                    }

                                    &:after {
                                        @include sharedCloudSides;
                                        left: unset;
                                        border-radius: $cloudBorderRadiusRight;
                                    }
                                }
                            }

                            .cloud:nth-of-type(1) {
                                width: 20%;
                                height: 20%;
                                top: 10%;
                                left: 20%;
                                animation: $cloudColorChange1;
                            }

                            .cloud:nth-of-type(2) {
                                width: 30%;
                                height: 30%;
                                top: 45%;
                                right: 20%;
                                animation: $cloudColorChange2;
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

export default rainyLayout
