import { StyleOptions, TemplateLayoutOptions, TemplateOptions } from '../../../typings/domain-types'
import { LayoutPattern } from '../../../typings/enum-types'

const advancedLayout: Record<LayoutPattern.advanced, TemplateLayoutOptions> = {
    advanced: {
        style: (options: StyleOptions) => {
            console.log(options)
            return `
                        @import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
                        @import 'https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css';

                        :root {
                            --color-light-cyan: #b3e6e6;
                            --color-blue: #88b7c7;
                            --color-dark-cyan: #506569;
                            --color-very-dark-cyan: #25424d;
                            --color-gray-lime: #d0d3d0;
                            --color-text-primary: #555555;
                            --color-text-secondary: #989898;
                            --color-very-light-cyan: #f2f5f6;
                            --color-bg-light-gray: #dfdfdf;
                            --color-success: #6b9d38;
                            --color-danger: #de7f7f;
                            --color-primary: #65b6d5;
                            --color-secondary: #9fc0cd;
                            --color-text-1: #333;
                            --color-text-3: #d0d0d0;
                            --color-focus: #4d90fe;
                        }

                        *,
                        *:before,
                        *:after {
                            box-sizing: inherit;
                        }

                        body {
                            box-sizing: border-box;
                            font-family: Segoe UI, Open Sans, Arial, sans-serif;
                            /*margin-top: 2rem;*/
                        }

                        .background-cyan {
                            background: linear-gradient(to right, var(--color-light-cyan), var(--color-blue));
                        }

                        .container {
                            max-width: 1140px;
                            margin: 0 auto;
                        }

                        .dashboard {
                            display: grid;
                            grid-gap: .375rem;
                            box-shadow: 0 10px 30px 0 rgba(0,0,0,.3);
                            border-radius: .5rem;
                            background: linear-gradient(to right, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,.15) 100%);
                        }

                        .dashboard-header {
                            background-color: var(--color-dark-cyan);
                            color: #fff;
                            padding: .75rem 1rem;
                            display: flex;
                            align-items: center;
                            border-top-left-radius: .5rem;
                            border-top-right-radius: .5rem;
                            grid-row: 1;
                            grid-column: 1/4;
                        }

                        .dashboard-header__title {
                            font-size: 1.5rem;
                            font-weight: 500;
                            text-transform: uppercase;
                            margin-right: auto;
                        }

                        .dashboard-card {
                            background-color: var(--color-very-light-cyan);
                            display: flex;
                            flex-direction: column;
                            overflow: auto;
                        }

                        .dashboard-card:last-child {
                            border-bottom-left-radius: .5rem;
                            border-bottom-right-radius: .5rem;
                        }

                        .dashboard-card__title {
                            text-transform: uppercase;
                            color: var(--color-text-secondary);
                            font-size: .75rem;
                            padding: .75rem 1rem;
                            display: flex;
                            align-items: center;
                        }

                        .dashboad-card__content {
                            flex: 1;
                            display: flex;
                            flex-direction: row;

                        }

                        .dashboard-card__card-piece {
                            display: flex;
                            flex: 1;
                            flex-wrap: wrap;
                            flex-direction: column;
                        }

                        .dashboard-card__action {
                            flex: 0 0 100%;
                        }

                        .dashboard-card__link {
                            color: var(--color-text-primary);
                            text-decoration: none;
                            font-size: .825rem;
                            /*text-align: right;*/
                            align-self: flex-end;
                            /*margin-left: auto;*/
                            padding: .75rem 1rem;
                            transition: background-color .25s;
                            user-select: none;
                        }

                        .dashboard-card__link:hover {
                            background-color: var(--color-bg-light-gray);
                        }

                        .dashboard-card__link .fa {
                            margin-left: .625rem;
                            font-weight: 600;
                            font-size: 112.5%;
                        }

                        .dashboard-card__title .wi,
                        .dashboard-card__title .fa {
                            font-size: 250%;
                            margin-right: .75rem;
                        }

                        .status {
                            flex: 1;
                            text-align: center;
                        }

                        .status__icon {
                            font-size: 250%;
                        }

                        .status__text {
                            text-transform: uppercase;
                        }

                        .status_success {
                            color: var(--color-success);
                        }

                        .status_danger {
                            color: var(--color-danger);
                        }

                        .weather-days {
                            flex: 1;
                            display: flex;
                            margin: 0 1rem;
                        }

                        .weather-days__item {
                            flex: 1;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            flex-direction: column;
                        }

                        .weather-days__item:first-child .weather-days__title {
                            font-size: 1.625rem;
                            line-height: 1;
                        }

                        .weather-days__item:first-child .weather-days__icon {
                            font-size: 450%;
                        }

                        .weather-days__item:first-child .weather-days__humidity {
                            font-size: 1rem;
                        }

                        .weather-days__item:first-child .weather-days__humidity:before {
                            content: 'Hum: ';
                        }


                        .weather-days__humidity {
                            color: var(--color-gray-lime);
                            font-size: .75rem;
                            /*padding: .5rem;*/
                        }

                        .weather-days__humidity:after {
                            content: 'mm';
                        }

                        .weather-days__title {
                            color: var(--color-primary);
                            font-size: 1.25rem;
                            /*line-height: 1.5rem;*/
                            text-transform: uppercase;
                            line-height: 1.875rem;
                            flex: 0 0 2rem;
                            /*padding: .5rem;*/
                        }

                        .weather-days__icon {
                            font-size: 350%;
                            color: var(--color-secondary);
                            /*padding: .5rem;*/
                        }

                        .temperature-stats {
                            flex: 1;
                            display: flex;
                        }

                        .stats__item {
                            flex: 1;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            flex-direction: column;
                        }

                        .stats__title {
                            color: var(--color-primary);
                            font-size: 1.5rem;
                            line-height: 1;
                            /*line-height: 1.5rem;*/
                            text-transform: uppercase;
                            flex: 0 0 2rem;
                            /*padding: .5rem;*/
                        }

                        .stats__icon {
                            font-size: 200%;
                            color: var(--color-secondary);
                        }

                        .stats__measure {
                            color: var(--color-very-dark-cyan);
                            font-weight: 100;
                            display: flex;
                        }

                        .stats__value {
                            font-size: 4rem;
                        }

                        .stats__unit {
                            /*display: */
                            font-size: 1.75rem;
                            position: relative;
                        }

                        .stats__unit_celsius {
                            margin-top: 1rem;
                            margin-left: .5rem;
                        }

                        .stats__unit_meter {
                            margin-left: .25rem;
                            margin-top: .75rem;
                        }

                        .stats__unit_power {
                            margin-left: .5rem;
                            margin-top: .75rem;
                        }

                        .stats__unit_celsius:before {
                            content: 'o';
                            font-size: .75rem;
                            position: absolute;
                            top: .125rem;
                            left: -.375rem;
                        }

                        .stats__unit_meter:after {
                            content: '3';
                            font-size: .75rem;
                            position: absolute;
                            top: .375rem;
                            right: -.375rem;
                        }

                        .light-switches {
                            display: flex;
                            flex-wrap: wrap;
                            height: 100%;
                            margin-bottom: 2rem;
                        }

                        .switch {
                            display: flex;
                            width: 200px;
                            justify-content: space-between;
                            align-items: center;
                            flex: 1 0 50%;
                            padding: .5rem 9%;
                        }

                        .switch__name {
                            color: var(--color-text-secondary);
                            font-weight: 500;
                            font-size: 1.125rem;
                        }

                        .switch__input {
                            opacity: 0;
                        }

                        .switch__label {
                            background-color: #dcdcdc;
                            height: 1rem;
                            width: 4rem;
                            border-radius: 1rem;
                            transition: background-color .3s;
                            position: relative;
                            cursor: pointer;
                        }

                        .switch__label:before {
                            content: '';
                            background-color: #fff;
                            border: 1px solid #e1e3e3;
                            border-radius: 50%;
                            width: 1.75rem;
                            height: 1.75rem;
                            top: -0.375rem;
                            left: 0;
                            position: absolute;
                            transition: left .3s;
                            box-shadow: 0 0 2px 0 rgba(220,220,220,.75);
                        }

                        .switch__input:focus~.switch__label {
                            outline: var(--color-focus) auto 10px;
                        }
                        .switch__input:checked~.switch__label {
                            background-color: #65b6d5;
                        }
                        .switch__input:checked~.switch__label:before {
                            left: 2.25rem;
                        }

                        .dashboard {
                            grid-template-columns: repeat(3, 1fr);
                        }
                        .weather {
                            grid-row: 2;
                            grid-column: 1/3;
                        }
                        .temperature {
                            grid-row: 2;
                            grid-column: 3;
                        }
                        .wifi {
                            grid-row: 3;
                            grid-column: 1;
                        }
                        .alarm {
                            grid-row: 4;
                            grid-column: 1;
                        }
                        .light {
                            grid-row: 3/5;
                            grid-column: 2/4;
                        }
                        .power {
                            grid-row: 5;
                            grid-column: 1/4;
                        }

                        @media (max-width: 992px) {
                            .dashboard {
                                grid-template-columns: repeat(2, 1fr);
                                grid-template-rows: auto;
                            }
                            .dashboard-header {
                                grid-column: 1/3;
                            }
                            .weather {
                                grid-row: 2;
                                grid-column: 1/3;
                            }
                            .temperature {
                                grid-row: 3/5;
                                grid-column: 1;
                            }
                            .wifi {
                                grid-row: 3;
                                grid-column: 2;
                            }
                            .alarm {
                                grid-row: 4;
                                grid-column: 2;
                            }
                            .light {
                                grid-row: 5;
                                grid-column: 1/3;
                            }
                            .power {
                                grid-row: 6;
                                grid-column: 1/3;
                            }
                            .light-switches:last-child {
                                margin-bottom: 1rem;
                            }
                        }

                        @media (max-width: 576px) {
                            .wi {
                                font-size: 70%;
                            }
                            .dashboard {
                                grid-template-columns: 1fr;
                            }
                            .dashboard-header {
                                grid-column: 1;
                            }
                            .weather {
                                grid-row: 2;
                                grid-column: 1;
                            }
                            .temperature {
                                grid-row: 3;
                                grid-column: 1;
                            }
                            .wifi {
                                grid-row: 4;
                                grid-column: 1;
                            }
                            .alarm {
                                grid-row: 5;
                                grid-column: 1;
                            }
                            .light {
                                grid-row: 6;
                                grid-column: 1;
                            }
                            .power {
                                grid-row: 7;
                                grid-column: 1;
                            }
                            .power .dashboard-card__card-piece {
                                flex-basis: 100%;
                            }
                            .power .dashboard-card__card-piece:not(:last-child) {
                                margin-bottom: 1rem;
                                border-bottom: 2px solid var(--color-text-3);
                            }
                            .power .dashboad-card__content {
                                flex-wrap: wrap;
                            }
                            .switch_order-1 {
                                order: 1;
                            }
                            .switch_order-2 {
                                order: 2;
                            }
                            .switch {
                                flex: 1 0 100%;
                            }
                            .switch__label {
                                margin-right: 0;
                            }
                        }
                `
        },
        template: (options: TemplateOptions) => {
            console.log(options)
            return `
                        <div class="background-cyan">
                            <div class="container">
                                <div class="dashboard">
                                    <div class="dashboard-header">
                                        <div class="dashboard-header__title">Dashboard</div>
                                        <div class="dashboard-header__date">Sunday, October 19th</div>
                                    </div>
                                    <div class="dashboard-card weather">
                                        <div class="dashboard-card__title"><span class="wi wi-day-sunny"></span>Weather</div>
                                        <div class="dashboad-card__content">
                                            <div class="dashboard-card__card-piece">
                                                <div class="weather-days">
                                                    <div class="weather-days__item">
                                                        <div class="weather-days__title">Today</div>
                                                        <div class="weather-days__icon">
                                                            <span class="wi wi-day-cloudy"></span>
                                                        </div>
                                                        <div class="weather-days__humidity">0.2</div>
                                                    </div>
                                                    <div class="weather-days__item">
                                                        <div class="weather-days__title">Mon</div>
                                                        <div class="weather-days__icon">
                                                            <span class="wi wi-cloudy"></span>
                                                        </div>
                                                        <div class="weather-days__humidity">0.4</div>
                                                    </div>
                                                    <div class="weather-days__item">
                                                        <div class="weather-days__title">Tue</div>
                                                        <div class="weather-days__icon">
                                                            <span class="wi wi-day-rain"></span>
                                                        </div>
                                                        <div class="weather-days__humidity">0.7</div>
                                                    </div>
                                                    <div class="weather-days__item">
                                                        <div class="weather-days__title">Wed</div>
                                                        <div class="weather-days__icon">
                                                            <span class="wi wi-day-rain"></span>
                                                        </div>
                                                        <div class="weather-days__humidity">0.9</div>
                                                    </div>
                                                    <div class="weather-days__item">
                                                        <div class="weather-days__title">Thu</div>
                                                        <div class="weather-days__icon">
                                                            <span class="wi wi-day-sunny"></span>
                                                        </div>
                                                        <div class="weather-days__humidity">0.1</div>
                                                    </div>
                                                </div>
                                                <a href="#" class="dashboard-card__link" tabindex="1">View in details<span class="fa fa-angle-right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dashboard-card temperature">
                                        <div class="dashboard-card__title"><span class="wi wi-thermometer"></span>Temperature</div>
                                        <div class="dashboad-card__content">
                                            <div class="dashboard-card__card-piece">
                                                <div class="temperature-stats">
                                                    <div class="stats__item">
                                                        <div class="stats__title">Indoor</div>
                                                        <div class="stats__icon"><span class="fa fa-home"></span></div>
                                                        <div class="stats__measure">
                                                            <div class="stats__value">22</div>
                                                            <div class="stats__unit stats__unit_celsius">C</div>
                                                        </div>
                                                    </div>
                                                    <div class="stats__item">
                                                        <div class="stats__title">Outdoor</div>
                                                        <div class="stats__icon"><span class="wi wi-day-cloudy"></span></div>
                                                        <div class="stats__measure">
                                                            <div class="stats__value">18</div>
                                                            <div class="stats__unit stats__unit_celsius">C</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="dashboard-card__link" tabindex="1">Edit<span class="fa fa-angle-right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dashboard-card wifi">
                                        <div class="dashboard-card__title"><span class="fa fa-wifi"></span>Wifi</div>
                                        <div class="dashboad-card__content">
                                            <div class="dashboard-card__card-piece">
                                                <div class="status status_success">
                                                    <div class="status__icon"><span class="fa fa-check"></span></div>
                                                    <div class="status__text">Activated</div>
                                                </div>
                                                <a href="#" class="dashboard-card__link" tabindex="1">Edit<span class="fa fa-angle-right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dashboard-card alarm">
                                        <div class="dashboard-card__title"><span class="fa fa-bell-o"></span>Alarm</div>
                                        <div class="dashboad-card__content">
                                            <div class="dashboard-card__card-piece">
                                                <div class="status status_danger">
                                                    <div class="status__icon"><span class="fa fa-times"></span></div>
                                                    <div class="status__text">Disabled</div>
                                                </div>
                                                <a href="#" class="dashboard-card__link" tabindex="1">Edit<span class="fa fa-angle-right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dashboard-card light">
                                        <div class="dashboard-card__title"><span class="fa fa-lightbulb-o"></span>Light</div>
                                        <div class="dashboad-card__content">
                                            <div class="dashboard-card__card-piece">
                                                <div class="light-switches">
                                                    <div class="switch switch_order-1">
                                                        <div class="switch__name">Entrance hall</div>
                                                        <input type="checkbox" id="switch1" class="switch__input" tabindex="2" checked></input>
                                                        <label for="switch1" class="switch__label"></label>
                                                    </div>
                                                    <div class="switch switch_order-2">
                                                        <div class="switch__name">Bedroom 1</div>
                                                        <input type="checkbox" id="switch2" class="switch__input" tabindex="3"></input>
                                                        <label for="switch2" class="switch__label"></label>
                                                    </div>
                                                    <div class="switch switch_order-1">
                                                        <div class="switch__name">Living room</div>
                                                        <input type="checkbox" id="switch3" class="switch__input" tabindex="2"></input>
                                                        <label for="switch3" class="switch__label"></label>
                                                    </div>
                                                    <div class="switch switch_order-2">
                                                        <div class="switch__name">Bedroom 2</div>
                                                        <input type="checkbox" id="switch4" class="switch__input" tabindex="3"></input>
                                                        <label for="switch4" class="switch__label"></label>
                                                    </div>
                                                    <div class="switch switch_order-1">
                                                        <div class="switch__name">Dining room</div>
                                                        <input type="checkbox" id="switch5" class="switch__input" tabindex="2" checked></input>
                                                        <label for="switch5" class="switch__label"></label>
                                                    </div>
                                                    <div class="switch switch_order-2">
                                                        <div class="switch__name">Bedroom 3</div>
                                                        <input type="checkbox" id="switch6" class="switch__input" tabindex="3" checked></input>
                                                        <label for="switch6" class="switch__label"></label>
                                                    </div>
                                                    <div class="switch switch_order-1">
                                                        <div class="switch__name">Bathroom</div>
                                                        <input type="checkbox" id="switch7" class="switch__input" tabindex="2"></input>
                                                        <label for="switch7" class="switch__label"></label>
                                                    </div>
                                                    <div class="switch switch_order-2">
                                                        <div class="switch__name">WC</div>
                                                        <input type="checkbox" id="switch8" class="switch__input" tabindex="3"></input>
                                                        <label for="switch8" class="switch__label"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dashboard-card power">
                                        <div class="dashboard-card__title"><span class="fa fa-bar-chart"></span>Power</div>
                                        <div class="dashboad-card__content">
                                            <div class="dashboard-card__card-piece">
                                                <div class="stats__item">
                                                    <div class="stats__title">Water</div>
                                                    <div class="stats__icon"><span class="wi wi-raindrop"></span></div>
                                                    <div class="stats__measure">
                                                        <div class="stats__value">14</div>
                                                        <div class="stats__unit stats__unit_meter">m</div>
                                                    </div>
                                                </div>
                                                <a href="#" class="dashboard-card__link" tabindex="4">View in details<span class="fa fa-angle-right"></span></a>
                                            </div>
                                            <div class="dashboard-card__card-piece">
                                                <div class="stats__item">
                                                    <div class="stats__title">Electricity</div>
                                                    <div class="stats__icon"><span class="fa fa-flash"></span></div>
                                                    <div class="stats__measure">
                                                        <div class="stats__value">49</div>
                                                        <div class="stats__unit stats__unit_power">kw/h</div>
                                                    </div>
                                                </div>
                                                <a href="#" class="dashboard-card__link" tabindex="4">View in details<span class="fa fa-angle-right"></span></a>
                                            </div>
                                            <div class="dashboard-card__card-piece">
                                                <div class="stats__item">
                                                    <div class="stats__title">Gas</div>
                                                    <div class="stats__icon"><span class="fa fa-fire"></span></div>
                                                    <div class="stats__measure">
                                                        <div class="stats__value">37</div>
                                                        <div class="stats__unit stats__unit_meter">m</div>
                                                    </div>
                                                </div>
                                                <a href="#" class="dashboard-card__link" tabindex="4">View in details<span class="fa fa-angle-right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
        },
    },
}

export default advancedLayout
