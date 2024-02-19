import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import IndexProject from '../../components/Project/IndexProject'
import Compo from '../../components/Project/ProjectDashboard/compo'
import Sidebar from '../../layouts/Sidebar'


export default function ProjectDashboard() {

  const [totalProjects] = useState(42);
  const [ongoingProjects] = useState(23);
  const [pendingProjects] = useState(8);

  const [progressBars] = useState([
    { label: 'Design Team', value: 35,  },
    { label: 'Developer Team', value: 25,  },
    { label: 'Marketing', value: 15,  },
    { label: 'Management', value: 20,  },
    { label: 'Other', value: 11,  },
  ]);

  const getColor = (value) => {
    if (value >= 30) {
      return '#3498db'; 
    } else if (value >= 20) {
      return '#2ecc71'; 
    } else if (value >= 10) {
      return '#e67e22'; 
    } else if (value >= 5) {
      return '#9b59b6'; 
    } else {
      return '#e74c3c'; 
    }
  };

  return (
   <>
   <div className='main d-flex'>
    <Sidebar/>
    <div className='pagewidth mx-3'>
      <Header/>
          <div className='mx-3 mt-3 dashbord-heading'>
              <h4>Welcome Jason Porter!</h4>
              <p>Measure How Fast You’re Growing Monthly Recurring Revenue. Learn More</p>
          </div> 
          <IndexProject/>

          <div className='section-body mx-1'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-4 col-md-12 col-sm-12 d-flex'>
                  <div className='card col-xlg-4 col-md-12 col-sm-12 d-flex'>
                    <div className='card-header bg-white border-0'>
                      <small className='card-title'>PROJECT STATISTICS</small>
                    </div>
                    <div className='card-body'>
                      <div className="row text-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 border-right pb-4 pt-4">
                          <label className="mb-0"><small className='d-flex'>Total<span className='mx-2'>Project</span></small></label>
                          <h2 className="font-30 font-weight-bold text-col-blue counter">
                            <span className='text-info'>{totalProjects}</span>
                          </h2>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 border-right pb-4 pt-4">
                          <label className="mb-0">On Going</label>
                          <h2 className="font-30 font-weight-bold text-col-blue counter">
                            <span className='text-success'>{ongoingProjects}</span>
                          </h2>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 pb-4 pt-4">
                          <label className="mb-0">Pending</label>
                          <h2 className="font-30 font-weight-bold text-col-blue counter">
                            <span className='text-danger'>{pendingProjects}</span>
                          </h2>
                        </div>
                      </div>

                      <div className="table-responsive">
                        <table className="table table-striped table-vcenter mb-0">
                          <tbody>
                            {progressBars.map((bar, index) => (
                              <tr key={index}>
                                <td>
                                  <div className="clearfix">
                                    <div className="float-left">
                                      <strong>{bar.value}%</strong>
                                    </div>
                                    <div className="float-right">
                                      <small className="text-muted">{bar.label}</small>
                                    </div>
                                  </div>
                                  <div className="progress progress-xs">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={bar.value}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: `${bar.value}%`, backgroundColor: getColor(bar.value) }}
                                  ></div>
                                  </div>
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
            </div>
          </div>

          <Compo/>


      <Footer/>
    </div>
   </div>
   </>
  )
}
