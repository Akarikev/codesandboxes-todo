import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThickArrowLeftIcon, TrashIcon } from "@radix-ui/react-icons";

import { Todos } from "./Todos";

export type TodoProps = {
  id: string;
  todo: string;
  timeCreated: string;
};

function TodoInput() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const onSubmitTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const uuid = uuidv4(); // Generate a unique ID for each todo
    const currentTime = new Date().toISOString(); // Store the creation time as a string
    const newTodo: TodoProps = {
      id: uuid,
      todo: text,
      timeCreated: currentTime
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <div className="todos-input">
      <div>
        <form className="form" onSubmit={onSubmitTodo}>
          <input
            className="Input"
            type="text"
            value={text}
            placeholder="What do you want to do?"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button type="submit" className="button">
            Add todo
          </button>
        </form>
      </div>
      {todos.length === 0 ? (
        <p>No todos, add a todo</p>
      ) : (
        todos.map((item) => <Todos key={item.id} item={item} />)
      )}
    </div>
  );
}

export default TodoInput;
