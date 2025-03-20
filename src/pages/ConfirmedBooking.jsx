import LinkButton from '../LinkButton';

function ConfirmedBooking() {
    return (
        <>
            <p className="confirmed-booking">Your booking has been successfully books. See you soon!</p>
            <LinkButton to="/" buttonText="Return to Home"></LinkButton>
        </>
    );
  }
  
  export default ConfirmedBooking;