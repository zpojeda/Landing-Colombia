import GaleriaItem from "./GaleriaItem"
import GaleriaUno from '../assets/GaleriaUno.jpg'
import galeriaDos from '../assets/galeriaDos.jpg'

const imagenesG =[
    {
        id:1, 
        lugar: "Salento",
        imagen : GaleriaUno
    },
    {
        id:2,
        lugar: "Cocora",
        imagen: galeriaDos
    }
]

function Galeria() {
    return(
        <section className="container py-5">
            <h2 className="text-center mb-4">
                Galeria de Colombia 
            </h2>
            <div className="row g-4">
                
                {imagenesG.map((item)=> (
                <GaleriaItem 
                key = {item.id}
                imagen={item.imagen}
                lugar={item.lugar} 
                />
                ))}
            </div>
        </section>
    )
}

export default Galeria