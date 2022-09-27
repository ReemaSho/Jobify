import Logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={Logo} alt="jobify" className="logo" />
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
    </main>
  );
};
export default Landing;
