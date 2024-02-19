import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX} from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from '../../components/DropdownMenu';
import { FlagIcon } from 'react-flag-kit';
import avatar1 from '../../assets/images/avatar1.jpg';
import img from '../../assets/images/we-released.svg'
import Sidebar from '../../layouts/Sidebar';

export default function JobDashboard() {
    const markers = [
    { x: 397.7892828072126, y: 401.68026946737984, text: 'Buenos Aires' },
    { x: 332.3418414831312, y: 277.45972425075945, text: 'La Paz' },
    { x: 467.89906750420397, y: 272.5964222165743, text: 'Brasilia' },
    { x: 325.9342429002873, y: 396.9444215177014, text: 'Santiago' },
    { x: 285.91925609328814, y: 132.66160445020446, text: 'Bogota' },
    { x: 255.78872111900586, y: 169.0750786246498, text: 'Quito' },
    { x: 398.89472489713796, y: 114.5931927829775, text: 'Georgetown' },
    { x: 402.68040597425943, y: 336.73824410921804, text: 'Asuncion' },
    { x: 419.9222401268684, y: 121.1599198979751, text: 'Paramaribo' },
    { x: 410.5981936496399, y: 415.8048678035218, text: 'Montevideo' },
    { x: 336.715416946986, y: 90.75919388795106, text: 'Caracas' },
    { x: 270.40845016842167, y: 251.23758349443403, text: 'Lima' },
        
      ];

      const progressData = [
        { percentage: 35, year: 2018, country: 'USA' },
        { percentage: 61, year: 2018, country: 'India' },
        { percentage: 37, year: 2018, country: 'Australia' },
      ];


    //   Table Data

      const data = [
        {
            avatar: avatar1,
            name: 'Marshall Nichols',
            email: 'marshall-n@gmail.com',
            position: 'Full-stack developer',
            date: '24 Jun, 2015',
            action: 'Interview',
          },
          {
            avatarname: 'SW',
            name: 'Susie Willis',
            email: 'sussie-w@gmail.com',
            position: 'Designer',
            date: '28 Jun, 2015',
            action: 'Interview',
          },
          {
            avatar: avatar1,
            name: 'Debra Stewart',
            email: 'debra@gmail.com',
            position: 'Project Manager',
            date: '21 July, 2015',
            action: 'Cancel',
          },
          {
            avatarname: 'FV',
            name: 'Francisco Vasquez',
            email: 'francisv@gmail.com',
            position: 'Senior Developer',
            date: '18 Jan, 2016',
            action: 'Interview',
          },
          {
            avatar: avatar1,
            name: 'Jane Hunt',
            email: 'jane-hunt@gmail.com',
            position: 'Front-end Developer',
            date: '08 Mar, 2016',
            action: 'Interviewed',
          },
        ];
        
    
      const getButtonColor = (action) => {
        switch (action) {
          case 'Interview':
            return '#D98CD7';
          case 'Cancel':
            return '#D98CD7';
          case 'Interviewed':
            return '#2c2945';
          default:
            return 'info';
        }
      };
  return (
    <>
    <div className='main d-flex'>
        <Sidebar/>
        <div className='pagewidth px-3'>
        <Header/>
        <div className='section mt-3'>
            <div className='container-fluid'>
                <div className='row row-deck flex-wrap'>
                    <div className='col-lg-6 col-md-12 col-sm-12  d-flex align-item-stretch mb-2'>
                        <div className='card p-1'>
                            <div className="card-header bg-white border-0 d-flex justify-content-between">
                                <h6 className="card-title">TOP LOCATIONS</h6>
                                <div className="card-options d-flex">
                                    <span className="card-options-remove mx-2" data-toggle="card-remove">
                                    <FontAwesomeIcon icon={faX} /> 
                                    </span>
                                <DropdownMenu/>
                                </div>
                            </div>
                            <div className="card-body">
                            <svg viewBox="0 0 800 600" className="rsm-svg">
                                <g className="rsm-geographies"></g>
                                {markers.map((marker, index) => (
                                <g key={index} transform={`translate(${marker.x}, ${marker.y})`} className="rsm-marker">
                                    <g fill="none" stroke="#FF5533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(-12, -24)">
                                    <circle cx="12" cy="10" r="3"></circle>
                                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"></path>
                                    </g>
                                    <text textAnchor="middle" y={marker.text.includes('Georgetown') ? '-30' : '15'} style={{ fontFamily: 'system-ui', fill: 'rgb(93, 90, 109)' }}>{marker.text}</text>
                                </g>
                                ))}
                            </svg>
                            </div>

                            <div className="card-footer bg-white">
                                <div className="row d-flex">
                                    {progressData.map((data, index) => (
                                    <div key={index} className="col-xl-4 col-md-12 mb-3">
                                        <div className="clearfix">
                                            <div className='d-flex justify-content-between'>
                                                <strong>{data.percentage}%</strong>
                                                <small className="text-muted">{data.year}</small>
                                            </div>
                                        </div>
                                        <div className="progress progress-xs">
                                            <div
                                                className="progress-bar bg-secondary"
                                                role="progressbar"
                                                aria-valuenow={data.percentage}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{ width: `${data.percentage}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-uppercase text-secondary">{data.country}</span>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-item-stretch mb-2'>                      
                        <div className='card p-1'>
                            <div className="card-header bg-white border-0 d-flex justify-content-between">
                                <h6 className="card-title">JOB VIEW</h6>
                                <div className="card-options d-flex">
                                    <span className="card-options-remove mx-2" data-toggle="card-remove">
                                    <FontAwesomeIcon icon={faX} /> 
                                    </span>
                                <DropdownMenu/>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row text-center">
                                    <div className="col-lg-4 col-sm-12 border-right">
                                    <label className="mb-0 font-10"><small>All Time</small></label>
                                    <h4 className="font-20 font-weight-bold">2,025</h4>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 border-right">
                                    <label className="mb-0 font-10"><small>Last Month</small></label>
                                    <h4 className="font-20 font-weight-bold">754</h4>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                    <label className="mb-0 font-10"><small>Today</small></label>
                                    <h4 className="font-20 font-weight-bold">54</h4>
                                    </div>
                                </div>
                                <hr />
                                <table className="table table-striped mt-4">
                                    <tbody>
                                    <tr>
                                        <td>
                                        <label className="d-block"><small>Biology - BIO </small><span className="float-right">43%</span></label>
                                        <div className="progress progress-xs mt-1">
                                            <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style={{ width: '43%' }}></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <label className="d-block"><small>Business Analysis - BUS</small> <span className="float-right">27%</span></label>
                                        <div className="progress progress-xs mt-1">
                                            <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100" style={{ width: '27%' }}></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <label className="d-block"><small>Computer Technology - CT</small> <span className="float-right">81%</span></label>
                                        <div className="progress progress-xs mt-1">
                                            <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{ width: '81%' }}></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <label className="d-block"><small>Management - MGT </small><span className="float-right">61%</span></label>
                                        <div className="progress progress-xs mt-1">
                                            <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100" style={{ width: '61%' }}></div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <label className="d-block"><small>Angular Dev</small> <span className="float-right">77%</span></label>
                                        <div className="progress progress-xs mt-1">
                                            <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{ width: '77%' }}></div>
                                        </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer bg-white">
                                <small>
                                    Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="/#">Learn More</a>
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-6 d-flex align-item-stretch'>                      
                        <div className='card p-1'>
                            <div className="card-header bg-white border-0 d-flex justify-content-between">
                                    <h6 className="card-title">CURRENT JOB OPENINGS</h6>
                                    <div className="card-options d-flex">
                                        <span className="card-options-remove mx-2" data-toggle="card-remove">
                                        <FontAwesomeIcon icon={faX} /> 
                                        </span>
                                    <DropdownMenu/>
                                    </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-vcenter table_custom spacing5 mb-0">
                                    <tbody className='jobFlag'>
                                        <tr>
                                        <td className="w40">
                                            <FlagIcon code="US" size={25} className='mt-2'/>
                                        </td>
                                        <td>
                                            <small>United States</small>
                                            <h5 className="mb-0">434</h5>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <FlagIcon code="AU" size={25} className='mt-2'/>                                              
                                        </td>
                                        <td>
                                            <small>Australia</small>
                                            <h5 className="mb-0">215</h5>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <FlagIcon code="CA" size={25} className='mt-2'/>                                            
                                        </td>
                                        <td>
                                            <small>Canada</small>
                                            <h5 className="mb-0">105</h5>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <FlagIcon code="GB" size={25} className='mt-2'/>                                          
                                        </td>
                                        <td>
                                            <small>United Kingdom</small>
                                            <h5 className="mb-0">250</h5>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            <FlagIcon code="NL" size={25} className='mt-2'/>                                            
                                        </td>
                                        <td>
                                            <small>Netherlands</small>
                                            <h5 className="mb-0">52</h5>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer bg-white">
                                <small>
                                    Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="/#">Learn More</a>
                                </small>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row row-deck flex-wrap mt-3'>
                    <div className='col-lg-8 col-md-12 col-sm-12'>
                        <div className='card'>
                            <div className="card-header bg-white border-0 d-flex justify-content-between">
                                <h6 className="card-title">TOP LOCATIONS</h6>
                                <div className="card-options d-flex">
                                    <span className="card-options-remove mx-2" data-toggle="card-remove">
                                    <FontAwesomeIcon icon={faX} /> 
                                    </span>
                                <DropdownMenu/>
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped table-vcenter mb-0">
                                    <thead>
                                        <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Apply for</th>
                                        <th>Date</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                        <tr key={index}>
                                            
                                            <td>{item.avatar ? (
                                            <img
                                                src={item.avatar}
                                                alt=""
                                                className="avatar rounded-circle avatar-sml"
                                            />
                                            ) : (
                                            <span className="avatar rounded-circle avatar-sml">{item.avatarname}</span>
                                            )}
                                            </td>
                                            <td>
                                            <div className="font-15">{item.name}</div>
                                            <span className="text-muted">{item.email}</span>
                                            </td>
                                            <td>
                                            <span>{item.position}</span>
                                            </td>
                                            <td>{item.date}</td>
                                            <td>
                                            <span
                                                style={{
                                                backgroundColor: getButtonColor(item.action),
                                                padding: '3px',
                                                borderRadius: '5px',
                                                color: 'white',
                                                }}
                                            >
                                                {item.action}
                                            </span>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    </table>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="card">
                            <div className="card-body text-center d-flex align-items-center justify-content-center">
                                <div style={{ maxWidth: '340px' }}>
                                <img
                                    src={img}
                                    alt="..."
                                    className="img-fluid mb-4 mt-4"
                                    style={{ maxWidth: '272px' }}
                                />
                                <h5 className="mb-2">We released Bootstrap 4x versions of our theme.</h5>
                                <p className="text-muted">
                                    This is a true story and totally not made up. This is going to be better in the long run but for now, this is the way it is.
                                </p>
                                <a href="#!" className="btn btn-primary btn-top">
                                    Try it for free
                                </a>
                                </div>
                            </div>
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
