import { Btn } from '../components/button/Btn';


const HeroSection = () => {
    return(
      <div className="tm-xxl-container mx-auto position-relative hero pt-lg-4 mt-lg-3 overflow-hidden">
        <div className="right-shape d-none d-xxl-block position-absolute bg-blue-light-extra"></div>
        <div className="tm-container">
          <div className="container">
              <div className="row">

                <div className="col-sm-12 col-md-7 col-lg-6 d-flex flex-column justify-content-center">
                  <h1 className="hero__heading text-uppercase text-blue-dark mb-0 pb-1">Typemaster Keyboard</h1>
                  <p className='hero__paragraph fw-medium text-blue-light pe-lg-3 pe-xl-5 my-3 py-3'>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
                  <div className="d-flex pt-1">
                    <Btn textContent='Pre-order now' btnBg='btn__orange' />
                    <Btn textContent='Release on 5/27' btnColor='text-blue-light' />
                  </div>
                </div>

                <div className="col-sm-12 col-md-5 col-lg-6">
                  <div className="hero__image"></div>
                </div>
              </div>
          </div>  
        </div>    
      </div>
    )
}

export default HeroSection;