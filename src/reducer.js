import { v4 as uuidv4 } from "uuid";
import { ADD, DEL, COMPLETE, UNCOMPLETE } from "./actions";

export const initialState = {
  toDos: [],
  completed: []
};

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
    case UNCOMPLETE:
      return {
        ...state,
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
        toDos: [
          ...state.toDos,
          state.completed.find((toDo) => toDo.id === action.payload)
        ]
      };
    default:
      throw new Error();
  }
};

export default reducer;
