// pages/services.js
import Head from 'next/head';

export default function Services() {
  const services = [
    { name: 'Conception Logicielle', desc: 'Développement sur mesure de logiciels et applications.' },
    { name: 'Formations IT', desc: 'Cours professionnels en programmation, réseaux, etc.' },
    { name: 'Réseaux et Infrastructure', desc: 'Installation et maintenance de réseaux sécurisés.' },
  ];

  return (
    <>
      <Head>
        <title>Services - KJS Groupe</title>
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Nos Services</h1>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {services.map((service, index) => (
            <li key={index} className="border p-4 rounded">
              <h2 className="text-xl">{service.name}</h2>
              <p>{service.desc}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
