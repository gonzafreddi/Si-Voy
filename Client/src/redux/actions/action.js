import axios from 'axios'

export const LOADER = "LOADER"
export const GET_BALNEARIOS = "GET_BALNEARIOS"
export const GET_GASTRONOMIA = "GET_GASTRONOMIA"
export const GET_PLACES = "GET_PLACES"

export const getBalnearios = () => {
    return async function (dispatch) {
        try {
        const {data} = await axios.get("")
        dispatch({type: GET_BALNEARIOS, payload: data})
    } catch (error) {
        alert("No se encontraron balnearios");
    }
  }
}

export const getGastronomia = () => {
    return async function (dispatch) {
        try {
        const {data} = await axios.get("")
        dispatch({type: GET_GASTRONOMIA, payload: data})
    } catch (error) {
        alert("No se encontraron resultados");
    }
  }
}

export const getPlaces = () => {
    return async function (dispatch) {
        try {
        const {data} = await axios.get("")
        dispatch({type: GET_PLACES, payload: data})
    } catch (error) {
        alert("No se encontraron lugares");
    }
  }
}