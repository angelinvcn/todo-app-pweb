import { fetchTodos } from '@/services/todoService';

export default async function ApiTestPage() {
  const data = await fetchTodos();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Data Todo dari DummyJSON
      </h1>

      <div className="space-y-3">
        {data.todos.slice(0, 10).map((todo) => (
          <div
            key={todo.id}
            className="border rounded-lg p-4"
          >
            <p className="font-semibold">
              {todo.todo}
            </p>

            <p className="text-sm text-gray-500">
              ID: {todo.id}
            </p>

            <p className="text-sm">
              Status: {todo.completed ? 'Selesai' : 'Belum selesai'}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}