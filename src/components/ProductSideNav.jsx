import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo/logo1.png'
import profile from '../images/profile/profile-1.webp'

function ProductSideNav() {
  return (
    <div>
      <div id="nav" className="nav-container d-flex">
        <div className="nav-content d-flex">
          {/* <!-- Logo Start --> */}
          <div className="logo position-relative">
            <a href="/productadmin-dashboard">
              {/* <!-- Logo can be added directly --> */}
             <img src={logo} alt="logo" style={{ marginLeft: "-30px"}}/> 

              {/* <!-- Or added via css to provide different ones for different color themes --> */}
              {/* <div className="img"></div> */}
            </a>
          </div>
          {/* <!-- Logo End --> */}

          {/* <!-- User Menu Start --> */}
          <div className="user-container d-flex">
            <a href="#" className="d-flex user position-relative" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="profile" alt="profile" src={profile} />
              <div className="name">Product Admin</div>
            </a>
            <div className="dropdown-menu dropdown-menu-end user-menu wide">
              <div className="row mb-3 ms-0 me-0">
                <div className="col-12 ps-1 mb-2">
                  <div className="text-small text-primary">INFO</div>
                </div>
                <div className="col-6 ps-1 pe-1">
                  <table>
                    <tr>
                      <th className='text-primary'>Name:</th>
                      <td className='ps-5'>sdvsdvsdv</td>
                    </tr>
                    <tr>
                      <th className='text-primary'>Username:</th>
                      <td className='ps-5'>sdvsdvsdv</td>
                    </tr>
                    <tr>
                      <th className='text-primary'>Email:</th>
                      <td className='ps-5'>sdvsdvs</td>
                    </tr>
                    <tr>
                      <th className='text-primary'>Phone:</th>
                      <td className='ps-5'>sdvsdvsvd</td>
                    </tr>
                  </table>

                  <ul className="list-unstyled mt-4">
                    <li >
                      <a href="/superadminprofile-view/"  style={{display:'flex'}}>
                        <i className="fa-solid fa-gear pe-1"/>
                        <label style={{cursor:"pointer"}}>User Info</label>
                      </a>
                      <a href="/login"  style={{display:'flex'}}>
                        <i className="fa-solid fa-sign-out pe-1"/>
                        <label style={{cursor:"pointer"}}>Logout</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- User Menu End --> */}

          {/* <!-- Icons Menu Start --> */}
          <ul className="list-unstyled list-inline text-center menu-icons">
            <li className="list-inline-item">
              <a href="#" data-bs-toggle="modal" data-bs-target="#searchPagesModal">
                <i data-acorn-icon="search" data-acorn-size="18"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" id="pinButton" className="pin-button">
                <i data-acorn-icon="lock-on" className="unpin" data-acorn-size="18"></i>
                <i data-acorn-icon="lock-off" className="pin" data-acorn-size="18"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" id="colorButton">
                <i data-acorn-icon="light-on" className="light" data-acorn-size="18"></i>
                <i data-acorn-icon="light-off" className="dark" data-acorn-size="18"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" data-bs-toggle="dropdown" data-bs-target="#notifications" aria-haspopup="true" aria-expanded="false" className="notification-button">
                <div className="position-relative d-inline-flex">
                  <i data-acorn-icon="bell" data-acorn-size="18"></i>
                  <span className="position-absolute notification-dot rounded-xl"></span>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end wide notification-dropdown scroll-out" id="notifications">
                <div className="scroll">
                  <ul className="list-unstyled border-last-none">
                    <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-1.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div className="align-self-center">
                        <a href="#">Vaishnav Venu just sent a new comment!</a>
                      </div>
                    </li>
                    <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-2.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div className="align-self-center">
                        <a href="#">New order received! It is total $147,20.</a>
                      </div>
                    </li>
                    <li className="mb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-3.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div className="align-self-center">
                        <a href="#">3 items just added to wish list by a user!</a>
                      </div>
                    </li>
                    <li className="pb-3 pb-3 border-bottom border-separator-light d-flex">
                      <img src="img/profile/profile-6.webp" className="me-3 sw-4 sh-4 rounded-xl align-self-center" alt="..." />
                      <div className="align-self-center">
                        <a href="#">Kirby Peters just sent a new message!</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          {/* <!-- Icons Menu End --> */}

          {/* <!-- Menu Start --> */}
          <div className="menu-container flex-grow-1">
            <ul id="menu" className="menu">
              <li>
                <Link to="/productadmin-dashboard">
                  <i className="fa-solid fa-home icon" data-acorn-size="18"></i>
                  <span className="label">Dashboard</span>
                </Link>
              </li>
              <li>
                  <Link to="/productadmin-category">
                  <i className="fa-solid fa-bars icon" data-acorn-size="18"></i>
                  <span className="label">Category</span>
                  </Link>
              </li>    
              <li>
                  <Link to="/productadmin-size">
                  <i className="fa-solid fa-list icon" data-acorn-size="18"></i>
                  <span className="label">Size</span>
                  </Link>
              </li>
              <li>
                  <Link to="/productadmin-products">
                  <i className="fa-solid fa-shirt icon" data-acorn-size="18"></i>
                  <span className="label">Product</span>
                  </Link>
              </li>

              <li>
                  <Link to="/productadmin-discount">
                  <i className="fa-solid fa-tag icon" data-acorn-size="18"></i>
                  <span className="label">Offers</span>
                  </Link>
              </li>
              <li>
                <Link to="Settings.html">
                  <i className="fa-solid fa-gear icon" data-acorn-size="18"></i>
                  <span className="label">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- Menu End --> */}

          {/* <!-- Mobile Buttons Start --> */}
          <div className="mobile-buttons-container">
            {/* <!-- Menu Button Start --> */}
            <a href="#" id="mobileMenuButton" className="menu-button">
              <i data-acorn-icon="menu"></i>
            </a>
            {/* <!-- Menu Button End --> */}
          </div>
          {/* <!-- Mobile Buttons End --> */}
        </div>
        <div className="nav-shadow"></div>
      </div>
    </div>

    
  )
}

export default ProductSideNav
