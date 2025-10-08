"use client";

import { useRef } from "react";


export default function Home() {

  const modalRef = useRef<HTMLDialogElement>(null);
  const modal2Ref = useRef<HTMLDialogElement>(null);

  const openModal1 = () => {
    modalRef.current?.showModal();
  };

  const openModal2 = () => {
    modal2Ref.current?.showModal();
  };

  return (

    <div className="container mx-auto max-w-xl bg-gray-100 dark:bg-gray-900">
      {/* header */}
      <div className="flex flex-col items-center justify-center pt-12 pb-16 bg-gray-100 dark:bg-gray-800 gap-y-4">
        <h1 className="text-xl">Dijual Laptop Second</h1>
        <h2 className="text-4xl font-bold">Macbook Air 11 Inci</h2>
        <p className="px-8 sm:px-14 text-center">MacBook Air 11 inci (model lama, terakhir dirilis 2015) adalah pilihan laptop yang sangat ringkas dan portabel, cocok untuk mahasiswa yang mengutamakan mobilitas. Desainnya yang tipis dan ringan (sekitar 1,08 kg) membuatnya mudah dibawa-bawa di dalam tas kuliah tanpa membebani.</p>
        <h4 className="text-2xl font-bold">Cocok bagi kamu yang:</h4>

        <div className="flex flex-col mx-auto">

          <div className="w-full">
            <div className="bg-gray-100 rounded flex p-2 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-teal-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Lagi cari laptop buat kuliah</span>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-gray-100 rounded flex p-2 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-teal-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Minjem laptop temen terus</span>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-gray-100 rounded flex p-2 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-teal-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Mau ngerjain tugas atau skripsi</span>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-gray-100 rounded flex p-2 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-teal-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Cari laptop biar keliatan sibuk</span>
            </div>
          </div>

        </div>

        <h4 className="text-2xl font-bold">Harga Nego:</h4>
        <h2 className="text-4xl font-bold text-white bg-red-600 border border-red-700 rounded-lg shadow-xl mx-10 p-4">Rp. 2.100.000,-</h2>

        <div className="pt-10 text-center">
          {/* tombol buka modal */}
          <button className="btn rounded-lg" onClick={openModal1}>
            Tawar Sekarang!
          </button>

          {/* modal */}
          <dialog
            ref={modalRef}
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-4">Hubungi WhatsApp!</h3>
              <p>Dapatkan penawaran terbaik: <a href="http://wa.me/6285267092405" className="underline text-blue-500">0852-6709-2405</a></p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn rounded-lg">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>

      </div>

      {/* Screenshot spesifikasi */}
      <div className="flex flex-col items-center justify-center pt-12 pb-16 bg-teal-300 dark:bg-gray-800">
        <h4 className="text-2xl font-bold">Screenshot Spesifikasi:</h4>

        <div className="flex flex-col items-center justify-center px-2">
          <img src="/Screen Shot 2025-10-07 at 11.18.44.png" alt="" />
          <img src="/Screen Shot 2025-10-07 at 11.19.12.png" alt="" />
          <img src="/Screen Shot 2025-10-07 at 11.19.42.png" alt="" />
        </div>
      </div>

      {/* spesifikasi lainnya */}
      <div className="flex flex-col items-center justify-center px-8 pt-12 pb-16 bg-gray-100 dark:bg-gray-800">
        <h4 className="text-2xl font-bold mb-4">Spesifikasi Lainnya</h4>
        <dl className="-my-3 divide-y-2 divide-gray-300 dark:divide-gray-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 py-3">
            <dt className="flex gap-x-4 text-gray-800 dark:text-white">
              <h3 className="dark:text-white">Kondisi</h3>
            </dt>
            <dd className="text-gray-700 dark:text-white sm:col-span-2">Second</dd>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 py-3">
            <dt className="flex gap-x-4 text-gray-800 dark:text-white">
              <h3 className="dark:text-white">Speaker</h3>
            </dt>
            <dd className="text-gray-700 dark:text-white sm:col-span-2">Normal</dd>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 py-3">
            <dt className="flex gap-x-4 text-gray-800 dark:text-white">
              <h3 className="dark:text-white">Baterai</h3>
            </dt>
            <dd className="text-gray-700 dark:text-white sm:col-span-2">Normal</dd>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 py-3">
            <dt className="flex gap-x-4 text-gray-800 dark:text-white">
              <h3 className="dark:text-white">Kabel Casan</h3>
            </dt>
            <dd className="text-gray-700 dark:text-white sm:col-span-2">Sudah diperbaiki (Lihat foto)</dd>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 py-3">
            <dt className="flex gap-x-4 text-gray-800 dark:text-white">
              <h3 className="dark:text-white">Procesor</h3>
            </dt>
            <dd className="text-gray-700 dark:text-white sm:col-span-2">Intel core i5</dd>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 py-3">
            <dt className="flex gap-x-4 text-gray-800 dark:text-white">
              <h3 className="dark:text-white">Memory RAM</h3>
            </dt>
            <dd className="text-gray-700 dark:text-white sm:col-span-2">4GB</dd>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 py-3">
            <dt className="flex gap-x-4 text-gray-800 dark:text-white">
              <h3 className="dark:text-white">Ukuran Layar</h3>
            </dt>
            <dd className="text-gray-700 dark:text-white sm:col-span-2">11" (Inch)</dd>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 py-3">
            <dt className="flex gap-x-4 text-gray-800 dark:text-white">
              <h3 className="dark:text-white">Ruang Penyimpanan</h3>
            </dt>
            <dd className="text-gray-700 dark:text-white sm:col-span-2">121GB</dd>
          </div>
        </dl>
      </div>

      {/* foto kondisi */}
      <div className="flex flex-col items-center justify-center pt-12 pb-16 mb-10 bg-gray-200 dark:bg-gray-800">
        <h4 className="text-2xl font-bold">Foto Kondisi:</h4>
        <code className="mb-4">(usap gambar ke kiri)</code>
        <div className="carousel rounded-box w-90">
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component" />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component" />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component" />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component" />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component" />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component" />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="w-full"
              alt="Tailwind CSS Carousel component" />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="pb-10 text-center">

        <h4 className="text-2xl font-bold mb-4">Bisa cek sepuasnya!</h4>

        {/* tombol buka modal */}
        <button className="btn rounded-lg" onClick={openModal2}>
          Hubungi Penjual!
        </button>

        {/* modal */}
        <dialog
          ref={modal2Ref}
          id="my_modal_6"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Atur Jadwal Cek Barang!</h3>
            <p>Hubungi via WhatsApp: <a href="http://wa.me/6285267092405" className="underline text-blue-500">0852-6709-2405</a></p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn rounded-lg">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      
    </div>

  )
}
