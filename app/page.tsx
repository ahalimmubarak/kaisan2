export default function Home() {
  return (
    <div className="flex flex-col text-center py-20">
      <div className="text-center space-y-0">
        <h1 className="text-xl">
          Dijual Laptop
        </h1>
        <h2 className="text-2xl font-bold">
          Macbook Air 11 inch
        </h2>
        <ul className="flex flex-col justify-center text-left mx-20 sm:mx-40 lg:mx-90 px-2 py-6">
          <h3 className="text-center mb-2">Cocok bagi:</h3>
          <li>
            - kamu yang lagi cari laptop buat kuliah
          </li>
          <li>
            - kamu yang minjem laptop temen
          </li>
          <li>
            - kamu yang lagi ngerjain tugas kuliah
          </li>
        </ul>
        <h1 className="text-xl mt-4">
          Harga:
        </h1>
        <h2 className="mt-4 text-4xl font-bold text-red-700 mx-20 sm:mx-30 lg:mx-80 px-2 py-6 bg-white border-4 border-gray-300 rounded-full shadow-lg">
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
        <p className="mt-4 mx-4 sm:mx-30 lg:mx-80 px-6">
          Hubungi: <a href="http://wa.me/6285267092405" className="underline text-blue-500">Penjual</a>
        </p>
      </div>
    </div>
  )
}
