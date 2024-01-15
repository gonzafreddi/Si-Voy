 // reducer.js
const initialState = {
    // Define el estado inicial aquí
    GET_PLACES,
    GET_GASTRONOMIA,
    GET_BALNEARIOS,
  }; from './actions'
  
  const initialState = {
    places: [],
    gastronomia: [],
    balnearios: [],
    loader: true
}
  const rootReducer = (state = initialState, action) => {
    // Maneja las acciones y actualiza el estado
    switch (action.type) {
      case GET_PLACES:
            return {...state, places: action.payload}
      case GET_GASTRONOMIA:
            return {...state, gastronomia: action.payload}
      case GET_BALNEARIOS:
            return {...state, balnearios: action.payload}
      // Agrega casos para manejar acciones específicas
      // Ejemplo: 
      // case 'INCREMENT':
      //   return { ...state, count: state.count + 1 };
      // case 'DECREMENT':
      //   return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  export default rootReducer;
  };
  
  export default rootReducer;
  