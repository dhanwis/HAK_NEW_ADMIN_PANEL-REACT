import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Baseurl';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


function PAUpdateProduct() {





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

  const handleInputChange = (id, field, value) => {
    const updatedAttributes = attributes.map(attribute => {
      if (attribute.id === id) {
        return { ...attribute, [field]: value };
      }
      return attribute;
    });
    setAttributes(updatedAttributes);
  };

  const handleFileDrop = (e, variantIndex, boxIndex) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const newVariantImages = [...variantImages];
      newVariantImages[variantIndex][boxIndex] = {
        url: reader.result,
        name: file.name,
        file: file
      };
      setVariantImages(newVariantImages);
    };
    reader.readAsDataURL(file);
  };  

  const handleFileInputChange = (e, variantIndex, boxIndex) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const newVariantImages = [...variantImages];
      newVariantImages[variantIndex][boxIndex] = {
        url: reader.result,
        name: file.name,
        file: file
      };
      setVariantImages(newVariantImages);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (variantIndex, boxIndex) => {
    const newVariantImages = [...variantImages];
    newVariantImages[variantIndex][boxIndex] = null;
    setVariantImages(newVariantImages);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const openFileInput = (variantIndex, boxIndex) => {
    document.getElementById(`file-input-${variantIndex}-${boxIndex}`).click();
  };



   // -----------------------Product-edit---------------------
   const [editProduct, setEditProduct] = useState({
    name:"",
    description:"",
   
    


  });
   console.log('hii',editProduct);


  const {id,anotherid}=useParams()
  console.log("id",anotherid);
 

  useEffect(() => {
    handleEditCategory(id);
  }, [id]);


  const handleEditCategory = (productid) => {
    axios.get(`${BASE_URL}/productadmin/products/${productid}/`)
      .then(response => {
        console.log(response);    
        setEditProduct({
          id:response.data.id,
          name: response.data.name,
          description: response.data.description
        });
      })
      .catch(error => {
        console.error('Error fetching category:', error);
      });
  };
  

  

  const handleEditSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('id', editProduct.id);
      formData.append('name', editProduct.name);
      formData.append('description', editProduct.description);
      
      let category = await axios.patch(`${BASE_URL}/productadmin/products/${editProduct.id}/`, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      Swal.fire({
        icon:'success',
        title: 'Updated Successfully',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Failed!!!')
    }
  };

//  edit variant
const [EditVariant,setEditVariant]=useState({


    actual_price:"",
    discount_percentage:"",
    stock:"",

})

const handleEditVariant=(colorid)=>{

   axios.get(`${BASE_URL}productadmin/product-variants/28/`)
   .then(response=>{
    console.log("jii",response);
     setEditVariant({
      name:response.data.name,
      image:response.data.image
     })

   })
   .catch(error=>{
    console.log('Error Fetching Data:',error);
   })


}
useEffect(()=>{
handleEditVariant(anotherid)
},[anotherid])






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
                  <h1 className="mb-0 pb-0 display-4" id="title">Update Product</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
             <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
               
               
              </div>
             
            </div>
          </div>

        
        
          <div className="row">
          <div className="col-xl-8">
            {/* <!-- Attributes Start --> */}
            <div className="mb-5">
                <div className='row mt-4' >
                <h2 className=" col-4 small-title mt-2">Product Variant</h2>
              
                  </div>
                <div className="card mb-5 mt-3">
                  <div className="card-body">
                      <div className="mb-3 pb-3">
                        <div className="row gx-2">
                          <div className="col ">
                          
                          </div>
                       
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Actual Price</label>
                              <input type="text" className="form-control"  />
                            </div>
                          </div>
                         
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">Discount Percentage</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="">
                            <div className="mb-3">
                              <label className="form-label">stock</label>
                              <input type="text" className="form-control"  />
                            </div>
                          </div>
                          <a href="#" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleEditSubmit}>
                  <span>Update</span>
                </a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              {/* <!-- Attributes End --> */}
          </div>
          
          
        </div>
        
        </div>
     
      </main>
    </div>
  )
}

export default PAUpdateProduct
