import React, { useContext, useEffect, useState } from 'react'
import context from '../../context/context'
import './Category.css'

function Category() {
    const contextApi = useContext(context);
    const { addCatefory, getCatgories, categories } = contextApi

    useEffect(() => {
        getCatgories()
    }, [])
    
    const [category, setCategory] = useState({c_name: "", c_img : ""})
    const onChange = (e)=>{
        setCategory({...category, [e.target.name] : e.target.value });
    }
    const [message, setMessage] = useState("")
    const onSubmit = async(e)=>{
        e.preventDefault()

        if(category.c_img === "") category.c_name = null;

        const response = await addCatefory(category)
        setMessage(response.message)
        document.getElementById('message').style.display = "flex"
        setTimeout(()=>{
            document.getElementById('message').style.display = "none"
        }, 4000)
    }
  return (
    <div className='admincategory'>
        <div className="addCategory">
            <h2>Add New Category</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <lable>Category Name</lable>
                    <input type="text" name="c_name" required onChange={onChange}/>
                </div>
                <div>
                    <lable>Category Image</lable>
                    <input type="text" name='c_img' placeholder='Enter the image address' onChange={onChange}/>
                </div>
                <div> 
                    <button className='btn add-category-btn'>Add Category</button>
                </div>
            </form>
            <div id='message'>
                <p>{message}</p>
                <i className='fa-solid fa-circle-xmark' onClick={()=>{document.getElementById('message').style.display = "none"}}></i>
            </div>
        </div>

        <div className='addCategory'>
            <h2>All Categories</h2>
            <div className='allCategories'>
                {categories.map((category)=>{
                    return <div>
                        <div>
                            <img src={category.c_img} alt={category.c_name} />
                            <h3>{category.c_name}</h3>
                        </div>
                        <div>
                            <p>Update</p>
                            <p>Delete</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Category