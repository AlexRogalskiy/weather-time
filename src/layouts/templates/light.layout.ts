import { StyleOptions, TemplateLayoutOptions, TemplateOptions } from '../../../typings/domain-types'
import { LayoutPattern } from '../../../typings/enum-types'

const lightLayout: Record<LayoutPattern.light, TemplateLayoutOptions> = {
    light: {
        style: (options: StyleOptions) => {
            console.log(options)
            return `
                        @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
                        @import 'https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.css';
                        @import 'https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons-wind.css';
                        @import 'https://fonts.googleapis.com/css?family=Poiret+One|Quicksand:700,400|Julius+Sans+One';

                        body {
                            background: #545456;
                            color: #fff;
                            font-family: 'Quicksand';
                        }

                        .btn {
                            background-color: rgba(255, 60, 65, 1);
                            font-size: 12px;
                            padding-bottom: 2px;
                            padding-top: 2px;
                            border-radius: 2px;
                            height: 24px;
                            width: 40px;
                            color: #fff;
                            margin-top: 12px;
                            outline: 0;

                        }


                        h1 {
                            font-size: 45px;
                            padding-right: 10px;
                        }

                        h2 {
                            font-size: 30px;
                        }

                        .container {
                            margin: 5% auto auto auto;
                            max-width: 500px;
                            background: rgba(49, 49, 49, 0.34);
                            box-shadow: 0 7px 7px -7px #000;
                        }

                        .iconInfo {
                            text-align: center;
                            padding-top: 15px;

                        }

                        .info {
                            text-align: center;
                            font-size: 15px;
                            padding-top: 15px;
                        }

                        .weather-body {
                            text-transform: none;
                        }

                        .city {
                            text-align: center;
                        }

                        h5 {
                            font-size: 14px;
                        }

                        h2 small {
                            color: #fff;
                        }

                        h5 small {
                            color: #fff;
                        }


                        p {
                            font-size: 14px;
                            text-align: center;
                        }

                        .row {
                            font-size: 14px;
                            text-align: center;
                        }


                        .footerholder {
                            font-size: 12px;
                            bottom: 0px;
                            position: fixed;
                            width: 100%;
                            color: #000;
                            background: #fff;
                            text-align: center;
                        }

                        h6 {
                            padding-top: 10px;
                            font-size: 14px !important;
                            text-align: center;
                            font-weight: 300 !important;
                        }
                `
        },
        template: (options: TemplateOptions) => {
            console.log(options)
            return `
                        <div class="container">
                            <div class="button"></div>
                            <div class="weather-body">
                                <div class="row">
                                    <div class="col-xs-4">
                                        <h1 id="icon"></h1>
                                        <h2 class="temp0"></h2>
                                        <h5 class="feelslike"></h5>

                                    </div>
                                    <div class="col-xs-8">
                                        <h2 class="city"></h2>
                                        <h5 class="iconInfo"></h5>
                                        <h6 class="info"></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="hr"></div>
                            <div class="row">
                                <div class="col-xs-3">
                                    <p id="today"></p>
                                    <p id="icon1"></p>
                                    <p class="temp1"></p>
                                </div>
                                <div class="col-xs-3">
                                    <p id="tomorrow"></p>
                                    <p id="icon2"></p>
                                    <p class="temp2"></p>
                                </div>
                                <div class="col-xs-3">
                                    <p id="dayaftertomorrow"></p>
                                    <p id="icon3"></p>
                                    <p class="temp3"></p>
                                </div>
                                <div class="col-xs-3">
                                    <p id="andthedayafter"></p>
                                    <p id="icon4"></p>
                                    <p class="temp4"></p>
                                </div>
                            </div>
                        </div>
                `
        },
    },
}

export default lightLayout
