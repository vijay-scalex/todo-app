"use client";

import { useState, FormEvent } from "react";

interface AddTodoFormProps {
  onAddTodo: (todo: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todo.trim()) {
      onAddTodo(todo);
      setTodo("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto mt-8 h-fit"
    >
      <h2 className="text-xl font-semibold mb-4">Add Todo</h2>
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Enter your todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
