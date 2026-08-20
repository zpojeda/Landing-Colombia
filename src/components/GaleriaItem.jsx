function GaleriaItem ({ imagen, lugar}){
    return(
        <div className=" col-md-6 galeriaC">
            <img src={imagen} alt={lugar} 
            className="img-fluid galeria_img" />
            
            <div className="galeriaTexto">
            <h4>{lugar}</h4>
            </div>
        </div>

    )
}

export default GaleriaItem