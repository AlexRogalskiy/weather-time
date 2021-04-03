import { WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
import { WeatherPattern } from '../../../../typings/enum-types'

const cloudyLayout: Record<WeatherPattern.cloudy, WeatherTemplateLayoutOptions> = {
    [WeatherPattern.cloudy]: {
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
                            $cloudColorChange3: cloudColorChange 3s 2s linear infinite;

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
                            }

                            .cloud:nth-of-type(1) {
                                width: 20%;
                                height: 20%;
                                top: 10%;
                                left: 25%;
                                animation: $cloudColorChange1;
                            }

                            .cloud:nth-of-type(2) {
                                width: 30%;
                                height: 30%;
                                top: 35%;
                                right: 20%;
                                animation: $cloudColorChange2;
                            }

                            .cloud:nth-of-type(3) {
                                width: 20%;
                                height: 20%;
                                top: 72%;
                                left: 35%;
                                animation: $cloudColorChange3;
                            }
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
