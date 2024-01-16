import { Btn } from "./components/button/Btn";
import Logo from "./images/logo.svg";

const App = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="tm-container pt-md-3 pt-lg-2">
          <div className="d-flex justify-content-between align-items-center mt-4 mt-lg-5">
            <img src={Logo} alt="" style={styles.logo} />
            <Btn textContent='Pre-order now' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  logo: {
    width: '40px',
    height: '40px'
  }
}
