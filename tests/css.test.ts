import { describe, expect, test } from '@jest/globals'

import { css } from '../utils/getCss'
import { LayoutPattern } from "../typings/types";

describe('Testing CSS style', () => {
    test('Style CSS SVG', () => {
        expect(
            css({
                backgroundColor: '#ecf0f1',
                layout: LayoutPattern.large,
                opacity: '1',
                colorPattern: '#eaeaea',
                fontColor: '#e64a19',
            })
        ).toBeTruthy()
    })
})
