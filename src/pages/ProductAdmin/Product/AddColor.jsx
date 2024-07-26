import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Baseurl';

function AddColor() {

    
// to assign color to product
 const [assigProduct,setassignProduct]=useState({
    product:"",
    image:"",
    name:"",
   })
  //  console.log(assigProduct);
  
  
    const handleColorSelect=async()=>{
  const {product,image,name}=assigProduct
  
  if(!product || !image || !name){
    alert('Please fill the form completely')
  }
  else{
      try{
        let formdata=new FormData()
        formdata.append("product",product)
        formdata.append("image",image)
        formdata.append("name",name)
  
        const reqheaders= {
          "Content-Type":"application/json",
        
        }
        const result=await axios.post(`${BASE_URL}/productadmin/colors/`,formdata,reqheaders)
        console.log(result);
  
        alert("Added successfully")
        window.location.reload()  
      }
      catch(err){
  console.error('request failed due to',err);
      }
  
    }
    }
  
  
  
  
  
   const handleProductCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setassignProduct((prevData) => ({
      ...prevData,
      product: selectedCategory,
     
    }));
    
  
  
  };
  
  const handleImageCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setassignProduct((prevData) => ({
      ...prevData,
      image: selectedCategory,
     
    }));
    
  
  
  };
  
  // to get product data
    const [getProducts,setgetProducts]=useState([])
  
    useEffect(()=>{
      axios.get(`${BASE_URL}/productadmin/products/`)
      .then(Res=>{
        
        setgetProducts(Res.data)
  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);   
  
  
  // to get product image
  const [productImage,setProductimage]=useState([])
  
  useEffect(()=>{
    axios.get(`${BASE_URL}/productadmin/color-images/`)
    .then(response=>{
      // console.log("this is response",response);
      setProductimage(response.data)
      
    })
    .catch(error=>{
  console.error('Error fetching data:', error);
    })
  
    },[])
  
  
  return (
    <div>

<div className="row">
              <h1>Adding Color To Product</h1>
            <div className="col-xl-8">
              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3 w-100">
                        <label className="form-label">Product</label>
                        <select
                          className="form-select"
                          value={assigProduct.product}
                          onChange={handleProductCategoryChange}
                        >
                          <option value="">Select Product</option>


                          {getProducts && getProducts.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
                        </select>
                      </div>

                      <div className="mb-3 w-100">
                        <label className="form-label">Image</label>
                        <select
                          className="form-select"
                          value={assigProduct.image}
                          onChange={handleImageCategoryChange}
                        >
                          <option value="">Select Image</option>


                          {productImage && productImage.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control" value={assigProduct.name} onChange={(e) => setassignProduct({ ...assigProduct, name: e.target.value })} />
                      </div>
                     
                      <a href="#" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleColorSelect}>
                  <span>Submit</span>
                </a>
                    </form>
                  </div>
                </div>
              </div>
            
              
            </div>
           
             
            <div className="col-xl-4 mb-n5"></div>
            
          </div>
           </div>
  )
}

export default AddColor