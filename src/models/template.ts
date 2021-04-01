import { LayoutOptions, TemplateData } from '../../typings/domain-types'

export const getSvgTemplate = async <S, T, L extends LayoutOptions<S, T>>(
    data: TemplateData<S, T, L>
): Promise<string> => {
    const { layout, style, image, template } = data

    return `
        <svg width="${image.width}" height="${image.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="0" y="0" width="${image.width}" height="${image.height}">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <style>
                        ${layout.style(style)}
                    </style>
                    ${layout.template(template)}
                </div>
            </foreignObject>
        </svg>
    `
}
