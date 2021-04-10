import React from 'react'
import photo from '../assets/images/image.png';

const Product = (product) => {
    return (
        <div className='is-flex is-flex-column is-align-items-center m-horizontal-n'>
            <img src={photo} className='photo' alt='photo' width={150} />
            <div>{product.product.title}</div>
            <div>{product.product.price}</div>
        </div>
    )
}

export default Product
