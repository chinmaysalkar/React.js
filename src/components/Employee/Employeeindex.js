import React from 'react'

export default function Employeeindex() {
  return (
    <div>
        <div className="row">
            <div className="col-lg-3 col-md-6 mb-1">
                <div className="card border-0">
                <div className="card-body w_sparkline">
                    <div className="details">
                    <span>Total Employee</span>
                    <h3 className="mb-0">
                        <span className="counter">
                        <span>614</span>
                        </span>
                    </h3>
                    </div>
                    <div className="w_chart">
                    <div id="mini-bar-chart1" className="mini-bar-chart"></div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-1">
                <div className="card border-0">
                <div className="card-body w_sparkline">
                    <div className="details">
                    <span>New Employee</span>
                    <h3 className="mb-0">
                        <span>124</span>
                    </h3>
                    </div>
                    <div className="w_chart">
                    <span id="mini-bar-chart2" className="mini-bar-chart"></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-1">
                <div className="card border-0">
                <div className="card-body w_sparkline">
                    <div className="details">
                    <span>Male</span>
                    <h3 className="mb-0 counter">
                        <span>504</span>
                    </h3>
                    </div>
                    <div className="w_chart">
                    <span id="mini-bar-chart3" className="mini-bar-chart"></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="card border-0">
                <div className="card-body w_sparkline">
                    <div className="details">
                    <span>Female</span>
                    <h3 className="mb-0 counter">
                        <span>100</span>
                    </h3>
                    </div>
                    <div className="w_chart">
                    <span id="mini-bar-chart4" className="mini-bar-chart"></span>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}
