import React from 'react'
import { Bar } from 'react-chartjs-2';
 


export default function Salarystatistics() {
  const data = {
    labels: ['Jan 01', 'Jan 02', 'Jan 03', 'Jan 04', 'Jan 05', 'Jan 06'],
    datasets: [
      {
        label: 'Block 1',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [30, 40, 50, 60, 70, 80],
      },
      {
        label: 'Block 2',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [10, 20, 30, 40, 50, 60],
      },
      {
        label: 'Block 3',
        backgroundColor: 'rgba(255,206,86,0.2)',
        borderColor: 'rgba(255,206,86,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,206,86,0.4)',
        hoverBorderColor: 'rgba(255,206,86,1)',
        data: [20, 30, 40, 50, 60, 70],
      },
      {
        label: 'Block 4',
        backgroundColor: 'rgba(54,162,235,0.2)',
        borderColor: 'rgba(54,162,235,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54,162,235,0.4)',
        hoverBorderColor: 'rgba(54,162,235,1)',
        data: [5, 15, 25, 35, 45, 55],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        stacked: true,
      },
      y: {
        min: 0,
        max: 120,
      },
    },
  };
 
  
  
  return (
    <div>
          
        <div className='card mb-2'>
            <div className='card-header1 d-flex justify-content-between'>
              <div>
              <h4 className="card-title d-flex justify-content-start">SALARY STATICTICS</h4>
              </div>
                
              <div className='card-option'>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                </div>
              </div>
            </div>

            
            <div className='card-body'>
            <Bar data={data} options={options} />
            </div>


            <div className='salary-footer d-flex justify-content-between mx-2'>
            <div>
            <button type="button" class="btn btn-primary btn-sm">Generate Report</button>
            </div>

            <div>
              <p>Measure How Fast You’re Growing Monthly Recurring Revenue. Learn More</p>
            </div>
            </div>
        </div>

    </div>
  )
}
