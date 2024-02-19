import React, {useEffect, useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import avatar1 from '../../assets/images/avatar1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX} from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from '../../components/DropdownMenu';
import Select from 'react-select';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from '../../layouts/Sidebar';


export default function Setting() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  


  const gender = [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' },
  ]
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryList = response.data.map((country) => ({
          value: country.cca2,
          label: country.name.common,
        }));
        setCountries(countryList);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  
  return (
   <>
   <div className='main d-flex'>
    <Sidebar/>
    <div className='pagewidth px-3'>
        <Header/>

        <div className='section-body mt-3'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-4 col-md-12'>
                <ul className="list-group mb-3">
                  <li className="list-group-item">
                    <div className="media mb-0 d-flex">
                      <img className="rounded setting-img mr-3" src={avatar1} alt="fake_url" />
                      <div className="media-body">
                        <h5 className="m-0">Deborah Cox</h5>
                        <p className="text-muted mb-0">Webdeveloper</p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <small className="text-muted">Title: </small>
                    <p className="mb-0">FaceBook Inc.</p>
                  </li>
                  <li className="list-group-item">
                    <small className="text-muted">Address: </small>
                    <p className="mb-0">44 Shirley Ave. IL 60185</p>
                  </li>
                  <li className="list-group-item">
                    <small className="text-muted">Date: </small>
                    <p className="mb-0">07 Feb 2019</p>
                  </li>
                  <li className="list-group-item">
                    <div>In Progress</div>
                    <div className="progress progress-xs mt-2">
                      <div className="progress-bar bg-success" data-transitiongoal="67" aria-valuenow="67" style={{ width: '67%' }}></div>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Notifications
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked/>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                  Messages
                    <div className="form-check">
                      <input className="form-check-input " type="checkbox" value="" id="flexCheckChecked2" checked/>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                  Message email
                    <div className="form-check">
                      <input className="form-check-input " type="checkbox" value="" id="flexCheckChecked3"/>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                  Applicant email
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" checked/>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='col-lg-8 col-md-12'>
                <div className='card px-3 pt-3'>
                  <div className="card-header bg-white border-0 d-flex justify-content-between">
                    <h6 className="card-title">GENERAL SETTINGS</h6>
                    <div className="card-options d-flex">
                        <span className="card-options-remove mx-2" data-toggle="card-remove">
                        <FontAwesomeIcon icon={faX} /> 
                        </span>
                    <DropdownMenu/>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className='row'>
                      <div className='col-lg-6 col-md-12 col-sm-12 mb-2'>
                      <input type="email" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder='First Name'/>
                      </div>

                      <div className='col-lg-6 col-md-12 col-sm-12 mb-2'>
                      <input type="email" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder='Last Name'/>
                      </div>

                      <div className='col-lg-4 col-md-4 col-sm-4 mb-2'>
                      <Select options={gender} 
                      placeholder="---Select Gender---"/>
                      </div>

                      <div className='col-lg-4 col-md-4 col-sm-4 mb-2'>
                        <div className="form-group">
                            <div className="input-group">
                              <div className="react-datepicker-wrapper">
                                <div className="react-datepicker__input-container">
                                  <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>                     
                      </div>

                      <div className='col-lg-4 col-md-4 col-sm-4 mb-2'>
                        <div className='input-group'>
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" placeholder="http://" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>  
                      </div>





                      <div className='col-lg-4 col-md-4 col-sm-4 mb-2'>
                      <Select options={countries} 
                      placeholder="---Select Country---"/>
                      </div>

                      <div className='col-lg-4 col-md-4 col-sm-4 mb-2'>
                      <input type="email" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder='State/Province'/>
                      </div>

                      <div className='col-lg-4 col-md-4 col-sm-4 mb-2'>
                      <input type="email" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder='City'/>
                      </div>

                      <div className='col-lg-12 col-md-12 col-sm-12 mb-2'>
                      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Address' rows="3"></textarea>
                      </div>

                      <div className="d-grid gap-2 d-md-block">
                      <button className="btn btn-primary btn-top" type="button">Update</button>
                      <button className="btn btn-light border mx-2" type="button">Cancel</button>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <div className='card mt-3 p-3'>
                  <div className="card-header bg-white border-0 d-flex justify-content-between">
                      <h6 className="card-title">ACCOUNT DATA</h6>
                      <div className="card-options d-flex">
                          <span className="card-options-remove mx-2" data-toggle="card-remove">
                          <FontAwesomeIcon icon={faX} /> 
                          </span>
                      <DropdownMenu/>
                      </div>
                  </div>

                  
                  <div className='card-body'>
                    <div className='row'> 
                      <div className='col-lg-4 col-md-4 col-sm-4'>
                      <input type="password" className="form-control mb-2" id="exampleInputText" placeholder='louispierce' disabled/>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-4'>
                      <input type="password" className="form-control mb-2" id="exampleInputEmail" placeholder='louis.info@yourdomain.com'/>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-4'>
                      <input type="password" className="form-control mb-2" id="exampleInputPhone" placeholder='Phone Number'/>
                      </div>
                    </div>
                  <hr />
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"> Change Password</label>
                        <input type="password" className="form-control mb-2" id="exampleInputPassword1" placeholder='Current Password'/>
                        <input type="password" className="form-control mb-2" id="exampleInputPassword2" placeholder='New Password'/>
                        <input type="password" className="form-control" id="exampleInputPassword3" placeholder='Confirm New Password'/>
                    </div>

                    <div className="d-grid gap-2 d-md-block">
                      <button className="btn btn-primary btn-top" type="button">Update</button>
                      <button className="btn btn-light border mx-2" type="button">Cancel</button>
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
