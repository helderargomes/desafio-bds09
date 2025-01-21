import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary navbar-config">
            <div>
                <a href="link" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </a>
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