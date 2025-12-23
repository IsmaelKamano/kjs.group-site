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
            src="/kjs.jpeg"
            alt="Logo KJS Group"
            width={50}
            height={50}
            className="rounded-full shadow-lg"
          />
          <span className="tracking-wider">KJS Groupe</span>
        </Link>

        {/* Menu Desktop - INCHANGÉ */}
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
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none p-2 rounded-lg hover:bg-white/10">
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

      {/* Menu Mobile - EXACTEMENT COMME LYSPI Header */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="bg-gradient-to-br from-[#1D4ED8] to-[#10B981] w-[90%] max-w-md rounded-3xl shadow-2xl border border-white/20 p-6 relative overflow-hidden">
            {/* Bouton fermer */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo centré */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <Image
                  src="/premiere.jpg"
                  alt="Logo KJS Groupe"
                  width={64}
                  height={64}
                  className="rounded-full ring-4 ring-white/30 mx-auto"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#F97316]/30 to-[#10B981]/30 blur-xl opacity-50"></div>
              </div>
              <h3 className="text-2xl font-extrabold text-white mt-3 tracking-wider">KJS Groupe</h3>
            </div>

            {/* Onglets en grille 2 colonnes, exactement comme LYSPI */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { href: "/", label: "Accueil", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { href: "/projets", label: "Projets", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { href: "/services", label: "Services", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { href: "/apropos", label: "À Propos", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { href: "/contact", label: "Contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { href: "/client", label: "Nos Clients", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { href: "/seller", label: "Partenaires", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center justify-center p-5 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-8 h-8 mb-3 text-white/90 group-hover:text-[#F97316] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                  <span className="text-sm font-medium text-white text-center group-hover:text-[#F97316]">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Séparateur */}
            <div className="h-px bg-white/30 my-6 col-span-2"></div>

            {/* Bouton Découvrir nos services */}
            <Link
              href="/services"
              className="w-full col-span-2 py-4 bg-[#F97316] hover:bg-[#EA580C] rounded-2xl text-center font-bold text-lg text-white shadow-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}