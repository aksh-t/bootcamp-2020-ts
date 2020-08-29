import Todo from "./todo";
import { TodoItem } from "../types"

interface TodoList {
  parent: Element;
  element: HTMLUListElement;
  props: {todoList: TodoItem[]}
}

class TodoList {
  constructor(parent: Element, { todoList }: {todoList: TodoItem[]}) {
    this.parent = parent;
    this.element = document.createElement("ul");
    this.element.className = "todo-list";
    this.props = { todoList };
  }

  render() {
    // 二回目以降のレンダリングでは
    // 前回の DOM を破棄して 子要素すべてを rendering し直す
    if (this.parent.children.length !== 0) {
      for (const child of this.parent.children) {
        this.parent.removeChild(child);
      }
    }

    this.props.todoList.map(todo => {
      new Todo(this.element, todo).render();
    });

    this.parent.appendChild(this.element);
  }
}

export default TodoList;
