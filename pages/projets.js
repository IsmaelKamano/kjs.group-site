import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaShoppingCart, FaCar, FaUsers, FaChartLine, FaHandsHelping } from 'react-icons/fa';

export default function Projets() {
  const projects = [
    {
      title: 'Lyspi',
      description:
        "Application d'insertion professionnelle pour les jeunes, combinant offres d'emploi, stages, formations et valorisation de leurs startups.",
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      color: 'from-green-400 to-green-600',
      techs: ['React Native', 'Node.js', 'MongoDB'],
      link: '/projets/lyspi', // Ou une URL externe
    },
    {
      title: 'MaShop',
      description:
        "Plateforme moderne pour acheter et vendre des produits et services locaux, avec géolocalisation intégrée et paiement simplifié.",
      image: '/produir.jpeg',
      color: 'from-orange-400 to-orange-600',
      techs: ['Next.js', 'Stripe', 'Google Maps API'],
      link: '/projets/mashop',
    },
    {
  title: 'KJS Server',
  description:
    "Notre serveur ultra-performant et personnalisé qui propulse des applications modernes, avec carte interactive, géolocalisation avancée.",
  image: '/kjs-server-hero.png',
  color: 'from-purple-500 to-indigo-600',
  techs: ['Next.js 14', 'KJS Server', 'Google Maps API'],
  link: '/projets/kjs-server',
},
  ];

  const technologies = [
    { icon: <FaReact className="text-4xl text-blue-500" />, name: 'React/Next.js', desc: 'Interfaces web modernes' },
    { icon: <FaNodeJs className="text-4xl text-green-600" />, name: 'Node.js', desc: 'Backends scalables' },
    { icon: <FaDatabase className="text-4xl text-purple-500" />, name: 'Bases de Données', desc: 'MongoDB/PostgreSQL' },
    { icon: <FaMobileAlt className="text-4xl text-orange-500" />, name: 'Apps Mobiles', desc: 'React Native' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* 🔹 Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Nos Projets Innovants"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/60 to-orange-500/60 opacity-80" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl font-bold mb-4 drop-shadow-lg"
          >
            Nos <span className="text-orange-400">Projets Innovants</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-xl drop-shadow-md"
          >
            Découvrez comment KJS Groupe transforme les idées en solutions digitales impactantes.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* 🔹 Grille de Projets */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl font-bold text-center mb-10 text-blue-700"
        >
          Nos Réalisations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`}
                ></div>
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-md">
                  {project.title}
                </h3>
              </div>
              <div className="p-6 text-gray-700">
                <p className="mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, i) => (
                    <li key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tech}</li>
                  ))}
                </ul>
                <Link href={project.link}>
                  <button
                    className={`w-full bg-gradient-to-r ${project.color} text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition duration-300`}
                  >
                    Découvrir
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔹 Nos Technologies */}
        <section className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-bold text-center mb-8 text-blue-700"
          >
            Nos Technologies Clés
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center"
              >
                {tech.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-700">{tech.name}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔹 Impact de Nos Projets */}
        <section className="mt-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-bold mb-8 text-blue-700"
          >
            L'Impact de Nos Projets
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <FaUsers className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold">+5,000</h3>
              <p className="text-gray-600">Utilisateurs actifs</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <FaChartLine className="text-4xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold">+20%</h3>
              <p className="text-gray-600">Croissance mensuelle</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <FaHandsHelping className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold">3</h3>
              <p className="text-gray-600">Projets impactant la communauté</p>
            </motion.div>
          </div>
        </section>

        {/* 🔹 Section de Fin */}
        <div className="text-center mt-16 py-12 bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-bold text-blue-700 mb-4"
          >
            Vous avez un projet en tête ?
          </motion.h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous et donnons vie à vos idées avec <span className="text-orange-500 font-semibold">KJS Groupe</span>.
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
