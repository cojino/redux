import { Task } from "./module/task";
import { createStore } from "redux";

const initialState = [
  new Task(1, "task 1"),
  new Task(2, "task 2"),
  new Task(3, "task 3"),
];

const TYPE_TODO_ADD = "todo/add";

const TodoReducer = (prevState = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_TODO_ADD:
      return [
        ...prevState,
        new Task(prevState.length + 1, action.payload.titleTask),
      ];
    default:
      return prevState;
  }
};

const store = createStore(TodoReducer);

store.dispatch({
  type: TYPE_TODO_ADD,
  payload: { titleTask: "task 4" },
});
store.dispatch({
  type: TYPE_TODO_ADD,
  payload: { titleTask: "task 5" },
});

console.log(store.getState());
