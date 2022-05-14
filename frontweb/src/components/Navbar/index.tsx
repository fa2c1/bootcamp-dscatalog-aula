import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
import { getTokenData, isAuthenticated, removeAuthData, TokenData } from 'util/requests';
import { useEffect, useState } from 'react';
import history from 'util/history';

type AuthData = {
    autenticated: boolean;
    tokenData?: TokenData;
}

function Navbar() {
    const [authData, setAuthData] = useState<AuthData>({autenticated: false});

    useEffect(()=>{
        if(isAuthenticated()){
            setAuthData({
                autenticated: true,
                tokenData: getTokenData()
            });
        }else{
            setAuthData({
                autenticated: false
            });
        }
    }, []);

    const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthData({
            autenticated: false
        });
        history.replace('/');
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dscatalog-navbar"
                    aria-controls="dscatalog-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className='nav-logo-text'>
                    <h4>DS Catalog</h4>
                </Link>
                <div className="collapse navbar-collapse" id="dscatalog-navbar">
                    <ul className="navbar-nav offset-md-2 main-menu">
                        <li>
                            <NavLink to="/" activeClassName='active' exact>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" activeClassName='active'>CATÁLOGO</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeClassName='active'>ADMIN</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <span>{authData.tokenData?.user_name}</span>
                    {authData.autenticated ? (
                        <a href='#logout' onClick={handleLogoutClick}>LOGOUT</a>
                    ) : (
                        <Link to="/admin/auth">LOGIN</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;