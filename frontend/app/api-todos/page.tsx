import ApiTodoList from './components/ApiTodoList';
import { getTasks } from '@/lib/tasks';

export default async function ApiTodosPage() {
  const result = await getTasks({
    limit: 15,
    skip: 0,
  });

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-3xl px-4">
        <ApiTodoList initialTodos={result.tasks} />
      </div>
    </main>
  );
}