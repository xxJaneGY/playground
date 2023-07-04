import React, { FormEvent, useState } from "react";
import { AddItem } from "./components/AddItem";
import { TodoItem } from "./components/TodoItem";

export const Todo = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;

    setTodos((prev) => [...prev, text]);
    setText("");
  };

  const handleDelete = (index: number) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <h1>TODO</h1>
      <AddItem
        value={text}
        handleAdd={handleAdd}
        handleChangeText={handleChangeText}
      />
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
