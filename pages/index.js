// ===================================================================
// IMPORTS
// ===================================================================
import Image from 'next/image';           // Composant Image optimisé de Next.js
import Link from 'next/link';               // Lien interne (pages Next.js)
import { useState, useEffect } from 'react'; // États et effets React

// Icônes de react-icons/fa
import {
  FaCode,              // Icône pour Développeurs
  FaNetworkWired,      // Icône pour Réseaux
  FaUsers,             // Icône pour Services/Communauté
  FaLeaf,              // Icône pour Durabilité
  FaChartLine,         // Icône pour Croissance/Projets
  FaHandsHelping,      // Icône pour Accompagnement
  FaChartBar,          // Icône pour Analystes
  FaSitemap,           // Icône pour Concepteurs
  FaPaintBrush,        // Icône pour Designers
  FaBug,               // Icône pour Testers
  FaUserShield,        // Icône pour Responsables IT
  FaBook,              // Icône pour Responsables Formation
  FaLinkedin,          // Icône LinkedIn
  FaFacebookF,         // Icône Facebook
  FaTwitter,           // Icône Twitter
} from 'react-icons/fa';

import Navbar from '../components/Navbar'; // Barre de navigation (composant externe)


// ===================================================================
// COMPOSANT PRINCIPAL : Page d'accueil
// ===================================================================
export default function Home() {
  // État pour détecter le scroll (effet navbar transparente → fixe)
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet : écoute le scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Nettoyage
  }, []);


  // ===================================================================
  // DONNÉES DES ÉQUIPES (8 équipes)
  // ICI TU DOIS REMPLACER LES LIENS UNSPLASH PAR DES IMAGES LOCALES
  // Exemple : image: '/images/equipes/analystes.jpg'
  // ===================================================================
  const equipes = [
    { 
      nom: 'Analystes', 
      icon: <FaChartBar className="text-4xl text-blue-600 mb-4" />, 
      chef: 'ISMAEL KAMANO', 
      image: '/Kamano.jpg', 
      description: 'Analyse des besoins et données' 
    },
    { 
      nom: 'Concepteurs', 
      icon: <FaSitemap className="text-4xl text-orange-500 mb-4" />, 
      chef: 'JOHSON MOISE', 
      image: '/john.jpg', 
      description: 'Conception de solutions innovantes' 
    },
    { 
      nom: 'Responsables Réseaux', 
      icon: <FaNetworkWired className="text-4xl text-green-600 mb-4" />, 
      chef: 'ISMAEL KAMANO', 
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
      description: 'Gestion des infrastructures réseaux' 
    },
    { 
      nom: 'Designers', 
      icon: <FaPaintBrush className="text-4xl text-blue-600 mb-4" />, 
      chef: 'MAMADY SACKO', 
      image: '/4.jpg', 
      description: 'Création d\'interfaces intuitives' 
    },
    { 
      nom: 'Développeurs', 
      icon: <FaCode className="text-4xl text-orange-500 mb-4" />, 
      chef: 'JOHSON MOISE', 
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
      description: 'Développement de logiciels robustes' 
    },
    { 
      nom: 'Testers', 
      icon: <FaBug className="text-4xl text-green-600 mb-4" />, 
      chef: 'MAMADY SACKO', 
      image: '/2.jpg', 
      description: 'Assurance qualité et tests' 
    },
    { 
      nom: 'Responsables IT', 
      icon: <FaUserShield className="text-4xl text-blue-600 mb-4" />, 
      chef: 'ISMAEL KAMANO', 
      image: '/6.jpg', 
      description: 'Sécurité et support IT' 
    },
    { 
      nom: 'Responsables Formation', 
      icon: <FaBook className="text-4xl text-orange-500 mb-4" />, 
      chef: 'JOHNSON MOISE', 
      image: '/john.jpg', 
      description: 'Programmes de formation adaptés' 
    },
  ];


  // ===================================================================
  // DONNÉES DES CONSULTANTS
  // Tu peux aussi remplacer leurs images par des locales ici
  // ===================================================================
  const consultants = [
    { 
      nom: 'Docteur Mansaré', 
      image: '/mansare.jpg', 
      linkedin: '', 
      facebook: '', 
      twitter: '' 
    },
    { 
      nom: 'Docteur Madiou Diallo', 
      image: '/madiou.jpg', 
      linkedin: '', 
      facebook: 'https://www.facebook.com/share/1amF5qfaHg', 
      twitter: '' 
    },
    { 
      nom: 'Mr Ismael Kamano', 
      image: '/Kamano.jpg', 
      linkedin: 'https://www.linkedin.com/in/isma%C4%97l-kamano-20a79832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
      facebook: 'https://www.facebook.com/share/1Bx9m4StzK/', 
      twitter: '' 
    },
  ];


  // ===================================================================
  // RENDU JSX (Structure de la page)
  // ===================================================================
  return (
    <>
      {/* Styles globaux */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Conteneur principal */}
      <div className="flex flex-col min-h-screen bg-white">

        {/* NAVBAR */}
        <Navbar isScrolled={isScrolled} />

        {/* HERO SECTION (Bannière principale) */}
        <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-white overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&q=80&auto=format&fit=crop&w=1200"
            alt="KJS Groupe - Innovation Digitale"
            layout="fill"
            objectFit="cover"
            priority
            className="transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/60 to-orange-500/60 opacity-80" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Bienvenue chez <span className="text-orange-400">KJS Groupe</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
              Nous créons des solutions digitales innovantes pour un avenir meilleur.
            </p>
            <Link
              href="/projets"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center mx-auto w-fit"
            >
              <FaChartLine className="mr-2" /> Découvrez Nos Projets
            </Link>
          </div>
        </section>

        {/* SECTION SERVICES */}
        <section className="py-12 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
              Nos Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaUsers className="text-4xl text-green-600 mb-4" />,
                  title: 'Formation',
                  text: 'Programmes de formation en technologies numériques pour booster vos compétences.',
                },
                {
                  icon: <FaCode className="text-4xl text-blue-600 mb-4" />,
                  title: 'Conception Logicielle',
                  text: 'Développement de logiciels sur mesure adaptés à vos besoins.',
                },
                {
                  icon: <FaNetworkWired className="text-4xl text-orange-500 mb-4" />,
                  title: 'Installation Réseau',
                  text: 'Installation et maintenance de réseaux sécurisés pour entreprises.',
                },
                {
                  icon: <FaHandsHelping className="text-4xl text-green-600 mb-4" />,
                  title: 'Accompagnement',
                  text: 'Conseil et support pour la transformation digitale de votre business.',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:border-orange-500 border-2 transition duration-300 ease-in-out flex flex-col items-center text-center"
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION IMPACT */}
        <section className="py-12 bg-gradient-to-br from-green-100 to-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-green-600">
              Notre Impact
            </h2>
            <p className="text-xl mb-6 text-gray-700">
              Chez <span className="font-semibold">KJS Groupe</span>, nous promouvons une innovation durable et inclusive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <FaLeaf className="text-5xl text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Durabilité</h3>
                <p>Solutions éco-responsables pour un avenir vert.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <FaChartLine className="text-5xl text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Croissance</h3>
                <p>Accélération de la transformation digitale.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <FaUsers className="text-5xl text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Communauté</h3>
                <p>Formation et soutien pour tous.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION NOS ÉQUIPES (ICI TU CHERCHES !) */}
        {/* C'EST ICI QUE LES IMAGES SONT UTILISÉES */}
        <section className="py-12 bg-gradient-to-br from-green-50 to-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-blue-700">
              Nos Équipes
            </h2>
            <p className="text-xl mb-6 text-gray-700">
              Découvrez les talents qui font avancer KJS Groupe.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {equipes.map((equipe, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center"
                >
                  {equipe.icon}
                  <h3 className="text-xl font-semibold mb-2 text-green-600">
                    {equipe.nom}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {equipe.description}
                  </p>

                  {/* IMAGE DU CHEF D'ÉQUIPE (À REMPLACER PAR IMAGE LOCALE) */}
                  <div className="w-32 h-32 relative mb-2">
                    <Image
                      src={equipe.image}  // METTRE ICI : '/images/equipes/nom.jpg'
                      alt={`Chef ${equipe.nom}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-md"
                    />
                  </div>

                  <p className="text-sm font-semibold text-gray-700">
                    {equipe.chef} - Chef {equipe.nom}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION CONSULTANTS */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-blue-700">
              Nos Consultants
            </h2>
            <p className="text-xl mb-6 text-gray-700">
              Rencontrez nos experts consultants qui apportent leur expertise unique.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultants.map((consultant, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center"
                >
                  {/* IMAGE DU CONSULTANT */}
                  <div className="w-32 h-32 relative mb-4">
                    <Image
                      src={consultant.image}
                      alt={consultant.nom}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">
                    {consultant.nom}
                  </h3>
                  {/* LIENS SOCIAUX */}
                  <div className="flex space-x-4">
                    <Link href={consultant.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                      <FaLinkedin className="text-2xl" />
                    </Link>
                    <Link href={consultant.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                      <FaFacebookF className="text-2xl" />
                    </Link>
                    <Link href={consultant.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                      <FaTwitter className="text-2xl" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-blue-700 text-white py-8 text-center mt-auto">
          <div className="container mx-auto px-4">
            <p className="mb-4">
              &copy; 2023 <span className="text-orange-400">KJS Groupe</span>. Tous droits réservés.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
              <Link href="/a-propos" className="hover:text-orange-400 transition">À Propos</Link>
              <Link href="/services" className="hover:text-orange-400 transition">Services</Link>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}