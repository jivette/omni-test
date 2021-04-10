import React from 'react'

export default function SignUp({ setSuccess }) {

    return (
        <div className="container p-container">
            <div className="field">
                <label className="label color-grey">NOMBRE</label>
                <div className="control">
                    <input className="input default-input color-grey" type="text" placeholder="ejemplo@email.com" />
                </div>
            </div>
            <div className="field">
                <label className="label color-grey">APELLIDO</label>
                <div className="control">
                    <input className="input default-input color-grey" type="text" placeholder="*****" />
                </div>
            </div>

            <div className="field">
                <label className="label color-grey">EMAIL</label>
                <div className="control">
                    <input className="input default-input color-grey" type="email" placeholder="*****" />
                </div>
            </div>

            <div className="field">
                <label className="label color-grey">CONTRASEÑA</label>
                <div className="control">
                    <input className="input default-input color-grey" type="email" placeholder="*****" />
                </div>
            </div>

            <button className={`border-radius-0 m-vertical btn-primary`} onClick={() => setSuccess()}>INGRESO</button>
        </div>
    )
}
