import TodoCachedApp from './components/TodoCachedApp';
import { getTodos } from '@/lib/todos';

export default async function CachedPage() {
  const initialTodos = await getTodos();

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-3xl px-4">
        <TodoCachedApp initialTodos={initialTodos} />
      </div>
    </main>
  );
}