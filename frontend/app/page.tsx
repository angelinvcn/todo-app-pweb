import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { getTodos } from "@/lib/todos";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default async function TodoPage() {
  await delay(2000);

  const todos = await getTodos();

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Daftar Tugas (Todo List)
          </h1>
        </header>

        <TodoForm />

        <TodoList todos={todos} />
      </div>
    </main>
  );
}