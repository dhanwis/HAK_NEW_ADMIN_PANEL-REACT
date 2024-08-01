import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Baseurl';
import Table from 'react-bootstrap/Table';
import Select from 'react-select';

function OrderAdminOrder() {



  const [ViewOrder, setViewOrder] = useState([]);
  const [orderId, setOrderId] = useState();
  const [UpdateStatus, setUpdateStatus] = useState({
    order_status: ""
  });
  console.log(UpdateStatus);

  useEffect(() => {
    axios.get(`${BASE_URL}/superadmin/all-order/`)
      .then(response => {
        console.log("re", response);
        setViewOrder(response.data);
      })
      .catch(error => {
        console.error("Error in fetching data", error);
      });
  }, []);

  const options = [
    { value: 'Order Pending', label: 'Order Pending' },
    { value: 'Order Confirmed', label: 'Order Confirmed' },
    { value: 'Order Shipped', label: 'Order Shipped' },
    { value: 'Order Delivered', label: 'Order Delivered' },
  ];

  const handleEditStatus = async () => {
    const { order_status } = UpdateStatus;

    try {
      let formdata = new FormData();
      formdata.append("order_status", order_status);

      const response = await axios.patch(`${BASE_URL}/superadmin/order-status-change/${orderId}/`, formdata, { headers: { 'Content-Type': 'application/json' } });
      console.log(response);
    }
    catch (error) {
      console.log("something went wrong", error);
    }
  };


  return (
    <div>
      <main>
        <div className="container">
          {/* <!-- Title and Top Buttons Start --> */}
          <div className="page-title-container">
            <div className="row">
              {/* <!-- Title Start --> */}
              <div className="col-auto mb-3 mb-md-0 me-auto">
                <div className="w-auto sw-md-30">
                  <a href="/orderadmin-dashboard" className="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span className="text-medium align-middle">Home</span>
                  </a>
                  <h1 className="mb-0 pb-0 display-4" id="title">Order List</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}
              {/* <!-- Top Buttons Start --> */}
              <div className="col-12 col-md-5 d-flex align-items-end justify-content-end">
                {/* <!-- Status Button Start --> */}
                <div className="dropdown-as-select w-100 w-md-auto">
                  <button
                    className="btn btn btn-outline-primary w-100 w-md-auto dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">Status: Pendind</a>
                    <a className="dropdown-item" href="#">Status: Shipped</a>
                    <a className="dropdown-item active" href="#">Status: Delivered</a>
                  </div>
                </div>
                {/* <!-- Status Button End --> */}

                {/* <!-- Dropdown Button Start --> */}
                <div className="ms-1">
                  {/* <button
                    type="button"
                    className="btn btn-outline-primary btn-icon btn-icon-only"
                    data-bs-offset="0,3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-submenu
                  >
                    <i data-acorn-icon="more-horizontal"></i>
                  </button> */}
                  <div className="dropdown-menu dropdown-menu-end">
                    <button className="dropdown-item" type="button">Edit</button>
                    <button className="dropdown-item" type="button">View Invoice</button>
                    <button className="dropdown-item" type="button">Track Package</button>
                  </div>
                </div>
                {/* <!-- Dropdown Button End --> */}
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          {/* <!-- Controls Start --> */}
          <div className="row mb-2">
            {/* <!-- Search Start --> */}
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
            {/* <!-- Search End --> */}

            <div className="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
              <div className="d-inline-block">
                {/* <!-- Length Start --> */}
                <div className="dropdown-as-select d-inline-block" data-childSelector="span">
                  <button className="btn p-0 shadow" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,3">
                    <span
                      className="btn btn-foreground-alternate dropdown-toggle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay="0"
                      title="Item Count"
                    >
                      10 Items
                    </span>
                  </button>
                  <div className="dropdown-menu shadow dropdown-menu-end">
                    <a className="dropdown-item" href="#">5 Items</a>
                    <a className="dropdown-item active" href="#">10 Items</a>
                    <a className="dropdown-item" href="#">20 Items</a>
                  </div>
                </div>
                {/* <!-- Length End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Controls End --> */}

          {/* <!-- Order List Start --> */}



          <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>MOBILE</th>
          <th>PRODUCT NAME</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
      {ViewOrder &&  ViewOrder.length>0? (
      ViewOrder.map((item)=>(
      <tr>
          <td>{item.id}</td>
          <td>{item.first_name}</td>
          <td>{item.mobile_no}</td>
          <td>{item.ordered_items.product_name}</td>
          <td>{item.ordered_items.quantity}</td>
          <td>{item.ordered_items.total}</td>
          <td>  <Select
                options={options}
                defaultValue={options.find(option => option.value === item.order_status)}
                onChange={(e) => {
                  setUpdateStatus({ ...UpdateStatus, order_status: e.target.value });
                  setOrderId(item.id);
                  handleEditStatus();
                }}
                placeholder="Select an option"
              /></td>
         
        </tr>
        ))
      )
        :null
      }
       
      </tbody>
    </Table>
    
         
          {/* <!-- Order List End --> */}

          {/* <!-- Pagination Start --> */}
          {/* <div className="d-flex justify-content-center">
            <nav>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link shadow" href="#" tabindex="-1" aria-disabled="true">
                    <i data-acorn-icon="chevron-left"></i>
                  </a>
                </li>
                <li className="page-item active"><a className="page-link shadow" href="#">1</a></li>
                <li className="page-item"><a className="page-link shadow" href="#">2</a></li>
                <li className="page-item"><a className="page-link shadow" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i data-acorn-icon="chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
          {/* <!-- Pagination End --> */}

          
        </div>
      </main>
    </div>
  )
}

export default OrderAdminOrder
