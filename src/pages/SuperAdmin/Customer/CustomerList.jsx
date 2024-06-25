import React from 'react'

function CustomerList() {
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
                  <a href="/admin-dashboard" class="muted-link pb-1 d-inline-block breadcrumb-back">
                    <i data-acorn-icon="chevron-left" data-acorn-size="13"></i>
                    <span class="text-medium align-middle">Home</span>
                  </a>
                  <h1 class="mb-0 pb-0 display-4" id="title">Customer List</h1>
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
                        <div class="col-lg-1 d-flex align-items-center mb-2 mb-lg-0 text-muted text-medium">ID</div>
                        <div class="col-lg-2 d-flex align-items-center text-muted text-medium">NAME</div>
                        <div class="col-lg-2 d-flex align-items-center text-muted text-medium">LOCATION</div>
                        <div class="col-lg-2 d-flex align-items-center text-muted text-medium">SPENT</div>
                        <div class="col-lg-2 d-flex align-items-center text-muted text-medium">LAST ORDER</div>
                        <div class="col-lg-2 d-flex align-items-center text-muted text-medium">STATUS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="checkboxTable">
                <div class="card mb-2">
                  <div class="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div class="row g-0 h-100 align-content-center">
                      <div class="col-11 col-lg-1 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
                        <div class="text-muted text-small d-lg-none">Id</div>
                        <a href="/customerdetails" class="text-truncate h-100 d-flex align-items-center">245</a>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
                        <div class="text-muted text-small d-lg-none">Name</div>
                        <div class="text-alternate">Joisse Kaycee</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
                        <div class="text-muted text-small d-lg-none">Location</div>
                        <div class="text-alternate">Leipzig, DE</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
                        <div class="text-muted text-small d-lg-none">Spent</div>
                        <div class="text-alternate">
                          <span>
                            <span class="text-small">$</span>
                            321.75
                          </span>
                        </div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
                        <div class="text-muted text-small d-lg-none">Last Order</div>
                        <div class="text-alternate">
                          <a href="/customerdetails" class="text-truncate h-100 d-flex align-items-center">5323</a>
                        </div>
                      </div>
                      <div class="col-12 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
                        <div class="text-muted text-small d-lg-none mb-1">Status</div>
                        <div>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="content"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Newsletter"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="boxes"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Purchased"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="check-square"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Trusted"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="phone"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Phone"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-2">
                  <div class="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div class="row g-0 h-100 align-content-center">
                      <div class="col-11 col-lg-1 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
                        <div class="text-muted text-small d-lg-none">Id</div>
                        <a href="/customerdetails" class="text-truncate h-100 d-flex align-items-center">244</a>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
                        <div class="text-muted text-small d-lg-none">Name</div>
                        <div class="text-alternate">Kathleen Bertha</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
                        <div class="text-muted text-small d-lg-none">Location</div>
                        <div class="text-alternate">Salvador, BR</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
                        <div class="text-muted text-small d-lg-none">Spent</div>
                        <div class="text-alternate">
                          <span>
                            <span class="text-small">$</span>
                            321.75
                          </span>
                        </div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
                        <div class="text-muted text-small d-lg-none">Last Order</div>
                        <div class="text-alternate">
                          <a href="/customerdetails" class="text-truncate h-100 d-flex align-items-center">5323</a>
                        </div>
                      </div>
                      <div class="col-12 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
                        <div class="text-muted text-small d-lg-none mb-1">Status</div>
                        <div>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="content"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Newsletter"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="boxes"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Purchased"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="check-square"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Trusted"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="phone"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Phone"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-2">
                  <div class="card-body pt-0 pb-0 sh-30 sh-lg-8">
                    <div class="row g-0 h-100 align-content-center">
                      <div class="col-11 col-lg-1 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
                        <div class="text-muted text-small d-lg-none">Id</div>
                        <a href="/customerdetails" class="text-truncate h-100 d-flex align-items-center">243</a>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
                        <div class="text-muted text-small d-lg-none">Name</div>
                        <div class="text-alternate">Mickey Fianna</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
                        <div class="text-muted text-small d-lg-none">Location</div>
                        <div class="text-alternate">San Antonio, US</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
                        <div class="text-muted text-small d-lg-none">Spent</div>
                        <div class="text-alternate">-</div>
                      </div>
                      <div class="col-6 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
                        <div class="text-muted text-small d-lg-none">Last Order</div>
                        <div class="text-alternate">-</div>
                      </div>
                      <div class="col-12 col-lg-2 d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
                        <div class="text-muted text-small d-lg-none mb-1">Status</div>
                        <div>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="content"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Newsletter"
                          ></i>
                          <i
                            class="text-separator me-2"
                            data-acorn-icon="boxes"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Purchased"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="check-square"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Trusted"
                          ></i>
                          <i
                            class="text-primary me-2"
                            data-acorn-icon="phone"
                            data-acorn-size="17"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Phone"
                          ></i>
                        </div>
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

export default CustomerList