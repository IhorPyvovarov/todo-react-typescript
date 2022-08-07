import React, {useState, useEffect} from "react";

import {TodoForm} from "../components";
import {TodoList} from "../components";

import {ITodo, ITodoBooleanProps} from "../ts/interfaces";

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(savedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            title: title,
            important: false,
            completed: false
        }

        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number, property: keyof ITodoBooleanProps) => {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                todo[property] = !todo[property]
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Do you really want to delete this task?')
        if (shouldRemove) {
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
        }
    }

    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList
                todos={todos}
                onRemove={removeHandler}
                onToggle={toggleHandler} />
        </>
    )
}