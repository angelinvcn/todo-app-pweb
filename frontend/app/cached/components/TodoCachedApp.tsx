'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useState } from 'react';
import TodoForm from '@/app/TodoForm';
import TodoList from '@/app/TodoList';
import { Todo } from '@/types/todo';

type TodoCachedAppProps = {
  initialTodos: Todo[];
};

export default function TodoCachedApp({
  initialTodos,
}: TodoCachedAppProps) {
  const [todos, setTodos] = useLocalStorage<Todo[]>(
    'TODO_LIST_CACHE',
    initialTodos
  );

  const [isUsingCache, setIsUsingCache] = useState(true);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description: '',
      completed: false,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleResetCache = () => {
    setTodos(initialTodos);
    setIsUsingCache(false);

    setTimeout(() => {
      setIsUsingCache(true);
    }, 500);
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Todo List - Local Storage
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Data tersimpan di browser menggunakan Local Storage
        </p>
      </div>

      {/* Status Cache */}
      <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-700">
        Status:{' '}
        {isUsingCache
          ? 'Data menggunakan Local Storage'
          : 'Cache di-reset'}
      </div>

      {/* Form */}
      <TodoForm onAddTodo={handleAddTodo} />

      {/* List */}
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />

      {/* Reset Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleResetCache}
          className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
          Reset Cache
        </button>
      </div>
    </div>
  );
}