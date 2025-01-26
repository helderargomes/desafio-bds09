import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary navbar-config">
            <div>
                <Link to="/" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </Link>
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