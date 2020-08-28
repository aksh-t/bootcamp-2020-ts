export type Props = {
    id: number;
    name: string;
    done: boolean;
}

type ActionType = 
    | "Fetch todo list from server" 
    | "A todo addition to store" 
    | "Update todo state" 
    | "Remove todo"
    | "Clear error from state";

export type Action = {
    type: ActionType;
    payload: any | undefined
}

export interface State {
    todoList: any[];
    error?: Error | null;
}