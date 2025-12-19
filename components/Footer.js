// components/Footer.js
// Pied de page moderne pour KJS Groupe
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-14 mt-auto shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

          {/* Colonne 1 : Logo & Slogan */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-orange-400">KJS Groupe</h3>
            <p className="text-gray-300 text-sm">Vision, Stratégie, Action</p>
            <p className="mt-2 text-gray-400 text-sm">
              Spécialistes en conception logicielle, gestion de bases de données, réseaux et formation IT.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Liens rapides</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-orange-400 transition">Accueil</a></li>
              <li><a href="/services" className="hover:text-orange-400 transition">Services</a></li>
              <li><a href="/projets" className="hover:text-orange-400 transition">Projets</a></li>
              <li><a href="/a-propos" className="hover:text-orange-400 transition">À propos</a></li>
              <li><a href="/contact" className="hover:text-orange-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contactez-nous</h4>
            <p className="text-gray-300 text-sm mb-2">
              <span className="font-semibold">Téléphone :</span> +224 620 72 87 73 (WhatsApp)
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <span className="font-semibold">Email :</span> kjsgroup2025@kjsgroup.com
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <span className="font-semibold">Site web :</span> <a href="https://kjsgroup2025.com" className="hover:text-orange-400 transition">kjsgroup2025.com</a>
            </p>
            <p className="text-gray-300 text-sm">
              Nous sommes disponibles pour répondre à toutes vos questions et vous accompagner dans vos projets digitaux.
            </p>
          </div>

          {/* Colonne 4 : Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Suivez-nous</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com/kjs.groupe2025" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                Facebook
              </a>
              <a href="https://linkedin.com/company/kjs.groupe2025" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* À propos et mission */}
        <div className="mt-10 text-gray-300 text-sm text-center md:text-left">
          <p>
            Fondé en 2025, KJS Groupe accompagne entreprises, startups et jeunes talents dans leur développement numérique. 
            Nos services couvrent la conception de logiciels, la gestion de bases de données, l’installation de réseaux et la formation IT.
          </p>
          <p className="mt-2">
            Les fondateurs – Ismaël Kamano, Mamady Sacko et Johnson Moïse – unissent vision et expertise pour créer un écosystème numérique où talents et entreprises grandissent ensemble.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} KJS Groupe SARL. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
