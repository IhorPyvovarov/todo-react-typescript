export interface ITodoBooleanProps {
    completed: boolean,
    important: boolean
}

export interface ITodo extends ITodoBooleanProps {
    id: number,
    title: string
}

export interface TodoFormProps {
    onAdd(title: string): void
}