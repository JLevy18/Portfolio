import About from '@components/About';
import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import Head from 'next/head';

const App = () => {
  return (
    <div className="home">
      <Head>
        <title>LevTheDev | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
      </main>

    </div>
  )
}

export default App;
