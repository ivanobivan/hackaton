import {CHANGE_NAME} from '../constants/constants'

const initialState = {
    name: 'Ivan',
    lol: ['lol', 'kek']
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.name,
                lol:[]
            };
        default:
            return state
    }
}