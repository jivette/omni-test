import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.png';
import SuccessIcon from '../../assets/images/success.png';
import bars from '../../assets/images/menu-w.png';
import SignIn from '../../Components/SignIn';
import SignUp from '../../Components/SignUp';

import './Authentication.css'

export default function Authentication() {
    const [tabState, setTabState] = useState('signin');
    const [success, setSuccess] = useState();
    useEffect(() => {
        let isMounted = true;
        return () => {
            if (isMounted) {
                isMounted = false;
            }
        }
    }, [success])

    const successChange = () => setSuccess(true)
    console.log(success)
    return (
        <div className='Authentication'>
            <div className='has-text-right'>
                <button className=' m-horizontal-n m-vertical button-menu' onClick={() => setTabState('signin')}>
                    <img src={bars} alt='bars' width={35} />
                </button>
            </div>
            <div className='has-text-centered p-container-xl'>
                <img src={logo} alt='logo' width={80} />
            </div>
            <div className='p-container'>
                {!success ?
                    <>
                        <div className='is-flex'>
                            <button className={`tabButton ${tabState === 'signin' ? "active" : ""}`} onClick={() => setTabState('signin')}>Ingreso</button>
                            <button className={`tabButton ${tabState === 'signup' ? "active" : ""}`} onClick={() => setTabState('signup')}>Registro</button>
                        </div>
                        <div className='container'>
                            {tabState === 'signin' ?
                                <SignIn /> : <SignUp setSuccess={() => successChange()} />
                            }
                        </div>
                    </>
                    :

                    <div className='container-success is-flex is-align-items-center'>
                        SUCCESS
                        <img src={SuccessIcon} alt='success' className='success-icon m-vertical' />
                        <button className={`m-vertical btn-primary border-0 btn-login`} onClick={() => setSuccess(false)}>INGRESAR</button>
                    </div>
                }
            </div>
        </div>
    )
}
