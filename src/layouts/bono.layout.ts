import { StyleOptions, TemplateLayoutOptions, TemplateOptions } from '../../typings/domain-types'
import { LayoutPattern } from '../../typings/enum-types'

const bonoLayout: Record<LayoutPattern.bono, TemplateLayoutOptions> = {
    bono: {
        style: (options: StyleOptions) => {
            console.log(options)
            return `
                        @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
                        @import 'https://storage.googleapis.com/code.getmdl.io/1.0.0/material.blue-red.min.css';
                        @import 'https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.3.2/css/weather-icons.css';

                        body {
                            width: 100%;
                            height: 100%;
                            background: #fafafa;
                            background-repeat: no-repeat;
                            background-size: cover;
                            /*Override Google MDL*/
                            min-height: 0%;
                        }

                        .card-weather {
                            min-height: 220px;
                            position: relative;
                        }

                        .icon-temp {
                            width: 100%;
                            height: 72%;
                            position: relative;
                            min-width: 300px;
                            text-align: center;
                        }

                        .temperature {
                            position: relative;
                            display: inline-block;
                            top: 24px;
                            padding: 0px 36px 0px 36px;
                        }

                        .weather-icon {
                            position: relative;
                            display: inline-block;
                            padding: 0;
                            margin: 0;
                            top: 24px;
                            left: 24px;
                        }

                        .scale-btn {
                            top: 6px;
                            left: -8px;
                            height: 36px;
                            min-width: 36px;
                            line-height: 80px;
                            border-radius: 50%;
                        }

                        .mdl-button:active {
                            background-color: #FFF;
                        }

                        .scale-btn > h1 {
                            margin: 0;
                            padding: 0;
                            font-size: 24px;
                        }

                        .mdl-card__title {
                            min-height: 48px;
                        }

                        .mdl-card {
                            position: relative;
                            top: 100px;
                            width: 25%;
                            min-width: 300px;
                        }

                        .weather-icon {
                            font-size: 64px;
                        }

                        .desc-text {
                            display: inline-block;
                            padding: 2% 6% 2% 6%;
                            color: #AAAAAA;
                        }

                        #description {
                            text-align: center;
                        }
                `
        },
        template: (options: TemplateOptions) => {
            console.log(options)
            return `
                        <div>
                            <div id='weather-card' class='mdl-card mdl-shadow--8dp center-block'>
                                <div id='card-title' class='mdl-card__title mdl-card--border'>
                                    <h1 class='mdl-card__title-text'></h1>
                                </div>

                                <div class='card-weather'>
                                    <div class='icon-temp'>
                                        <i class="weather-icon wi"></i>
                                        <h1 class='temperature'>
                                            <button class='scale-btn mdl-button'><h1>F</h1></button>
                                        </h1>
                                    </div>

                                    <div id='description'>
                                        <div id='type' class='desc-text'>
                                        </div>
                                        <div id='humidity' class='desc-text'>
                                        </div>
                                        <div id='wind' class='desc-text'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
        },
    },
}

export default bonoLayout
