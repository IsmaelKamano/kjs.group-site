import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1D4ED8] to-[#10B981] text-white fixed w-full top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo + Nom */}
        <Link href="/" className="flex items-center space-x-3 text-2xl font-bold hover:text-[#F97316] transition-all">
          <Image
            src="/premiere.jpg"
            alt="Logo KJS Groupe"
            width={50}
            height={50}
            className="rounded-full shadow-lg"
          />
          <span className="tracking-wider">KJS Groupe</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 items-center text-lg font-medium">
          <Link href="/" className="hover:text-[#F97316] transition-colors">Accueil</Link>
          <Link href="/projets" className="hover:text-[#F97316] transition-colors">Projets</Link>
          <Link href="/apropos" className="hover:text-[#F97316] transition-colors">À Propos</Link>
          <Link href="/contact" className="hover:text-[#F97316] transition-colors">Contact</Link>
          <Link href="/client" className="hover:text-[#10B981] transition-colors">Nos Clients</Link>
          <Link href="/seller" className="hover:text-[#10B981] transition-colors">Nos Partenaires</Link>
          <Link
            href=""
            className="bg-[#F97316] px-6 py-2 rounded-full font-semibold hover:bg-[#EA580C] shadow-md transition-all"
          >
            KJS.GROUP
          </Link>
        </div>

        {/* Burger mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#1D4ED8] to-[#10B981] px-5 py-4 space-y-3 shadow-inner rounded-b-2xl">
          <Link href="/" className="block hover:text-[#F97316] font-medium transition-colors" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link href="/projets" className="block hover:text-[#F97316] font-medium transition-colors" onClick={() => setIsOpen(false)}>Projets</Link>
          <Link href="/apropos" className="block hover:text-[#F97316] font-medium transition-colors" onClick={() => setIsOpen(false)}>À Propos</Link>
          <Link href="/contact" className="block hover:text-[#F97316] font-medium transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/client" className="block hover:text-[#10B981] font-medium transition-colors" onClick={() => setIsOpen(false)}>Nos Clients</Link>
          <Link href="/seller" className="block hover:text-[#10B981] font-medium transition-colors" onClick={() => setIsOpen(false)}>Nos Partenaires</Link>
          <Link
            href="/login"
            className="block bg-[#F97316] px-6 py-2 rounded-full font-semibold hover:bg-[#EA580C] text-white text-center shadow-md transition-all"
            onClick={() => setIsOpen(false)}
          >
            Connexion
          </Link>
        </div>
      )}
    </nav>
  );
}
