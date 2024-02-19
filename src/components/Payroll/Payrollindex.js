import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

export default function Payrollindex() {

    const data = [
        { title: 'Web Developer', amount: 18960, percentage: -5.27 },
        { title: 'App Developer', amount: 11783, percentage: 11.38 },
        { title: 'Designer', amount: 2254, percentage: 9.61 },
        { title: 'Marketing', amount: 8751, percentage: -2.27 },
      ];
  return (
    <div>
    <div className="row clearfix mx-1">
      {data.map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6 mb-2">
          <div className="card">
            <div className="card-body">
              <h6>{item.title}</h6>
              <h3 className="pt-3">
                $<span className="counter"><span>{item.amount}</span></span>
              </h3>
              <span>
                <span className={`text-${item.percentage >= 0 ? 'success' : 'danger'} mr-2`}>
                  <FontAwesomeIcon icon={item.percentage >= 0 ? faLongArrowAltUp : faLongArrowAltDown} /> {Math.abs(item.percentage).toFixed(2)}%
                </span>
                Since last month
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
