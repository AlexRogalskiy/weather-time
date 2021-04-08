/**
 * Profile
 * @desc Enumeration type representing supported profiles
 */
export enum Profile {
    dev = 'dev',
    prod = 'prod',
    test = 'test',
}

//--------------------------------------------------------------------------------------------------
/**
 * SpritePattern
 * @desc Enumeration type representing supported sprite patterns
 */
export enum SpritePattern {
    cloud = 'cloud',
    cloud_moon = 'cloud moon',
    cloud_sun = 'cloud sun',
    cloudy = 'cloudy',
    fog = 'fog',
    hail = 'hail',
    haze = 'haze',
    light_rain = 'light rain',
    moon = 'moon',
    rain = 'rain',
    shower_moon = 'shower moon',
    shower_sun = 'shower sun',
    sleet = 'sleet',
    snow = 'snow',
    snowflake = 'snowflake',
    storm_moon = 'storm moon',
    storm_sun = 'storm sun',
    sun = 'sun',
    thunderstorm = 'thunderstorm',
    default = 'default',
}

//--------------------------------------------------------------------------------------------------
/**
 * WeatherPattern
 * @desc Enumeration type representing supported weather patterns
 */
export enum WeatherPattern {
    clear = 'clear',
    hail = 'hail',
    haze = 'haze',
    misty = 'misty',
    sleet = 'sleet',
    sunny = 'sunny',
    tornado = 'tornado',
    thunderstorm = 'thunderstorm',
    cloudy = 'cloudy',
    partly_cloudy = 'partly cloudy',
    mostly_cloudy = 'mostly cloudy',
    snowy = 'snowy',
    light_snowy = 'light snowy',
    heavy_snowy = 'heavy snowy',
    partly_snowy = 'partly snowy',
    mostly_snowy = 'mostly snowy',
    rainy = 'rainy',
    light_rainy = 'light rainy',
    heavy_rainy = 'heavy rainy',
    partly_rainy = 'partly rainy',
    mostly_rainy = 'mostly rainy',
    default = 'default',
}

//--------------------------------------------------------------------------------------------------
/**
 * TimeOfDay
 * @desc Enumeration type representing supported time of day
 */
export enum TimeOfDay {
    day = 'DAY',
    night = 'NIGHT',
}

//--------------------------------------------------------------------------------------------------
/**
 * TemperatureUnit
 * @desc Enumeration type representing supported temperate units
 */
export enum TemperatureUnit {
    celsius = 'c',
    fahrenheit = 'f',
}

//--------------------------------------------------------------------------------------------------
/**
 * Mode
 * @desc Enumeration type representing supported modes
 */
export enum Mode {
    light = 'LIGHT',
    dark = 'DARK',
}

//--------------------------------------------------------------------------------------------------
/**
 * FontPattern
 * @desc Enumeration type representing supported font patterns
 */
export enum FontPattern {
    default = 'default',
    audiowide = 'audiowide',
    balthazar = 'balthazar',
    bangers = 'bangers',
    baumans = 'baumans',
    bellota = 'bellota',
    bilbo = 'bilbo',
    bonbon = 'bonbon',
    carter_one = 'carter-one',
    caveat = 'caveat',
    chicle = 'chicle',
    chilanka = 'chilanka',
    coiny = 'coiny',
    cookie = 'cookie',
    damion = 'damion',
    delius = 'delius',
    italianno = 'italianno',
    devonshire = 'devonshire',
    butterfly_kids = 'butterfly-kids',
    bilbo_wash_caps = 'bilbo-swash-caps',
    beth_ellen = 'beth-ellen',
    julee = 'julee',
    lacquer = 'lacquer',
    lily_script_one = 'lily-script-one',
    architects_daughter = 'architects-daughter',
    annie_use_your_telescope = 'annie-use-your-telescope',
    amita = 'amita',
    comfortaa = 'comfortaa',
    monserrat_700 = 'monserrat-700',
    monserrat = 'monserrat',
    lobster = 'lobster',
    merienda = 'merienda',
    macondo = 'macondo',
    mansalva = 'mansalva',
    meddon = 'meddon',
    miltonian_tattoo = 'miltonian-tattoo',
    miniver = 'miniver',
    mogra = 'mogra',
    montez = 'montez',
    oregano = 'oregano',
    paprika = 'paprika',
    quando = 'quando',
    quintessential = 'quintessential',
    ramaraja = 'ramaraja',
    rancho = 'rancho',
    redressed = 'redressed',
    risque = 'risque',
    rochester = 'rochester',
    sail = 'sail',
    salsa = 'salsa',
    shrikhand = 'shrikhand',
    simonetta = 'simonetta',
    sniglet = 'sniglet',
    sofia = 'sofia',
    srisakdi = 'srisakdi',
    stylish = 'stylish',
    tillana = 'tillana',
    unkempt = 'unkempt',
    vibur = 'vibur',
    yesteryear = 'yesteryear',
}

//--------------------------------------------------------------------------------------------------
/**
 * LayoutPattern
 * @desc Enumeration type representing supported layout patterns
 */
export enum LayoutPattern {
    default = 'default',
    simple = 'simple',
    dark = 'dark',
    advanced = 'advanced',
    standard = 'standard',
    small = 'small',
    medium = 'medium',
    light = 'light',
    bono = 'bono',
    cantor = 'cantor',
}

//--------------------------------------------------------------------------------------------------
/**
 * AnimationPattern
 * @desc Enumeration type representing supported animation patterns
 */
export enum AnimationPattern {
    default = 'default',
    grow_out_in = 'grow-out-in',
}

//--------------------------------------------------------------------------------------------------
/**
 * ThemePattern
 * @desc Enumeration type representing supported theme patterns
 */
export enum ThemePattern {
    default = 'default',
    default_repocard = 'default-repocard',
    dark = 'dark',
    radical = 'radical',
    merko = 'merko',
    gruvbox = 'gruvbox',
    tokyonight = 'tokyonight',
    onedark = 'onedark',
    cobalt = 'cobalt',
    synthwave = 'synthwave',
    highcontrast = 'highcontrast',
    dracula = 'dracula',
    prussian = 'prussian',
    monokai = 'monokai',
    vue = 'vue',
    vue_dark = 'vue-dark',
    shades_of_purple = 'shades-of-purple',
    nightowl = 'nightowl',
    buefy = 'buefy',
    blue_green = 'blue-green',
    algolia = 'algolia',
    great_gatsby = 'great-gatsby',
    darcula = 'darcula',
    bear = 'bear',
    solarized_dark = 'solarized-dark',
    solarized_light = 'solarized-light',
    chartreuse_dark = 'chartreuse-dark',
    nord = 'nord',
    gotham = 'gotham',
    material_palenight = 'material-palenight',
    graywhite = 'graywhite',
    vision_friendly_dark = 'vision-friendly-dark',
    ayu_mirage = 'ayu-mirage',
    midnight_purple = 'midnight-purple',
    calm = 'calm',
    flag_india = 'flag-india',
    omni = 'omni',
    react = 'react',
    jolly = 'jolly',
    maroongold = 'maroongold',
    yeblu = 'yeblu',
    blueberry = 'blueberry',
    slateorange = 'slateorange',
    kacho_ga = 'kacho-ga',
    arabesque = 'arabesque',
}

//--------------------------------------------------------------------------------------------------
/**
 * RoutePattern
 * @desc Enumeration type representing supported route patterns
 */
export enum RoutePattern {
    default = 'default',
}
//--------------------------------------------------------------------------------------------------
