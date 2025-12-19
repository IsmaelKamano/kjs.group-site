import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mkgpddbq", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setIsSubmitted(true);
      e.target.reset();
      setTimeout(() => setIsSubmitted(false), 4000);
    } else {
      alert("Erreur lors de l’envoi du message. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* 🔹 Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Contactez KJS Groupe"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Contactez-Nous</h1>
          <p className="text-xl">
            Nous sommes là pour transformer vos idées en réalité digitale
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* 🔹 Formulaire et Coordonnées */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          {/* Formulaire stylé */}
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-blue-700">
              Envoyez-nous un Message
            </h2>

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-blue-700 mb-2 font-semibold"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                required
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-blue-700 mb-2 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre email"
                required
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-blue-700 mb-2 font-semibold"
              >
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sujet de votre message"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-blue-700 mb-2 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Votre message"
                required
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-orange-600 hover:scale-105 transition transform w-full shadow-lg shadow-orange-300"
            >
              Envoyer
            </button>

            {isSubmitted && (
              <p className="mt-4 text-green-600 flex items-center justify-center">
                <FaCheckCircle className="mr-2" /> Message envoyé avec succès !
              </p>
            )}
          </form>

          {/* Informations de contact stylées */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-6 text-blue-700">
              Nos Coordonnées
            </h2>

            <Link
              href="https://wa.me/+224620728773"
              className="flex items-center mb-4 hover:text-green-600 transition"
            >
              <FaWhatsapp className="text-2xl mr-3 text-green-500" />
              <span className="text-gray-700 font-medium">
                +224 620 72 87 73 (WhatsApp)
              </span>
            </Link>

            <Link
              href="https://facebook.com/kjs.groupe2025"
              className="flex items-center mb-4 hover:text-blue-600 transition"
            >
              <FaFacebookF className="text-2xl mr-3 text-blue-600" />
              <span className="text-gray-700 font-medium">
                kjs.groupe2025 (Facebook)
              </span>
            </Link>

            <Link
              href="https://linkedin.com/company/kjs.groupe2025"
              className="flex items-center mb-4 hover:text-blue-700 transition"
            >
              <FaLinkedin className="text-2xl mr-3 text-blue-700" />
              <span className="text-gray-700 font-medium">
                kjs.groupe2025 (LinkedIn)
              </span>
            </Link>

            <Link
              href="https://kjsgroup2025.com"
              className="flex items-center mb-4 hover:text-orange-500 transition"
            >
              <FaGlobe className="text-2xl mr-3 text-orange-500" />
              <span className="text-gray-700 font-medium">
                kjsgroup2025.com (Site Web)
              </span>
            </Link>

            <Link
              href="mailto:kjsgroup2025@kjsgroup.com"
              className="flex items-center mb-4 hover:text-red-500 transition"
            >
              <FaEnvelope className="text-2xl mr-3 text-red-500" />
              <span className="text-gray-700 font-medium">
                kjsgroup2025@kjsgroup.com (Email)
              </span>
            </Link>

            <p className="text-gray-500 mt-6">
              Nous sommes disponibles pour répondre à toutes vos questions et
              vous accompagner dans vos projets digitaux.
            </p>
          </div>
        </div>

        {/* 🔹 Pourquoi Nous Contacter ? */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">
            Pourquoi Nous Contacter ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center">
              <FaCheckCircle className="text-4xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Expertise Personnalisée
              </h3>
              <p className="text-gray-600">
                Des solutions adaptées à vos besoins en développement et
                formation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center">
              <FaCheckCircle className="text-4xl text-orange-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Réponse Rapide
              </h3>
              <p className="text-gray-600">
                Nous répondons sous 24h pour accélérer vos projets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center">
              <FaCheckCircle className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Partenariat Durable
              </h3>
              <p className="text-gray-600">
                Construisons ensemble un avenir connecté et innovant.
              </p>
            </div>
          </div>
        </section>
      </div>

      
    </div>
  );
}
