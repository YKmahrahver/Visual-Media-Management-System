import './navbar_LP.css'; 
import logo from '../../assets/g4142.png'; // Import the logo image

export default function Navbar_LP() {
  return(<>
    <div className="navbar_LP">
      <div className="navbar_LP_logo"><img className="logopng" src={logo} alt="Logo" />GeekShelf</div>
      <div className="navbar_LP_links">
        <a href="/">Home</a>
        <a href="/howitworks">How it Works</a>
        <a href="/FAQ">FAQ</a>
        <div className="navbar_LP_buttons">
        <button className="navbar_LP_login">Log in</button>
      </div>
      </div>
    </div>
  </>)
}