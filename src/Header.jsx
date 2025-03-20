import littleLemonLogo from './assets/Logo.png'
import "./App.css"

function Header() {


    return (
        <header className="header">
            <img className='logo' src={littleLemonLogo} alt="Little Lemon Logo"/>
        </header>
    )
}

export default Header;