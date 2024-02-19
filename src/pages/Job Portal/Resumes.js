import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import ListView from '../../components/Job Portal/Resumes/ListView';
import GridView from '../../components/Job Portal/Resumes/GridView';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar';


export default function Resumes() {
  const [search, setSearch] = useState('');
  const [hourlyRate, setHourlyRate] = useState('All rates');
  const [academicDegree, setAcademicDegree] = useState('All degrees');
  const [order, setOrder] = useState('Relevance');

  
  const handleFilter = () => {
    console.log('Search:', search);
    console.log('Hourly Rate:', hourlyRate);
    console.log('Academic Degree:', academicDegree);
    console.log('Order:', order);
  };

  const [activeButton, setActiveButton] = useState('listview');
  const [currentComponent, setCurrentComponent] = useState('listview');

    const handleButtonClick = (componentName) => {
        setCurrentComponent(componentName);
        setActiveButton(componentName);
    };

  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='pagewidth mx-3'>
        <Header/>

        <div className='d-flex justify-content-between mx-2 top-change-btn'>
        <div className='all-top'>
          <button onClick={() => handleButtonClick('listview')} className={`top-bar-btn mx-2 ${activeButton === 'listview' ? 'text-secondary border-top-2' : ''}`}>List View</button>
          <button onClick={() => handleButtonClick('gridview')} className={`top-bar-btn mx-2 ${activeButton === 'gridview' ? 'text-secondary border-top-2' : ''}`}>Grid View</button>
        </div>

        <div className='d-flex pt-2'>
          <Form.Control
            type='search'
            placeholder='Search something...'
            className='me-2'
            aria-label='Search'
          />
          <Button variant="primary" className='mx-1 btn-top'>
            +Add
          </Button>
        </div>
        </div>



        <div className='section-body mt-3'>
          <div className='container-fluid'>
            <div className='d-flex justify-content-between align-item-center'>

            </div>
            <div className='row'>
              <div className='col-12'>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-3 col-md-4 col-sm-6">
                        <label>Search</label>
                        <div className="input-group mt-2">
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
                        <label>Hourly Rate</label>
                        <div className="multiselect_div mt-2">
                          <select
                            className="form-select"
                            value={hourlyRate}
                            onChange={(e) => setHourlyRate(e.target.value)}
                          >
                            <option>All rates</option>
                            <option value="1">$0 - $50</option>
                            <option value="2">$50 - $100</option>
                            <option value="3">$100 - $200</option>
                            <option value="4">$200 - $500</option>
                            <option value="5">$500 +</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6">
                        <label>Academic Degree</label>
                        <div className="form-group mt-2">
                          <select
                            className="form-select"
                            value={academicDegree}
                            onChange={(e) => setAcademicDegree(e.target.value)}
                          >
                            <option>All degrees</option>
                            <option value="1">Associate degree</option>
                            <option value="2">Bachelor's degree</option>
                            <option value="3">Master's degree</option>
                            <option value="4">Doctoral degree</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6">
                        <label>Order</label>
                        <div className="form-group mt-2">
                          <select
                            className="form-select"
                            value={order}
                            onChange={(e) => setOrder(e.target.value)}
                          >
                            <option>Relevance</option>
                            <option value="1">Highest rate first</option>
                            <option value="2">Lowest rate first</option>
                            <option value="3">Highest degree first</option>
                            <option value="4">Lowest degree first</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6">
                        <label>&nbsp;</label>
                        <Link to="/" className="btn btn-sm d-grid btn-primary btn-block btn-top mt-2" onClick={handleFilter}>
                          Filter
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                {currentComponent === 'listview' && <ListView />}
                {currentComponent === 'gridview' && <GridView />}
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
