import AboutImageSmall from '../images/about_1.jpg'
import AboutImageBig from '../images/about_2.jpg';

const AboutSection = () => {
    return(
        <div className="tm-container about">
            <div className="container">
                <div className="row">

                    <div className="col-5 col-sm-5 col-md-4 col-lg-3 bg-danger px-lg-0">
                        <img src={AboutImageSmall} alt="" className='about__image about__image--small rounded-4 d-block ms-auto' />
                    </div>

                    <div className="col-7 col-sm-7 col-md-8 col-lg-6 bg-primary">
                        <img src={AboutImageBig} alt="" className='about__image about__image--big rounded-4 ms-0 ms-md-auto ms-lg-0 d-block' />
                    </div>

                    <div className="col-12 col-lg-3 d-lg-flex flex-column justify-content-center">
                        <div className="row flex-column justify-content-center flex-md-row justify-content-md-between flex-lg-column justify-content-lg-center">
                            <div className="col-12 col-md-5 col-lg-12">
                                 <h2 className="about__heading text-uppercase text-blue-dark text-center text-md-start">mechanical wireless Keyboard</h2> 
                            </div>
                            <div className="col-12 col-md-7 col-lg-12 d-md-flex align-items-center d-lg-block">
                                <p className="about__paragraph mb-0 text-blue-light text-center text-md-start fw-medium">The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
                            </div>
                        </div>                     
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection;