import Todo from "./components/todo";

export type TodoItem = {
    id: number;
    name: string;
    done: boolean;
};

export type TodoItemForAdd = {
    name: string;
}

export type TodoItemForUpdate = {
    id: number;
    name: string;
    done: boolean;
}

export type TodoItemForDelete = {
    id: number;
}

type ActionType = 
    | "Fetch todo list from server" 
    | "A todo addition to store" 
    | "Update todo state" 
    | "Remove todo"
    | "Clear error from state";

export type Action = 
    | FetchTodoListAction
    | AddTodoAction
    | UpdateTodoAction
    | RemoveTodoAction
    | ClearErrorAction;

export type FetchTodoListAction = {
    type: ActionType;
    payload: undefined
}

export type AddTodoAction = {
    type: ActionType;
    payload: TodoItemForAdd
}

export type UpdateTodoAction = {
    type: ActionType;
    payload: TodoItemForUpdate
}

export type RemoveTodoAction = {
    type: ActionType;
    payload: TodoItemForDelete
}

export type ClearErrorAction = {
    type: ActionType;
    payload: undefined
}

export interface State {
    todoList: TodoItem[];
    error?: Error | null;
}