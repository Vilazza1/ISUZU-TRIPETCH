"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function NavButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuId = "main-nav";

  // Fecha ao clicar fora do conteúdo ou pressionar Esc
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Botão fixo no canto superior direito */}
      <button
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
      </button>

      {/* Menu fullscreen */}
      {open && (
        <nav
          id={menuId}
          className="fixed inset-0 bg-[var(--bg-blue)] flex flex-col items-center justify-center gap-8 text-2xl z-40 transition-all duration-300"
        >
          <a href="#" className=" text-white hover:text-blue-500 border-b-2 border-white pb-2 h-12 w-80 text-center font-bold text-3xl">Mission</a>
          <a href="#" className=" text-white hover:text-blue-500 border-b-2 border-white pb-2 h-12 w-80 text-center font-bold text-3xl">People</a>
          <a href="#" className=" text-white hover:text-blue-500 border-b-2 border-white pb-2 h-12 w-80 text-center font-bold text-3xl">Career</a>
          <a href="#" className=" text-white hover:text-blue-500 border-b-2 border-white pb-2 h-12 w-80 text-center font-bold text-3xl">Contact</a>
        </nav>
      )}
    </div>
  );
}
