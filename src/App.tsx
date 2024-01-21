import AboutSection from "./sections/About";
import FeaturesSection from "./sections/Features";
import FooterSection from "./sections/Footer";
import HeaderSection from "./sections/Header";
import HeroSection from "./sections/Hero";

const App = () => {
  return (
    <div className="page-wrapper">

      <HeaderSection />

      <HeroSection />

      <AboutSection />

      <FeaturesSection />

      <FooterSection />

    </div>
  );
}

export default App;
