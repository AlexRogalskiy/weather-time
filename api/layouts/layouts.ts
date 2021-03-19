import { Optional } from '../../typings/standard-types'
import { FontPattern, LayoutPattern } from '../../typings/enum-types'
import { LayoutOptions, StyleOptions, WeatherOptions } from '../../typings/types'

import { getFont } from '../fonts/fonts'

export type LayoutRecord = Record<LayoutPattern, LayoutOptions>

const layouts: Readonly<LayoutRecord> = {
    default: {
        style: (options: StyleOptions) => {
            const fRegular = getFont(FontPattern.monserrat_regular)
            const f700 = getFont(FontPattern.monserrat_700)

            return `
                    * {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                    }
                    @font-face{
                        font-family: ${fRegular.fontFamily};
                        font-style: normal;
                        font-weight: normal;
                        src: url(data:font/woff2;charset=utf-8;base64,${fRegular.fontData}) format('woff2');
                    }
                    @font-face {
                        font-family: ${f700.fontFamily};
                        font-style: normal;
                        font-weight: bold;
                        src: url(data:font/woff2;charset=utf-8;base64,${f700.fontData}) format('woff2');
                    }
                    .font-caption {
                        font-family: ${fRegular.fontFamily}, sans-serif;
                        font-weight: bold;
                        color: ${options.theme.fontColor};
                        text-align: right;
                        margin: 3% 3% 0% 0%;
                    }
                    .font-text {
                        font-family: ${f700.fontFamily}, sans-serif;
                        font-style: italic;
                        color: ${options.theme.fontColor};
                    }
                    .container {
                        font-family: Arial, Helvetica, sans-serif;
                        padding: 40px 20px;
                        width: 600px;
                        background-color: #${options.theme.bgColor};
                        border: 1px solid rgba(0, 0, 0, 0.2);
                        border-radius: 5px;
                        ${options.animation.animation};
                    }
                    ${options.animation.keyframes}
                    .container h3 {
                        font-size: 19px;
                        margin-bottom: 5px;
                        font-weight: 500;
                        font-style: oblique;
                        color: #${options.theme.quoteColor};
                    }
                    .container h3::before {
                        content: open-quote;
                        font-size: 25px;
                    }
                    .container h3::after {
                        content: close-quote;
                        vertical-align: sub;
                        font-size: 25px;
                    }
                    .container p {
                        /* float: right; */
                        /* margin-right: 20px; */
                        font-style: italic;
                        padding: 5px;
                        text-align: right;
                        color: #${options.theme.authorColor};
                    }
                `
        },
        template: (options: WeatherOptions) => {
            return `
                    <div class="container">
                        <h3> ${options.weather} </h3>
                        <p>- ${options.weather === 'Unknown' ? 'Anonymous' : options.weather} </p>
                    </div>
                `
        },
    },
    socrates: {
        style: (options: StyleOptions) => {
            const borderColor = options.theme.bgColor === 'fffefe' ? 'ccc' : options.theme.bgColor
            return `
                    .square-brackets-quote {
                        display:inline-block;
                        font-family:Arial,Helvetica,sans-serif;
                        margin:1em;
                        width:600px;
                        ${options.animation.animation};
                    }
                    ${options.animation.keyframes}
                    .square-brackets-quote blockquote {
                        border:solid 1em #${borderColor};
                        background: #fff;
                        display:inline-block;
                        margin:0;
                        padding:1em;
                        position:relative;
                        font-size:15px;

                    }
                    .square-brackets-quote blockquote::before {
                        background-color: #fff;
                        bottom: -1em;
                        content: "";
                        left: 2em;
                        position: absolute;
                        right: 2em;
                        top: -1em;
                    }
                    .square-brackets-quote cite {
                        color:#757575;
                        display: block;
                        font-size:small;
                        font-style: normal;
                        text-align: right;
                        text-transform:uppercase;
                    }
                    * {
                        position: relative;
                        z-index: 1;
                    }
                `
        },
        template: (options: WeatherOptions) => {
            return `
                    <div class="square-brackets-quote">
                        <blockquote>
                            <p>${options.weather}</p>
                            <cite>${options.weather === 'Unknown' ? 'Anonymous' : options.weather}</cite>
                        </blockquote>
                    </div>
                `
        },
    },
    churchill: {
        style: (options: StyleOptions) => {
            return `
                    #ct{
                        height:auto;
                        width:600px;
                        margin: 20px 50px 20px 10px;
                        text-align:center;
                        position:relative;
                        color:#${options.theme.quoteColor};
                        padding:15px;

                        background: radial-gradient(circle at top left, transparent 15px, #${options.theme.bgColor} 0) top left,
                          radial-gradient(circle at top right, transparent 15px, #${options.theme.bgColor} 0) top right,
                          radial-gradient(circle at bottom right, transparent 15px, #${options.theme.bgColor} 0) bottom right,
                          radial-gradient(circle at bottom left, transparent 15px, #${options.theme.bgColor} 0) bottom left;
                        ${options.animation.animation};
                        background-size: 51% 51%;
                        background-repeat: no-repeat;
                    }
                    ${options.animation.keyframes}
                    span{
                        background:#${options.theme.bgColor};
                        color:#${options.theme.authorColor};
                        padding:0 10px;
                        font-size:20px;
                        position:relative;
                        top:-28px;
                    }
                    .corner{
                        height:30px;
                        width:30px;
                        border-radius:50%;
                        border:1px solid #fff;
                        transform:rotate(-45deg);
                        position:absolute;
                        background:#fff;
                    }
                    #left_top{
                        top:-16px;
                        left:-16px;
                        background: transparent;
                        border-color:transparent transparent #f1c40f transparent;
                    }
                    #right_top{
                        top:-16px;
                        right:-16px;
                        background: transparent;
                        border-color:transparent transparent transparent #f1c40f;
                    }
                    #left_bottom{
                        bottom:-16px;
                        left:-16px;
                        background: transparent;
                        border-color:transparent #f1c40f transparent transparent ;
                    }
                    #right_bottom{
                        bottom:-16px;
                        right:-16px;
                        background: transparent;
                        border-color:#f1c40f transparent transparent transparent;
                    }
                    #borderLeft {
                        border-left: 1px solid #f1c40f;
                        position: absolute;
                        top: 15px;
                        bottom: 15px;
                        left:-1px;
                    }
                    #borderTop {
                        border-top: 1px solid #f1c40f;
                        position: absolute;
                        right: 15px;
                        left: 15px;
                        top: -1px;
                    }
                    #borderRight {
                        border-right: 1px solid #f1c40f;
                        position: absolute;
                        top: 15px;
                        bottom: 15px;
                        right: -1px;
                    }
                    #borderBottom {
                        border-bottom: 1px solid #f1c40f;
                        position: absolute;
                        right: 15px;
                        left: 15px;
                        bottom: -1px;
                    }
                    p{
                        padding-top:0px;
                        font-size:17px
                    }
                `
        },
        template: (options: WeatherOptions) => {
            return `
                    <div id="ct">
                        <div class="corner" id="left_top"></div>
                        <div class="corner" id="left_bottom"></div>
                        <div class="corner" id="right_top"></div>
                        <div class="corner" id="right_bottom"></div>
                        <div id="borderLeft"></div>
                        <div id="borderRight"></div>
                        <div id="borderBottom"></div>
                        <div id="borderTop"></div>
                        <span>${options.weather === 'Unknown' ? 'Anonymous' : options.weather}</span>
                        <blockquote>
                            <p><i>${options.weather}</i></p>
                        </blockquote>
                    </div>
                `
        },
    },
    samuel: {
        style: (options: StyleOptions) => {
            const borderColor = options.theme.bgColor === 'fffefe' ? '757575' : options.theme.bgColor
            return `
                    * {
                        position: relative;
                        z-index: 1;
                    }
                    .quote {
                        display: inline-block;
                        margin: 1em;
                        width:600px;
                        ${options.animation.animation};
                    }
                    ${options.animation.keyframes}
                    blockquote {
                        border: solid 6px #${borderColor};
                        display: inline-block;
                        margin: 0;
                        font-size:16px;
                        padding: 1em;
                        background: #fff;
                        -webkit-mask-image: radial-gradient(circle 0 at 0 0, transparent 0, transparent, black);
                        mask-image: radial-gradient(circle 0 at 0 0, transparent 0, transparent, black);
                        position: relative;
                    }
                    blockquote::before {
                        background-color: #fff;
                        bottom: -10%;
                        content: "";
                        left: 0;
                        position: absolute;
                        right: 0;
                        top: -10%;
                        transform: rotate(-15deg) skew(5deg);
                    }
                    cite {
                        display: block;
                        font-style: italic;
                        text-align: right;
                    }
                    cite::before {
                        content: "- ";
                    }
                `
        },
        template: (options: WeatherOptions) => {
            return `
                    <div class="quote">
                        <blockquote>
                            <p>${options.weather}</p>
                            <cite>${options.weather === 'Unknown' ? 'Anonymous' : options.weather}</cite>
                        </blockquote>
                    </div>
                `
        },
    },
    zues: {
        style: (options: StyleOptions) => {
            return `
                    .container{
                        background-color:#000;
                        width:550px;
                        height:auto;
                        padding:30px 20px 40px 40px;
                        ${options.animation.animation};
                    }
                    ${options.animation.keyframes}
                    .quote4{
                        background-color:#000;
                        color:#fff;
                        width:450px;
                        text-align:justify;
                        border-left:  thick double #C08552;
                        border-right:  thick double #C08552;
                        padding:40px 10px;
                        position:relative;
                        transform: skew(-.312rad);
                        height:auto;
                    }
                    .quote4::before, .quote4::after{
                        position:absolute;
                        font-size:105px;
                        font-family: 'Dosis', sans-serif;
                        background:#000;
                        display:block;
                        height:30px;
                        width:45px;
                        text-align:center;
                        color:#DAB49D;
                        left:0;
                        right:0;
                        margin:auto;
                        z-index:100;
                    }
                    .quote4::before{
                        content:"“";
                        top:-10px;
                        line-height:80px;
                        z-index:1;
                    }
                    .quote4::after{
                        content:"”";
                        bottom:-25px;
                        line-height: 70px;
                    }
                    .quote4 .first, .quote4 .txt{
                        width:90%;
                        margin:auto;
                        transform: skew(.312rad);
                    }
                    .quote4 .first{
                        margin-top:10px;
                        width:100%;
                        color: #DAB49D;
                        font-size:14px;
                        font-family: 'Dosis', sans-serif;
                        text-transform:uppercase;
                        letter-spacing:1px;
                    }
                    .quote4 .txt{
                        color:#F3E9DC;
                        font-size:16px;
                        font-family: 'Roboto Slab', serif;
                    }
                    .quote4 .from{
                        text-align:center;
                        margin-top:15px;
                        font-size:13px;
                        font-family: 'Exo', sans-serif;
                        color: #5E3023;
                    }
                    .quote4 .border::before, .quote4 .border::after{
                        content:"";
                        width:280px;
                        height:3px;
                        position:absolute;
                        display:block;
                        left:0;
                        right:0;
                        margin:auto;
                    }
                    .quote4 .border::after{
                        border-bottom: 2px solid #C08552;
                        bottom: 0px;
                    }
                    .quote4 .border::before{
                        border-top: 2px solid #C08552;
                        top:0px;
                    }
                `
        },
        template: (options: WeatherOptions) => {
            return `
                    <div class="container">
                        <div class="quote4">
                            <div class="border"></div>
                            <div class="txt">${options.weather}</div>
                            <div class="from">${options.weather}</div>
                        </div>
                    </div>
                `
        },
    },
}

export const getLayout = (value: Optional<LayoutPattern>): LayoutOptions => {
    return value ? layouts[value] : layouts[LayoutPattern.default]
}
