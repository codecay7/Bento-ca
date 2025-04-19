import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Mentors from './components/Mentors'
import Benefits from './components/Benefits'
import Agenda from './components/Agenda'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import JoinForm from './components/JoinForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Loading from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Mentors />
        <Benefits />
        <Agenda />
        <Pricing />
        <Gallery />
        <Testimonials />
        <JoinForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
