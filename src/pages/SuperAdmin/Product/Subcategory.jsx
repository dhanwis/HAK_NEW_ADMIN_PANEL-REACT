import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { BASE_URL } from '../../Baseurl';


function SubCategory() {

  // ---------------------Size-Add and display---------------------
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${BASE_URL}/productadmin/size/`)
        .then(response => {
          console.log(response.data)
            setCategories(response.data);
        })
        .catch(error => {
            console.error('Error fetching subcategories:', error);
        });
  }, []);

  const[NewsizeData, setNewsizeData] = useState({
    name: "",
    
  })
  const handleOnChange = (event) => {
    const { name, value } = event.target;
      setNewsizeData({
        ...NewsizeData,
        [name]: value
      });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      for (let key in NewsizeData) {
        formData.append(key, NewsizeData[key]);
      }
     
      let subcategory = await axios.post(`${BASE_URL}/productadmin/size/`, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("Response:", subcategory);
      // alert('Sub Category added')
      window.location.reload();

    } catch (err) {
      console.error(err);
      alert('Failed!!!')
    }
  };

  return (
    <div>
       <main>
        <div className="container">
          {/* Title and Top Buttons Start */}
          <div className="page-title-container">
            <div className="row g-0">
              {/* Title Start */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-30">
                  <a href="/admin-dashboard" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Size List</h1>
                </div>
              </div>
              {/* Title End */}

              {/* Top Buttons Start */}
              <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#subcategoryAddModal"
                >
                  <i data-acorn-icon="plus"></i>
                  <span>Add Size</span>    
                </button>
              </div>
              {/* Top Buttons End */}
            </div>
          </div>
          {/* Title and Top Buttons End */}

          {/* Controls Start */}
          <div className="row mb-2">
            {/* Search Start */}
            <div className="col-sm-12 col-md-5 col-lg-3 col-xxl-2 mb-1">
              <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
                <input className="form-control" placeholder="Search" />
                <span className="search-magnifier-icon">
                  <i data-acorn-icon="search"></i>
                </span>
                <span className="search-delete-icon d-none">
                  <i data-acorn-icon="close"></i>
                </span>
              </div>
            </div>

        {/* size display table */}
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Size</th>
        
        </tr>
      </thead>
      <tbody>
       {
        categories && categories.length>0? (
          categories.map((item)=>(
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
        </tr>
        ))
      )
      :null
      }
     
      </tbody>
    </Table>
          
          </div>
         
        </div>
      </main>
     
      {/* Sub Category Add Modal Start */}
      <div className="modal modal-right fade" id="subcategoryAddModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary">Add New Size</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
              
                <div className="mb-3">
                  <label className="form-label text-primary">Size</label>
                  <input type="text" className="form-control"  name="name" onChange={handleOnChange} value={NewsizeData.name}/>
                </div>
               
              </form>
            </div>
            <div className="modal-footer border-0">
              <a href="#" className="btn btn-icon btn-icon-end btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>
                <span>Add +</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Sub Category Add Modal End */}
    </div>
  )
}

export default SubCategory