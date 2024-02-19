


const AboutSection = () => {
    return(
        <div className='tm-xxl-container position-relative mx-auto'>
            <div className="left-shape d-none d-xxl-block position-absolute bg-blue-light-extra"></div>
            <div className="tm-container about position-relative">
                <div className="container">
                    <div className="row">
                        <div className="d-md-none">
                            <div 
                                className="about__image about__image-small--bg rounded-4 position-absolute start-0"></div>
                        </div>
                        <div className="col-8 col-sm-10 offset-4 d-md-none">
                            <div className="about__image about__image-big--bg rounded-4"></div>
                        </div>
                        {/* Viseble from 768px */}
                        <div className="col-4 col-md-4  col-lg-3 d-none d-md-flex">
                             <div className='about__image about__image-small--bg rounded-4'></div>
                        </div>

                        <div className="col-8 col-md-8 col-lg-6 d-none d-md-flex justify-content-end justify-content-lg-start">
                            <div className='about__image about__image-big--bg rounded-4'></div>
                        </div>

                        <div className="col-12 col-lg-3 d-lg-flex flex-column justify-content-center pt-5 pt-lg-0">
                            <div className="row flex-column justify-content-center flex-md-row justify-content-md-between flex-lg-column justify-content-lg-center pt-3 pt-lg-0">
                                <div className="col-12 col-md-4 col-lg-12">
                                    <h2 className="about__heading text-uppercase text-blue-dark text-center text-md-start">mechanical wireless Keyboard</h2> 
                                </div>
                                <div className="col-12 col-md-8 col-lg-12 d-md-flex align-items-center d-lg-block">
                                    <p className="about__paragraph mb-0 text-blue-light text-center text-md-start fw-medium">The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
                                </div>
                            </div>                     
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default AboutSection;