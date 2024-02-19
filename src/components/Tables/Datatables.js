import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEditt, faEdit } from '@fortawesome/free-solid-svg-icons'; 
export default function Datatables() {
  const data = [
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
  ];


  const [employees, setEmployees] = useState([
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh' },
    
  ]);
  return (
    <div className='section-body mt-3'>
      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-lg-12'>
            <div className='card p-3'>
            <div className="table-responsive">
              <table className="table table-hover js-basic-example dataTable table_custom border-style spacing5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </tfoot>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.position}</td>
                      <td>{item.office}</td>
                      <td>{item.age}</td>
                      <td>{item.start_date}</td>
                      <td>{item.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='card p-3'>
              <div className="card-header bg-white border-0">
              <h6 className="card-title mb-3">ADD ROW</h6>                        
              </div>
              

              <div className='card-body'>
              <button type="button" class="btn btn-primary btn-top">Add row</button> 

              <div className="table-responsive mt-3">
                <table className="table table-hover table-vcenter table-striped" cellSpacing="0" id="addrowExample">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Actions</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {employees.map((employee, index) => (
                      <tr key={index} className="gradeA">
                        <td>{employee.name}</td>
                        <td>{employee.position}</td>
                        <td>{employee.office}</td>
                        <td className="actions">
                          <button className="btn btn-sm btn-icon on-editing m-r-5 button-save" data-toggle="tooltip" data-original-title="Save" hidden="">
                          <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button className="btn btn-sm btn-icon on-editing m-r-5 button-save" data-toggle="tooltip" data-original-title="Save" hidden="">
                          <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    ))}
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
