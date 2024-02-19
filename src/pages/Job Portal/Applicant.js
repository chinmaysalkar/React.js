import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import avatar1 from '../../assets/images/avatar1.jpg'
import { Link } from 'react-router-dom'
import Sidebar from '../../layouts/Sidebar'

export default function Applicant() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('None Selected');
  const [order, setOrder] = useState('Newest first');

  
  const handleFilter = () => {
    console.log('Search:', search);
    console.log('Status:', status);
    console.log('Order:', order);
  };

// Table data

const jobsData = [
  {
    avatarname: 'GH',
    company: 'Google Inc.',
    position: 'Full-stack developer',
    hourlyRate: '$60 per hour',
    fullTime: true,
    address: '123 6th St. Melbourne, FL 32904',
    appliedDate: '04 Jan, 2019',
  },
  {
    avatar:avatar1,
    // avatarname: 'FB',
    company: 'Facebook Inc.',
    position: 'Marketing',
    hourlyRate: '$57 per hour',
    fullTime: false,
    address: '44 Shirley Ave. IL 60185',
    appliedDate: '12 Jan, 2019',
  },
  {
    // avatar:avatar1,
    avatarname: 'FB',
    company: 'Facebook Inc.',
    position: 'Full-stack developer',
    hourlyRate: '$43 per hour',
    fullTime: true,
    address: '44 Shirley Ave. IL 60185',
    appliedDate: '15 Jan, 2019',
  },
  {
    avatar:avatar1,
    // avatarname: 'FB',
    company: 'Facebook Inc.',
    position: 'Web Application Developer',
    hourlyRate: '$55 per hour',
    fullTime: true,
    address: '514 S. Magnolia St. Orlando',
    appliedDate: '18 Jan, 2019',
  },
  {
    
    avatarname: 'KT',
    company: 'Facebook Inc.',
    position: 'Designer',
    hourlyRate: '$43 per hour',
    fullTime: false,
    address: '44 Shirley Ave. IL 60185',
    appliedDate: '24 Jan, 2019',
  },
  {
    avatar:avatar1,
    // avatarname: 'IQ',
    company: 'iQuar Inc.',
    position: 'Sr. SQL Server Developer',
    hourlyRate: '$33 per hour',
    fullTime: true,
    address: '44 Shirley Ave. IL 60185',
    appliedDate: '05 Feb, 2019',
  },
  {
    avatar:avatar1,
    // avatarname: 'LI',
    company: 'LinkedIn Inc.',
    position: 'Full-stack developer',
    hourlyRate: '$39 per hour',
    fullTime: true,
    address: '44 Shirley Ave. IL 60185',
    appliedDate: '11 March, 2019',
  },
];

const determineTagColor = (isFullTime) => {
  return {
    backgroundColor: isFullTime ? '#5cb85c' : '#f0ad4e',
    padding: '5px 10px', 
    borderRadius: '5px',    
  };
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
                      <div className="col-lg-4 col-md-4 col-sm-6">
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
                      <div className="col-lg-3 col-md-4 col-sm-6">
                        <label>Status</label>
                        <div className="multiselect_div">
                          <select
                            className="form-select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                          >
                            <option>None Selected</option>
                            <option value="1">All Status</option>
                            <option value="2">New</option>
                            <option value="3">Contacted</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6">
                        <label>Order</label>
                        <div className="form-group">
                          <select
                            className="form-select"
                            value={order}
                            onChange={(e) => setOrder(e.target.value)}
                          >
                            <option>Newest first</option>
                            <option value="1">Oldest first</option>
                            <option value="2">Low salary first</option>
                            <option value="3">High salary first</option>
                            <option value="4">Sort by name</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6">                     
                        <Link to="fake_url" className="btn btn-sm d-grid btn-primary btn-block btn-top mt-4" onClick={handleFilter}>
                          Filter
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-hover table-vcenter table_custom text-nowrap spacing5 border-style mb-0">
                    <tbody>
                      {jobsData.map((job, index) => (
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
                          <td>
                            <div className="font-15">{job.company}</div>
                            <span className="text-muted">{job.position}</span>
                          </td>
                          <td>{job.hourlyRate}</td>
                          <td>
                            <span className={`tag ${job.fullTime ? 'tag-success' : 'tag-warning'}`}
                             style={determineTagColor(job.fullTime)}
                             >
                              
                              {job.fullTime ? 'Full-time' : 'Part-time'}
                            </span>
                          </td>
                          <td>
                            <span>{job.address}</span>
                          </td>
                          <td className="text-right">
                            Applied on: <strong>{job.appliedDate}</strong>
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
        <Footer/>  
    </div>
   </div>
   </>
  )
}
