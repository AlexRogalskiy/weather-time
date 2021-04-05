import { StyleOptions, TemplateLayoutOptions, TemplateOptions } from '../../typings/domain-types'
import { LayoutPattern } from '../../typings/enum-types'

const darkLayout: Record<LayoutPattern.dark, TemplateLayoutOptions> = {
    dark: {
        style: (options: StyleOptions) => {
            console.log(options)
            return `
                        @import url(https://fonts.googleapis.com/css?family=Poiret+One);
                        @import url(https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css);

                        body {
                            background-color: #A64253;
                            font-family: Poiret One;
                        }

                        .widget {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            display: flex;
                            height: 300px;
                            width: 600px;
                            transform: translate(-50%, -50%);
                            flex-wrap: wrap;
                            cursor: pointer;
                            border-radius: 20px;
                            box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15);
                        }

                        .widget .weatherIcon {
                            flex: 1 100%;
                            height: 60%;
                            border-top-left-radius: 20px;
                            border-top-right-radius: 20px;
                            background: #FAFAFA;
                            font-family: weathericons;
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                            font-size: 100px;
                        }

                        .widget .weatherIcon i {
                            padding-top: 30px;
                        }

                        .widget .weatherInfo {
                            flex: 0 0 70%;
                            height: 40%;
                            background: #080705;
                            border-bottom-left-radius: 20px;
                            display: flex;
                            align-items: center;
                            color: white;
                        }

                        .widget .weatherInfo .temperature {
                            flex: 0 0 40%;
                            width: 100%;
                            font-size: 65px;
                            display: flex;
                            justify-content: space-around;
                        }

                        .widget .weatherInfo .description {
                            flex: 0 60%;
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            height: 100%;
                            justify-content: center;
                        }

                        .widget .weatherInfo .description .weatherCondition {
                            text-transform: uppercase;
                            font-size: 35px;
                            font-weight: 100;
                        }

                        .widget .weatherInfo .description .place {
                            font-size: 15px;
                        }

                        .widget .date {
                            flex: 0 0 30%;
                            height: 40%;
                            background: #70C1B3;
                            border-bottom-right-radius: 20px;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            color: white;
                            font-size: 30px;
                            font-weight: 800;
                        }

                        p {
                            position: fixed;
                            bottom: 0%;
                            right: 2%;
                        }

                        p a {
                            text-decoration: none;
                            color: #E4D6A7;
                            font-size: 10px;
                        }
                `
        },
        template: (options: TemplateOptions) => {
            console.log(options)
            return `
                        <article class="widget">
                            <div class="weatherIcon"><i class="wi wi-day-cloudy"></i></div>
                            <div class="weatherInfo">
                                <div class="temperature"><span>25&deg;</span></div>
                                <div class="description">
                                    <div class="weatherCondition">CLOUDY</div>
                                    <div class="place">New York, New York</div>
                                </div>
                            </div>
                            <div class="date">1st Jan</div>
                        </article>
                `
        },
    },
}

export default darkLayout
