import { test } from "../test/runner";
import {
  createStore,
  createFetchTodoListAction,
  createAddTodoAction
} from "./index";
import { State } from "../types"

function todo一覧を取得するアクションをdispatchしたときtodo一覧が更新される() {
  const initialState:State = { todoList: [] };
  const store = createStore(initialState);
  store.dispatch(createFetchTodoListAction());
  store.subscribe((state: State) => {
    console.assert(initialState.todoList !== state.todoList);
  });
}

function todoを追加するアクションをdispatchしたときtodoが追加される() {
  const initialState: State = { todoList: [] };
  const store = createStore(initialState);
  store.dispatch(createAddTodoAction({ name: "hoge" }));
  store.subscribe((state: State) => {
    console.assert(state.todoList[0].name === "hoge");
    console.assert(!state.todoList[0].done);
  });
}

test(todo一覧を取得するアクションをdispatchしたときtodo一覧が更新される);
test(todoを追加するアクションをdispatchしたときtodoが追加される);
