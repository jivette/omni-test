import React, { useState } from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './Dashboard.css'
import photo from '../../assets/images/image.png';
import start from '../../assets/images/start.png';
import menu from '../../assets/images/menu.png';
import Product from '../../Components/Product';

const Dashboard = () => {
    const getProduct = {
        title: "Pantalones para Dama “The Sideswept Dhoti",
        allSize: ["S", "M", "L", "XL", "XXL"],
        allKit: ["HOME", "AWAY", "THIRD"],
        ranking: 4,
        description: 'In eu blandit metus. Phasellus vitae consequat augue. Cras auctor lacus a purus convallis...',
        relatedProduct: [
            {
                title: 'Product 1',
                price: '$130'
            },
            {
                title: 'Product 2',
                price: '$130'
            },
            {
                title: 'Product 3',
                price: '$130'
            }
        ]
    }

    const [size, setSize] = useState(getProduct.allSize[0]);
    const [kit, setKit] = useState(getProduct.allKit[0]);

    return (
        <div className='Dashboard has-text-centered'>
            <div className="is-flex is-justify-content-between p-container-sm is-align-items-center">
                <h1 className='is-size-4'>Logo</h1>
                <img src={menu} alt='menu' style={{ width: 50, height: 50 }} />
            </div>
            <img src={photo} className='Banner' alt='banner' />
            <div className='p-container'>
                <h1 className='is-size-4 has-text-centered'>{getProduct.title}</h1>
                <div className='is-flex is-justify-content-center m-vertical'>
                    <div className='is-flex start-container'>
                        <img src={start} alt='start' className='Start' />
                        <img src={start} alt='start' className='Start' />
                        <img src={start} alt='start' className='Start' />
                        <img src={start} alt='start' className='Start' />
                    </div>
                    <div className='is-size-6'>4 de 5</div>
                </div>
                <div className='is-size-4'>$139.99</div>

                <div className='is-flex is-justify-content-center is-align-items-center m-vertical'>
                    <div className='is-size-6'>Tamaño</div>
                    {getProduct.allSize.map((item, index) => {
                        return <button key={index} onClick={() => setSize(item)}
                            className={`border-radius-0 m-horizontal-min ${size === item ? "button is-dark" : "button is-light"}`}>{item}</button>
                    })}
                </div>

                <div className='is-flex is-justify-content-center is-align-items-center m-vertical'>
                    <div className='is-size-6'>Kit</div>
                    {getProduct.allKit.map((item, index) => {
                        return <button key={index} onClick={() => setKit(item)}
                            className={`border-radius-0 m-horizontal-min ${kit === item ? "button is-dark" : "button is-light"}`}>{item}</button>
                    })}
                </div>

                <button className="button is-dark is-full add-to-cart m-vertical">AÑADIR AL CARRITO</button>

                <div className='m-vertical-xl'>
                    <h1 className='is-size-6 has-text-left m-vertical'>Descripción</h1>
                    <p className="is-size-6 has-text-left m-vertical">{getProduct.description}</p>
                    <p className="is-size-6 has-text-left m-vertical is-font-weight">leer más</p>
                </div>
                <h1 className='is-size-4 has-text-left m-vertical'>También te podría gustar</h1>
                <div className='is-flex'>
                    {getProduct.relatedProduct.map(element => {
                        return <Product product={element} />
                    })}
                </div>
            </div>
            <div className="Footer is-flex is-align-items-center">© Copyright</div>
        </div>
    )
}

export default Dashboard;