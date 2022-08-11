import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartToggle } from '../store/slices/cart.slice';
import { buyCar, getCartProducts } from '../store/slices/cartProducts.slice';


const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)
    useEffect(() => {
        dispatch(getCartProducts())
    },[])
    const products = useSelector((state) => state.cartProducts)
    const purchase = () => {
        dispatch(buyCar())
        navigate("/purchases")
    }


    
    return (
        <div className="cart">
            <div className="cart-container">
                <div className="cart-x">
                    <button onClick={() => dispatch(cartToggle())}><i className="fa-solid fa-xmark equis"></i></button>
                </div>
                <div className="cart-title">
                    <h2 className="mt-1rem">Carrito de compras</h2>
                </div>
                <div className="cart-list">
                    {
                        products.products?.map((product) => (
                            <div className="product-all" key={product.id}>
                                <div className="product-flex">
                                    <div className="product-brand">
                                    <p className="bold">{product.brand}</p>
                                    </div>
                                    <div className="product-icon-delete">
                                        <button><i className="delete fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                                <div className="product-title">
                                        <p className="product-title">{product.title}</p>
                                    </div>
                            </div>
                        ))
                    }
                </div>
                <div className='container-toBuy' >
                        <button onClick={purchase} className='toBuy'>
                            Comprar
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;