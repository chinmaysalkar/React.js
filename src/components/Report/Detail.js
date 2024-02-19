import React from 'react'


export default function Detail() {
  return (
    <div>
    
    <div className="tab-pane fade active show mx-3 mt-3" id="Report-detail" role="tabpanel">
      <div className="row clearfix">
        <div className="col-12">
          <div className="card">
            <div className="card-header report-detail d-flex justify-content-between mt-3">
              <h3 className="card-title report-detail-t1">#AB0017</h3>
              <div className="card-options">
                <button type="button" className="btn btn-primary btn-top">
                  <i className="si si-printer"></i> Print Invoice
                </button>
              </div>
            </div>

            <div className="card-body">
              <div className="row my-8">

                <div className="col-6">
                  <p className="h3">Company</p>
                  <address>
                    Street Address<br />
                    State, City<br />
                    Region, Postal Code<br />
                    ltd@example.com
                  </address>
                </div>

                <div className="col-6 text-end">
                  <p className="h3">Client</p>
                  <address>
                    Street Address<br />
                    State, City<br />
                    Region, Postal Code<br />
                    ctr@example.com
                  </address>
                </div>

              </div>
              <div className="table-responsive push">
                <table className="table table-bordered table-hover">
                  <tbody>
                    <tr>
                      <th className="text-center width35"></th>
                      <th>Product</th>
                      <th className="text-center" style={{ width: '1%' }}>Qnt</th>
                      <th className="text-right" style={{ width: '1%' }}>Unit</th>
                      <th className="text-right" style={{ width: '1%' }}>Amount</th>
                    </tr>
                    <tr>
                      <td className="text-center">1</td>
                      <td>
                        <p className="font600 mb-1">Logo Creation</p>
                        <div className="text-muted">Logo and business cards design</div>
                      </td>
                      <td className="text-center">1</td>
                      <td className="text-right">$1.800,00</td>
                      <td className="text-right">$1.800,00</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>
                        <p className="font600 mb-1">Online Store Design &amp; Development</p>
                        <div className="text-muted">Design/Development for all popular modern browsers</div>
                      </td>
                      <td className="text-center">1</td>
                      <td className="text-right">$20.000,00</td>
                      <td className="text-right">$20.000,00</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>
                        <p className="font600 mb-1">App Design</p>
                        <div className="text-muted">Promotional mobile application</div>
                      </td>
                      <td className="text-center">1</td>
                      <td className="text-right">$3.200,00</td>
                      <td className="text-right">$3.200,00</td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="font600 text-end">Subtotal</td>
                      <td className="text-right">$25.000,00</td>
                    </tr>
                    <tr className="bg-light">
                      <td colSpan="4" className="font600 text-end">Vat Rate</td>
                      <td className="text-right">20%</td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="font600 text-end">Vat Due</td>
                      <td className="text-right">$5.000,00</td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="font700 text-end bg-info text-white">Total Due</td>
                      <td className=" text-right bg-info text-white">$30.000,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted text-center">
                Thank you very much for doing business with us. We look forward to working with you again!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  </div>
  )
}
