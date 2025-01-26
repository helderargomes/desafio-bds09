import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary navbar-config">
            <div>
                <NavLink to="/" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </NavLink>
            </div>
            <div>
                <button>
                    <h6>Sair</h6>
                </button>
            </div>


        </nav>
    )
}

export default Navbar;