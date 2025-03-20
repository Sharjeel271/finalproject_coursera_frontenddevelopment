import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types';

function LinkButton({to, buttonText}) {

    const navigate = useNavigate();

    const handleButtonClick = () =>{
        navigate(to);
    }

    return (

        <button aria-label= {buttonText} onClick={handleButtonClick} className='link-button'>{buttonText}</button>
    );
  }

  LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }
  
  export default LinkButton;