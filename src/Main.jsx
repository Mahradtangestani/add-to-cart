import React from 'react';
import { PRODUCTS } from './product';
const Main = () => {
    return (
        <div className='flex flex-wrap justify-center items-center gap-20 p-10'>
            {PRODUCTS.map(product => (
                <div key={product.id} className='flex flex-col items-center'>
                    <img className='w-40 h-40' src={product.productImage} alt={product.productName} />
                    <p>{product.productName}</p>
                    <p>${product.price}</p>
                    <button className='border-2 border-gray-400 drop-shadow-2xl p-2 hover:bg-green-300 rounded-lg'>Add To Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Main;
