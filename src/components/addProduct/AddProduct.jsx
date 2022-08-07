import React, { useContext, useEffect, useState } from 'react'
import context from '../../context/context';
import './AddProduct.css'
import img from '../../images/productDefault.jpg'

function AddProduct() {
    const cotextApi = useContext(context)
    const { getCatgories, categories, addProduct } = cotextApi;

    useEffect(() => {
        getCatgories();
    }, [])

    const [product, setProduct] = useState({p_title: "", p_regularPrice: "", p_salePrice: null, p_sDesc: "", p_lDesc: null, c_id: "", p_img1: null, p_img2: null, p_img3: null, p_img4: null});
    const onChange = (e)=>{
        setProduct({...product, [e.target.name] : e.target.value})
    }


    const [errorMsg, seErrorMsg] = useState("")
    const onSubmit = async(e)=>{
        e.preventDefault();
        if(product.p_title==="" || product.p_regularPrice==="" || product.p_sDesc==="" || product.c_id === ""){
            seErrorMsg("Please fill all the reuired fields")
            document.getElementById('product-Error-msg').style.display = "flex";
        }
        else{
            if(product.p_salePrice === "") product.p_salePrice = null;
            if(product.p_lDesc === "") product.p_lDesc = null;
            if(product.p_img1 === "") product.p_img1 = null;
            if(product.p_img2 === "") product.p_img2 = null;
            if(product.p_img3 === "") product.p_img3 = null;
            if(product.p_img4 === "") product.p_img4 = null;

            const response = await addProduct(product);
            document.getElementById('product-Error-msg').style.display = "flex";
            seErrorMsg(response.message);
        }
        setTimeout(()=>{
            document.getElementById('product-Error-msg').style.display = "none";
        }, 5000)
    }


  return (
    <div className="addProduct-section">
        <h2>Add New Product</h2>
        <form className='addProduct' onSubmit={onSubmit}>
            <div className='left-addProduct'>
                <div>
                    <label>Product Title *</label>
                    <input type='text' name="p_title" onChange={onChange}/>
                </div>
                <div className='price-field'>
                    <div>
                    <label>Regular Price *</label>
                    <input type='num' name='p_regularPrice' onChange={onChange}/>
                    </div>
                    <div>
                    <label>Sale Price</label>
                    <input type='text' name='p_salePrice' onChange={onChange}/>
                    </div>
                </div>  

                <div>
                    <label>Short Description *</label>
                    <textarea type='text' rows='6' name='p_sDesc' onChange={onChange}/>
                </div>
                <div>
                    <label>Long Description</label>
                    <textarea type='text' rows='10' name='p_lDesc' onChange={onChange}/>
                </div>
                <button type='submit' className='btn'>Add New Product</button>
            </div>


            <div className='right-addProduct'>
                <div>
                    <label>Category *</label>
                    {categories.map((category)=>{
                        return <div key={category.c_id}>
                            <input type='radio' name='c_id' value={category.c_id} onChange={onChange}/>
                            <p>{category.c_name}</p>
                         </div>
                    })}
                </div>

                <div>
                    <div>
                        <label>Feature Image</label>
                        <input type="text" name='p_img1' onChange={onChange} placeholder="Paste the Image URL"/>
                    </div>
                    <div>
                        <label>Image 2</label>
                        <input type="text" name='p_img2' onChange={onChange} placeholder="Paste the Image URL"/>
                    </div>
                    <div>
                        <label>Image 3</label>
                        <input type="text" name='p_img3' onChange={onChange} placeholder="Paste the Image URL"/>
                    </div>
                    <div>
                        <label>Image 4</label>
                        <input type="text" name='p_img4' onChange={onChange} placeholder="Paste the Image URL"/>
                    </div>
                </div>
            </div>
        </form>

        <div className='error-msg'id='product-Error-msg'>
            <p>{errorMsg}</p>
            <i className="fa-solid fa-circle-xmark" onClick={()=>{document.getElementById('product-Error-msg').style.display = 'none'}}></i>
        </div>
    </div>
  )
}

export default AddProduct