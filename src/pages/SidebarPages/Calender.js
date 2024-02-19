import React,{useState} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Sidebar from '../../layouts/Sidebar';

export default function Calender() {
    const localizer = momentLocalizer(moment);

    const [checkboxValues, setCheckboxValues] = useState({
        reportPanelUsage1: true,
        reportPanelUsage2: false,
        logoDesign: true,
        designPSDFiles: false,
      });
    
      
      const handleCheckboxChange = (name) => {
        setCheckboxValues((prevValues) => ({
          ...prevValues,
          [name]: !prevValues[name],
        }));
      };
  return (
   <>
   <div className='main d-flex'>
    <Sidebar/>
    <div className='calender-main px-3'>
        <div>
        <Header/>
        </div>
        <div className='row'>

            <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className="card mt-3 border-0">
                    <div className="card-body">
                        <h5 className="card-title">EVENTS LIST</h5>
                        

                        <div id="event-list" className="fc event_list text-white">
                            <div className="card fc-event bg-primary mb-1 px-3 text-white border-0" data-class="bg-primary">
                                My Event 1
                            </div>
                            <div className="card fc-event bg-info mb-1 px-3 text-white border-0" data-class="bg-info">
                                Birthday Party
                            </div>
                            <div className="card fc-event bg-success mb-1 px-3 text-white border-0" data-class="bg-success">
                                Meeting
                            </div>
                            <div className="card fc-event bg-warning mb-1 px-3 text-white border-0" data-class="bg-warning">
                                Conference
                            </div>
                            <div className="card fc-event bg-danger px-3 text-white border-0" data-class="bg-danger">
                                My Event 5
                            </div>
                        </div>

                        {/* ToDo List */}
                        <div className="todo_list mt-4">
                        <h5 className="card-title">
                            TODO LIST 
                        </h5>
                        <h6 className='text-secondary'>This Month task list</h6>
                        <ul className="list-unstyled mb-0 mt-3">
                            {/* Checkbox items */}
                            <li>
                            <label className="custom-control custom-checkbox mb-2">
                                <input
                                type="checkbox"
                                className="form-check-input"
                                name="reportPanelUsage1"
                                checked={checkboxValues.reportPanelUsage1}
                                onChange={() => handleCheckboxChange('reportPanelUsage1')}
                                />
                                <span className="custom-control-label mx-2">Report Panel Usage 1</span>
                            </label>
                            </li>
                            <li>
                            <label className="custom-control custom-checkbox mb-2">
                                <input
                                type="checkbox"
                                className="form-check-input"
                                name="reportPanelUsage2"
                                checked={checkboxValues.reportPanelUsage2}
                                onChange={() => handleCheckboxChange('reportPanelUsage2')}
                                />
                                <span className="custom-control-label mx-2">Report Panel Usage 2</span>
                            </label>
                            </li>
                            <li>
                            <label className="custom-control custom-checkbox mb-2">
                                <input
                                type="checkbox"
                                className="form-check-input"
                                name="logoDesign"
                                checked={checkboxValues.logoDesign}
                                onChange={() => handleCheckboxChange('logoDesign')}
                                />
                                <span className="custom-control-label mx-2">New logo design for Angular Admin</span>
                            </label>
                            </li>
                            <li>
                            <label className="custom-control custom-checkbox mb-2">
                                <input
                                type="checkbox"
                                className="form-check-input"
                                name="designPSDFiles"
                                checked={checkboxValues.designPSDFiles}
                                onChange={() => handleCheckboxChange('designPSDFiles')}
                                />
                                <span className="custom-control-label mx-2">Design PSD files for Angular Admin</span>
                            </label>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-md-8 col-sm-6 col-xsm-3'>
                <div className='calender-main'>
                <div className='card mx-3 mt-3 px-3 pt-3 pb-3 border-0'>
                    <div className='card-header mb-2 bg-white'>
                    <div><h6 className='text-secondary'>SARA HOPKINS</h6></div>
                    <div></div>      
                    </div>
                    <div className='table-responsive p-1'>
                    <Calendar
                        localizer={localizer}
                        className='col-md-12 col-sm-6 col-xsm-3'
                        // events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 600 }}
                    />
                    </div>
                </div>
                </div>
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
