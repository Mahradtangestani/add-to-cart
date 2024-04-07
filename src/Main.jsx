import React, { useState } from 'react';
import { PRODUCTS } from './product';
const Main = () => {

    const [cartItem , setCartItem] = useState({1: 0 , 2: 0 , 3: 0 , 4: 0 , 5: 0 , 6: 0 , 7: 0 , 8: 0})

    const addToCart = (id)=>{

        setCartItem(cartItem => ({...cartItem , [id]: cartItem[id] + 1
        }))
    }

    const subFromCart = (id)=>{
        
        setCartItem(cartItem => ({...cartItem , [id]: cartItem[id] - 1
        }))
    }

    const removeFromCart = (id)=>{

        setCartItem(cartItem=> ({...cartItem , [id]: cartItem[id] = 0
        }))
    }
    
    const totalAmount = ()=>{
        let amount = 0;
        for (const key in cartItem){
            if(cartItem[key] > 0){
                let productInfo = PRODUCTS.find(product => product.id === Number(key))
                amount += Math.floor(cartItem[key] * productInfo.price)
            }
        }
        return amount
    }

    return (
        
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-20 p-10 sm:pr-96 pr-52'>
            {PRODUCTS.map(product => (
                <div key={product.id} className='flex flex-col items-center'>
                    <img className='w-40 h-40 object-contain' src={product.productImage} alt={product.productName} />
                    <p className='sm:text-base text-xs text-green-700'>{product.productName}</p>
                    <p className='sm:text-base text-xs font-bold'>${product.price}</p>
                    <button onClick={()=> addToCart(product.id)} className='sm:text-base text-xs border-2 border-gray-400 drop-shadow-2xl p-2 hover:bg-green-300 rounded-lg'>Add To Cart</button>
                </div>
            ))}

            <div className='fixed p-4 right-0 top-0 bg-blue-100 h-screen sm:w-80 w-36 overflow-y-scroll shadow-2xl '>
                <h1 className='text-center text-blue-400 font-bold text-xl'>
                    Your Cart
                </h1>
                <p className='text-center sm:text-3xl font-bold text-xs'>Total:${totalAmount()}</p>
                {PRODUCTS.map(product =>{
                    if(cartItem[product.id] > 0){
                       return <><div className='flex justify-between flex-wrap items-center mt-8'>
                            <div className='flex items-center'>
                                <img className='w-20 h-20 my-4' src={product.productImage} alt="" />
                                <p className='sm:text-2xl font-bold pl-2 text-xl'>x:{cartItem[product.id]}</p>
                            </div>
                            <div className='flex flex-col font-bold'>
                                <button onClick={()=> removeFromCart(product.id)} className='text-red-500 bg-red-200 rounded-xl p-2 hover:bg-red-500 hover:text-white'>Remove</button>
                                <button onClick={()=> addToCart(product.id)} className='text-green-500 text-2xl hover:text-green-700'>+</button>
                                <button onClick={()=> subFromCart(product.id)} className='text-red-500 text-2xl hover:text-red-700'>-</button>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 italic'>
                           <p className='text-center'>{product.productName}</p>
                           <p></p>
                           <p className='text-center'>${product.price}</p>
                        </div>
                        </> 
                    }
                })}
            </div>

        </div>

    );
}

export default Main;
