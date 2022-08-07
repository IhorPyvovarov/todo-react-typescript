import React, { useState, useEffect } from "react";

import {TodoFormProps} from "../../ts/interfaces"

export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
    const initFormData: {value: string, hasError: boolean} = {
        value: '',
        hasError: false
    }
    const [formData, setFormData] = useState(initFormData)

    useEffect(() => {
        if (formData.value && formData.hasError) {
            setFormData((prev) => {
                return {...prev, hasError: false}
            })
        }
    }, [formData.value]);


    const keyUpHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (formData.value) {
                onAdd(formData.value)
                setFormData(initFormData)
            } else {
                setFormData({...formData, hasError: true})
            }
        }
    }

    return (
        <div className="input-field">
            <input
                onKeyUp={keyUpHandler}
                onChange={e => setFormData({...formData, value: e.target.value})}
                value={formData.value}
                type="text"
                className={formData.hasError ? 'invalid' : ''}
                id="title" />
            <label htmlFor="title">Enter task here</label>
        </div>
    )
}