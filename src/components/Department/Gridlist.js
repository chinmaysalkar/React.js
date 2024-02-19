import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPencil } from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../../assets/images/avatar1.jpg'
import avatar2 from '../../assets/images/avatar2.jpg'
import avatar3 from '../../assets/images/avatar3.jpg'

export default function Gridlist() {
    const [employees, setEmployees] = useState([
        { name: 'John Smith', role: 'Web Development', employeeCount: 105, earnings: '$3100', imageSrc:  avatar1 },
        { name: 'Maryam Amiri', role: 'Web Development', employeeCount: 105, earnings: '$3100', imageSrc: avatar2},
        { name: 'Fidel Tonn ', role: 'Web Development', employeeCount: 12, earnings: '$3100', imageSrc: avatar1 },
        { name: 'Frank Camly ', role: 'Web Development', employeeCount: 105, earnings: '$3100', imageSrc: avatar3 },
        { name: 'Maryam Amiri ', role: 'Web Development', employeeCount: 105, earnings: '$3100', imageSrc: avatar1 },
        { name: 'John Smith ', role: 'Web Development', employeeCount: 55, earnings: '$12,045', imageSrc: avatar2 },
        { name: 'John Smith ', role: 'Web Development', employeeCount: 23, earnings: '$5100', imageSrc: avatar3 },
        
    ]);

      const handleEdit = (index) => {
        
        console.log('Edit employee:', index);
    };


      const handleDelete = (index) => {
        
        setEmployees((prevEmployees) => {
            const updatedEmployees = [...prevEmployees];
            updatedEmployees.splice(index, 1);
            return updatedEmployees;
        });
    };
  return (
    <div>
        <div className='mt-4 mx-3'>
            <div className="row clearfix">
            {employees.map((employee, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                <div className="card mb-3">
                    <div className="card-body text-center">
                        <img className="img-thumbnail rounded-circle avatar-xxl" src={employee.imageSrc} alt={employee.name} />
                        <h6 className="mt-3">{employee.name}</h6>
                        <div className="text-center text-muted mb-3">{employee.role}</div>
                        <button type="button" className="btn btn-icon btn-outline-primary mx-1" onClick={() => handleEdit(index)}>
                        <FontAwesomeIcon icon={faPencil} />
                        </button>
                        <button type="button" className="btn btn-icon btn-outline-danger" onClick={() => handleDelete(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                    <div className="card-footer text-center bg-white">
                        <div className="row clearfix">
                            <div className="col-6">
                            <h5 className="mb-0">{employee.employeeCount}</h5>
                            <div className="text-muted">Employee</div>
                            </div>
                            <div className="col-6">
                            <h5 className="mb-0">{employee.earnings}</h5>
                            <div className="text-muted">Earnings</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            ))}
            </div>

        </div>
    </div>
  )
}
