import { FETCH_PORKEMON_FAILURE, FETCH_PORKEMON_REQUEST, FETCH_PORKEMON_SUCCESS } from "../actions/buscadorAction";

const intialState = {
    loading: false,
    pokemon: [],
    error: ''
}

const buscador = (state = intialState, action) => {
    switch(action.type) {
        case FETCH_PORKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_PORKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }

        case FETCH_PORKEMON_FAILURE:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }

        default: return state;
    }
}

export default buscador;