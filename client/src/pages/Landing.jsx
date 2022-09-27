import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby kombucha iceland cardigan sriracha gatekeep. Freegan
            vibecession snackwave ramps, shabby chic tonx sartorial authentic.
            Skateboard direct trade 3 wolf moon shabby chic drinking vinegar
            before they sold out banjo kale chips mlkshk taxidermy VHS godard
            poke four loko fashion axe.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
