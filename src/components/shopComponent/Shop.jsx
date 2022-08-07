import React, { useContext, useEffect, useState } from 'react'
import './Shop.css'
import context from '../../context/context'
import img from '../../images/img2.png'
import { Link } from 'react-router-dom';

function Shop(props) {
  const contextApi = useContext(context);
  const { fetchAllProducts, products,  getCatgories, categories, category, fetchProductByPrice, fetchProductByCategory, setselectedProduct, addToCart } = contextApi;

  useEffect(() => {
    getCatgories();
    if(category === "")
        fetchAllProducts()
    else
        fetchProductByCategory(category)
  }, [])

  const [price, setPrice] = useState(700)
  const handlePrice = ()=>{
    let value = document.getElementById('price').value;
    setPrice(value);
    fetchProductByPrice(price)
  }
  
  if(products.length === 0){
    return (
      <div className="shop">
         {/* For Mobile */}
      <div className="category-aside">
          <input id='category-toggle' type="checkbox" />
          <label className='arrow' htmlFor='category-toggle'>
              <i className="fa-solid fa-arrow-left-long"></i>
          </label>

          <div className="right-shop"><br/>
            <h3>Budget :  <span>{price}$</span></h3>
            <input type="range" min="1" max="700" value={price} id="price" onChange={handlePrice} onMouseMove={()=>{fetchProductByPrice(price)}}/>
            <h3>Categories</h3>
            <div className='mobile-category'>
            	{categories.map((category)=>{
                return <div key={category.c_id} onClick={()=>{fetchProductByCategory(category.c_name)}}>
                    <img src={category.c_img !== null ? category.c_img : img} alt={category.c_name} />
                    <p>{category.c_name}</p>
                </div>
              })}
            </div>
          </div>
      </div>
      {/* ------------ */}
      <div className="shop-left">
        <h2>SHOP New <span>Wardrobe</span></h2>
        <div id='no-product'>
          No Product for this input
        </div>
        
      </div>

      <div className="shop-right">
            <h3>Budget :  <span>{price}$</span></h3>
            <input type="range" min="1" max="700" value={price} id="price" onChange={handlePrice} onMouseMove={()=>{fetchProductByPrice(price)}}/>
        <h3>Categories</h3>
        <div className='category'>
            	{categories.map((category)=>{
                return <div key={category.c_id} onClick={()=>{fetchProductByCategory(category.c_name)}}>
                    <img src={category.c_img !== null ? category.c_img : img} alt={category.c_name} />
                    <p>{category.c_name}</p>
                </div>
              })}
        </div>
      </div>
    </div>
    )
  }
 
  else
  return (
    <div className="shop">
       {/* For Mobile -- category aside-- */}
       <div className="category-aside">
          <input id='category-toggle' type="checkbox" />
          <label className='arrow' htmlFor='category-toggle'>
              <i className="fa-solid fa-arrow-left-long"></i>
          </label>

          <div className="right-shop"><br/>
            <h3>Budget :  <span>{price}$</span></h3>
            <input type="range" min="1" max="700" value={price} id="price" onChange={handlePrice} onMouseMove={()=>{fetchProductByPrice(price)}}/>
            <h3>Categories</h3>
            <div className='mobile-category'>
            	{categories.map((category)=>{
                return <div key={category.c_id} onClick={()=>{fetchProductByCategory(category.c_name)}}>
                    <img src={category.c_img !== null ? category.c_img : img} alt={category.c_name} />
                    <p>{category.c_name}</p>
                </div>
              })}
            </div>
          </div> 
      </div>
      {/* ------------ */}
      <div className="shop-left">
        <h2>SHOP New <span>Wardrobe</span></h2>

        <div className='products' id='product'>
            {products.map((product)=>{
              return <div key={product.p_id}>
                  <Link to='/product' onClick={()=>{product.p_quantity=1;setselectedProduct(product)}}>
                  <img src={product.p_img1 !== null ? product.p_img1 : img} alt={product.p_title} />
                  <p className='p-title'>{product.p_title.length>34 ? product.p_title.slice(0,33).concat('...') : product.p_title}</p>
                  </Link>
                  <p className='p-price'>{product.p_regularprice} $</p>
                  <button className='btn addToCart-btn' onClick={()=>{addToCart(product, 1); props.setNotification(true)}}>Add to Cart</button>
              </div>
            })}
        </div>
      </div>

      <div className="shop-right">
            <h3>Budget :  <span>{price}$</span></h3>
            <input type="range" min="1" max="700" value={price} id="price" onChange={handlePrice} onMouseMove={()=>{}}/>
        <h3>Categories</h3>
        <div className='category'>
            	{categories.map((category)=>{
                return <div key={category.c_id} onClick={()=>{fetchProductByCategory(category.c_name)}}>
                    <img src={category.c_img !== null ? category.c_img : img} alt={category.c_name} />
                    <p>{category.c_name}</p>
                </div>
              })}
        </div>
      </div>

     
    </div>
  )
}

export default Shop