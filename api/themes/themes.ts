import { Optional } from '../../typings/standard-types'
import { ThemePattern } from '../../typings/enum-types'
import { ThemeOptions } from '../../typings/types'

export type ThemeRecord = Record<ThemePattern, ThemeOptions>

const themes: Readonly<ThemeRecord> = {
    'default': {
        quoteColor: '2f80ed',
        authorColor: '333',
        bgColor: 'fffefe',
    },
    'default-repocard': {
        quoteColor: '2f80ed',
        authorColor: '333',
        bgColor: 'fffefe',
    },
    'dark': {
        quoteColor: 'fff',
        authorColor: '9f9f9f',
        bgColor: '151515',
    },
    'radical': {
        quoteColor: 'fe428e',
        authorColor: 'a9fef7',
        bgColor: '141321',
    },
    'merko': {
        quoteColor: 'abd200',
        authorColor: '68b587',
        bgColor: '0a0f0b',
    },
    'gruvbox': {
        quoteColor: 'fabd2f',
        authorColor: '8ec07c',
        bgColor: '282828',
    },
    'tokyonight': {
        quoteColor: '70a5fd',
        authorColor: '38bdae',
        bgColor: '1a1b27',
    },
    'onedark': {
        quoteColor: 'e4bf7a',
        authorColor: 'df6d74',
        bgColor: '282c34',
    },
    'cobalt': {
        quoteColor: 'e683d9',
        authorColor: '75eeb2',
        bgColor: '193549',
    },
    'synthwave': {
        quoteColor: 'e2e9ec',
        authorColor: 'e5289e',
        bgColor: '2b213a',
    },
    'highcontrast': {
        quoteColor: 'e7f216',
        authorColor: 'fff',
        bgColor: '000',
    },
    'dracula': {
        quoteColor: 'ff6e96',
        authorColor: 'f8f8f2',
        bgColor: '282a36',
    },
    'prussian': {
        quoteColor: 'bddfff',
        authorColor: '6e93b5',
        bgColor: '172f45',
    },
    'monokai': {
        quoteColor: 'eb1f6a',
        authorColor: 'f1f1eb',
        bgColor: '272822',
    },
    'vue': {
        quoteColor: '41b883',
        authorColor: '273849',
        bgColor: 'fffefe',
    },
    'vue-dark': {
        quoteColor: '41b883',
        authorColor: 'fffefe',
        bgColor: '273849',
    },
    'shades-of-purple': {
        quoteColor: 'fad000',
        authorColor: 'a599e9',
        bgColor: '2d2b55',
    },
    'nightowl': {
        quoteColor: 'c792ea',
        authorColor: '7fdbca',
        bgColor: '011627',
    },
    'buefy': {
        quoteColor: '7957d5',
        authorColor: '363636',
        bgColor: 'ffffff',
    },
    'blue-green': {
        quoteColor: '2f97c1',
        authorColor: '0cf574',
        bgColor: '040f0f',
    },
    'algolia': {
        quoteColor: '00AEFF',
        authorColor: 'FFFFFF',
        bgColor: '050F2C',
    },
    'great-gatsby': {
        quoteColor: 'ffa726',
        authorColor: 'ffd95b',
        bgColor: '000000',
    },
    'darcula': {
        quoteColor: 'BA5F17',
        authorColor: 'BEBEBE',
        bgColor: '242424',
    },
    'bear': {
        quoteColor: 'e03c8a',
        authorColor: 'bcb28d',
        bgColor: '1f2023',
    },
    'solarized-dark': {
        quoteColor: '268bd2',
        authorColor: '859900',
        bgColor: '002b36',
    },
    'solarized-light': {
        quoteColor: '268bd2',
        authorColor: '859900',
        bgColor: 'fdf6e3',
    },
    'chartreuse-dark': {
        quoteColor: '7fff00',
        authorColor: 'fff',
        bgColor: '000',
    },
    'nord': {
        quoteColor: '81a1c1',
        authorColor: 'd8dee9',
        bgColor: '2e3440',
    },
    'gotham': {
        quoteColor: '2aa889',
        authorColor: '99d1ce',
        bgColor: '0c1014',
    },
    'material-palenight': {
        quoteColor: 'c792ea',
        authorColor: 'a6accd',
        bgColor: '292d3e',
    },
    'graywhite': {
        quoteColor: '24292e',
        authorColor: '24292e',
        bgColor: 'ffffff',
    },
    'vision-friendly-dark': {
        quoteColor: 'ffb000',
        authorColor: 'ffffff',
        bgColor: '000000',
    },
    'ayu-mirage': {
        quoteColor: 'f4cd7c',
        authorColor: 'c7c8c2',
        bgColor: '1f2430',
    },
    'midnight-purple': {
        quoteColor: '9745f5',
        authorColor: 'ffffff',
        bgColor: '000000',
    },
    'calm': {
        quoteColor: 'e07a5f',
        authorColor: 'ebcfb2',
        bgColor: '373f51',
    },
    'flag-india': {
        quoteColor: 'ff8f1c',
        authorColor: '509E2F',
        bgColor: 'ffffff',
    },
    'omni': {
        quoteColor: 'FF79C6',
        authorColor: 'E1E1E6',
        bgColor: '191622',
    },
    'react': {
        quoteColor: '61dafb',
        authorColor: 'ffffff',
        bgColor: '20232a',
    },
    'jolly': {
        quoteColor: 'ff64da',
        authorColor: 'ffffff',
        bgColor: '291B3E',
    },
    'maroongold': {
        quoteColor: 'F7EF8A',
        authorColor: 'E0AA3E',
        bgColor: '260000',
    },
    'yeblu': {
        quoteColor: 'ffff00',
        authorColor: 'ffffff',
        bgColor: '002046',
    },
    'blueberry': {
        quoteColor: '82aaff',
        authorColor: '27e8a7',
        bgColor: '242938',
    },
    'slateorange': {
        quoteColor: 'faa627',
        authorColor: 'ffffff',
        bgColor: '36393f',
    },
    'kacho-ga': {
        quoteColor: 'bf4a3f',
        authorColor: 'd9c8a9',
        bgColor: '402b23',
    },
}

export const getTheme = (value: Optional<ThemePattern>): ThemeOptions => {
    return value ? themes[value] : themes[ThemePattern.default]
}
