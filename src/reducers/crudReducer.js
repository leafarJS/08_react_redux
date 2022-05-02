import {
  CREATE_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
  DELETE_DATA,
  NOT_DATA,
} from "../types";
export const initialState = { db: [] };
export function crudReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      // console.log(action.payload);
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case CREATE_DATA: {
      //console.log(action.payload);
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case UPDATE_DATA: {
      //console.log(action.payload);
      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        db: newData,
      };
    }
    case DELETE_DATA: {
      console.log(action.payload);
      let newData = state.db.filter((el) => el.id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }
    case NOT_DATA: {
      return initialState;
    }
    default:
      return state;
  }
}
