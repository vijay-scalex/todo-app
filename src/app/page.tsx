"use client";
import AddTodoForm from "@/components/forms/AddTodo.form";
import Header from "@/components/header/header";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const handleAddTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-2  gap-2">
        <AddTodoForm onAddTodo={handleAddTodo} />
        <ul className="mt-8 space-y-2 overflow-y">
          {todos.map((todo, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              {todo}{" "}
            </li>
          ))}{" "}
        </ul>
      </div>
    </div>
  );
}
