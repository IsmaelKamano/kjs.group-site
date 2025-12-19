// components/Navbar.js
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
          <Link href="/services" className="hover:text-[#F97316] transition-colors">Services</Link>
          <Link href="/apropos" className="hover:text-[#F97316] transition-colors">À Propos</Link>
          <Link href="/contact" className="hover:text-[#F97316] transition-colors">Contact</Link>
          <Link href="/client" className="hover:text-[#10B981] transition-colors">Nos Clients</Link>
          <Link href="/seller" className="hover:text-[#10B981] transition-colors">Nos Partenaires</Link>
          <Link
            href="/services"
            className="bg-[#F97316] px-6 py-2 rounded-full font-semibold hover:bg-[#EA580C] shadow-md transition-all"
          >
            Découvrir
          </Link>
        </div>

        {/* Burger mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Menu Mobile Full Width */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#1D4ED8] to-[#10B981] min-h-screen flex flex-col items-center justify-start py-10 space-y-6 shadow-inner transition-all duration-300">
          <Link href="/" className="block text-xl hover:text-[#F97316]" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link href="/projets" className="block text-xl hover:text-[#F97316]" onClick={() => setIsOpen(false)}>Projets</Link>
          <Link href="/services" className="block text-xl hover:text-[#F97316]" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/apropos" className="block text-xl hover:text-[#F97316]" onClick={() => setIsOpen(false)}>À Propos</Link>
          <Link href="/contact" className="block text-xl hover:text-[#F97316]" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/client" className="block text-xl hover:text-[#10B981]" onClick={() => setIsOpen(false)}>Nos Clients</Link>
          <Link href="/seller" className="block text-xl hover:text-[#10B981]" onClick={() => setIsOpen(false)}>Nos Partenaires</Link>

          {/* Bouton Découvrir nos services */}
          <Link
            href="/services"
            className="mt-6 bg-[#F97316] text-white px-10 py-4 rounded-full text-lg font-bold text-center shadow-lg hover:bg-[#EA580C] transition-all"
            onClick={() => setIsOpen(false)}
          >
            Découvrir nos services
          </Link>
        </div>
      )}
    </nav>
  );
}
