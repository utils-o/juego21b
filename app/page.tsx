"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffdf4] p-10">
      {/* Contenedor del título */}
      <div className="ml-40 mt-14">
        <h1 className="font-[Nozen] text-4xl text-[#2b877a]">felicidades amortx დ</h1>
      </div>

      {/* Audio centrado */}
      {/* 
      <div className="flex justify-center">
        <audio controls>
          <source src="/audio.mp3" type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div> 
      */}

      {/* Contenedor de los botones en el centro */}
      <div className="flex justify-center items-center flex-grow">
        <div className="flex gap-14">
          <Link href="/game">
            <button className="px-8 py-4 font-[Amoria] font-bold border-2 border-[#2b877a]  bg-[#fffdf4] hover:bg-[#2b877b78] text-[#2b877a] hover:text-[#fffdf4] rounded-xl text-lg transition duration-300">
              1. REGALITO
            </button>
          </Link>
          <Link href="/mapa">
            <button className="px-8 py-4 font-[Amoria] font-bold border-2 border-[#2b877a] bg-[#fffdf4] hover:bg-[#2b877b78] text-[#2b877a]  hover:text-[#fffdf4] rounded-xl text-lg transition duration-300">
              2. REGALITO
            </button>
          </Link>
          <Link href="/ultimo">
            <button className="px-8 py-4 font-[Amoria] font-bold border-2 border-[#2b877a] bg-[#fffdf4] hover:bg-[#2b877b78] text-[#2b877a] hover:text-[#fffdf4] rounded-xl text-lg transition duration-300">
              3. REGALITO
            </button>
          </Link>
        </div>
      </div>

      {/* Texto en la parte inferior derecha con margen */}
    <div className="mb-32 mr-56 flex justify-end">
        <p className=" font-[Medway] text-[#2b877a] text-xl">espero que te guste</p>
      </div>
    </div>
  );
}


