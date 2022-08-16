import { createSlice } from '@reduxjs/toolkit';
import getConfig from "../../../getConfig"
import axios from "axios"

export const cartProducts = createSlice({
    name: 'cartProducts',
    initialState: {},
    reducers: {
        setProducts: (state, action) => {
            const product = action.payload
            return product;
        }
    }
})

export const getCartProducts = () => (dispatch) => {
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`,getConfig())
        .then((res) => dispatch(setProducts(res.data.data.cart)))
}

export const buyCar = () => (dispatch) => {
    return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`,{}, getConfig())
        .then(() => dispatch(setProducts([])))
}

export const deleteProduct = (id) => (dispatch) => {
    return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`, getConfig())
        .then(() => dispatch(setProducts()))
}

export const { setProducts } = cartProducts.actions;

export default cartProducts.reducer;
