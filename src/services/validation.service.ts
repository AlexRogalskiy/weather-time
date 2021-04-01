import { Mode, TemperatureUnit, TimeOfDay } from '../../typings/enum-types'

import { valueError } from '../errors/errors'

const ValidationService = {
    validateTemperature: (props): void => {
        if (!isFinite(Number(props.temperature))) {
            throw valueError(`${props.temperature} is not a valid temperature`)
        }

        if (
            props.unit &&
            props.unit !== TemperatureUnit.celsius &&
            props.unit !== TemperatureUnit.fahrenheit
        ) {
            throw valueError(`${props.unit} is not a valid unit`)
        }
    },
    validateMode: (props): void => {
        if (props.mode && props.mode !== Mode.light && props.mode !== Mode.dark) {
            throw valueError(`${props.mode} is not a valid mode`)
        }
    },
    validateTimeOfDay: (props): void => {
        if (props.timeofday && props.timeofday !== TimeOfDay.day && props.timeofday !== TimeOfDay.night) {
            throw valueError(`${props.timeofday} is not a valid time of day`)
        }
    },
}

export default ValidationService
