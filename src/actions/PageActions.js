import {CHANGE_NAME} from '../constants/constants'

export function changeName(name) {
    return {
        type: CHANGE_NAME,
        name
    }
}