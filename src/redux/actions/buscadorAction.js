import { Axios } from "axios";

export const FETCH_PORKEMON_REQUEST = 'FETCH_PORKEMON_REQUEST';
export const FETCH_PORKEMON_SUCCESS = 'FETCH_PORKEMON_SUCCESS';
export const FETCH_PORKEMON_FAILURE = 'FETCH_PORKEMON_FAILURE';

export const fetchPokemontRequest = () => {
    return {
        type: FETCH_PORKEMON_REQUEST
    }
}

export const fetchPokemontSuccess = (Pokemon) => {
    return {
        type: FETCH_PORKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fetchPokemontFailure = (error) => {
    return {
        type: FETCH_PORKEMON_FAILURE,
        payload: error
    }
}

const fetchPokemon = (valor) => {
    return(dispatch) => {
        dispatch(fetchPokemontRequest());
        Axios.length(`https://pokeapi.co/api/v2/pokemon/$(valor)`)
        .then(response => {
            dispatch(fetchPokemontSuccess([response.data]));
        })
        .catch(error => {
            dispatch(fetchPokemontFailure('No se encontro el pokemon'));
        });
    }
}

export default fetchPokemon;