 // reducer.js
const initialState = {
    // Define el estado inicial aquí
  };
  
  const rootReducer = (state = initialState, action) => {
    // Maneja las acciones y actualiza el estado
    switch (action.type) {
      // Agrega casos para manejar acciones específicas
      // Ejemplo: 
      // case 'INCREMENT':
      //   return { ...state, count: state.count + 1 };
      // case 'DECREMENT':
      //   return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  