import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Work from "./Components/Work/Work";


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
