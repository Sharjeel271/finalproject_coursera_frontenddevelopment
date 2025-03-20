import LinkButton from "../LinkButton";


function UnderConstructionPage() {
    return (
      <div>
      <p className="under-construction">This page is currently under construction! Please navigate to either the <b>Home page</b> or the <b>Reservation page</b></p>
      <LinkButton to="/" buttonText="Home Page"></LinkButton>
      <LinkButton to="/reservation" buttonText="Reservation Page"></LinkButton>

      </div>
    );
  }
  
  export default UnderConstructionPage;