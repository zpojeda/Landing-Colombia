import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Destinos from "./components/Destinos"
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Destinos/>
      <Galeria/>
      <Contacto />
      <Footer />
    </div>
  )
}

export default App