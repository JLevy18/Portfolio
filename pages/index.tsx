import About from '@components/About';
import Home from '@components/Home';
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
        <Home />
        <About />
      </main>

    </div>
  )
}

export default App;
