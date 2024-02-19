import React from 'react'
import { Pie } from 'react-chartjs-2';
  


export default function Revenue() {
  const data = {
    labels: ['USA', 'UK', 'Australia', 'Europe'],
    datasets: [
      {
        data: [44, 55, 23, 43],
        backgroundColor: ['gold', 'lightcoral', 'lightskyblue', 'lightgreen'],
      },
    ],
  };
  

  return (
    <div>
        
        <div className='card'>
            <div className='card-header1'>
              <h4 className="card-title d-flex justify-content-start">REVENUE</h4>
            </div>
            

            
            <div className='card-body'>
            <Pie data={data} />
            </div>

            

            <div className='revenue-footer  d-grid mx-2'>
            <button type="button" class="btn btn-primary btn-sm">Send Report</button>    
            </div>
        </div>
    </div>
  )
}
