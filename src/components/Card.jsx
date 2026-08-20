function Card({titulo, descripcion, imagen}) {
    return(
        <div className="card">
            <img src={imagen} alt="puente" className='card-img-top'/>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">
                {descripcion} 
            </p>
              <div className="text-center">  
            <button className='btn btn-warning px-5'> Ver Destino </button>
            </div>
            
            </div>    
        </div>
    )
}

export default Card