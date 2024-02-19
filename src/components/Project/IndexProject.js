import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faThumbsUp, faCreditCard, faCalculator, faChartPie, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function IndexProject() {
  return (
    <>
        <div className="row mx-1">
            <div className='col-6 col-md-4 col-xl-2 mb-3'>
                <div className='card card-index border-0'>
                    <div className=" card-body ribbon">
                        <div className="ribbon-box green">5</div>
                        <Link className="my_sort_cut text-muted d-flex justify-content-center flex-column text-center text-decoration-none mt-3" to="/projecttaskboard">
                        <FontAwesomeIcon icon={faUser} className='mx-2' />
                        <span>TaskBoard</span>
                        </Link>
                    </div>    
                </div>
            </div>
            <div className='col-6 col-md-4 col-xl-2 mb-3'>
                <div className='card card-index border-0'>
                    <div className='card-body ribbon'>
                    <div className="ribbon-box pink">8</div>
                        <Link className="my_sort_cut text-muted d-flex justify-content-center flex-column text-center text-decoration-none  mt-3" to="/todolist">
                        <FontAwesomeIcon icon={faThumbsUp} /> 
                        <p>Todo</p>                     
                        </Link>
                    </div>
                </div>
            </div>
            <div className='col-6 col-md-4 col-xl-2 mb-3'>
                <div className='card card-index border-0'>
                    <div className=" card-body">
                        <Link className="my_sort_cut text-muted d-flex justify-content-center flex-column text-center text-decoration-none mt-3" to="/payroll">
                        <FontAwesomeIcon icon={faCreditCard} />               
                        <span>Payroll</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='col-6 col-md-4 col-xl-2  mb-3'>
                <div className='card card-index border-0'>
                    <div className='card-body ribbon'>
                        <div className="ribbon-box orange">8</div>
                        <Link className="my_sort_cut text-muted d-flex justify-content-center flex-column text-center text-decoration-none mt-3" to="/events">
                        <FontAwesomeIcon icon={faFilePdf} />                
                        <span>New Ticket</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='col-6 col-md-4 col-xl-2  mb-3'>
                <div className='card card-index border-0'>
                    <div className='card-body'>
                        <Link className="my_sort_cut text-muted d-flex justify-content-center flex-column text-center text-decoration-none mt-3" to="/accounts">
                        <FontAwesomeIcon icon={faCalculator} />        
                        <span>Accounts</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='col-6 col-md-4 col-xl-2  mb-3'>
                <div className='card card-index border-0'>
                    <div className='card-body'>
                        <Link className="my_sort_cut text-muted d-flex justify-content-center flex-column text-center text-decoration-none mt-3" to="/report">
                        <FontAwesomeIcon icon={faChartPie} />
                        <span>Report</span>
                        </Link>  
                </div>
            </div>
            </div>
        </div>

    </>
  )
}
