import { v4 as uuidv4 } from "uuid";

export const initialState = {
  toDos: [],
  completed: []
};

export const ADD = "add";
export const DEL = "del";
export const COMPLETE = "complete";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }]
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload)
      };
    case COMPLETE:
      return {
        ...state,
        completed: [
          ...state.completed,
          state.toDos.find((toDo) => toDo.id === action.payload)
        ],
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload)
      };
    default:
      throw new Error();
  }
};

export default reducer;
