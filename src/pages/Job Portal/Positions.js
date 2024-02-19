import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import avatar1 from '../../assets/images/avatar1.jpg'
import Sidebar from '../../layouts/Sidebar'

export default function Positions() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('None Selected');
  const [category, setCategory] = useState('Designer');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');

  
  const handleFilter = () => {
    console.log('Search:', search);
    console.log('Type:', type);
    console.log('Category:', category);
    console.log('Min Salary:', minSalary);
    console.log('Max Salary:', maxSalary);
  };

// Table Data

  const jobData = [
    { avatar: avatar1,avatarname: 'SW', companyName: 'Google Inc.', position: 'Full-stack developer', employmentType: 'Full-time', applicants: 0, address: '44 Shirley Ave. West Chicago, IL 60185', status: 'Pending approval' },
    { avatarname: 'FB', companyName: 'Facebook Inc.', position: 'Designer', employmentType: 'Full-time', applicants: 45, address: '123 6th St. Melbourne, FL 32904', status: '12 days to expire' },
    { avatar: avatar1,avatarname: 'SW', companyName: 'Themeforest Inc.', position: 'Web Application Developer', employmentType: 'Freelance', applicants: 50, address: '44 Shirley Ave. West Chicago, IL 60185', status: '12 days to expire' },
    { avatarname: 'LD', companyName: 'Linkdin Inc.', position: 'Marketing', employmentType: 'Freelance', applicants: 17, address: '514 S. Magnolia St. Orlando, FL 32806', status: '24 days to expire' },
    { avatar: avatar1,avatarname: 'SW', companyName: 'Microsoft Inc.', position: 'Sr. SQL Server Developer', employmentType: 'Part-time', applicants: 33, address: '70 Bowman St. South Windsor', status: '29 days to expire' },
    { avatarname: 'FB', companyName: 'Facebook Inc.', position: 'Designer', employmentType: 'Full-time', applicants: 45, address: '123 6th St. Melbourne, FL 32904', status: '12 days to expire' },
    { avatarname: 'TF', companyName: 'Themeforest Inc.', position: 'Web Application Developer', employmentType: 'Freelance', applicants: 50, address: '44 Shirley Ave. West Chicago, IL 60185', status: '12 days to expire' },
  ];


  const getButtonColor = (action) => {
    switch (action) {
      case 'Full-time':
        return '#B4E129';
      case 'Freelance':
        return '#B4E129';
      case 'Part-time':
        return '#B4E129';
      default:
        return 'info';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending approval':
        return '#E3EC25'; 
      case '12 days to expire':
        return '#E3EC25'; 
      case '24 days to expire':
        return '#E3EC25'; 
      case '29 days to expire':
        return '#E3EC25'; 
      
      default:
        return '#E3EC25';
    }
  };

  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='pagewidth mx-3'>
        <Header/>

        <div className='section-body mt-3'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6">
                      <label>Search</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                      <label>TYPE</label>
                      <div className="multiselect_div">
                        <select
                          className="form-select"
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option>None Selected</option>
                          <option value="1">Part Time</option>
                          <option value="2">Full Time</option>
                          <option value="3">All Type</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                      <label>Category</label>
                      <div className="form-group">
                        <select
                          className="form-select"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option>Designer</option>
                          <option value="1">Project Manager</option>
                          <option value="2">Senior Developer</option>
                          <option value="3">Front-end Developer</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                      <label>Salary</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Min. Salary"
                          value={minSalary}
                          onChange={(e) => setMinSalary(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                      
                      <div className="input-group mt-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Max. Salary"
                          value={maxSalary}
                          onChange={(e) => setMaxSalary(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                      <button
                        className="btn btn-sm d-grid btn-primary btn-block btn-top mt-4"
                        onClick={handleFilter}
                      >
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover table-vcenter table_custom text-nowrap spacing5 mb-0">
                  <thead>
                    <tr>
                      <th>Avatar</th>
                      <th>Company Name</th>
                      <th>Employment Type</th>
                      <th>Applicants</th>
                      <th>Address</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobData.map((job, index) => (
                      <tr key={index}>
                        <td>{job.avatar ? (
                        <img
                            src={job.avatar}
                            alt=""
                            className="avatar rounded-circle avatar-sml"
                        />
                        ) : (
                        <span className="avatar rounded-circle avatar-sml">{job.avatarname}</span>
                        )}
                        </td>
                        <td><div className="font-15">{job.companyName}</div><span className="text-muted">{job.position}</span></td>
                        <td>
                          <span
                            style={{
                            backgroundColor: getButtonColor(job.employmentType),
                            padding: '3px',
                            borderRadius: '5px',
                            color: 'white',
                            }}
                        >
                            {job.employmentType}
                        </span>
                        </td>
                        <td>Applicants: <strong>{job.applicants}</strong></td>
                        <td><span>{job.address}</span></td>
                        <td><span
                          className="tag tag-warning"
                          style={{ backgroundColor: getStatusColor(job.status),
                          padding: '3px',
                          borderRadius: '5px',
                          color: 'white', }}
                        >
                          {job.status}
                        </span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <ul className="pagination mt-2">
                <li className="page-item">
                  <a className="page-link" href="fake_url;">Previous</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="fake_url;">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="fake_url;">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="fake_url;">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="fake_url;">Next</a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer/> 
    </div>
    </div>
    </>
  )
}
