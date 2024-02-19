import { Btn } from '../components/button/Btn';
import HeroBg from '../images/hero_bg.png';


const HeroSection = () => {
    return(
      <div className="tm-xxl-container mx-auto position-relative hero">
        <div className="right-shape d-none d-xxl-block position-absolute bg-blue-light-extra"></div>
        <div className="tm-container">
          <div className="container">
              <div className="row d-none d-lg-flex">
                <div className="col-6 d-flex flex-column justify-content-center">
                  <h1 className="hero__heading text-uppercase text-blue-dark mb-0 pb-1">Typemaster Keyboard</h1>
                  <p className='hero__paragraph fw-medium text-blue-light pe-lg-3 pe-xl-5 my-3 py-3'>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
                  <div className="d-flex pt-1">
                    <Btn textContent='Pre-order now' btnColor='btn__orange' />
                    <Btn textContent='Release on 5/27' btnColor='text-blue-light' />
                  </div>
                </div>
                <div className="col-6">
                  <img src={HeroBg} alt="" className='rounded-4 w-100' />
                </div>
              </div>
          </div>  
        </div>    
      </div>
    )
}

export default HeroSection;