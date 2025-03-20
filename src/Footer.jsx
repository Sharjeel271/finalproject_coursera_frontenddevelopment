import lemonLogo from './assets/Lemon.png'
/*import Nav from './Nav'*/
function Footer() {


    return (
        <footer className="footer">
            <img src={lemonLogo} alt="Little Lemon Logo" />
            <section>
                <h2>Contact</h2>
                <div>123 Fake Street</div>
                <div>+12 1234567890</div>
                <div>Contact@LittleLemon.com</div>
            </section>

            <section>
                <h2>Social Media</h2>
                <div><a href="">Facebook</a></div>
                <div><a href="">Instagram</a></div>
            </section>

        </footer>
    )
}

export default Footer;