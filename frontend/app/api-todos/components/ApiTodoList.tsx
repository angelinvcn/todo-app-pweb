'use client';

import { useState } from 'react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  source: string;
};

type ApiTodoListProps = {
  initialTodos: Todo[];
};

export default function ApiTodoList({
  initialTodos,
}: ApiTodoListProps) {
  const [todos, setTodos] = useState(initialTodos);

  const handleToggle = async (id: number) => {
    const currentTodo = todos.find((todo) => todo.id === id);

    if (!currentTodo) return;

    const newCompleted = !currentTodo.completed;

    // Optimistic Update
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: newCompleted }
          : todo
      )
    );

    try {
      await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: newCompleted,
        }),
      });
    } catch (error) {
      console.error(
        'Gagal mengubah status todo:',
        error
      );
    }
  };

  return (
    <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Daftar Tugas (Todo List)
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Data tugas dari DummyJSON API
        </p>
      </div>

      {/* Judul + jumlah */}
      <div className="mb-3 flex items-center justify-between border-b pb-3">
        <h2 className="font-semibold text-gray-700">
          Daftar Tugas
        </h2>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
          {todos.length} tugas
        </span>
      </div>

      {/* Todo List */}
      {todos.length === 0 ? (
        <div className="py-8 text-center text-gray-500">
          Tidak ada tugas.
        </div>
      ) : (
        <div className="space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center gap-3 rounded-lg border p-3 transition ${
                todo.completed
                  ? 'bg-green-50'
                  : 'bg-white'
              }`}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                className="h-4 w-4 cursor-pointer"
              />

              {/* Judul Todo */}
              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm ${
                    todo.completed
                      ? 'text-gray-400 line-through'
                      : 'text-gray-700'
                  }`}
                >
                  {todo.title}
                </p>
              </div>

              {/* Badge ID - Biru Muda */}
              <span className="hidden rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-500 sm:inline">
                ID: {todo.id}
              </span>

              {/* Badge User - Pink Muda */}
              <span className="hidden rounded-full bg-pink-100 px-2 py-1 text-xs text-pink-500 sm:inline">
                User: {todo.userId}
              </span>

              {/* Badge Status */}
              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  todo.completed
                    ? 'bg-green-100 text-green-600'
                    : 'bg-orange-100 text-orange-600'
                }`}
              >
                {todo.completed ? 'Selesai' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}