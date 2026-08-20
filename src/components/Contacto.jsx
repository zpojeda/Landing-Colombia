function Contacto (){

    return(
        <section className="container py-5 contacto" >
            <h2 className="text-center">Contáctanos</h2>
            <p className="text-center">
                ¿Tienes preguntas sobre algun destino? Escribenos aqui y te respondemos en maximo 1 dia 
            </p>
            <div className="mb-3">
                <label  className="form-label">Nombre</label>
                <input type="text" className="form-control" placeholder="Escribe tu nombre"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Correo</label>
                <input type="email" className="form-control" placeholder="correo@gmail.com"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Mensaje</label>
                <textarea name="" className="form-control" rows="4" id=""
                placeholder="Escribe tu mensaje"
                ></textarea>
            </div>
            <div className="text-center">
                <button 
                type="submit" className="btn btn-warning px-5">Enviar Mensaje</button>
            </div>
        </section>
    )
}

export default Contacto