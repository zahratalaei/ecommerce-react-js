export const cartReducer = (state, action) => {
     switch (action.type){
          // case 'FETCH_PRODUCTS' :
          // return {...state,products:action.payload}
          default:
          return state
     }
}
export const productReducer = (state,action) => {
     switch (action.type){
          case 'FETCH_PRODUCTS':
          return {search:action.payload}
          default:
          return state
     }
}