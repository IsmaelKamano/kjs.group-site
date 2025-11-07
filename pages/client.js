import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import {
  FaUserGraduate, // Pour Étudiants
  FaChalkboardTeacher, // Pour Coachs
  FaUserTie, // Pour Mentors
  FaBriefcase, // Pour Entrepreneurs
  FaBuilding, // Pour PME
  FaCalendarAlt, // Pour Organisateurs d’Événements
  FaCheckCircle, // Pour section "Pourquoi Nous Choisir"
  FaStar, // Pour section "Pourquoi Nous Choisir"
  FaHandsHelping, // Pour section "Pourquoi Nous Choisir"
} from 'react-icons/fa';

export default function Client() {
  const clients = [
    {
      title: 'Étudiants',
      description: 'Développement des compétences, accès aux stages, offres d’emploi et lancement de projets.',
      image: 'https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=800&q=80',
      icon: <FaUserGraduate className="text-4xl text-orange-500 mb-4" />,
    },
    {
      title: 'Coachs',
      description: 'Encadrent, motivent et accompagnent les jeunes talents vers le succès.',
      image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80',
      icon: <FaChalkboardTeacher className="text-4xl text-orange-500 mb-4" />,
    },
    {
      title: 'Mentors',
      description: 'Partagent leur expérience et guident les étudiants et entrepreneurs.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: <FaUserTie className="text-4xl text-orange-500 mb-4" />,
    },
    {
      title: 'Entrepreneurs',
      description: 'Accompagnement pour digitaliser leurs activités et booster la croissance.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      icon: <FaBriefcase className="text-4xl text-orange-500 mb-4" />,
    },
    {
      title: 'Petites et Moyennes Entreprises (PME)',
      description: 'Solutions numériques et transformation digitale adaptées aux PME.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?',
      icon: <FaBuilding className="text-4xl text-orange-500 mb-4" />,
    },
    {
      title: 'Organisateurs d’Événements',
      description: 'Publient des événements d’emploi, entrepreneuriat et innovation pour la communauté.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      icon: <FaCalendarAlt className="text-4xl text-orange-500 mb-4" />,
    },
  ];

  const whyChooseUs = [
    { icon: <FaCheckCircle className="text-3xl text-blue-600" />, title: 'Expertise Personnalisée', desc: 'Solutions adaptées à chaque profil.' },
    { icon: <FaStar className="text-3xl text-orange-500" />, title: 'Impact Réel', desc: 'Résultats mesurables pour votre croissance.' },
    { icon: <FaHandsHelping className="text-3xl text-green-500" />, title: 'Accompagnement Continu', desc: 'Support dedicated tout au long du parcours.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* 🔹 Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a779b399242?auto=format&fit=crop&w=1200&q=80" // Image thématique : collaboration professionnelle
          alt="Nos Clients & Acteurs"
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
            Nos <span className="text-orange-400">Clients & Acteurs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-xl drop-shadow-md max-w-3xl mx-auto"
          >
            KJS Groupe accompagne tous les acteurs de l’écosystème digital : étudiants, coachs, mentors, entrepreneurs, PME, et organisateurs d’événements pour l’emploi et l’entrepreneuriat.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* 🔹 Grille de Clients */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl font-bold text-center mb-10 text-blue-700"
        >
          Découvrez Nos Partenaires
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={client.image}
                  alt={`Image représentant ${client.title}`}
                  fill
                  className="object-cover transform hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                {client.icon}
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">
                  {client.title}
                </h2>
                <p className="text-gray-700">{client.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔹 Pourquoi Nous Choisir */}
        <section className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-bold text-center mb-8 text-blue-700"
          >
            Pourquoi Choisir KJS Groupe ?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
                className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔹 Section CTA de Fin */}
        <div className="text-center mt-16 py-12 bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-bold text-blue-700 mb-4"
          >
            Rejoignez Notre Écosystème
          </motion.h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Que vous soyez étudiant, entrepreneur ou PME, contactez-nous pour découvrir comment KJS Groupe peut vous accompagner.
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

      {/* 🔹 Footer */}
      <footer className="bg-blue-700 text-white py-8 text-center mt-auto">
        <div className="container mx-auto px-4">
          <p className="mb-4">
            &copy; 2025 <span className="text-orange-400">KJS Groupe</span>. Tous droits réservés.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
            <Link href="/a-propos" className="hover:text-orange-400 transition">À Propos</Link>
            <Link href="/services" className="hover:text-orange-400 transition">Services</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
