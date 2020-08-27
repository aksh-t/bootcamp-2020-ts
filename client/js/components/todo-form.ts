import store from "../store";
import { createAddTodoAction } from "../flux/index";

class TodoForm {
  constructor() {
    this.button = document.querySelector(".todo-form__submit");
    this.form = document.querySelector(".todo-form__input");
  }

  mount() {
    this.button.addEventListener("click", e => {
      e.preventDefault();
      store.dispatch(createAddTodoAction({ name: this.form.value }));
      this.form.value = "";
    });
  }
}

export default TodoForm;
