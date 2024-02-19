import React from 'react'

export default function Basic() {
  return (
    <div className='section-body mt-3'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12 mb-3'>
            <div className='card p-3'>
              <div className="card-header bg-white border-0">
                <h6 className="card-title">BASIC TABLE <br />
                <small className='text-secondary'>Basic example without any additional modification classes</small></h6>
                
              </div>

              <div className='card-body'>
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>FIRST NAME</th>
                      <th>LAST NAME</th>
                      <th>USERNAME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Larry</td>
                      <td>Jellybean</td>
                      <td>@lajelly</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Larry</td>
                      <td>Kikat</td>
                      <td>@lakitkat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>

          <div className='col-lg-12 mb-3'>
            <div className='card p-3'>
              <div className="card-header bg-white border-0">
                <h6 className="card-title">STRIPED ROWS <br />
                <small>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code></small></h6>
                
              </div>

              <div className='card-body'>
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>FIRST NAME</th>
                      <th>LAST NAME</th>
                      <th>USERNAME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Larry</td>
                      <td>Jellybean</td>
                      <td>@lajelly</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Larry</td>
                      <td>Kikat</td>
                      <td>@lakitkat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>

          <div className='col-lg-12 mb-3'>
            <div className='card p-3'>
              <div className="card-header bg-white border-0">
                <h6 className="card-title">BORDERED TABLE <br />
                <small>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</small></h6>
                
              </div>

              <div className='card-body'>
              <div className="table-responsive">
                <table className="table table-bordered mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>FIRST NAME</th>
                      <th>LAST NAME</th>
                      <th>USERNAME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Larry</td>
                      <td>Jellybean</td>
                      <td>@lajelly</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Larry</td>
                      <td>Kikat</td>
                      <td>@lakitkat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>

          <div className='col-lg-12 mb-3'>
            <div className='card p-3'>
              <div className="card-header bg-white border-0">
                <h6 className="card-title">HOVER ROWS <br />
                <small>Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</small></h6>
                
              </div>

              <div className='card-body'>
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>FIRST NAME</th>
                      <th>LAST NAME</th>
                      <th>USERNAME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Larry</td>
                      <td>Jellybean</td>
                      <td>@lajelly</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Larry</td>
                      <td>Kikat</td>
                      <td>@lakitkat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
        </div>   
      </div>    
    </div>
  )
}
