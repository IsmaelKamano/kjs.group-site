// pages/_app.js
import '../styles/globals.css'; // Import Tailwind
import Navbar from '../components/Navbar'; // Import manquant pour Navbar
import Footer from '../components/Footer'; // Import manquant pour Footer

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
