import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Why from './components/Why'
import Started from './components/Started'
import Numbers from './components/Numbers'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Newsletter from './components/Newsletter'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Why />
      <Started />
      <Numbers />
      <Testimonials />
      <CTA />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
