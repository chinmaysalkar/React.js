import React, {useState} from 'react'
import Employeeindex from './Employeeindex'
import avatar1 from '../../assets/images/avatar1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTimes, faPhone} from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook, faTwitter, faSkype } from '@fortawesome/free-brands-svg-icons';

export default function VIewEmplyoee() {


  
  //Statistics  
  const [isCardCollapsed, setCardCollapsed] = useState(false);

  const toggleCardCollapse = () => {
    setCardCollapsed(!isCardCollapsed);
  };


  return (
    <div>
    
        <Employeeindex/>

        <div className="row mt-3">
          <div className="col-lg-4 col-md-12 mb-3">
              <div className="card border-0">
              <div className="card-body">
                  <div className="media mb-4">
                  <img className="avatar avatar-xl mr-3 img-rounded" src={avatar1} alt="avatar" />
                  <div className="media-body">
                      <h5 className="m-0">Sara Hopkins</h5>
                      <p className="text-muted mb-0">Webdeveloper</p>
                      <ul className="social-links list-inline mb-0 mt-2">
                      <li className="list-inline-item "><a href="fake_url" data-toggle="tooltip" data-original-title="Facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                      <li className="list-inline-item"><a href="fake_url" data-toggle="tooltip" data-original-title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                      <li className="list-inline-item"><a href="fake_url" data-toggle="tooltip" data-original-title="1234567890"><FontAwesomeIcon icon={faPhone} /></a></li>
                      <li className="list-inline-item"><a href="fake_url" data-toggle="tooltip" data-original-title="@skypename"><FontAwesomeIcon icon={faSkype} /></a></li>
                      </ul>
                  </div>
                  </div>
                  <p className="mb-4 text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  <button className="btn btn-outline-primary btn-sm"><span><FontAwesomeIcon icon={faTwitter} /></span> Follow</button>
              </div>



              </div>
            <div className="card card-collapsed mt-3 border-0">

              <div className="card-header border-0 bg-white d-flex justify-content-between" >
              <div><h6 className="card-title">STATISTICS</h6></div>
          
              <div className="card-options">
                <span className="card-options-collapse mx-3" data-toggle="card-collapse" onClick={toggleCardCollapse}>
                  {isCardCollapsed ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronUp} />
                  )}
                </span>
                <span className="card-options-remove " data-toggle="card-remove">
                <FontAwesomeIcon icon={faTimes} />
                </span>
              </div>
              </div>

              {!isCardCollapsed && (
                <div className="card-body">
                  <div className="text-center">
                  <div className="row">
                      <div className="col-6 pb-3">
                      <label className="mb-0">Project</label>
                      <h4 className="font-30 font-weight-bold">45</h4>
                      </div>
                      <div className="col-6 pb-3">
                      <label className="mb-0">Growth</label>
                      <h4 className="font-30 font-weight-bold">87%</h4>
                      </div>
                  </div>
                  </div>

                  {/* Laravel Progress */}
                  <div className="form-group mb-3">
                  <label className="d-block">Laravel<span className="float-right">77%</span></label>
                  <div className="progress progress-xs">
                      <div className="progress-bar bg-blue" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{ width: '77%' }}></div>
                  </div>
                  </div>

                  {/* HTML Progress */}
                  <div className="form-group mb-3">
                  <label className="d-block">HTML<span className="float-right">50%</span></label>
                  <div className="progress progress-xs">
                      <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div>
                  </div>
                  </div>

                  {/* Photoshop Progress */}
                  <div className="form-group mb-3">
                  <label className="d-block">Photoshop <span className="float-right">23%</span></label>
                  <div className="progress progress-xs">
                      <div className="progress-bar bg-green" role="progressbar" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" style={{ width: '23%' }}></div>
                  </div>
                  </div>
              </div>
              )}
              
              
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="card border-0">
              <div className="card-body">
                <ul className="new_timeline mt-3">
                  <li className='mb-3'>
                  <div className="bullet pink"></div>
                    <small className="time text-secondary">11:00am</small>
                    <div className='desc'>
                      <h5 className='mb-0'>Attendance</h5>
                      <small className='text-secondary'>Computer Class</small>  
                    </div>
                  </li>

                  <li className='mb-3'>
                    <div className="bullet pink"></div>
                    <small className="time text-secondary">11:30am</small>
                    <div className="desc">
                      <h5 className='mb-0'>Added an interest</h5>
                      <small className='text-secondary'>“Volunteer Activities”</small>
                      <p className='mt-4'>
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature
                        from 45 BC, making it over 2000 years old.
                      </p>
                    </div>
                  </li>

                  <li className='mb-3'>
                    <div className="bullet green"></div>
                    <small className="time text-secondary">12:00pm</small>
                    <div className="desc">
                      <h5 className='mb-0'>Developer Team</h5>
                      <small className='text-secondary'>Hangouts</small>
                      <ul className="list-unstyled team-info margin-0 p-t-5 d-flex mt-2">
                        <li>
                          <img src={avatar1} className='avatar avatar-sml' alt="Avatar" />
                        </li>
                        <li>
                          <img src={avatar1} className='avatar avatar-sml' alt="Avatar" />
                        </li>
                        <li>
                          <img src={avatar1} className='avatar avatar-sml' alt="Avatar" />
                        </li>
                        <li>
                          <img src={avatar1} className='avatar avatar-sml' alt="Avatar" />
                        </li>
                      </ul>
                    </div>
                  </li>


                  <li className='mb-3'>
                    <div className="bullet green"></div>
                    <small className="time text-secondary">2:00pm</small>
                    <div className="desc">
                      <h5 className='mb-0'>Responded to need</h5>
                      <small className='text-secondary'>“In-Kind Opportunity”</small>
                    </div>
                  </li>

                  <li className='mb-3'>
                    <div className="bullet orange"></div>
                    <small className="time text-secondary">1:30pm</small>
                    <div className="desc">
                      <h5>Lunch Break</h5>
                    </div>
                  </li>

                  <li className='mb-3'>
                    <div className="bullet green"></div>
                    <small className="time text-secondary">2:38pm</small>
                    <div className="desc">
                      <h5 className='mb-0'>Finish</h5>
                      <small className='text-secondary'>Go to Home</small>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}
