import banner3 from '../assets/banner3.jpg'

function Hero(){
    return(
        <section className='hero'>
            <img src={banner3} alt="Caño cristales" 
            className='hero-img'
            />
            <div className="hero-content">
                <h1>Descubre Colombia</h1>
                <p>Los mejores Paisajes y zonas seguras</p>

                <button className='btn btn-success'>
                    Explorar Destinos 
                </button>
            </div>
        </section>    
    )
}
export default Hero
