import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SalesAdminAdd() {
 const navigate=useNavigate()
  const[userData, setuserData] = useState({
    name: "",
    password: "",
    email: "",
    phone_number: "",
    username: "",
  })
  console.log(userData);

  const handleOnchange = (x) => {
    const { name, value } = x.target
    setuserData({
      ...userData,
      [name]: value
    })
  };

  const handleSubmit = async () => {
    try{
      let product_admin = await axios.post('http://127.0.0.1:8000/superadmin/create/salesadmin/', userData, {method: {"Content-Type": "application/json"}});
      console.log(product_admin);
      alert('Form Submitted Successfully');
      navigate('/salesadmin')
    }catch(err) {
      console.error(err);
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
                  <a href="/salesadmin" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-small align-middle">Back</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Sales Admin Add</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

               {/* <!-- Top Buttons Start --> */}
             <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <button type="button" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleSubmit}>
                  Submit
                </button>
                <div className="dropdown d-inline-block d-lg-none">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-icon btn-icon-only ms-1"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i data-acorn-icon="sort"></i>
                  </button>
                </div>
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          <div className="row">
            <div className="col-xl-8">
              {/* <!-- Product Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Sales Admin Add</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                    <div className="mb-3">
                        <label className="form-label">First name</label>
                        <input type="text" name='first_name' className="form-control" value={userData.name} onChange={(e)=>setuserData({...userData,name:e.target.value})} />
                      </div>
                      {/* <div className="mb-3">
                        <label className="form-label">Last name</label>
                        <input type="text" name='last_name' className="form-control"  onChange={handleOnchange} />
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Gender</label>
                        <select className="form-select select-single-no-search">
                          <option label="&nbsp;"></option>
                          <option value="Breadstick">Male</option>
                          <option value="Biscotti">Female</option>
                          <option value="Fougasse">Others</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Add ress</label>
                        <textarea className="form-control html-editor-bubble html-editor sh-13" id="quillEditorBubble" style={{overflowY: 'scroll',padding:'10px 10px' }}>
                          Kannur, Kerala, 670014, India
                        </textarea>
                      </div> */}
                      <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="tel" name='phone_number' className="form-control"  value={userData.phone_number} onChange={handleOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name='email' className="form-control" value={userData.email} onChange={handleOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">User name</label>
                        <input type="text" name='username' className="form-control" value={userData.username} onChange={handleOnchange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" name='password' className="form-control" value={userData.password} onChange={handleOnchange} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Product Info End --> */}
            </div>

            <div className="col-xl-4 mb-n5">
{/*                
              <div className="mb-5">
                <h2 className="small-title">Image</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-1 border-0 p-0" id="dropzoneProductImage"></div>
                    </form>
                  </div>
                </div>
              </div> */}
                         </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SalesAdminAdd
