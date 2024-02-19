import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Sidebar from '../../layouts/Sidebar';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Events() {
  
  const localizer = momentLocalizer(moment);


  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='calender-main px-3'>
      
        <div>
          <Header/>
        </div>

        <div className='card p-3 mt-3 table-responsive'>
          <div className='card-header mb-2 bg-white'>
            <div><h6 className='text-secondary'>SARA HOPKINS</h6></div>     
          </div>
        
        <div className='table-responsive'>
        <Calendar
          localizer={localizer}
          
          // events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
        />
        </div>        
        </div>

        <div>
          <Footer/>
        </div>
      
      
    </div>
    </div>
    </>
  )
}
