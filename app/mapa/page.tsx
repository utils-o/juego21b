"use client";

export default function MapaPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffdf4] p-6">
      {/* Contenedor del mapa*/}
      <div className="w-full max-w-6xl h-[80vh] border-2 border-[#2b877a] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/d/u/1/embed?mid=1sVFbYSSKfDM4oljCOgcvJ7BcdrmYu7o&ehbc=2E312F"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
