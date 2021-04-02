import { StyleOptions, TemplateLayoutOptions, TemplateOptions } from '../../../typings/domain-types'
import { LayoutPattern } from '../../../typings/enum-types'

const standardLayout: Record<LayoutPattern.standard, TemplateLayoutOptions> = {
    standard: {
        style: (options: StyleOptions) => {
            console.log(options)
            return `
                        @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
                        @import url(https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/css/weather-icons.min.css);

                        body {
                            background: linear-gradient(90deg, #7474BF 10%, #348AC7 90%);
                        }

                        #weather_wrapper {
                            width: 400px;
                            margin: 100px auto;
                        }

                        .weatherCard {
                            width: 400px;
                            height: 200px;
                            font-family: 'Open Sans';
                            position: relative;
                        }

                        .currentTemp {
                            width: 220px;
                            height: 200px;
                            background: rgb(41, 41, 41);
                            position: absolute;
                            top: 0;
                            left: 0;
                        }

                        .currentWeather {
                            width: 180px;
                            height: 200px;
                            background: rgb(237, 237, 237);
                            margin: 0;
                            position: absolute;
                            top: 0;
                            right: 0;
                        }

                        .temp {
                            font-size: 80px;
                            text-align: center;
                            display: block;
                            font-weight: 300;
                            color: rgb(255, 255, 255);
                            padding: 20px 0 0;
                        }

                        .location {
                            color: rgb(255, 255, 255);
                            text-align: center;
                            text-transform: uppercase;
                            font-weight: 700;
                            font-size: 30px;
                            display: block;
                        }

                        .conditions {
                            font-family: weathericons;
                            font-size: 80px;
                            display: block;
                            padding: 20px 0 0;
                            text-align: center;
                        }

                        .info {
                            width: 180px;
                            height: 50px;
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            background: rgb(42, 178, 234);
                            font-weight: 700;
                            color: rgb(255, 255, 255);
                            text-align: center;
                        }

                        .rain {
                            width: 50%;
                            position: absolute;
                            left: 10px;
                            word-spacing: 60px;
                            top: 3px;
                        }

                        .rain::before {
                            display: block;
                            content: '\\f04e';
                            font-family: weathericons;
                            font-size: 40px;
                            left: 6px;
                            top: -4px;
                            position: absolute;
                        }

                        .wind {
                            width: 50%;
                            right: -10px;
                            position: absolute;
                            word-spacing: 60px;
                            top: 3px;
                        }

                        .wind::before {
                            display: block;
                            content: '\\f050';
                            font-family: weathericons;
                            font-size: 25px;
                            left: -10px;
                            position: absolute;
                            top: 5px;
                        }
                `
        },
        template: (options: TemplateOptions) => {
            console.log(options)
            return `
                        <div id="weather_wrapper">
                            <div class="weatherCard">
                                <div class="currentTemp">
                                    <span class="temp">23&deg;</span>
                                    <span class="location">Brussels</span>
                                </div>

                                <div class="currentWeather">
                                    <span class="conditions">&#xf00d;</span>
                                    <div class="info">
                                        <span class="rain">1.3 MM</span>
                                        <span class="wind">10 MPH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
        },
    },
}

export default standardLayout
