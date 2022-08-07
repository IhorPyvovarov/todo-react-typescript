import React from "react";

import {ITodo} from "../../ts/interfaces";

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number, property: string): void,
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {
    if (!todos.length) {
        return <h5>Add your first task above!</h5>
    }

    return (
        <ul className="todo">
            {todos.map((todo, i, arr) => {
                const classes = ['todo__item']
                if (i !== arr.length - 1)  classes.push('mb-1')
                if (todo.completed) classes.push('todo__item_completed')
                if (todo.important) classes.push('todo__item_important')

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <div className="todo__wrapper">
                            <label className="todo__label black-text">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => onToggle(todo.id, 'completed')}
                                />
                                <span>{todo.title}</span>
                            </label>
                            <i
                                className="material-icons blue-text cursor-pointer z-index-2 mx-2"
                                onClick={() => onToggle(todo.id, 'important')}
                            >priority_high
                            </i>
                            <i
                                className="material-icons red-text cursor-pointer z-index-2"
                                onClick={() => onRemove(todo.id)}
                            >delete</i>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}