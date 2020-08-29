import store from "../store";
import { createAddTodoAction } from "../flux/index";

interface TodoForm {
  button: HTMLButtonElement | null;
  form: HTMLInputElement | null;
}

class TodoForm {
  constructor() {
    this.button = document.querySelector(".todo-form__submit");
    this.form = document.querySelector(".todo-form__input");
  }

  mount() {
    this.button?.addEventListener("click", e => {
      e.preventDefault();
      
      if (!this.form) return
      store.dispatch(createAddTodoAction({ name: this.form.value }));
      this.form.value = "";
    });
  }
}

export default TodoForm;
