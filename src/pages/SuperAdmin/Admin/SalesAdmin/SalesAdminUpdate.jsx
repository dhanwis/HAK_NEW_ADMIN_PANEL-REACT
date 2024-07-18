import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SalesAdminUpdate() {

  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone_number: "",
    username: "",
    // image: ""
  });

  const { id } = useParams();
   const [editImage, setEditImage] = useState(null);

  useEffect(() => {
    handleEditData(id);
  }, [id]);

  const handleEditOnchange = (x) => {
    const { name, value } = x.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  const handleEditData = (userId) => {
    axios.get(`http://localhost:8000/superadmin/sales-admin-profile/${userId}`)
      .then(response => {
        setEditData({
          id: response.data.id,
          name: response.data.name,
         
          email: response.data.email,
          phone_number: response.data.phone_number,
          username: response.data.username,
          // image: response.data.image,
        });
        // setEditImage({
        //   url: response.data.image ? `http://localhost:8000${response.data.image}` : null,
        //   file: null
        // });
      })
      .catch(error => {
        console.error('Error fetching product admin:', error);
      });
  };

  const handleEditSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('id', editData.id);
      formData.append('name', editData.name);
      formData.append('email', editData.email);
      formData.append('phone_number', editData.phone_number);
      formData.append('username', editData.username);
      // if (editImage && editImage.file) {
      //   formData.append('image', editImage.file); // Append file directly
      // }
      let product_admin = await axios.patch(`http://localhost:8000/superadmin/sales-admin-profile/${id}`, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("Response:", product_admin);
      alert('Form Submitted Successfully');
    } catch (err) {
      console.error(err);
      alert('Failed!!!')
    }
  };

  // const handleEditFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       setEditImage({
  //         file: file, // Store the file object itself
  //         url: e.target.result,
  //         name: file.name,
  //         size: file.size
  //       });
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setEditImage(null);
  //   }
  // };

  const handleEditDelete = () => {
    setEditImage(null);
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
                  <h1 className="mb-0 pb-0 display-4" id="title">Sales Admin Update</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              <div className="w-100 d-md-none"></div>
              <div className="col-12 col-sm-6 col-md-auto d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
                <a href="#" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto" onClick={handleEditSubmit}>
                  <span>Update</span>
                </a>
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
              {/* <!-- Sales Info Start --> */}
              <div className="mb-5">
                <h2 className="small-title">Sales admin update</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"  value={editData.name} onChange={(e)=>setEditData({...editData,name:e.target.value})} />
                      </div>
                     
                      <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="number" className="form-control"   value={editData.phone_number} onChange={(e)=>setEditData({...editData,phone_number:e.target.value})}/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control"   value={editData.email} onChange={(e)=>setEditData({...editData,email:e.target.value})}/>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="email" className="form-control"    value={editData.username} onChange={(e)=>setEditData({...editData,username:e.target.value})}/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Product Info End --> */}
            </div>

            <div className="col-xl-4 mb-n5">
                {/* <!-- Image Start --> */}
              {/* <div className="mb-5">
                <h2 className="small-title">Image</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-1 border-0 p-0" id="dropzoneProductImage"></div>
                    </form>
                  </div>
                </div>
              </div> */}
              {/* <!-- Image End --> */}
              {/* <!-- History Start --> */}
              <div className="mb-5">
                <h2 className="small-title">History</h2>
                <div className="card">
                  <div className="card-body mb-n3">
                    <div className="mb-3">
                      <div className="text-small text-muted">STATUS</div>
                      <div>Published</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">CREATED BY</div>
                      <div>Lisa Jackson</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">CREATE DATE</div>
                      <div>12.05.2021 - 13:42</div>
                    </div>
                    <div className="mb-3">
                      <div className="text-small text-muted">EMAIL</div>
                      <div>SuperAdmin@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- History End --> */}

              {/* <!-- Gallery Start --> */}
              {/* <div className="mb-5">
                <h2 className="small-title">Gallery</h2>
                <div className="card">
                  <div className="card-body">
                    <form className="mb-3">
                      <div className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-4 row-cols-xl-2 border-0 p-0" id="dropzoneProductGallery"></div>
                    </form>
                    <div className="text-center">
                      <button type="button" className="btn btn-foreground hover-outline btn-icon btn-icon-start mt-2" id="dropzoneProductGalleryButton">
                        <i data-acorn-icon="plus"></i>
                        <span>Add Files</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!-- Gallery End --> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SalesAdminUpdate
