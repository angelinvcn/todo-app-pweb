import TodoStateOnlyApp from './TodoStateOnlyApp';
import { getTodos } from '@/services/todoService';
import { Todo } from '@/types/todo';

export default async function TodoPage() {
  const data = await getTodos();

  const initialTodos: Todo[] = data.todos.map((todo) => ({
    id: todo.id,
    title: todo.todo,
    description: 'Todo dari DummyJSON API',
    completed: todo.completed,
    createdAt: new Date().toISOString().split('T')[0],
  }));

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Todo App
      </h1>

      <TodoStateOnlyApp initialTodos={initialTodos} />
    </main>
  );
}