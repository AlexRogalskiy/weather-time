import { StyleOptions, TemplateLayoutOptions, TemplateOptions } from '../../../typings/domain-types'
import { LayoutPattern } from '../../../typings/enum-types'

const defaultLayout: Record<LayoutPattern.default, TemplateLayoutOptions> = {
    default: {
        style: (options: StyleOptions) => {
            console.log(options)
            return `
                        @import 'https://fonts.googleapis.com/css?family=Lato:300';
                        @import 'https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css';

                        $speed: 2s;

                        html, body, .background {
                            width: 100%;
                            height: 100%;
                            margin: 0;
                            padding: 0;
                            font-family: 'Lato', sans-serif;
                        }

                        html {
                            background: #fff;

                        }

                        body {
                            background: #eee;
                            background: linear-gradient(0deg, rgba(0, 0, 200, 0.2), rgba(0, 0, 200, 0));
                        }

                        .background {
                            background: #eee;
                            background: linear-gradient(120deg, rgba(50, 150, 100, 0.2), rgba(0, 0, 100, 0));
                        }

                        .container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            margin: 0;
                            padding: 0;
                            height: 100%;
                            width: 100%;
                            overflow: auto;
                            position: relative;

                            background: #eee;
                            background: linear-gradient(240deg, rgba(150, 50, 50, 0.3), rgba(0, 0, 200, 0));

                            &.cloud {
                                //background: linear-gradient(360deg, rgba(50, 50, 50, 0.5) , rgba(0, 0, 200, 0) );
                            }

                            &.wind {

                            }
                        }

                        nav {
                            ul {
                                margin: 20px 20px 0 20px;
                                list-style-type: none;
                                padding: 0;
                                display: flex;
                                flex-direction: row;
                            }

                            li a {
                                display: block;
                                width: 50px;
                                text-align: center;
                                color: #aaa;
                                cursor: pointer;

                                &:hover {
                                    color: #444;
                                }

                                &.active {
                                    color: #4444ff;
                                }
                            }
                        }

                        #card {
                            //background: #fff;
                            box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
                            overflow: hidden;
                            width: 300px;
                            padding: 0;
                            height: 400px;
                            min-height: 300px;
                            margin: 20px;
                            border-radius: 5px;
                            //border: solid 0px #fff;
                            position: relative;

                            .details {
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                padding: 16px 20px;
                                color: #888;

                                display: flex;
                                flex-direction: row;
                                justify-content: space-between;

                                transition: color $speed ease;

                                .thunder & {
                                    color: #ddd;
                                }

                                .right {
                                    text-align: right;
                                }

                                #date {
                                    margin: 4px 0;
                                }

                                #summary {
                                    font-weight: 600;
                                    font-size: 22px;
                                }

                                .temp {
                                    font-size: 60px;
                                    line-height: 60px;

                                    span {
                                        font-size: 18px;
                                        line-height: 30px;
                                        vertical-align: top;
                                        margin-left: 5px;
                                    }

                                }
                            }
                        }

                        .weather {
                            background-color: #DAE3FD;
                            transition: background-color $speed ease;

                            .thunder & {
                                background-color: #9FA4AD;
                            }

                            .rain & {
                                background-color: #D8D8D8;
                            }

                            .sun & {
                                background-color: #ccccff;
                            }

                            #inner {
                                background-color: rgba(255, 255, 255, 1);
                                background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);

                            }

                            .cloud {
                                transition: fill $speed ease;
                            }

                            #cloud1 {
                                fill: #efefef;

                                .thunder & {
                                    fill: #9FA4AD;
                                }
                            }

                            #cloud2 {
                                fill: #E6E6E6;

                                .thunder & {
                                    fill: #8B8E98;
                                }
                            }

                            #cloud3 {
                                fill: #D5D5D5;

                                .thunder & {
                                    fill: #7B7988;
                                }
                            }
                        }

                        #outer, #back {
                            position: fixed;
                            pointer-events: none;

                        }
                `
        },
        template: (options: TemplateOptions) => {
            console.log(options)
            return `
                        <div class="background">
                            <div class="container">
                                <svg id="back">
                                    <radialGradient id="SVGID_1_" cx="0" cy="0" r="320.8304" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" style="stop-color:#FFDE17;stop-opacity:0.7"/>
                                        <stop offset="1" style="stop-color:#FFF200;stop-opacity:0"/>
                                    </radialGradient>
                                    <path id="sunburst" style="fill:url(#SVGID_1_);" d="M0,319.7c-18.6,0-37.3-1.6-55.5-4.8L-7.8,41.4c5.1,0.9,10.6,0.9,15.7,0L56,314.8C37.6,318,18.8,319.7,0,319.7z
                        \t M-160.8,276.6c-32.5-18.8-61.3-42.9-85.5-71.6L-34,26.2c3.4,4.1,7.4,7.4,12,10.1L-160.8,276.6z M161.3,276.4L22.1,36.2
                        \tc4.5-2.6,8.6-6,12-10.1l212.6,178.5C222.5,233.4,193.8,257.6,161.3,276.4z M-302.5,108.3C-315.4,73-321.9,36-322-1.8l277.6-0.5
                        \tc0,5.3,0.9,10.4,2.7,15.2L-302.5,108.3z M302.6,107.8L41.8,12.8c1.7-4.7,2.6-9.7,2.6-14.9c0-0.3,0-0.6,0-1H322l0-1.3l0,1.9
                        \tC322,35.4,315.5,72.5,302.6,107.8z M-41.8-17.5l-261-94.5c12.8-35.4,31.6-68,55.8-96.9L-34.1-30.8C-37.5-26.8-40.1-22.3-41.8-17.5z
                        \t M41.7-17.7c-1.8-4.8-4.4-9.3-7.8-13.3l212-179.2c24.3,28.8,43.3,61.3,56.3,96.6L41.7-17.7z M-22.2-40.8l-139.6-240
                        \tc32.7-19,68.1-32,105.2-38.6L-8-46.1C-13-45.2-17.8-43.4-22.2-40.8z M22-40.9c-4.4-2.6-9.2-4.3-14.2-5.1l47.1-273.6
                        \tc37.2,6.4,72.7,19.2,105.4,38L22-40.9z"/>
                                </svg>
                                <nav>
                                    <ul>
                                        <li><a id="button-snow" class="active"><i class="wi wi-snow"></i></a></li>
                                        <li><a id="button-wind"><i class="wi wi-strong-wind"></i></a></li>
                                        <li><a id="button-rain"><i class="wi wi-rain"></i></a></li>
                                        <li><a id="button-thunder"><i class="wi wi-lightning"></i></a></li>
                                        <li><a id="button-sun"><i class="wi wi-day-sunny"></i></a></li>
                                    </ul>
                                </nav>
                                <div id="card" class="weather">
                                    <svg id="inner">
                                        <defs>
                                            <path id="leaf"
                                                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"/>
                                        </defs>
                                        <circle id="sun" style="fill: #F7ED47" cx="0" cy="0" r="50"/>
                                        <g id="layer3"></g>
                                        <g id="cloud3" class="cloud"></g>
                                        <g id="layer2"></g>
                                        <g id="cloud2" class="cloud"></g>
                                        <g id="layer1"></g>
                                        <g id="cloud1" class="cloud"></g>
                                    </svg>
                                    <div class="details">
                                        <div class="temp">20<span>c</span></div>
                                        <div class="right">
                                            <div id="date">Monday 22 August</div>
                                            <div id="summary"></div>
                                        </div>

                                    </div>
                                </div>
                                <svg id="outer"></svg>
                            </div>
                        </div>
                `
        },
    },
}

export default defaultLayout
