import { Btn } from "../components/button/Btn";
import Logo from "../images/logo.svg";

const HeaderSection = () => {
    return(
        <div className="tm-container pt-md-3 pt-lg-2">
          <div className="container">
            <header className="d-flex justify-content-between align-items-center mt-4 mt-lg-5">
              <img src={Logo} alt="" style={logoStyles.logo} />
              <Btn textContent='Pre-order now' />
            </header>
          </div>
        </div>
    )
}

export default HeaderSection;

const logoStyles = {
  logo: {
    width: '40px',
    height: '40px'
  }
}