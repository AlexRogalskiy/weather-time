import { TemplateData } from '../../typings/types'

export const getSvgTemplate = (template: TemplateData): string => {
    const { layout, style, weather, image } = template

    return `
        <svg width="${image.width}"
             height="${image.height}"
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="0" y="0" width="${image.width}" height="${image.height}">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <style>
                        ${layout.style(style)}
                    </style>
                    ${layout.template(weather)}
                </div>
            </foreignObject>
        </svg>
    `
}
