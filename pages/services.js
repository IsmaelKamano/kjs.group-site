// pages/services.js (ou app/services/page.js)
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaEnvelope, FaShieldAlt, FaLaptopCode, FaNetworkWired, FaDatabase, FaGraduationCap } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode className="text-5xl text-blue-500" />,
      title: 'Conception & Développement Logiciel',
      description: 'Applications web et mobiles sur mesure, performantes et évolutives.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <FaNetworkWired className="text-5xl text-green-500" />,
      title: 'Réseaux & Infrastructure',
      description: 'Installation, sécurisation et maintenance d’infrastructures IT fiables.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: <FaDatabase className="text-5xl text-purple-500" />,
      title: 'Bases de Données & Systèmes',
      description: 'Conception, optimisation et administration de bases de données (SQL/NoSQL).',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: <FaGraduationCap className="text-5xl text-orange-500" />,
      title: 'Formations IT Professionnelles',
      description: 'Cours certifiants et accompagnement sur mesure (Microsoft, programmation, réseaux).',
      color: 'from-orange-500 to-amber-600',
    },
  ];

  const team = [
    {
      name: 'Mamady Sacko',
      role: 'Directeur du Département Système Logiciel-Co-fondateur',
      image: '/4.jpg',
      expertise: [
        'Conception et développement d’applications mobiles et web sur mesure',
        'Architecture et gestion de bases de données',
        'Analyse des besoins et cahiers des charges',
        'Intégration et maintenance de solutions',
        'Optimisation et sécurisation applicative',
       
      ],
    },
    {
      name: 'Johnson Moïse',
      role: 'Directeur du Département Réseau & IT - Co-fondateur',
      image: '/john.jpg',
      expertise: [
        'Administration et sécurisation des infrastructures réseau',
        'Cybersécurité des systèmes d’information',
        'Déploiement et gestion de serveurs',
        'Support technique et assistance',
        'Conseil en architecture réseau',
        'Gestion de projets IT',
      ],
    },
    {
      name: 'Ismael Kamano',
      role: 'Directeur du Département Systèmes & Formation - Co-fondateur',
      image: '/Kamano.jpg',
      expertise: [
        'Déploiement et administration ERP & CRM et Messagerie (Dolibarr,Zimbra etc..)',
        'Intégration des systèmes d’information',
        'Formation aux systèmes ERP, CRM et bonnes pratiques IT',
        'Support technique aux utilisateurs',
         'Formation Microsoft',
         'Formation Analyse de données',
         'Conseil et expertise en ingénierie logicielle'
      ],
    },
  ];

  const gallery = [
    {
      image: '/b.jpeg',
      caption: 'Développement d’une application mobile sur mesure',
    },
    {
      image: '/i.jpeg',
      caption: 'Installation d’un réseau sécurisé pour une entreprise',
    },
    {
      image: '/1.jpg',
      caption: 'Session de formation Microsoft certifiante',
    },
    {
      image: '/5.jpg',
      caption: 'Déploiement d’un serveur KJS ultra-performant',
    },
    {
      image: '/4.jpg',
      caption: 'Optimisation d’une base de données pour une plateforme e-commerce',
    },
    {
      image: '/Mentor.jpg',
      caption: 'Intégration ERP & CRM pour une PME',
    },
  ];

  return (
    <>
      <Head>
        <title>Services - KJS Groupe</title>
        <meta name="description" content="Découvrez nos services en développement logiciel, réseaux, infrastructure et formation IT." />
      </Head>

      <main className="bg-gray-50 min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Nos <span className="text-[#F97316]">Services</span> d’Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl max-w-3xl mx-auto"
            >
              KJS Groupe transforme vos idées en solutions digitales performantes, sécurisées et sur mesure.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${service.color} h-40 flex items-center justify-center`}>
                  {service.icon}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Équipe Dirigeante */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Notre Équipe d’Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-gray-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 text-center"
                >
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-600">
                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">{member.name}</h3>
                  <p className="text-lg text-indigo-600 font-semibold mb-6">{member.role}</p>
                  <ul className="text-gray-700 space-y-3 text-left">
                    {member.expertise.map((exp, i) => (
                      <li key={i} className="flex items-start">
                        <FaShieldAlt className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nouvelle Section : Galerie de Réalisations */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Nos Réalisations en Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-lg font-semibold p-6 w-full text-center">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#1D4ED8] to-[#10B981] text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Prêt à démarrer votre projet ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl mb-10 max-w-2xl mx-auto"
            >
              Contactez-nous dès maintenant et discutons de vos besoins !
            </motion.p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Link href="/contact">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F97316] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-[#EA580C] transition"
                >
                  Nous contacter
                </motion.a>
              </Link>
              <a
                href="mailto:contact@kjsgroup.com"
                className="flex items-center bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-gray-100 transition"
              >
                <FaEnvelope className="mr-2" /> contact@kjsgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}