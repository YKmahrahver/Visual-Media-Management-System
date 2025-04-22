import './navbar_LP.css'; 
import logo from '../../assets/g4142.png'; // Import the logo image
import { Link } from 'react-router-dom';

export default function Navbar_LP() {
  return(<>
    <div className="navbar_LP">
      <div className="navbar_LP_logo"><Link to='/'><img className="logopng" src={logo} alt="Logo" /></Link>GeekShelf</div>
      <div className="navbar_LP_links">
        <Link to="/">Home</Link>
        <Link to="/Howitworks">How it Works</Link>
        <Link to="/FAQ">FAQ</Link>
        <div className="navbar_LP_buttons">
        <Link to="/LogIn"><button className="navbar_LP_login">Log in</button></Link>
      </div>
      </div>
    </div>
  </>)
}