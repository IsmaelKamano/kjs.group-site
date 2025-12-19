import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import {
  FaHistory,
  FaUsers,
  FaEye,
  FaChess,
  FaRocket,
  FaCogs,
  FaDatabase,
  FaNetworkWired,
  FaChalkboardTeacher,
  FaStore,
  FaCar,
} from 'react-icons/fa';

// À DÉCOMMENTER PLUS TARD : Remplacer les chemins par tes images locales
// import ismaelImg from '@/public/images/fondateurs/ismael.jpg';
// import moiseImg from '@/public/images/fondateurs/moise.jpg';
// import mamadyImg from '@/public/images/fondateurs/mamady.jpg';
// import heroBg from '@/public/images/hero/apropos-hero.jpg';
// import histoireImg from '@/public/images/histoire.jpg';

export default function APropos() {
  // Fondateurs - Bios mises à jour + images locales (à décommenter)
  const fondateurs = [
    {
      nom: 'Ismael Kamano',
      titre: 'PDG & Co-fondateur',
      // image: ismaelImg, // Décommenter quand l'image locale est prête
      image: '/Kamano.jpg',
      bio: 'Étudiant en Master Réseaux & Sécurité Informatique, diplômé en Génie Logiciel, bilingue français/anglais, certifié Cisco et IT. Passionné par l’innovation digitale et la formation, il combine expertise technique et vision stratégique pour accompagner les entreprises et startups vers la réussite numérique.',
    },
    {
      nom: 'Moise Johnson',
      titre: 'DG & Co-fondateur',
      // image: moiseImg, // Décommenter quand l'image locale est prête
      image: '/John.jpg',
      bio: 'Diplômé en Génie Informatique & Télécoms / Génie Logiciel, expert IT avec certifications réseaux de Université Nongo Conakry et Diplômé en Mathématiques de Université Gamal Abdel Nasser de Conakry. Spécialiste en technologies numériques et stratégie digitale, il soutient le développement des startups et des jeunes talents tech en apportant des solutions innovantes et pratiques.',
    },
    {
      nom: 'Mamady Sacko',
      titre: 'DGA & Co-fondateur',
      // image: mamadyImg, // Décommenter quand l'image locale est prête
      image: '/4.jpg',
      bio: 'Ingénieur en Génie Logiciel diplômé de l’Université Nongo Conakry, analyste et expert en bases de données. Passionné par l’innovation et la transformation numérique des entreprises, il accompagne les organisations dans la gestion des systèmes d’information et l’optimisation de leurs performances.',
    },
  ];

  // Valeurs
  const valeurs = [
    { title: 'Vision', text: "Anticiper l'avenir digital pour inspirer l'innovation et bâtir un monde connecté.", icon: <FaEye className="text-4xl text-blue-600 mb-4" /> },
    { title: 'Stratégie', text: 'Transformer les défis en opportunités grâce à une planification intelligente et collaborative.', icon: <FaChess className="text-4xl text-orange-500 mb-4" /> },
    { title: 'Action', text: 'Passer à l’acte avec efficacité et engagement pour des résultats durables et mesurables.', icon: <FaRocket className="text-4xl text-green-600 mb-4" /> },
  ];

  // Services KJS Groupe
  const services = [
    { title: 'Conception Logiciel', icon: <FaCogs className="text-4xl text-blue-600 mb-4" /> },
    { title: 'Base de Données', icon: <FaDatabase className="text-4xl text-orange-500 mb-4" /> },
    { title: 'Installation Réseaux', icon: <FaNetworkWired className="text-4xl text-green-600 mb-4" /> },
    { title: 'Formation Microsoft & Réseaux', icon: <FaChalkboardTeacher className="text-4xl text-red-500 mb-4" /> },
  ];

  // Startups
  const startups = [
    { title: 'Lyspi', desc: 'Connecte les réseaux des startups et promeut leur visibilité.', icon: <FaNetworkWired className="text-4xl text-blue-600 mb-4" /> },
    { title: 'Mashop', desc: 'Plateforme e-commerce pour boutiques et entreprises pour vendre produits et services.', icon: <FaStore className="text-4xl text-orange-500 mb-4" /> },
    { title: 'KJS Server', desc: 'Notre serveur ultra-performant et personnalisé.', icon: <FaCar className="text-4xl text-green-600 mb-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        {/* <Image
          src={heroBg} // Décommenter quand l'image locale est prête
          alt="À Propos de KJS Groupe"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        /> */}
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="À Propos de KJS Groupe"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute text-center z-10">
          <h1 className="text-5xl font-bold mb-4">À Propos de KJS Groupe</h1>
          <p className="text-xl">Innovation digitale pour un avenir connecté</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* Qui Sommes-Nous ? */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Qui Sommes-Nous ?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Fondé en <strong>2025</strong>, <strong>KJS Groupe</strong> aide entreprises, startups et jeunes talents à se développer
            dans un monde numérique connecté. Nos services couvrent la <strong>conception de logiciels</strong>, la 
            <strong> gestion de bases de données</strong>, <strong>l’installation de réseaux</strong> et la 
            <strong> formation Microsoft & réseaux</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Nos Startups */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Nos Startups</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Nous développons et accompagnons plusieurs startups innovantes pour dynamiser l’écosystème numérique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {startups.map((startup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
                {startup.icon}
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{startup.title}</h3>
                <p className="text-gray-600">{startup.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700 flex items-center">
              <FaHistory className="text-3xl mr-2 text-orange-500" /> Notre Histoire
            </h2>
            <p className="text-gray-700 leading-relaxed">
              KJS Groupe a été fondé par trois jeunes diplômés en Génie Informatique, Télécoms et Logiciel, certifiés Cisco,
              unis par une même vision : créer un écosystème numérique où talents et entreprises grandissent ensemble.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Les fondateurs – <strong>Ismaël Kamano</strong>, <strong>Mamady Sacko</strong> et <strong>Johnson Moïse</strong> – incarnent la philosophie de KJS : <strong>Vision, Stratégie, Action</strong>.
              Leur union et passion pour la technologie nourrissent une mission : permettre à chaque organisation et à chaque jeune talent de progresser.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* <Image
              src={histoireImg} // Décommenter quand l'image locale est prête
              alt="Notre Histoire"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            /> */}
            <Image
              src="/6.jpg"
              alt="Notre Histoire"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 flex items-center justify-center">
            <FaUsers className="text-3xl mr-2 text-green-600" /> Notre Équipe de Fondateurs
          </h2>
          <p className="text-gray-700 text-center mb-8">
            Rencontrez nos leaders visionnaires, experts en technologie et engagés pour le succès de vos projets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fondateurs.map((fondateur, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
                <Image
                  src={fondateur.image}
                  alt={fondateur.nom}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{fondateur.nom}</h3>
                <p className="text-orange-500 font-medium mb-2">{fondateur.titre}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{fondateur.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valeurs.map((valeur, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col items-center text-center">
                {valeur.icon}
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{valeur.title}</h3>
                <p className="text-gray-600">{valeur.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Appel à Action */}
        <section className="text-center py-8 bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Prêt à Collaborer ?</h2>
          <p className="text-gray-700 mb-6">Découvrez comment KJS Groupe peut transformer votre projet numérique.</p>
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 hover:scale-105 transition duration-300 ease-in-out inline-block"
          >
            Contactez-Nous
          </Link>
        </section>
      </div>

    </div>
  );
}