import { WeatherTemplateLayoutOptions } from '../../../../typings/domain-types'
import { WeatherPattern } from '../../../../typings/enum-types'

const cloudyLayout: Record<WeatherPattern.cloudy, WeatherTemplateLayoutOptions> = {
    [WeatherPattern.cloudy]: {
        style: () => {
            return `
                        .fog {
                            position: absolute;
                            -webkit-animation: fog 10s infinite alternate ease-in-out;
                            background: transparent;
                            border-radius: 10px;
                            height: 5px;
                            width: 100px;
                            position: absolute;
                            left: 30px;
                            top: 95px;
                            box-shadow: #CCCCCC 65px -25px 0 -5px,
                            #CCCCCC 25px -25px,
                            #CCCCCC 5px 0px 0 2px,
                            #CCCCCC 10px 0px 0 2px;
                            -webkit-filter: blur(25px);
                        }

                        .fog:before {
                            -webkit-animation: fogbefore 9s infinite alternate ease-in-out;
                            background: black;
                            border-radius: 10px;
                            content: '';
                            height: 5px;
                            width: 100px;
                            position: absolute;
                            left: 61px;
                            top: 23px;
                        }

                        .fog:after {
                            -webkit-animation: fogafter 12s infinite alternate ease-in-out;
                            background: white;
                            border-radius: 10px;
                            content: '';
                            height: 5px;
                            width: 100px;
                            position: absolute;
                            left: 41px;
                            top: 13px;
                            box-shadow: #CCCCCC 65px -25px 0 -5px,
                            #CCCCCC 25px -25px,
                            #CCCCCC 5px 0px 0 2px,
                            #CCCCCC -10px -10px 0 2px,
                            #CCCCCC -15px -10px 0 2px,
                            #CCCCCC -20px -20px 0 2px,
                            #CCCCCC -25px -10px 0 2px,
                            black -30px -30px 0 2px,
                            #CCCCCC -35px -10px 0 2px,
                            #CCCCCC -40px -40px 0 2px,
                            #CCCCCC -45px -50px 0 2px,
                            #CCCCCC -50px 0px 0 2px,
                            #CCCCCC -55px 0px 0 2px,
                            #CCCCCC -60px 0px 0 2px,
                            #CCCCCC -65px 0px 0 2px,
                            #CCCCCC -70px 0px 0 2px,
                            #CCCCCC -75px 0px 0 2px;
                        }

                        @-webkit-keyframes fog {
                            0% {
                                -webkit-transform: translateX(25px);
                            }

                            50% {
                                -webkit-transform: translateX(0px);
                            }

                            100% {
                                -webkit-transform: translateX(25px);
                            }
                        }

                        @-webkit-keyframes fogbefore {
                            0% {
                                -webkit-transform: translateX(10px);
                                box-shadow: black 65px -25px 0 -5px,
                                #CCCCCC 25px -25px,
                                #CCCCCC 5px 0px 0 2px,
                                black -10px -10px 0 2px,
                                #CCCCCC -15px -10px 0 2px,
                                #CCCCCC -20px -20px 0 2px,
                                #CCCCCC -25px -10px 0 2px,
                                black -30px 0px 0 2px,
                                #CCCCCC -35px -10px 0 2px,
                                #CCCCCC -40px -40px 0 2px,
                                black -45px -50px 0 2px;
                            }

                            50% {
                                -webkit-transform: translateX(0px);
                            }

                            100% {
                                -webkit-transform: translateX(10px);
                            }
                        }

                        @-webkit-keyframes fogafter {
                            0% {
                                -webkit-transform: translateX(10px);
                            }

                            50% {
                                -webkit-transform: translateX(0px);
                                box-shadow: #CCCCCC 65px 0px 0 -5px,
                                #CCCCCC 25px 0px,
                                #CCCCCC 5px 0px 0 2px,
                                #CCCCCC -10px 0px 0 2px,
                                #CCCCCC -15px 0px 0 2px,
                                #CCCCCC -20px 0px 0 2px,
                                #CCCCCC -25px 0px 0 2px,
                                black -30px -10px 0 2px,
                                #CCCCCC -35px -10px 0 2px,
                                #CCCCCC -40px -40px 0 2px,
                                #CCCCCC -45px -50px 0 2px,
                                #CCCCCC -50px -10px 0 2px,
                                #CCCCCC -55px -15px 0 2px,
                                black -60px -40px 0 2px,
                                #CCCCCC -65px 0px 0 2px,
                                white -70px -30px 0 2px,
                                #CCCCCC -75px 0px 0 2px;
                            }

                            100% {
                                -webkit-transform: translateX(10px);
                            }
                        }

                        .tornado {
                            position: absolute;
                            -webkit-animation: tfirst 5s infinite alternate ease-in-out;
                            background: #CCCCCC;
                            border-radius: 50%;
                            box-shadow: #CCCCCC 65px -25px 0 -5px,
                            #CCCCCC 25px -25px,
                            #CCCCCC 5px 0px 0 2px,
                            #CCCCCC 10px 0px 0 2px,
                            #CCCCCC 15px 0px 0 2px,
                            #CCCCCC 20px 0px 0 2px,
                            #CCCCCC 25px 0px 0 2px,
                            #CCCCCC 30px 0px 0 2px,
                            #CCCCCC 35px 0px 0 2px,
                            #CCCCCC 40px 0px 0 2px,
                            #CCCCCC 45px 0px 0 2px,
                            #CCCCCC 50px 0px 0 2px,
                            #CCCCCC 55px 0px 0 2px,
                            #CCCCCC 60px 0px 0 2px,
                            #CCCCCC 65px 0px 0 2px,
                            #CCCCCC 70px 0px 0 2px,
                            #CCCCCC 75px 0px 0 2px;
                            height: 50px;
                            width: 50px;
                            position: absolute;
                            left: 30px;
                            top: 80px;
                        }

                        .tornado:before {
                            -webkit-animation: tsecond 5s infinite alternate ease-in-out;
                            background: #393939;
                            border-radius: 10px;
                            content: '';
                            height: 10px;
                            width: 20px;
                            position: absolute;
                            left: 41px;
                            top: 73px;
                        }

                        .tornado:after {
                            -webkit-animation: tthird 5s infinite alternate ease-in-out;
                            background: #393939;
                            border-radius: 4px;
                            content: '';
                            height: 10px;
                            width: 10px;
                            position: absolute;
                            box-shadow: #393939 1px 0px 0 0px,
                            #393939 2px 0px 0 0px,
                            #393939 3px 0px 0 0px,
                            #393939 4px 0px 0 0px,
                            #393939 5px 0px 0 0px,
                            #393939 6px 0px 0 0px,
                            #393939 7px 0px 0 0px,
                            #393939 8px 0px 0 0px,
                            #393939 9px 0px 0 0px,
                            #393939 10px 0px 0 0px,
                            #393939 11px 0px 0 0px,
                            #393939 12px 0px 0 0px,
                            #393939 13px 0px 0 0px,
                            #393939 14px 0px 0 0px,
                            #393939 15px 0px 0 0px,
                            #393939 16px 0px 0 0px,
                            #393939 17px 0px 0 0px,
                            #393939 18px 0px 0 0px,
                            #393939 19px 0px 0 0px,
                            #393939 20px 0px 0 0px,
                            #393939 10px 26px 0 -1px,
                            #393939 11px 26px 0 -1px;
                            left: 35px;
                            top: 59px;
                        }

                        @-webkit-keyframes tfirst {
                            0% {
                                -webkit-transform: translateX(25px);
                            }

                            50% {
                                -webkit-transform: translateX(0px);
                            }

                            100% {
                                -webkit-transform: translateX(25px);
                            }
                        }

                        @-webkit-keyframes tsecond {
                            0% {
                                -webkit-transform: translateX(30px);
                            }
                            50% {
                                -webkit-transform: translateX(-5px);
                            }

                            100% {
                                -webkit-transform: translateX(30px);
                            }
                        }

                        @-webkit-keyframes tthird {
                            0% {
                                -webkit-transform: translateX(25px);
                            }

                            50% {
                                -webkit-transform: translateX(0px);
                            }

                            100% {
                                -webkit-transform: translateX(25px);
                            }
                        }

                        .sunny {
                            -webkit-animation: sunny 9s linear infinite;
                            background: #ffe400;
                            border-radius: 100%;
                            box-shadow: rgba(255, 255, 0, 0.1) 0 0 5px 5px;
                            content: '';
                            height: 90px;
                            width: 90px;
                            position: absolute;
                            left: 60px;
                            top: 60px;
                        }

                        .sunny:before {
                            -webkit-animation: sunglow 9s ease-in-out infinite;
                            background: #FFEE44;
                            box-shadow: rgba(255, 255, 0, 1) 0 0 5px 1px;
                            border-radius: 100%;
                            content: '';
                            height: 86px;
                            width: 86px;
                            position: absolute;
                            left: 2px;
                            top: 2px;
                        }

                        .sunny:after {
                            -webkit-animation: sunshadow 9s ease-in-out infinite;
                            background: #000000;
                            border-radius: 50%;
                            content: '';
                            height: 15px;
                            width: 120px;
                            opacity: 0.2;
                            position: absolute;
                            left: -15px;
                            bottom: -40px;
                            -webkit-transform: scale(.7);
                        }

                        @-webkit-keyframes sunny {
                            50% {
                                -webkit-transform: translateY(-20px);
                                box-shadow: rgba(255, 255, 0, 0.2) 0 0 5px 15px;
                            }
                        }

                        @-webkit-keyframes sunglow {
                            50% {
                                box-shadow: rgba(255, 255, 0, 0.1) 0 0 5px 10px;
                            }
                        }

                        @-webkit-keyframes sunshadow {
                            50% {
                                -webkit-transform: translateY(20px) scale(1);
                                opacity: .05;
                            }
                        }

                        /* CLOUDY */
                        .cloudy {
                            -webkit-animation: cloudy 9s ease-in-out infinite;
                            background: #FFFFFF;
                            border-radius: 50%;
                            box-shadow: #ffffff 65px -25px 0 -5px,
                            #ffffff 25px -25px,
                            #ffffff 5px 0px 0 2px,
                            #ffffff 10px 0px 0 2px,
                            #ffffff 15px 0px 0 2px,
                            #ffffff 20px 0px 0 2px,
                            #ffffff 25px 0px 0 2px,
                            #ffffff 30px 0px 0 2px,
                            #ffffff 35px 0px 0 2px,
                            #ffffff 40px 0px 0 2px,
                            #ffffff 45px 0px 0 2px,
                            #ffffff 50px 0px 0 2px,
                            #ffffff 55px 0px 0 2px,
                            #ffffff 60px 0px 0 2px,
                            #ffffff 65px 0px 0 2px,
                            #ffffff 70px 0px 0 2px,
                            #ffffff 75px 0px 0 2px;
                            height: 50px;
                            width: 50px;
                            position: absolute;
                            left: 40px;
                            top: 80px;
                        }

                        .cloudy:after {
                            -webkit-animation: cloudy_shadow 9s ease-in-out infinite;
                            background: #000000;
                            border-radius: 50%;
                            content: '';
                            height: 15px;
                            width: 120px;
                            opacity: 0.2;
                            position: absolute;
                            left: 5px;
                            bottom: -60px;
                            -webkit-transform: scale(.7);
                        }

                        @-webkit-keyframes cloudy {
                            50% {
                                -webkit-transform: translateY(-20px);
                            }
                        }

                        @-webkit-keyframes cloudy_shadow {
                            50% {
                                -webkit-transform: translateY(20px) scale(1);
                                opacity: .05;
                            }
                        }

                        /*Rain*/
                        .rain {
                            -webkit-animation: rain 9s ease-in-out infinite 1s;
                            background: #CCCCCC;
                            border-radius: 50%;
                            box-shadow: #CCCCCC 65px -25px 0 -5px,
                            #CCCCCC 25px -25px,
                            #CCCCCC 5px 0px 0 2px,
                            #CCCCCC 10px 0px 0 2px,
                            #CCCCCC 15px 0px 0 2px,
                            #CCCCCC 20px 0px 0 2px,
                            #CCCCCC 25px 0px 0 2px,
                            #CCCCCC 30px 0px 0 2px,
                            #CCCCCC 35px 0px 0 2px,
                            #CCCCCC 40px 0px 0 2px,
                            #CCCCCC 45px 0px 0 2px,
                            #CCCCCC 50px 0px 0 2px,
                            #CCCCCC 55px 0px 0 2px,
                            #CCCCCC 60px 0px 0 2px,
                            #CCCCCC 65px 0px 0 2px,
                            #CCCCCC 70px 0px 0 2px,
                            #CCCCCC 75px 0px 0 2px;
                            display: block;
                            height: 50px;
                            width: 50px;
                            position: absolute;
                            left: 40px;
                            top: 80px;
                        }

                        .rain:after {
                            -webkit-animation: rain_shadow 9s ease-in-out infinite 1s;
                            background: #000000;
                            border-radius: 50%;
                            content: '';
                            height: 15px;
                            width: 120px;
                            opacity: 0.2;
                            position: absolute;
                            left: 5px;
                            bottom: -60px;
                            -webkit-transform: scale(.7);
                        }

                        .rain:before {
                            -webkit-animation: rain_rain .7s infinite linear;
                            content: '';
                            background: transparent;
                            margin-left: 0px;
                            border-radius: 50%;
                            display: block;
                            height: 6px;
                            width: 3px;
                            opacity: 0.3;
                            -webkit-transform: scale(.9);
                        }

                        @-webkit-keyframes rain {
                            50% {
                                -webkit-transform: translateY(-20px);
                            }
                        }

                        @-webkit-keyframes rain_shadow {
                            50% {
                                -webkit-transform: translateY(20px) scale(1);
                                opacity: 0.05;
                            }
                        }

                        @-webkit-keyframes rain_rain {
                            0% {
                                box-shadow: rgba(0, 0, 0, 0) 30px 30px,
                                rgba(0, 0, 0, 0) 40px 40px,
                                blue 50px 75px,
                                blue 55px 50px,
                                blue 70px 100px,
                                blue 80px 95px,
                                blue 110px 45px,
                                blue 90px 35px;
                            }
                            25% {
                                box-shadow: blue 30px 45px,
                                blue 40px 60px,
                                blue 50px 90px,
                                blue 55px 65px,
                                rgba(0, 0, 0, 0) 70px 120px,
                                rgba(0, 0, 0, 0) 80px 120px,
                                blue 110px 70px,
                                blue 90px 60px;
                            }
                            26% {
                                box-shadow: blue 30px 45px,
                                blue 40px 60px,
                                blue 50px 90px,
                                blue 55px 65px,
                                rgba(0, 0, 0, 0) 70px 40px,
                                rgba(0, 0, 0, 0) 80px 20px,
                                blue 110px 70px,
                                blue 90px 60px;
                            }
                            50% {
                                box-shadow: blue 30px 70px,
                                blue 40px 80px,
                                rgba(0, 0, 0, 0) 50px 100px,
                                blue 55px 80px,
                                blue 70px 60px,
                                blue 80px 45px,
                                blue 110px 95px,
                                blue 90px 85px;
                            }
                            51% {
                                box-shadow: blue 30px 70px,
                                blue 40px 80px,
                                rgba(0, 0, 0, 0) 50px 45px,
                                blue 55px 80px,
                                blue 70px 60px,
                                blue 80px 45px,
                                blue 110px 95px,
                                blue 90px 85px;
                            }
                            75% {
                                box-shadow: blue 30px 95px,
                                blue 40px 100px,
                                blue 50px 60px,
                                rgba(0, 0, 0, 0) 55px 95px,
                                blue 70px 80px,
                                blue 80px 70px,
                                rgba(0, 0, 0, 0) 110px 120px,
                                rgba(0, 0, 0, 0) 90px 110px;
                            }
                            76% {
                                box-shadow: blue 30px 95px,
                                blue 40px 100px,
                                blue 50px 60px,
                                rgba(0, 0, 0, 0) 55px 35px,
                                blue 70px 80px,
                                blue 80px 70px,
                                rgba(0, 0, 0, 0) 110px 25px,
                                rgba(0, 0, 0, 0) 90px 15px;
                            }
                            100% {
                                box-shadow: rgba(0, 0, 0, 0) 30px 120px,
                                rgba(0, 0, 0, 0) 40px 120px,
                                blue 50px 75px,
                                blue 55px 50px,
                                blue 70px 100px,
                                blue 80px 95px,
                                blue 110px 45px,
                                blue 90px 35px;
                            }
                        }

                        /*Moon*/
                        .moon {
                            -webkit-animation: moon_star 5s ease-in-out infinite;
                            background-color: #fff;
                            border-radius: 50%;
                            box-shadow: #FFFFFF 26px 7px 0 -1px,
                            rgba(255, 255, 255, 0.1) -36px -19px 0 -1px,
                            rgba(255, 255, 255, 0.1) -51px -34px 0 -1px,
                            #FFFFFF -52px -62px 0 -1px,
                            #FFFFFF 14px -37px,
                            rgba(255, 255, 255, 0.1) 41px -19px,
                            #FFFFFF 34px -50px,
                            rgba(255, 255, 255, 0.1) 14px -71px 0 -1px,
                            #FFFFFF 64px -21px 0 -1px,
                            rgba(255, 255, 255, 0.1) 32px -85px 0 -1px,
                            #FFFFFF 64px -90px,
                            rgba(255, 255, 255, 0.1) 60px -67px 0 -1px,
                            #FFFFFF 34px -127px,
                            rgba(255, 255, 255, 0.1) -26px -103px 0 -1px;
                            height: 4px;
                            width: 4px;
                            opacity: 1;
                            position: absolute;
                            left: 90px;
                            top: 155px;
                        }

                        .moon:before {
                            -webkit-animation: moon 9s ease-in-out infinite;
                            border-radius: 50%;
                            box-shadow: #FFFFFF -35px 0;
                            content: '';
                            height: 100px;
                            width: 100px;
                            position: absolute;
                            top: -106px;
                            -webkit-transform: rotate(-5deg);
                            -webkit-transform-origin: 0 50%;
                        }

                        .moon:after {
                            -webkit-animation: moon 9s ease-in-out infinite;
                            border-radius: 50%;
                            box-shadow: rgba(0, 0, 0, 0.2) -5px 0 0;
                            content: '';
                            height: 100px;
                            width: 100px;
                            position: absolute;
                            top: -106px;
                            left: -30px;
                            -webkit-transform: rotate(-5deg);
                            -webkit-transform-origin: 30px 50%;
                        }

                        @-webkit-keyframes moon {
                            50% {
                                -webkit-transform: rotate(10deg);
                            }
                        }

                        @-webkit-keyframes moon_star {
                            50% {
                                box-shadow: rgba(255, 255, 255, 0.1) 26px 7px 0 -1px,
                                #FFFFFF -36px -19px 0 -1px,
                                #FFFFFF -51px -34px 0 -1px,
                                rgba(255, 255, 255, 0.1) -52px -62px 0 -1px,
                                rgba(255, 255, 255, 0.1) 14px -37px,
                                #FFFFFF 41px -19px,
                                rgba(255, 255, 255, 0.1) 34px -50px,
                                #FFFFFF 14px -71px 0 -1px,
                                rgba(255, 255, 255, 0.1) 64px -21px 0 -1px,
                                #FFFFFF 32px -85px 0 -1px,
                                rgba(255, 255, 255, 0.1) 64px -90px,
                                #FFFFFF 60px -67px 0 -1px,
                                rgba(255, 255, 255, 0.1) 34px -127px,
                                #FFFFFF -26px -103px 0 -1px;
                            }
                        }

                        /* storm */
                        .storm {
                            -webkit-animation: storm 9s ease-in-out infinite;
                            background: #393939;
                            border-radius: 50%;
                            box-shadow: #393939 65px -25px 0 -5px,
                            #393939 25px -25px,
                            #393939 5px 0px 0 2px,
                            #393939 10px 0px 0 2px,
                            #393939 15px 0px 0 2px,
                            #393939 20px 0px 0 2px,
                            #393939 25px 0px 0 2px,
                            #393939 30px 0px 0 2px,
                            #393939 35px 0px 0 2px,
                            #393939 40px 0px 0 2px,
                            #393939 45px 0px 0 2px,
                            #393939 50px 0px 0 2px,
                            #393939 55px 0px 0 2px,
                            #393939 60px 0px 0 2px,
                            #393939 65px 0px 0 2px,
                            #393939 70px 0px 0 2px,
                            #393939 75px 0px 0 2px;
                            height: 50px;
                            width: 50px;
                            position: absolute;
                            left: 40px;
                            top: 80px;
                        }

                        .storm:after {
                            -webkit-animation: storm_shadow 9s ease-in-out infinite;
                            background: #000;
                            border-radius: 50%;
                            content: '';
                            height: 15px;
                            width: 120px;
                            opacity: 0.2;
                            position: absolute;
                            left: 5px;
                            bottom: -60px;
                            -webkit-transform: scale(.7);
                        }

                        .storm:before {
                            -webkit-animation: storm_thunder 3s steps(1, end) infinite;
                            border-right: 7px solid transparent;
                            border-top: 33px solid yellow;
                            box-shadow: yellow -2px -30px 10px, rgba(255, 258, 0, 0.4) -2px -30px 10px;
                            content: '';
                            display: block;
                            height: 0;
                            width: 0;
                            position: absolute;
                            left: 57px;
                            top: 70px;
                            -webkit-transform: rotate(14deg);
                            -webkit-transform-origin: 50% -60px;
                        }

                        @-webkit-keyframes storm {
                            50% {
                                -webkit-transform: translateY(-20px);
                            }
                        }

                        @-webkit-keyframes storm_shadow {
                            50% {
                                -webkit-transform: translateY(20px) scale(1);
                                opacity: 0.05;
                            }
                        }

                        @-webkit-keyframes storm_thunder {
                            0% {
                                -webkit-transform: rotate(20deg);
                                opacity: 1;
                            }

                            5% {
                                -webkit-transform: rotate(-34deg);
                                opacity: 1;
                            }

                            10% {
                                -webkit-transform: rotate(0deg);
                                opacity: 1;
                            }

                            15% {
                                -webkit-transform: rotate(-34deg);
                                opacity: 0;
                            }
                        }

                        /* snow */
                        .snow {
                            -webkit-animation: snow 9s ease-in-out infinite 1s;
                            background: #FFFFFF;
                            border-radius: 50%;
                            box-shadow: #ffffff 65px -25px 0 -5px,
                            #ffffff 25px -25px,
                            #ffffff 5px 0px 0 2px,
                            #ffffff 10px 0px 0 2px,
                            #ffffff 15px 0px 0 2px,
                            #ffffff 20px 0px 0 2px,
                            #ffffff 25px 0px 0 2px,
                            #ffffff 30px 0px 0 2px,
                            #ffffff 35px 0px 0 2px,
                            #ffffff 40px 0px 0 2px,
                            #ffffff 45px 0px 0 2px,
                            #ffffff 50px 0px 0 2px,
                            #ffffff 55px 0px 0 2px,
                            #ffffff 60px 0px 0 2px,
                            #ffffff 65px 0px 0 2px,
                            #ffffff 70px 0px 0 2px,
                            #ffffff 75px 0px 0 2px;
                            display: block;
                            height: 50px;
                            width: 50px;
                            position: absolute;
                            left: 40px;
                            top: 80px;
                        }

                        .snow:after {
                            -webkit-animation: snow_shadow 9s ease-in-out infinite 1s;
                            background: #000000;
                            border-radius: 50%;
                            content: '';
                            height: 15px;
                            width: 120px;
                            opacity: 0.2;
                            position: absolute;
                            left: 8px;
                            bottom: -60px;
                            -webkit-transform: scale(.7);
                        }

                        .snow:before {
                            -webkit-animation: snow_snow 2s infinite linear;
                            content: '';
                            border-radius: 50%;
                            display: block;
                            height: 7px;
                            width: 7px;
                            opacity: 0.8;
                            -webkit-transform: scale(.9);
                        }

                        @-webkit-keyframes snow {
                            50% {
                                -webkit-transform: translateY(-20px);
                            }
                        }

                        @-webkit-keyframes snow_shadow {
                            50% {
                                -webkit-transform: translateY(20px) scale(1);
                                opacity: 0.05;
                            }
                        }

                        @-webkit-keyframes snow_snow {
                            0% {
                                box-shadow: rgba(238, 238, 238, 0) 30px 30px,
                                rgba(238, 238, 238, 0) 40px 40px,
                                #EEEEEE 50px 75px,
                                #EEEEEE 55px 50px,
                                #EEEEEE 70px 100px,
                                #EEEEEE 80px 95px,
                                #EEEEEE 110px 45px,
                                #EEEEEE 90px 35px;
                            }
                            25% {
                                box-shadow: #EEEEEE 30px 45px,
                                #EEEEEE 40px 60px,
                                #EEEEEE 50px 90px,
                                #EEEEEE 55px 65px,
                                rgba(238, 238, 238, 0) 70px 120px,
                                rgba(238, 238, 238, 0) 80px 120px,
                                #EEEEEE 110px 70px,
                                #EEEEEE 90px 60px;
                            }
                            26% {
                                box-shadow: #EEEEEE 30px 45px,
                                #EEEEEE 40px 60px,
                                #EEEEEE 50px 90px,
                                #EEEEEE 55px 65px,
                                rgba(238, 238, 238, 0) 70px 40px,
                                rgba(238, 238, 238, 0) 80px 20px,
                                #EEEEEE 110px 70px,
                                #EEEEEE 90px 60px;
                            }
                            50% {
                                box-shadow: #EEEEEE 30px 70px,
                                #EEEEEE 40px 80px,
                                rgba(238, 238, 238, 0) 50px 100px,
                                #EEEEEE 55px 80px,
                                #EEEEEE 70px 60px,
                                #EEEEEE 80px 45px,
                                #EEEEEE 110px 95px,
                                #EEEEEE 90px 85px;
                            }
                            51% {
                                box-shadow: #EEEEEE 30px 70px,
                                #EEEEEE 40px 80px,
                                rgba(238, 238, 238, 0) 50px 45px,
                                #EEEEEE 55px 80px,
                                #EEEEEE 70px 60px,
                                #EEEEEE 80px 45px,
                                #EEEEEE 110px 95px,
                                #EEEEEE 90px 85px;
                            }
                            75% {
                                box-shadow: #EEEEEE 30px 95px,
                                #EEEEEE 40px 100px,
                                #EEEEEE 50px 60px,
                                rgba(238, 238, 238, 0) 55px 95px,
                                #EEEEEE 70px 80px,
                                #EEEEEE 80px 70px,
                                rgba(238, 238, 238, 0) 110px 120px,
                                rgba(238, 238, 238, 0) 90px 110px;
                            }
                            76% {
                                box-shadow: #EEEEEE 30px 95px,
                                #EEEEEE 40px 100px,
                                #EEEEEE 50px 60px,
                                rgba(238, 238, 238, 0) 55px 35px,
                                #EEEEEE 70px 80px,
                                #EEEEEE 80px 70px,
                                rgba(238, 238, 238, 0) 110px 25px,
                                rgba(238, 238, 238, 0) 90px 15px;
                            }
                            100% {
                                box-shadow: rgba(238, 238, 238, 0) 30px 120px,
                                rgba(238, 238, 238, 0) 40px 120px,
                                #EEEEEE 50px 75px,
                                #EEEEEE 55px 50px,
                                #EEEEEE 70px 100px,
                                #EEEEEE 80px 95px,
                                #EEEEEE 110px 45px,
                                #EEEEEE 90px 35px;
                            }
                        }

                        .wind {
                            position: absolute;
                            width: 100px;
                            height: 60px;
                            border: 1px solid rgba(255, 255, 255, 0.3);
                            -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.06), inset 0 0 30px rgba(0, 0, 0, 0.2);
                            border-left-color: white;
                            background-color: rgba(255, 255, 255, 0.8);
                            -webkit-box-sizing: border-box;
                            -webkit-perspective: inherit;
                            -webkit-transform: rotateZ(5deg);
                            -webkit-transform-style: preserve-3d;
                            -webkit-animation: wave 9s ease-in-out infinite 1s;
                            left: 70px;
                            top: 40px;
                            z-index: 1;
                        }

                        .wind:before {
                            position: absolute;
                            content: "";
                            height: 150px;
                            left: -5px;
                            top: -3px;
                            width: 6px;
                            border-right: 1px solid rgba(255, 255, 255, 0.7);
                            -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.06), inset 0 0 30px rgba(0, 0, 0, 0.2);
                            border-radius: 3px;
                            background-color: #444;
                        }

                        @-webkit-keyframes wave {
                            0% {
                                -webkit-transform: rotateZ(5deg);
                                width: 100px;
                            }
                            20% {
                                -webkit-transform: rotateZ(5deg);
                            }
                            40% {
                                -webkit-transform: rotateZ(7deg);
                                width: 80px;
                            }
                            60% {
                                -webkit-transform: rotateZ(5deg);
                                width: 100px;
                            }
                            80% {
                                -webkit-transform: rotateZ(7deg);
                                width: 90px
                            }
                            100% {
                                -webkit-transform: rotateZ(5deg);
                                width: 100px;
                            }
                        }
                `
        },
        template: () => {
            return `
                        <div class="container">
                            <div id="weathericon tornado"></div>
                        </div>
                `
        },
    },
}

export default cloudyLayout
