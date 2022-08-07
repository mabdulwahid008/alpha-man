import React, { useState } from "react";
import context from './context'
import { productCategory } from "../data/productCategory"
import { product } from "../data/product"

const ContextState = (props)=>{

    const host = 'http://localhost:5000'

     // --------------- PRODUCTS ----------------

    // Get All Products
    const [products, setProducts] = useState([ ])
    const fetchAllProducts = async()=>{
        // const response = await fetch(`${host}/product`,{
        //     method : 'GET'
        // })
        // const json = await response.json()
        // setProducts(json)
        setProducts(product)
       
    }

    // Get Products By Price
    const fetchProductByPrice = async(price) =>{
        // const response = await fetch(`${host}/product/price/${price}`,{
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //      }
        // })
        // const json = await response.json()
        // setProducts(json)

        const filter = product.filter(p => {return p.p_regularprice <= price})
        setProducts(filter)

    }

    // Get Products By Category
    const fetchProductByCategory = async(c_name) =>{
        // const response = await fetch(`${host}/product/category/${c_name}`,{
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //      }
        // })
        // const json = await response.json()
        // setProducts(json)

        const filter = product.filter(p => {return p.c_name === c_name})
        setProducts(filter)
    }

    // Add New Product
    const addProduct = async(product)=>{
        const response = await fetch(`${host}/product`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
             },
           body: JSON.stringify(product)
        })
        const json = await response.json();
        return json;
    }



    // Login
    const login = async(a_username, a_password)=>{
        const response = await fetch(`${host}/account/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
             },
            body: JSON.stringify({a_username, a_password}) 
        });
        const json = await response.json();
        return json;
    }


    // --------------- CATEGORY ----------------

    const [categories, setCatogries] = useState([])

    // Get Categories
    const getCatgories = async()=>{
        // const response = await fetch(`${host}/category`,{
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //      },
        // })
        // const json = await response.json();
        // setCatogries(json);
        setCatogries(productCategory)
    }

    // Add Category
    const addCatefory = async(category)=>{
        // const response = await fetch(`${host}/category`,{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //      },
        //      body: JSON.stringify(category)
        // })
        // const json = await response.json();
        // return json;
    }

    // -------------- SelectedProduct --------------
    const [selectedProduct, setselectedProduct] = useState(null)


    // ----------------- CART ------------------
    const initiallyCart = [];
    const [cart, setCart] = useState(initiallyCart)
    const [notificationMsg, setNotificationMsg] = useState("")

    // Add to cart 
    const addToCart = (product, quantity)=>{
        const inTheCart = cart.some((cart)=> cart.p_id === product.p_id)

        if(!inTheCart){
            product.p_quantity = quantity;
            setCart(cart.concat(product));
            countBill();
            setNotificationMsg("Product added in the cart")
            return;
        }

        const update = cart.find((cart)=> cart.p_id === product.p_id)
        if(inTheCart && quantity === update.p_quantity){
            countBill();
            setNotificationMsg("Product is already in the cart")
            return;
        }
        update.p_quantity = quantity;
        countBill(); 
        setNotificationMsg("Product Updated")

    }

    // count totals
    const [totalBill, setTotalBill] = useState(0)
    const [grandTotals, setGrandTotals] = useState(50)
    const [tax, setTax] = useState(0)
    const countBill = ()=>{
        let totalPrice = 0;
        let Tax = 0;
        for (let index = 0; index < cart.length; index++) {
            totalPrice += cart[index].p_quantity * cart[index].p_regularprice;

        }
        setTotalBill(totalPrice)

        Tax+= (totalPrice/100) * 5
        setTax(Tax);
    
    }

    // Remove Product from cart
    const removeProduct = (product) => {
        const newCart = cart.filter((cart)=> {return cart !== product});
        setCart(newCart)
        countBill()
        setNotificationMsg("Product Removed")
        if(cart.length === 0)
        setGrandTotals(0)
    } 

    // coupon get discount
    const getDiscount = ()=>{
        countBill()
        let x = totalBill - ((totalBill/100) * 5)
        setTotalBill(x)
        setGrandTotals(50 + tax + x);
    }

    const grandTotal = ()=>{
        setGrandTotals(50 + tax + totalBill);
    }

    // Set Category 
    const [category, setCategory] = useState("")

    // cart updated 
    const [cartUpdated, setCartUpdated] = useState(false)

    // page title for footer redirects
    const [pageTitle, setPageTitle] = useState("")
    return(
        <context.Provider value={{fetchAllProducts, products, login, getCatgories, categories, addProduct, fetchProductByPrice, fetchProductByCategory, selectedProduct, setselectedProduct, addCatefory, addToCart, notificationMsg, cart, removeProduct, totalBill, countBill, tax, setNotificationMsg, category, setCategory, getDiscount, grandTotals, setGrandTotals, grandTotal, setCart, cartUpdated, setCartUpdated, pageTitle, setPageTitle }}>
            {props.children}
        </context.Provider>
    )
}

export default ContextState;