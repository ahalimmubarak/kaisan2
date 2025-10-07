export default function Home() {
  return (
    <div className="container mx-auto max-w-xl py-20">
      <div className="text-center space-y-4">
        <h1 className="text-xl">
          Dijual Laptop
        </h1>
        <h2 className="text-4xl font-bold">
          Macbook Air 11 inch
        </h2>
        <h3 className="text-center mb-2 font-semibold">Cocok bagi kamu yang:</h3>
        <ul className="list-disc text-left flex flex-col items-center justify-center">
          <li>Lagi cari laptop buat kuliah</li>
          <li>Minjem laptop temen</li>
          <li>Lagi ngerjain tugas kuliah</li>
        </ul>
        <h1 className="text-xl mt-4">
          Harga:
        </h1>
        <h2 className="text-4xl font-bold text-white bg-red-600 border border-red-700 rounded-lg shadow-xl mx-10 p-4">
          Rp. 1.999.000,-
        </h2>
        <p className="mt-4">
          Hubungi: <a href="http://wa.me/6285267092405" className="underline text-blue-500">Penjual</a>
        </p>
        <p className="mt-4">
          Screenshot spesifikasi:
        </p>

        <div className="flex flex-col items-center justify-center px-8 space-y-0">
          <img src="/Screen Shot 2025-10-07 at 11.18.44.png" alt="" />
          <img src="/Screen Shot 2025-10-07 at 11.19.12.png" alt="" />
          <img src="/Screen Shot 2025-10-07 at 11.19.42.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col space-y-4 bg-gray-200">
        <p className="mt-10">
          Foto real <code className="text-xs">(usap gambar ke kiri)</code>:
        </p>
        <div className="flex px-8 pb-10 lg:px-20">
          <div className="overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory">
            <div className="flex gap-2 items-center justify-start">
              <div className="snap-start shrink-0 w-80">
                <img src="/nextjs1.jpeg" alt="" />
              </div>
              <div className="snap-start shrink-0 w-80">
                <img src="/nextjs2.png" alt="" />
              </div>
              <div className="snap-start shrink-0 w-80">
                <img src="/nextjs3.jpeg" alt="" />
              </div>
              <div className="snap-start shrink-0 w-80">
                <img src="/nextjs1.jpeg" alt="" />
              </div>
              <div className="snap-start shrink-0 w-80">
                <img src="/nextjs1.jpeg" alt="" />
              </div>
              <div className="snap-start shrink-0 w-80">
                <img src="/nextjs1.jpeg" alt="" />
              </div>
              <div className="snap-start shrink-0 w-80">
                <img src="/nextjs1.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p>
          Bisa cek sepuasnya!!
        </p>
        <p className="px-6">
          Hubungi: <a href="http://wa.me/6285267092405" className="underline text-blue-500">Penjual</a>
        </p>
      </div>
    </div>
  )
}
