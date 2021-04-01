import { WeatherTemplateLayoutOptions } from '../../../typings/domain-types'

const darkCloudsLayout: Record<string, WeatherTemplateLayoutOptions> = {
    dark_clouds: {
        style: () => {
            return `
                `
        },
        template: () => {
            return `
                    <svg class="icon" viewbox="0 0 100 100">
                        <use xlink:href="#grayCloud" class="small-cloud" fill="url(#gradGray)"/>
                        <use xlink:href="#grayCloud" x="25" y="10" class="reverse-small-cloud" fill="url(#gradDarkGray)"/>
                        <use xlink:href="#whiteCloud" x="7" />
                    </svg>
                `
        },
    },
}

export default darkCloudsLayout
