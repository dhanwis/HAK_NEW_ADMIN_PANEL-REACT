import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../Baseurl';
import AddColor from './AddColor';
import Form from 'react-bootstrap/Form';
import logo from "./image.png";
import './ImageUpload.css';

 
function PAAddProduct() {

  
//  to add color image
  const [colorData, setcolorData] = useState({
    name: "",
    image: ""
  })

  // console.log('now',colorData);


const handleAddColor = async () => {

const {name,image}=colorData
if(!name){
  alert("Please fill the form completely")

}
else{


  try {
    let formData = new FormData();
    for (let key in colorData) {
      formData.append(key, colorData[key]);
  
    }
    if (image) {
      console.log("rrr",image);
      formData.append('image', image.file); 
    }
    let category = await axios.post(`${BASE_URL}/productadmin/color-images/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    // console.log("Response:", category);
     alert('Color added')
    window.location.reload();
  } catch (err) {
    console.error(err);
    alert('Failed!!!')
  }
}
};


  // state to add product a data
  const [ProductData, setProductData] = useState({
    category: "",
    name: "",
    description: ""
  });

// console.log(ProductData);



  const [CategoryData, setCategoryData] = useState([])


  // to get category data
  useEffect(() => {
    axios.get(`${BASE_URL}/productadmin/categories/`)
      .then(response => {
        setCategoryData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setProductData((prevData) => ({
      ...prevData,
      category: selectedCategory,
     
    }));
    

  
  };

  

  // to add product
 const handleSubmit = async () => {

const {category,name,description}=ProductData

  if(!category || !name || !description){
    alert("Please fill the form completely")

  }
  else{

    try {
      let formData = new FormData();
      for (let key in ProductData) {
        formData.append(key, ProductData[key]);
      }

      let Response = await axios.post(`${BASE_URL}/productadmin/products/`, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("Response:", Response);
      alert('Form Submitted Successfully');
      setProductData({
        category: "",
        name: "",
        description: ""
      })

    } catch (err) {
      console.error(err);
      alert('Failed!!!')
    }
  }
  };




  const [attributes, setAttributes] = useState([
    {
      id: 1,
      size: "",
      price: "",
      actualPrice: "",
      discountPrice: "",
      stock: "",
      sku: "",
      gallery: ""
    }
  ]);

  const [variantImages, setVariantImages] = useState([
    [null, null, null, null]  // Initial state for images of each variant
  ]);

  const addAttribute = () => {
    const newAttribute = {
      id: attributes.length + 1,
      size: "",
      price: "",
      actualPrice: "",
      discountPrice: "",
      stock: "",
      sku: "",
      gallery: ""
    };
    setAttributes([...attributes, newAttribute]);

    // Add a new array for images for the new variant
    setVariantImages([...variantImages, [null, null, null, null]]);
  };

  const deleteAttribute = (id) => {
    setAttributes(attributes.filter(attribute => attribute.id !== id));
    setVariantImages(variantImages.filter((_, index) => index !== (id - 1))); // Remove images for deleted variant
  };

 


  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (colorData.image) {
      setPreview(URL.createObjectURL(colorData.image));
    } else {
      setPreview("");
    }
  }, [colorData.image]);



const [AddVariant,setAddVariant]=useState({
  product_status:"",
  product:"",
  size:"",
  color:"",
  actual_price:"",
  discount_percentage:"",
  discount_price:"",
  stock:"",
  is_featured:false

})
console.log(AddVariant);


const handleAddVariant=async(e)=>{
  e.preventDefault();
  const {product_status, product,size,color,actual_price,discount_percentage,discount_price,stock,is_featured}=AddVariant

if(!product_status || !product || !size || !color || !actual_price || !stock){

alert("Fill the form Completely")
}
else{


  try{
    let formdata=new FormData()
    formdata.append("product_status",product_status)
    formdata.append("product",product)
    formdata.append("size",size)
    formdata.append("color",color)
    formdata.append("actual_price",actual_price)
    formdata.append("discount_percentage",discount_percentage)
    formdata.append("discount_price",discount_price)
    formdata.append("stock",stock)
    formdata.append("is_featured",is_featured)

    const reqheaders= {
      "Content-Type":"application/json",
    
    }
    const result=await axios.post(`${BASE_URL}/productadmin/product-variants/`,formdata,reqheaders)
    console.log(result);
    alert("Variant added Successfully")
  window.location.reload()

  }
  catch(err){
   alert(err.result.data)

  }
}

}


const handleVariantProductChange = (event) => {
  const selectedCategory = event.target.value;
  setAddVariant((prevData) => ({
    ...prevData,
    product: selectedCategory,
   
  }));
  


};

const handleSizeCategorychange=(e)=>{
  setAddVariant({...AddVariant,size:e.target.value})
}

const handleColorChange=(e)=>{
  setAddVariant({...AddVariant,color:e.target.value})
}

const handleStatusChange=(e)=>{
  setAddVariant({...AddVariant,product_status:e.target.value})
}

const handleCheckboxChange = (event) => {
  setAddVariant({
    ...AddVariant,
    is_featured: event.target.checked 
  });
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


// get size
const [getSize,setgetSize]=useState([])

useEffect(()=>{
axios.get(`${BASE_URL}/productadmin/size/`)
.then(response=>{
  console.log("size data",response);
  setgetSize(response.data)

})
.catch(error=>{

  console.error('Error fetching data:',error);
})

},[])


// get colors
const [getColor,setgetColor]=useState([])

useEffect(()=>{
axios.get(`${BASE_URL}/productadmin/colors/`)
.then(response=>{
  console.log("color data",response);
  setgetColor(response.data)

})

},[])

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setcolorData({ ...colorData, image: file });
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  }
};
 

  return (
    <div>
      <main>
        <div className="container">
          {/* <!-- Title and Top Buttons Start --> */}
          <div className="page-title-container">
            <div className="row g-0">
              {/* <!-- Title Start --> */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-40">
                  <a href="/productadmin-products" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Add New Product</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              <div className="w-100 d-md-none"></div>
              {/* <div className="col-12 col-sm-6 d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <a href="#" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleSubmit}>
                  <span>Submit</span>
                </a>
             
              </div> */}
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row">
            <div className="col-xl-8">
              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3 w-100">
                        <label className="form-label">Product Category</label>
                        <select
                          className="form-select"
                          value={ProductData.category}
                          onChange={handleCategoryChange}
                        >
                          <option value="">Category</option>


                          {CategoryData && CategoryData.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control" value={ProductData.name} onChange={(e) => setProductData({ ...ProductData, name: e.target.value })} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product Description</label>
                        <textarea className="form-control html-editor-bubble html-editor sh-13" id="quillEditorBubble" style={{ overflowY: 'scroll', padding: '10px 10px' }} value={ProductData.description} onChange={(e) => setProductData({ ...ProductData, description: e.target.value })}>
                        </textarea>
                       
                      </div>
                      <a href="#" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleSubmit}>
                  <span>Submit</span>
                </a>
                    </form>
                  </div>
                </div>
              </div>
             
                       </div>
           
             
            <div className="col-xl-4 mb-n5"></div>
            
          </div>
          

          <h1 className=" pb-0 display-4 mb-3" id="title">Add Color Image</h1>
          <div className="row">
            <div className="col-xl-8">
              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                {/* <h2 className="small-title">Description</h2> */}
                <div className="card">
                  <div className="card-body">
                    <form>
                   <center>
                   <div className="image-upload-container">
      <label htmlFor="imageUpload" className="upload-button">
        Choose File
        <input
          id="imageUpload"
          type="file"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </label>
      {preview && (
        <div className="image-preview-container">
          <img src={preview} alt="Selected" className="image-preview" />
        </div>
      )}
    </div>
              </center>
                      <div className="mb-3">

                     
                     <label className="form-label">Product Color Name</label>
                     <input type="text" className="form-control" value={colorData.name} onChange={(e) => setcolorData({ ...colorData, name: e.target.value })} />
                   </div>
                  
                    </form>
                    <a  href="#" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleAddColor}>
                  <span>Submit</span>
                </a>
                  </div>
                </div>
              </div>
            </div>

  {/* component to add color image */}
<AddColor/>

{/* Adding Variants */}
       <div className="col-xl-4 mb-n5"></div>
          </div>
          {attributes.map((attribute, index) => (
            <div className="row">
              <div className="col-xl-8">
                {/* <!-- Attributes Start --> */}
                <div className="mb-5">
                  <div className='row mt-4' >
                    <h2 className=" col-4 small-title mt-2">Product Variant {attribute.id}</h2>
                    <div className="col-8 ">
                      <button className="btn btn-icon btn-icon-only btn-outline-primary" style={{ marginLeft: "90%" }} type="button" onClick={() => deleteAttribute(attribute.id)}>
                        <i className='fa-solid fa-trash'></i>
                      </button>
                    </div>
                  </div>
                  <div className="card mb-5 mt-3">
                    <div className="card-body">
                      <div key={attribute.id} className="mb-3 pb-3">
                        <div className="row gx-2">
                          <div className="col ">
                          
                      <div className="mb-3 w-100">
                        <label className="form-label">Product</label>
                        <select
                          className="form-select"
                          value={AddVariant.product}
                          onChange={handleVariantProductChange}
                        >
                          <option value="">Select Product</option>


                          {getProducts && getProducts.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
                        </select>
                      </div>
                          </div>
                          <div className="">
                         
                      <div className="mb-3 w-100">
                        <label className="form-label">Size</label>
                        <select
                          className="form-select"
                          value={AddVariant.size}
                          onChange={handleSizeCategorychange}
                        >
                          <option value="">Select Size</option>


                          {getSize && getSize.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
                        </select>
                      </div>

                    
                      <div className="mb-3 w-100">
                        <label className="form-label">Color</label>
                        <select
                          className="form-select"
                          value={AddVariant.color}
                          onChange={handleColorChange}
                        >
                          <option value="">Select Color</option>


                          {getColor && getColor.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
                        </select>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Product Status</label>
                        <select
                          className="form-select"
                          value={AddVariant.product_status}
                          onChange={handleStatusChange}
                        >
                          <option value="">Select Status</option>


          <option key="Sale" value="Sale">Sale</option>
          <option key="Out of Stock" value="Out of Stock">Out of Stock</option>
       
                        </select>
                      </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Actual Price</label>
                              <input type="number" className="form-control" min="0"  value={AddVariant.actual_price} onChange={(e)=>setAddVariant({...AddVariant,actual_price:e.target.value})}/>
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Discount Percentage %</label>
                              <input type="number" className="form-control"  min="0"  value={AddVariant.discount_percentage} onChange={(e)=>setAddVariant({...AddVariant,discount_percentage:e.target.value})} />          
                            </div>   
                          </div>
                         
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Stock</label>
                              <input type="number" className="form-control" min="0"  value={AddVariant.stock} onChange={(e)=>setAddVariant({...AddVariant,stock:e.target.value})}  />
                            </div>
                          </div>

                          <Form className='mt-3'>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`is Featured?`}
            onChange={handleCheckboxChange} // Add onChange handler
            checked={AddVariant.is_featured} // Bind the checkbox state to the component state
          />
        </div>
      ))}
    </Form>

    <a  href="#" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto mt-3 " onClick={handleAddVariant}>
                  <span>Submit</span>
                </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>      
              </div>
            </div>
          ))}
        </div>
        <div className="mb-3 pb-3 text-center mt-3">
          <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={addAttribute}>
            <i data-acorn-icon="plus"></i>
            <span>Add Variant</span>
          </button>
        </div>
      </main>
    </div>
  )
}

export default PAAddProduct
