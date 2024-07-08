import About from '@components/About';
import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const App = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <Head>
        <title>LevTheDev | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar show={showNavbar}/>
      <main>
        <Hero />
        <About />
      </main>

    </div>
  )
}

export default App;
