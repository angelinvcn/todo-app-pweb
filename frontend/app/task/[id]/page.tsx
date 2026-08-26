export default function TaskDetailPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-800">
            Detail Tugas
          </h1>

          <button className="rounded bg-gray-100 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200">
            Kembali ke Daftar
          </button>
        </div>

        {/* ID Tugas */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold uppercase text-gray-400">
            ID Tugas
          </p>
          <p className="text-sm text-gray-700">
            #1
          </p>
        </div>

        {/* Judul */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold uppercase text-gray-400">
            Judul Tugas
          </p>
          <h2 className="text-sm font-bold text-gray-800">
            Belajar React Server Components (RSC)
          </h2>
        </div>

        {/* Deskripsi */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold uppercase text-gray-400">
            Deskripsi
          </p>

          <div className="mt-1 rounded bg-gray-50 p-3">
            <p className="text-xs leading-relaxed text-gray-600">
              Mempelajari konsep dasar Server Components pada Next.js
              dan perbedaannya dengan Client Components.
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold uppercase text-gray-400">
            Status
          </p>

          <span className="mt-1 inline-block rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
            ✓ Selesai
          </span>
        </div>

        {/* Tanggal */}
        <div>
          <p className="text-[10px] font-semibold uppercase text-gray-400">
            Tanggal Dibuat
          </p>
          <p className="text-xs text-gray-600">
            2026-06-20
          </p>
        </div>

      </div>
    </main>
  );
}