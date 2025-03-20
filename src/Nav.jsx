import "./App.css"
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import UnderConstruction from "./pages/UnderConstructionPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function Nav() {

    return (
        <>
        <nav className="navbar">

            <NavLink exact to="/" activeClassName="currentPage">Home</NavLink>
            <NavLink to="/About" activeClassName="currentPage">About</NavLink>
            <NavLink to="/Menu" activeClassName="currentPage">Menu</NavLink>
            <NavLink to="/Reservation" activeClassName="currentPage">Reservation</NavLink>
            <NavLink to="/Order" activeClassName="currentPage">Order</NavLink>
            <NavLink to="/Login" activeClassName="currentPage">Login</NavLink>
        </nav>

        <Routes id="navbar" className="nav">
            <Route path="/" element={<HomePage />}/>
            <Route path="/About" element={<UnderConstruction />}/>
            <Route path="/Menu" element={<UnderConstruction />}/>
            <Route path="/Reservation" element={<ReservationPage />}/>
            <Route path="/Order" element={<UnderConstruction />}/>
            <Route path="/Login" element={<UnderConstruction />}/>
            <Route path="/confirmedbooking" element={<ConfirmedBooking />}/>
        </Routes>
        </>
    )
}

export default Nav;