import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Login
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Masuk ke akun Anda
          </p>
        </div>

        <LoginForm />

        <div className="text-center mt-6 text-sm text-gray-500">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="text-blue-600 hover:underline"
          >
            Daftar di sini
          </a>
        </div>

      </div>
    </main>
  );
}