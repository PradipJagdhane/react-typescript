import React, { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks"
import { addTodo } from "../../../redux/slice/todo/todoSlice";


const AddTodo: React.FC = () => {
    const [text, setText] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(text.trim()){
            dispatch(addTodo(text));
            setText('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="add some..."
            />

            <button type="submit"> Add Todo</button>
        </form>
    )
}

export default AddTodo;