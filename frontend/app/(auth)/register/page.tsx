import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Register
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Buat akun baru
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama
            </label>

            <input
              type="text"
              placeholder="Masukkan nama"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Masukkan email"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Masukkan password"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <button
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 
            text-white font-medium rounded-md"
          >
            Register
          </button>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline"
          >
            Login di sini
          </Link>
        </div>
      </div>
    </main>
  );
}