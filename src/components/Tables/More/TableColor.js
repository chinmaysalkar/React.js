import React from 'react'

export default function TableColor() {
  const tableData = [
    { class: '.table-primary', description: 'Blue: Indicates an important action' },
    { class: '.table-success', description: 'Green: Indicates a successful or positive action' },
    { class: '.table-danger', description: 'Red: Indicates a dangerous or potentially negative action' },
    { class: '.table-info', description: 'Light blue: Indicates a neutral informative change or action' },
    { class: '.table-warning', description: 'Orange: Indicates a warning that might need attention' },
    { class: '.table-active', description: 'Grey: Applies the hover color to the table row or table cell' },
    { class: '.table-secondary', description: 'Grey: Indicates a slightly less important action' },
    { class: '.table-light', description: 'Light grey table or table row background' },
    { class: '.table-dark', description: 'Dark grey table or table row background' },
  ];

  return (
    <div className='section-body'>
      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='card p-3'>
              <div className="card-header bg-white border-0">
                <h6 className="card-title">BOOTSTRAP 4 TABLE BACKGROUND <br />
                <small className='text-secondary'>The contextual classes that can be used are:</small></h6>  
              </div>
              <div className='card-body'>
              <div className="table-responsive">
                <table className="table table-striped mb-0">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td>
                          <code className={`w3-codespan ${row.class}`}>{row.class}</code>
                        </td>
                        <td>{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col-md-12'>
            <div className='card p-3 mb-3'>
              <div className="card-header bg-white border-0">
                <h6 className="card-title">BASIC TABLE <br />
                <small className='text-secondary'>Add Class <code>.table-dark .table-striped</code></small></h6>             
              </div>

              <div className='card-body'>
                <div className="table-responsive">
                  <table className="table m-b-0 table-striped table-dark">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='card p-3'>
              <div className="card-header bg-white border-0">
                <h6 className="card-title">TABLE HEAD DARK<br />
                <small className='text-secondary'>Add Class <code>.table-dark</code></small></h6>             
              </div>

              <div className='card-body'>
                <div className="table-responsive">
                  <table className="table m-b-0">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='card p-3'>
              <div className="card-header bg-white border-0">
                <h6 className="card-title">TABLE HEAD LIGHT<br />
                <small className='text-secondary'>Add Class <code>.table-light</code></small></h6>             
              </div>

              <div className='card-body'>
                <div className="table-responsive">
                  <table className="table m-b-0">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='card p-3'>
              <div className="card-header bg-white border-0">
                <h6 className="card-title">SOLID COLOR BACKGROUND <br />
                <small className='text-secondary'>Add Class <code>.table-pink</code></small></h6>             
              </div>

              <div className='card-body'>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Class name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-dark">
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>.bg-primary</td>
                      </tr>
                      <tr className="table-dark">
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>.bg-secondary</td>
                      </tr>
                      <tr className="table-dark">
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>.bg-danger</td>
                      </tr>
                      <tr className="table-dark">
                        <td>4</td>
                        <td>Larry</td>
                        <td>Jellybean</td>
                        <td>.bg-warning</td>
                      </tr>
                      <tr className="table-danger">
                        <td>5</td>
                        <td>Larry</td>
                        <td>Kikat</td>
                        <td>.bg-success</td>
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
