import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function Accountindex() {
  return (
    <div>
      <div className="row clearfix mx-2 mt-3">
      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div>Total Accounts</div>
            <div className="py-4 m-0 text-center h1 text-success counter">
              <span>78</span>
            </div>
            <div className="d-flex">
              <small className="text-muted">This year</small>
              <div className="mx-auto">
                <FontAwesomeIcon icon={faCaretUp} />
                4%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div>New Account</div>
            <div className="py-4 m-0 text-center h1 text-info counter">
              <span>28</span>
            </div>
            <div className="d-flex">
              <small className="text-muted">This year</small>
              <div className="mx-auto">
                <FontAwesomeIcon icon={faCaretUp} />
                13%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div>Total Current A/C</div>
            <div className="py-4 m-0 text-center h1 text-warning counter">
              <span>8</span>
            </div>
            <div className="d-flex">
              <small className="text-muted">This year</small>
              <div className="mx-auto">
                <FontAwesomeIcon icon={faCaretUp} />
                3%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div>Total Saving A/C</div>
            <div className="py-4 m-0 text-center h1 text-danger counter">
              <span>70</span>
            </div>
            <div className="d-flex">
              <small className="text-muted">This year</small>
              <div className="mx-auto">
                <FontAwesomeIcon icon={faCaretDown} />
                10%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
