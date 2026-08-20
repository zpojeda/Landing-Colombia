import Card from "./Card"

import tres from "../assets/tres.jpg"
import cuatro from "../assets/cuatro.jpg"
import seis from "../assets/seis.jpg"

const destinos = [
    {
        titulo: "Santuario de las lajas",
        descripcion: "Maravillas del mundo",
        imagen: tres
    },
    {
        titulo: "Amazonas",
        descripcion: "La selva de Colombia",
        imagen: cuatro
    },
    {
        titulo: "Barranquilla",
        descripcion: "Carnaval insignia de Colombia",
        imagen: seis
    }
]

function Destinos() {
    return (
        <section className="container py-5">
            <h2 className="text-center mb-4"> Destinos Destacados </h2>

            <div className="row g-4">
                {destinos.map((destino , index) => (
                    <div className="col-md-4" key={index}>
                        <Card
                            titulo={destino.titulo}
                            descripcion={destino.descripcion}
                            imagen={destino.imagen} />
                    </div>
                )
                )}

            </div>
        </section>
    )
}

export default Destinos