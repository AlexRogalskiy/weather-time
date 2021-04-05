import { StyleOptions, TemplateLayoutOptions, TemplateOptions } from '../../typings/domain-types'
import { LayoutPattern } from '../../typings/enum-types'

const smallLayout: Record<LayoutPattern.small, TemplateLayoutOptions> = {
    small: {
        style: (options: StyleOptions) => {
            console.log(options)
            return `
                        @font-face {
                            font-family: 'Roboto Condensed';
                            font-style: italic;
                            font-weight: 300;
                            src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEobdNc.ttf) format('truetype');
                        }

                        @font-face {
                            font-family: 'Roboto Condensed';
                            font-style: italic;
                            font-weight: 400;
                            src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLDwM4.ttf) format('truetype');
                        }

                        @font-face {
                            font-family: 'Roboto Condensed';
                            font-style: italic;
                            font-weight: 700;
                            src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYobdNc.ttf) format('truetype');
                        }

                        @font-face {
                            font-family: 'Roboto Condensed';
                            font-style: normal;
                            font-weight: 300;
                            src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCQYag.ttf) format('truetype');
                        }

                        @font-face {
                            font-family: 'Roboto Condensed';
                            font-style: normal;
                            font-weight: 400;
                            src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7CA.ttf) format('truetype');
                        }

                        @font-face {
                            font-family: 'Roboto Condensed';
                            font-style: normal;
                            font-weight: 700;
                            src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCQYag.ttf) format('truetype');
                        }

                        @font-face {
                            font-family: 'WeatherIcons';
                            src: url('https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/fonts/weathericons-regular-webfont.eot');
                            src: url('https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/fonts/weathericons-regular-webfont.eot?#iefix') format('embedded-opentype'), url('https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/fonts/weathericons-regular-webfont.woff') format('woff'), url('https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/fonts/weathericons-regular-webfont.ttf') format('truetype'), url('https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/fonts/weathericons-regular-webfont.svg#weathericons') format('svg');
                            font-weight: normal;
                            font-style: normal;
                        }

                        body {
                            background: #ecf0f1;
                        }

                        .calender-object {
                            width: 200px;
                            height: 200px;
                            background: #6ac8c1;
                            background: -moz-linear-gradient(30deg, #6ac8c1 0%, #a0d07d 100%);
                            background: -webkit-linear-gradient(30deg, #6ac8c1 0%, #a0d07d 100%);
                            background: -o-linear-gradient(30deg, #6ac8c1 0%, #a0d07d 100%);
                            background: -ms-linear-gradient(30deg, #6ac8c1 0%, #a0d07d 100%);
                            background: linear-gradient(120deg, #6ac8c1 0%, #a0d07d 100%);
                            color: #fff;
                            padding: 15px;
                            font-family: 'Roboto Condensed';
                            margin: 40px auto;
                            position: relative;
                        }

                        .calender-object .date #date {
                            font-weight: 400;
                            font-size: 116px;
                            position: relative;
                            top: 3px;
                            left: 85px;
                            color: #7cbf93;
                        }

                        .calender-object .date #day {
                            text-transform: uppercase;
                            position: relative;
                            top: -140px;
                            left: 0px;
                            font-weight: 700;
                            font-size: 28px;
                            display: block;
                        }

                        .calender-object .date #time {
                            font-weight: 300;
                            position: relative;
                            top: -140px;
                            left: 0px;
                            font-size: 22px;
                            width: 100%;
                            display: block;
                        }

                        .calender-object .weather {
                            position: relative;
                            width: 100%;
                            top: -108px;
                            left: 3px;
                            display: block;
                        }

                        .calender-object .weather .icons {
                            font-family: 'WeatherIcons';
                            font-size: 18px;
                            margin-right: 5px;
                            width: 26px;
                            display: inline-block;
                            text-align: center;
                        }

                        .calender-object #details {
                            position: absolute;
                            bottom: 5px;
                            left: 5px;
                            right: 5px;
                            border-top: #FFFFFF 1px dotted;
                            padding: 4px 5px 0 5px;
                            font-size: 12px;
                            line-height: 12px;
                            color: #FFFFFF;
                        }

                        .calender-object #details #year {
                            float: right;
                        }

                        .calender-object #details #country {
                            float: left;
                        }
                `
        },
        template: (options: TemplateOptions) => {
            console.log(options)
            return `
                        <div class="calender-object">
                            <div class="date">
                                <span id="date">e</span>
                                <span id="day">e</span>
                                <span id="time">e</span>
                            </div>

                            <div class="weather">
                                <span class="icons">&#xf053;</span><span id="temp"></span><br/>
                                <span class="icons" id="weather-icon">d</span><span id="desc">d</span><br/>
                                <span class="icons">&#xf04e;</span><span id="humidity">e</span>
                            </div>

                            <div id="details">
                                <div id="year">e</div>
                                <div id="country">e</div>
                            </div>
                        </div>
                `
        },
    },
}

export default smallLayout
