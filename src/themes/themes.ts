import { Optional } from '../../typings/standard-types'
import { ThemePattern } from '../../typings/enum-types'
import { ThemeOptions } from '../../typings/domain-types'

/**
 * ThemeRecord
 * @desc Type representing theme configuration options
 */
export type ThemeRecord = Record<ThemePattern, ThemeOptions>

/**
 * Theme mappings
 * @desc Type representing supported theme mappings
 */
const themes: Readonly<ThemeRecord> = {
    'default': {
        primaryColor: '2f80ed',
        secondaryColor: '333',
        bgColor: 'fffefe',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'default-repocard': {
        primaryColor: '2f80ed',
        secondaryColor: '333',
        bgColor: 'fffefe',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'dark': {
        primaryColor: 'fff',
        secondaryColor: '9f9f9f',
        bgColor: '151515',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'radical': {
        primaryColor: 'fe428e',
        secondaryColor: 'a9fef7',
        bgColor: '141321',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'merko': {
        primaryColor: 'abd200',
        secondaryColor: '68b587',
        bgColor: '0a0f0b',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'gruvbox': {
        primaryColor: 'fabd2f',
        secondaryColor: '8ec07c',
        bgColor: '282828',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'tokyonight': {
        primaryColor: '70a5fd',
        secondaryColor: '38bdae',
        bgColor: '1a1b27',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'onedark': {
        primaryColor: 'e4bf7a',
        secondaryColor: 'df6d74',
        bgColor: '282c34',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'cobalt': {
        primaryColor: 'e683d9',
        secondaryColor: '75eeb2',
        bgColor: '193549',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'synthwave': {
        primaryColor: 'e2e9ec',
        secondaryColor: 'e5289e',
        bgColor: '2b213a',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'highcontrast': {
        primaryColor: 'e7f216',
        secondaryColor: 'fff',
        bgColor: '000',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'dracula': {
        primaryColor: 'ff6e96',
        secondaryColor: 'f8f8f2',
        bgColor: '282a36',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'prussian': {
        primaryColor: 'bddfff',
        secondaryColor: '6e93b5',
        bgColor: '172f45',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'monokai': {
        primaryColor: 'eb1f6a',
        secondaryColor: 'f1f1eb',
        bgColor: '272822',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'vue': {
        primaryColor: '41b883',
        secondaryColor: '273849',
        bgColor: 'fffefe',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'vue-dark': {
        primaryColor: '41b883',
        secondaryColor: 'fffefe',
        bgColor: '273849',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'shades-of-purple': {
        primaryColor: 'fad000',
        secondaryColor: 'a599e9',
        bgColor: '2d2b55',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'nightowl': {
        primaryColor: 'c792ea',
        secondaryColor: '7fdbca',
        bgColor: '011627',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'buefy': {
        primaryColor: '7957d5',
        secondaryColor: '363636',
        bgColor: 'ffffff',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'blue-green': {
        primaryColor: '2f97c1',
        secondaryColor: '0cf574',
        bgColor: '040f0f',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'algolia': {
        primaryColor: '00aeff',
        secondaryColor: 'eff00a',
        bgColor: '050f2c',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'great-gatsby': {
        primaryColor: 'ffa726',
        secondaryColor: 'ffd95b',
        bgColor: '000000',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'darcula': {
        primaryColor: 'ba5f17',
        secondaryColor: 'bebebe',
        bgColor: '242424',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'bear': {
        primaryColor: 'e03c8a',
        secondaryColor: 'bcb28d',
        bgColor: '1f2023',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'solarized-dark': {
        primaryColor: '268bd2',
        secondaryColor: '859900',
        bgColor: '002b36',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'solarized-light': {
        primaryColor: '268bd2',
        secondaryColor: '859900',
        bgColor: 'fdf6e3',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'chartreuse-dark': {
        primaryColor: '7fff00',
        secondaryColor: 'f007ff',
        bgColor: '000',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'nord': {
        primaryColor: '81a1c1',
        secondaryColor: 'd8dee9',
        bgColor: '2e3440',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'gotham': {
        primaryColor: '2aa889',
        secondaryColor: '99d1ce',
        bgColor: '0c1014',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'material-palenight': {
        primaryColor: 'c792ea',
        secondaryColor: 'a6accd',
        bgColor: '292d3e',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'graywhite': {
        primaryColor: '24292e',
        secondaryColor: '24292e',
        bgColor: 'ffffff',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'vision-friendly-dark': {
        primaryColor: 'ffb000',
        secondaryColor: 'ffbb00',
        bgColor: '000000',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'ayu-mirage': {
        primaryColor: 'f4cd7c',
        secondaryColor: 'c7c8c2',
        bgColor: '1f2430',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'midnight-purple': {
        primaryColor: '9745f5',
        secondaryColor: '9846f6',
        bgColor: '000000',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'calm': {
        primaryColor: 'e07a5f',
        secondaryColor: 'ebcfb2',
        bgColor: '373f51',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'flag-india': {
        primaryColor: 'ff8f1c',
        secondaryColor: '509E2F',
        bgColor: 'ffffff',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'omni': {
        primaryColor: 'FF79C6',
        secondaryColor: 'E1E1E6',
        bgColor: '191622',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'react': {
        primaryColor: '61dafb',
        secondaryColor: '64ddff',
        bgColor: '20232a',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'jolly': {
        primaryColor: 'ff64da',
        secondaryColor: 'fd99ff',
        bgColor: '291B3E',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'maroongold': {
        primaryColor: 'F7EF8A',
        secondaryColor: 'E0AA3E',
        bgColor: '260000',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'yeblu': {
        primaryColor: 'ffdd99',
        secondaryColor: 'ffee99',
        bgColor: '002046',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'blueberry': {
        primaryColor: '82aaff',
        secondaryColor: '27e8a7',
        bgColor: '242938',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'slateorange': {
        primaryColor: 'faa627',
        secondaryColor: 'fdd789',
        bgColor: '36393f',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'kacho-ga': {
        primaryColor: 'bf4a3f',
        secondaryColor: 'd9c8a9',
        bgColor: '402b23',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
    'arabesque': {
        primaryColor: '0a83dc',
        secondaryColor: 'd9c8a9',
        bgColor: 'ffffff',
        colorPattern: 'ffe0e9',
        opacity: '0.3',
    },
}

/**
 * Returns {@link ThemeOptions} by input {@link ThemePattern} value
 * @param value initial input {@link ThemePattern} to fetch by
 */
export const getTheme = (value: Optional<ThemePattern>): ThemeOptions => {
    return value ? themes[value] : themes[ThemePattern.default]
}
