import About from '@components/About';
import Home from '@components/Home';
import Head from 'next/head';

const App = () => {
  return (
    <div className="home">
      <Head>
        <title>LevTheDev | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
        <About />
      </main>

    </div>
  )
}

export default App;
