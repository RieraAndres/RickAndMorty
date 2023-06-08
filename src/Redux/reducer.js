import {ADD_FAV, FILTER , ORDER, REMOVE_FAV} from "./actions";

let initialState = {myFavorites: [],allCharacters:[]};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      const added = [...state.allCharacters, action.payload];
      return {
        ...state,
        myFavorites: [...added],
        allCharacters: [...added]
      };

    case REMOVE_FAV:
      const remove = state.myFavorites.filter(
        (characters) => characters.id !== Number(action.payload)
      );
      return {
        ...state,
        myFavorites: [...remove],
      };
    
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
        (character) => character.gender === action.payload),      
      };

    case ORDER:
      let ordenados;
      if (action.payload === "Ascendente") {
        ordenados = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        ordenados = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: [...ordenados],
      };


    default:
      return {...state};
  }
}

export default rootReducer;
