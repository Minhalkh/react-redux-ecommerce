import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, increment, decrement } from '../Store/cartSlice';

function Cart() {
    const cards = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleremove = (cardId) => {
        dispatch(remove(cardId));
    };

    const handleIncrement = (cardId) => {
        dispatch(increment(cardId));
    };

    const handleDecrement = (cardId) => {
        dispatch(decrement(cardId));
    };

    return (
        <div className='bg-gray-100 p-8'>
            {cards.length === 0 ? (
                <h2 className='text-center text-xl font-semibold'>No items in the cart</h2>
            ) : (
                cards.map((card) => (
                    <div key={card.id} className='flex items-center gap-4 border rounded p-4 mb-4 bg-white'>
                        <img src={card.img} alt="" className='w-[100px] h-[80px] object-cover' />
                        <div className='flex-1'>
                            <h1 className='text-lg font-semibold'>{card.title}</h1>
                            <p>${card.price}</p>
                            <div className='flex items-center'>
                                <button 
                                    onClick={() => handleDecrement(card.id)} 
                                    className='bg-gray-300 text-black px-2 py-1 rounded'>
                                    -
                                </button>
                                <span className='mx-2'>{card.quantity}</span>
                                <button 
                                    onClick={() => handleIncrement(card.id)} 
                                    className='bg-gray-300 text-black px-2 py-1 rounded'>
                                    +
                                </button>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleremove(card.id)} 
                            className='bg-red-500 text-white px-4 py-2 rounded'>
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;