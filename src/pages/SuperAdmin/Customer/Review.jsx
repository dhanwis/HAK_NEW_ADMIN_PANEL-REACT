import React from 'react'

function Review() {
  return (
    <div>
       <main>
        <div class="container">
          {/* <!-- Title and Top Buttons Start --> */}
          <div class="page-title-container">
            <div class="row">
              {/* <!-- Title Start --> */}
              <div class="col-auto mb-3 mb-md-0 me-auto">
                <div class="w-auto sw-md-30">
                  <a href="/" class="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span class="text-medium align-middle">Home</span>
                  </a>
                  <h1 class="mb-0 pb-0 display-4" id="title">Reviews</h1>
                </div>
              </div>
              {/* <!-- Title End --> */}

              {/* <!-- Top Buttons Start --> */}
              <div class="col-3 d-flex align-items-end justify-content-end">
  
              </div>
              {/* <!-- Top Buttons End --> */}
            </div>
          </div>
          {/* <!-- Title and Top Buttons End --> */}

          {/* <!-- Controls Start --> */}
          <div class="row mb-2">
            {/* <!-- Search Start --> */}
            <div class="col-sm-12 col-md-5 col-lg-3 col-xxl-2 mb-1">
              <div class="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
                <input class="form-control" placeholder="Search" />
                <span class="search-magnifier-icon">
                  <i data-acorn-icon="search"></i>
                </span>
                <span class="search-delete-icon d-none">
                  <i data-acorn-icon="close"></i>
                </span>
              </div>
            </div>
            {/* <!-- Search End --> */}

            <div class="col-sm-12 col-md-7 col-lg-9 col-xxl-10 text-end mb-1">
              <div class="d-inline-block">
              </div>
            </div>
          </div>
          {/* <!-- Controls End --> */}

          {/* <!-- Customers List Start --> */}
          <div class="row">
            <div class="col-12 mb-5">
              <div class="card mb-2 bg-transparent no-shadow d-none d-lg-block">
                <div class="row g-0 sh-3">
                  <div class="col">
                    <div class="card-body pt-0 pb-0 h-100">
                      <div class="row g-0 h-100 align-content-center">
                        <div class="col-lg-2 d-flex align-items-center text-muted text-medium">NAME</div>
                        <div class="col-lg-2 d-flex align-items-center text-muted text-medium">PRODUCT</div>
                        <div class="col-lg-2 d-flex align-items-center text-muted text-medium">DATE</div>
                        <div class="col-lg-2 d-flex align-items-center text-muted text-medium">STATUS</div>
                        <div class="col-lg-3 d-flex align-items-center text-muted text-medium">RATING</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="checkboxTable">
                <div class="card mb-2">
                  <div class="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div class="row g-0 h-100 align-content-center">
                      <div class="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 h-lg-100 position-relative">
                        <a href="/customerdetails" class="text-truncate h-100 d-flex align-items-center">John</a>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">Salwar</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">13-06-2024</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">Pending</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 br-wrapper br-theme-cs-icon">
                      <select className="rating" name="rating" autocomplete="off" data-readonly="true" data-initial-rating="5">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-reply'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-2">
                  <div class="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div class="row g-0 h-100 align-content-center">
                      <div class="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 h-lg-100 position-relative">
                        <a href="/customerdetails" class="text-truncate h-100 d-flex align-items-center">David</a>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">Salwar</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">13-06-2024</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">Replied</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 br-wrapper br-theme-cs-icon">
                      <select className="rating" name="rating" autocomplete="off" data-readonly="true" data-initial-rating="3">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-reply'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>            
                <div class="card mb-2">
                  <div class="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div class="row g-0 h-100 align-content-center">
                      <div class="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 h-lg-100 position-relative">
                        <a href="/customerdetails" class="text-truncate h-100 d-flex align-items-center">Robert</a>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">Salwar</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">13-06-2024</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">Replied</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 br-wrapper br-theme-cs-icon">
                      <select className="rating" name="rating" autocomplete="off" data-readonly="true" data-initial-rating="0">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-reply'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-2">
                  <div class="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div class="row g-0 h-100 align-content-center">
                      <div class="col-11 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 h-lg-100 position-relative">
                        <a href="/customerdetails" class="text-truncate h-100 d-flex align-items-center">Alex</a>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">Salwar</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">13-06-2024</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0">
                        <div class="text-alternate">Pending</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 br-wrapper br-theme-cs-icon">
                      <select className="rating" name="rating" autocomplete="off" data-readonly="true" data-initial-rating="4">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-reply'/></a>
                      </div>
                      <div className="col-12 col-lg-1 d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center ">
                        <a href="#" className="col-11 col-lg-1 d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex  h-lg-100 justify-content-center"><i className='fa fa-trash'/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Customers List End --> */}

          {/* <!-- Pagination Start --> */}
          <div class="d-flex justify-content-center">
            <nav>
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link shadow" href="#" tabindex="-1" aria-disabled="true">
                    <i data-acorn-icon="chevron-left"></i>
                  </a>
                </li>
                <li class="page-item active"><a class="page-link shadow" href="#">1</a></li>
                <li class="page-item"><a class="page-link shadow" href="#">2</a></li>
                <li class="page-item"><a class="page-link shadow" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <i data-acorn-icon="chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- Pagination End --> */}
        </div>
      </main>
    </div>
  )
}

export default Review