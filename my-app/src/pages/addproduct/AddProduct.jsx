import React, { useContext } from 'react'
import { useForm} from 'react-hook-form'
import "./AddProduct.css"
import Navbar from '../../components/common/Navbar/Navbar'
import { AppContext } from '../../context/AppContext'
import { baseUrl } from '../../baseUrl'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/common/sidebar/Sidebar'

const AddProduct = () => {
    const {register, handleSubmit, setValue, formState: {errors}, getValues} = useForm()
    const {loading, setLoading, items} = useContext(AppContext)
    const navigate = useNavigate()
    

  async function  addProductHandler (){
        const currentValues = getValues()
        const productObj = {
            title: currentValues.title,
            price: currentValues.price,
            image: currentValues.image,
            description: currentValues.description,
            category: currentValues.category
        }
        try {
            setLoading(true)
            const response = await fetch(`${baseUrl}`,
                {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(productObj)
            })
            
            const newProduct = await response.json()
            console.log("new product ", newProduct)
            localStorage.setItem("newItem", JSON.stringify(newProduct))
            
            setLoading(false)
            navigate("/")
        } catch (error) {
            console.log("creating product error............", error)
        }
    }

  return (
    <>
      <Sidebar/>

    <Navbar/>
    <div class="form-container">
    <form onSubmit={handleSubmit(addProductHandler)}>
        <div class="form-group">
            <label htmlFor="title">Title</label>
            <input
            {...register("title", {required: true})}
            type="text" id="title" name="title"  />
        </div>
        
        <div class="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" 
             {...register("price", {required: true})}
            />
        </div>
        
        <div class="form-group">
            <label htmlFor="image">Image URL</label>
            <input type="url" id="image" name="image"
             {...register("image", {required: true})}
            />
        </div>
        
        <div class="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" 
             {...register("description")}
            ></textarea>
        </div>
        
        <div class="form-group">
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category"
             {...register("category", {required: true})}
            />
        </div>
        
        <button >Submit</button>
    </form>
</div>
</>
  )
}

export default AddProduct
