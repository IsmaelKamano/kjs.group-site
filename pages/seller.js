import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import {
  FaHandshake, // Pour partenariat général
  FaUsers, // Pour StartUp Alpha
  FaBuilding, // Pour PME Innovante
  FaChalkboardTeacher, // Pour Coach Pro
  FaUserTie, // Pour Mentorat Global
  FaCheckCircle, // Pour section "Pourquoi Partenarier"
  FaStar, // Pour section "Pourquoi Partenarier"
  FaHandsHelping, // Pour section "Pourquoi Partenarier"
} from 'react-icons/fa';

export default function Seller() { // Changé en Seller pour matcher le nom du fichier ; adapte si besoin
  const partners = [
    {
      name: "StartUp LYSPI",
      description: "Accompagnement et mentorat pour jeunes entrepreneurs.",
      image: "/1.jpg",
      link: "#",
      icon: <FaUsers className="text-4xl text-orange-500 mb-4" />,
    },
    {
      name: "PME Innovante",
      description: "Petite et moyenne entreprise dynamique dans la tech.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
      link: "#",
      icon: <FaBuilding className="text-4xl text-orange-500 mb-4" />,
    },
    {
      name: "Coach Pro",
      description: "Coaching personnalisé pour étudiants et professionnels.",
      image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80",
      link: "#",
      icon: <FaChalkboardTeacher className="text-4xl text-orange-500 mb-4" />,
    },
    {
      name: "Mentorat Global",
      description: "Mentorat et suivi pour projets entrepreneuriaux.",
      image: "/Mentor.jpg",
      link: "#",
      icon: <FaUserTie className="text-4xl text-orange-500 mb-4" />,
    },
  ];

  const whyPartner = [
    { icon: <FaCheckCircle className="text-3xl text-green-500" />, title: 'Réseau Étendu', desc: 'Accédez à un écosystème d\'innovateurs et d\'entrepreneurs.' },
    { icon: <FaStar className="text-3xl text-orange-500" />, title: 'Croissance Mutuelle', desc: 'Partenariats gagnant-gagnant pour booster votre impact.' },
    { icon: <FaHandsHelping className="text-3xl text-blue-700" />, title: 'Support Personnalisé', desc: 'Accompagnement adapté à vos besoins en digital.' },
  ];

  return (
    <div className="min-h-screen bg-white"> 
      <Navbar />

      {/* 🔹 Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a779b399242?auto=format&fit=crop&w=1200&q=80" // Image thématique : partenariats
          alt="Nos Partenaires"
          fill
          className="object-cover brightness-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/60 to-orange-500/60 opacity-80" /> 
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl font-bold mb-4 drop-shadow-lg"
          >
            Nos <span className="text-orange-400">Partenaires</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-xl drop-shadow-md max-w-3xl mx-auto"
          >
            Découvrez les acteurs qui collaborent avec KJS Groupe pour un écosystème digital innovant.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* 🔹 Grille de Partenaires */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl font-bold text-center mb-10 text-blue-700"
        >
          Nos Collaborateurs Clés
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border-l-4 border-green-500"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={partner.image}
                  alt={`Image de ${partner.name}`}
                  fill
                  className="object-cover transform hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                {partner.icon}
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <Link href={partner.link}>
                  <div className="bg-orange-500 text-white text-center px-4 py-2 rounded-xl hover:bg-orange-600 transition font-semibold cursor-pointer">
                    Voir Plus
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔹 Pourquoi Partenarier avec Nous */}
        <section className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-bold text-center mb-8 text-blue-700"
          >
            Pourquoi Partenarier avec KJS Groupe ?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyPartner.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center border-t-2 border-green-300"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔹 Section CTA de Fin */}
        <div className="text-center mt-16 py-12 bg-gradient-to-br from-blue-50 to-orange-50 via-green-50 rounded-lg">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-bold text-blue-700 mb-4"
          >
            Devenez Notre Partenaire
          </motion.h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Rejoignez KJS Groupe pour collaborer sur des projets innovants et accélérer votre croissance digitale.
          </p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition cursor-pointer"
            >
              Nous Contacter
            </motion.div>
          </Link>
        </div>
      </div>

     
    </div>
  );
}
