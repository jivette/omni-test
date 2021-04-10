import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { useHistory } from 'react-router-dom';

export default function SignIn(props) {
    const history = useHistory();

    return (
        <div className="container p-container">
            <div className="field">
                <label className="label color-grey m-vertical">EMAIL</label>
                <div className="control">
                    <input className="input default-input color-grey" type="email" placeholder="ejemplo@email.com" />
                </div>
            </div>
            <div className="field">
                <label className="label color-grey m-vertical">CONTRASEÑA</label>
                <div className="control">
                    <input className="input default-input color-grey" type="password" placeholder="*****" />
                </div>
            </div>
            <button className={`border-radius-0 m-vertical btn-primary`} onClick={() => history.push('/dashboard')}>INGRESO</button>
            <a className="label color-grey m-vertical has-text-centered">Olvide Contraseña</a>
        </div>
    )
}
