import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">Booking.com</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Sign in</button>
            </div>
        </div>
    </div>
  )
}
