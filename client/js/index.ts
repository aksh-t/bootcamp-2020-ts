import { createFetchTodoListAction, clearError } from "./flux/index";
import store from "./store";
import TodoList from "./components/todo-list";
import TodoForm from "./components/todo-form";
import { State } from "./types"

new TodoForm().mount();

store.subscribe((state: State) => {
  if (state.error == null) {
    const parent: Element | null = document.querySelector(".todo-list__wrapper");
    if (parent) new TodoList(parent, { todoList: state.todoList }).render();
  } else {
    console.error(state.error);
    alert(state.error);
    store.dispatch(clearError());
  }
});

store.dispatch(createFetchTodoListAction());
