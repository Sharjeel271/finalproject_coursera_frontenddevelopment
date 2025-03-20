import heroImage from "./assets/hero-Image.png"
import LinkButton from "./LinkButton";

function Hero() {
    return (
      <section  className="hero">
        <div className="heroText">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Little Lemon is a family owned restaurant, focusing on bring tradiional dishes to the modern era.</p>
          <LinkButton to="/reservation" buttonText="Make Reservation"></LinkButton>
        </div>

        <div className="heroImage">
          <img src={heroImage} alt="Food on tray"/>
        </div>
      </section>
    );
  }
  
  export default Hero;