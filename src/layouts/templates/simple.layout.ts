import { StyleOptions, TemplateLayoutOptions, TemplateOptions } from '../../../typings/domain-types'
import { LayoutPattern } from '../../../typings/enum-types'

const simpleLayout: Record<LayoutPattern.simple, TemplateLayoutOptions> = {
    simple: {
        style: (options: StyleOptions) => {
            console.log(options)
            return `
                        @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
                        @import url(https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/css/weather-icons.min.css);

                        body {
                            background: linear-gradient(90deg, #754d8b 0%, #4e5992 100%);
                            font-size: 18px;
                        }

                        h1, h2, h3, h4, h5 {
                            font-weight: normal;
                            margin: 0;
                            padding: 0;
                        }

                        .widget {
                            height: 300px;
                            width: 450px;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                        }

                        .weatherIcon {
                            background-color: #f0f8fa;
                            height: 70%;
                            width: 100%;
                            position: absolute;
                            left: 0;
                            top: 0;
                            border-top-left-radius: 10px;
                            border-top-right-radius: 10px;
                        }

                        .weatherIcon:before {
                            display: block;
                            content: "\\f002";
                            color: #818b8d;
                            font-family: weathericons;
                            font-size: 110px;
                            position: absolute;
                            left: 50%;
                            top: 58%;
                            transform: translate(-50%, -50%);
                        }

                        .weatherData {
                            background-color: #2e3336;
                            height: 30%;
                            width: 100%;
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            border-bottom-left-radius: 10px;
                            border-bottom-right-radius: 10px;
                        }

                        h1 {
                            color: #c5cdcf;
                            font-family: 'Open Sans';
                            font-weight: 200;
                            font-size: 2.9375em;
                            line-height: 2.9375em;
                            position: absolute;
                            left: 6%;
                            top: 50%;
                            transform: translate(0, -50%);
                        }

                        h2 {
                            color: #8f9b9d;
                            font-family: 'Open Sans';
                            font-weight: 200;
                            font-size: 1.1875em;
                            line-height: 1.1875em;
                            position: absolute;
                            top: 24%;
                            left: 27%;
                        }

                        h3 {
                            color: #c5cdcf;
                            font-family: 'Open Sans';
                            font-weight: 400;
                            font-size: 0.8125em;
                            line-height: 0.8125em;
                            position: absolute;
                            bottom: 25%;
                            left: 27%;
                        }

                        h4 {
                            color: #fff;
                            font-family: 'Open Sans';
                            font-weight: 700;
                            text-transform: uppercase;
                            font-size: 0.6875em;
                            line-height: 0.6875em;
                            position: absolute;
                            top: 30%;
                            left: 50%;
                            transform: translate(-50%, 0);
                        }

                        h5 {
                            color: #fff;
                            font-family: 'Open Sans';
                            font-weight: 500;
                            font-size: 1.8125em;
                            line-height: 28px;
                            position: absolute;
                            bottom: 24%;
                            left: 50%;
                            transform: translate(-50%, 0);
                        }

                        .date {
                            background-color: #4dbde2;
                            height: 30%;
                            width: 22%;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            border-bottom-right-radius: 10px;
                        }
                `
        },
        template: (options: TemplateOptions) => {
            console.log(options)
            return `
                        <article class="widget">
                            <div class="weatherIcon"></div>
                            <div class="weatherData">
                                <h1 class="temperature">25&deg;</h1>
                                <h2 class="description">Partly Cloudy</h2>
                                <h3 class="city">Tirana, Albania</h3>
                            </div>
                            <div class="date">
                                <h4 class="month" id="month"></h4>
                                <h5 class="day" id="day"></h5>
                            </div>
                        </article>
                `
        },
    },
}

export default simpleLayout
