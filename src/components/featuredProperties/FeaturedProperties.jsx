import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity"> Gołębia 2, Old Town, 31-007 Kraków, Poland </span>
        <span className="fpPrice">Starting from ₹10,729</span>
        <div className="fpRating">
            <button>8.7</button>
            <span>Fabulous</span>
        </div>
    </div>
    <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" className="fpImg" />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">1061 Budapest, Király utca 8., Hungary </span>
        <span className="fpPrice">Starting from ₹8,543</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
    <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=" alt="" className="fpImg" />
        <span className="fpName">Oriente Palace Apartments</span>
        <span className="fpCity">Calle de Lepanto 6, Centro, 28013 Madrid, Spain</span>
        <span className="fpPrice">Starting from ₹8,800</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
    <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" alt="" className="fpImg" />
        <span className="fpName">Leman Locke</span>
        <span className="fpCity">15 Leman Street, Tower Hamlets, London, E1 8EN, United Kingdom –</span>
        <span className="fpPrice">Starting from ₹14,600</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
    </div>


    
  )
}

export default FeaturedProperties