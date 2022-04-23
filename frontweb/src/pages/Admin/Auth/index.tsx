import { ReactComponent as AuthImage } from 'assets/images/auth-image.svg';
import { Route, Switch } from 'react-router-dom';

import './styles.css';

function Auth() {
    return(
        <div className='auth-container'>
            <div className='auth-banner-container'>
                <h1>Divulgue seus produtos no DS Catalog</h1>
                <p>Faça parte do nosso catálago de divugações e aumente a venda dos seus produtos.</p>
                <AuthImage />
            </div>
            <div className='auth-form-container'>
                <Switch>
                    <Route path='/admin/auth/login'>
                        <h1>Card de login</h1>
                    </Route>
                    <Route path='/admin/auth/signup'>
                        <h1>card de Signup</h1>
                    </Route>
                    <Route path='/admin/auth/recover'>
                        <h1>Card de Recover</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Auth;