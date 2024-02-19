import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCircle, faStar, faStarHalfAlt,faX, faCheck,faTruck,faAngleLeft } from '@fortawesome/free-solid-svg-icons';  
import { faCcVisa as fabCcVisa  } from '@fortawesome/free-brands-svg-icons';  
import DropdownMenu from '../../DropdownMenu';
import avatar1 from  '../../../assets/images/avatar1.jpg'

export default function compo() {

    // CUSTOMER SATISFACTION  Data
    const progressData = [
        { value: 15, color: '' },
        { value: 20, color: 'bg-info' },
        { value: 30, color: 'bg-success' },
        { value: 5, color: 'bg-warning' },
        { value: 13, color: 'bg-indigo' },
      ];


      const data = [
        { status: 'Excellent', count: 3007, percentage: '50%', functionColor: 'text-success' },
        { status: 'Very Good', count: 1674, percentage: '25%', functionColor: 'text-warning' },
        { status: 'Good', count: 125, percentage: '6%', functionColor: 'text-info' },
        { status: 'Fair', count: 98, percentage: '5%', functionColor: 'text-secondary' },
        { status: 'Poor', count: 512, percentage: '10%', functionColor: 'text-danger' },
      ];


    // OVERALL RATING data
      const ratingData = [
        { rating: '5.0', stars: 5, count: 432, percentage: '58%' },
        { rating: '4.0', stars: 4, count: 189, percentage: '42%' },
        { rating: '3.0', stars: 3, count: 125, percentage: '23%' },
        { rating: '2.0', stars: 2, count: 89, percentage: '18%' },
        { rating: '1.0', stars: 1, count: 18, percentage: '11%' },
      ];


    // TRANSACTION HISTORY
    const transactionData = [
        {
          icon: faCheck,
          label: 'Payment from #1598',
          date: 'Feb 21, 2019, 3:30pm',
          amount: '$300',
          status: 'Done',
          function: 'payment'
        },
        {
          icon: faTruck,
          label: 'Process delivery to #85236',
          date: 'March 14, 2019, 2:30pm',
          amount: '$300',
          status: 'For pickup',
          function: 'delivery'
        },
        {
          icon: faAngleLeft,
          label: 'Process refund #4568',
          date: 'March 18, 2019, 6:30pm',
          amount: '$300',
          status: 'Done',
          function: 'refund'
        },
        {
          icon: fabCcVisa,
          label: 'Payment failed from #32658',
          date: 'April 27, 2019, 3:48pm',
          amount: '$300',
          status: 'Declined',
          function: 'paymentFailed'
        },
        {
          icon: faAngleLeft,
          label: 'Process refund #4568',
          date: 'March 18, 2019, 6:30pm',
          amount: '$300',
          status: 'Done',
          function: 'refund'
        }
      ];

      const getAvatarColorCode = (functionName) => {

        switch (functionName) {
          case 'payment':
            return '#00ff00';
          case 'delivery':
            return '#F9C9F4'; 
          case 'refund':
            return '#E8E8E4'; 
          case 'paymentFailed':
            return '#F4766A'; 
          default:
            return '#E8E8E4'; 
        }
      };


    //   PROJECT SUMMARY Data
      const projectsData = [
        {
          id: '#AD1245',
          clientName: 'Sean Black',
          team: [avatar1,avatar1,avatar1,avatar1],
          project: 'Angular Admin',
          projectCost: '$14,500',
          payment: 'Done',
          status: 'Delivered'
        },
        {
          id: '#DF1937',
          clientName: 'Sean Black',
          team: [avatar1,avatar1,avatar1,avatar1],
          project: 'Angular Admin',
          projectCost: '$14,500',
          payment: 'Pending',
          status: 'Delivered'
        },
        {
          id: '#YU8585',
          clientName: 'Merri Diamond',
          team: [avatar1,avatar1],
          project: 'One page html Admin',
          projectCost: '$500',
          payment: 'Done',
          status: 'Submit'
        },
        {
          id: '#AD1245',
          clientName: 'Sean Black',
          team: [avatar1,avatar1,avatar1,avatar1],
          project: 'Wordpress One page',
          projectCost: '$1,500',
          payment: 'Done',
          status: 'Delivered'
        },
        {
          id: '#GH8596',
          clientName: 'Allen Collins',
          team: [avatar1,avatar1,avatar1,avatar1],
          project: 'VueJs Application',
          projectCost: '$9,500',
          payment: 'Done',
          status: 'Delivered'
        }
      ];


      const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
          case 'delivered':
            return '#F0F46A ';
          case 'submit':
            return '#DF84A4';
            default:
              return '#ffffff';
        }
      };
    
      
  return (
    <>

        <div className='section-body mt-3 mx-1'>
            <div className='container-fluid'>
                <div className='row d-flex'>
                    <div className='col-xl-4 col-lg-6 col-md-6 mb-3'>
                        <div className='card d-flex'>
                            <div className='card-header bg-white border-0 d-flex'>
                                <small className='card-title'>
                                CUSTOMER SATISFACTION
                                </small>
                            </div>

                            <div className="card-body">
                                <div className="d-flex align-items-baseline">
                                    <h1 className="mb-0 mr-2">9.8</h1>
                                    <p className="mb-0"><span className="text-success">1.6% <FontAwesomeIcon icon={faArrowUp}/></span></p>
                                </div>
                                <small className="text-uppercase font-10">Performance Score</small>
                                <div className="progress progress-xs">
                                    {progressData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`progress-bar ${item.color}`}
                                        role="progressbar"
                                        aria-valuenow={item.value}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${item.value}%` }}
                                    ></div>
                                    ))}
                                </div>
                            </div>

                            <div className="table-responsive pb-5 mx-1">
                                <table className="table table-striped table-vcenter mb-0">
                                    <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                        <td>
                                        <FontAwesomeIcon icon={faCircle} className={item.functionColor}/>
                                        </td>
                                        <td className="tx-medium">{item.status}</td>
                                        <td className="text-right">{item.count}</td>
                                        <td className="text-right">{item.percentage}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-6 mb-3'>
                        <div className='card'>
                            <div className='card-header bg-white border-0 d-flex'>
                                <small className='card-title'>
                                OVERALL RATING
                                </small>
                            </div>

                            <div className="card-body">
                                <div className="d-flex align-items-baseline">
                                    <h2 className="font-28 mr-2">4.2</h2>
                                    <div className="font-14">
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <p className="mb-0 font-12">Overall the quality of your support team’s efforts Rating.</p>
                            </div>

                            <div className="table-responsive pb-3 mx-1">
                                <table className="table table-striped table-vcenter mb-0">
                                    <tbody>
                                    {ratingData.map((item, index) => (
                                        <tr key={index}>
                                        <td>
                                            <strong>{item.rating}</strong>
                                        </td>
                                        <td>
                                            {Array.from({ length: item.stars }, (_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} />
                                            ))}
                                            {item.stars < 5 && (
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                            )}
                                        </td>
                                        <td className="text-right">{item.count}</td>
                                        <td className="text-right">{item.percentage}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-12 col-md-12'>
                        <div className='card'>
                            <div className="card-header bg-white border-0 d-flex justify-content-between">
                                <h6 className="card-title">TRANSACTION HISTORY</h6>
                                <div className="card-options d-flex">
                                    <span className="card-options-remove mx-2" data-toggle="card-remove">
                                    <FontAwesomeIcon icon={faX} /> 
                                    </span>
                                <DropdownMenu/>
                                </div>
                            </div>

                            <table className="table card-table mt-2">
                            <tbody>
                                {transactionData.map((transaction, index) => (
                                <tr key={index}>
                                    <td className="width45">
                                    <span
                                        style={{
                                        backgroundColor: getAvatarColorCode(transaction.function),
                                        }}
                                        className="avatar"
                                    >
                                        <FontAwesomeIcon icon={transaction.icon} />
                                    </span>
                                    </td>
                                    <td>
                                    <p className="mb-0">{transaction.label}</p>
                                    <span className="text-muted font-13">{transaction.date}</span>
                                    </td>
                                    <td className="text-right">
                                    <p className="mb-0">{transaction.amount}</p>
                                    <span
                                        className={`${
                                        transaction.status === 'Done'
                                            ? 'text-success'
                                            : 'text-danger'
                                        } font-13`}
                                    >
                                        {transaction.status}
                                    </span>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='row d-flex mt-3'>
                    <div className='col-12 col-sm-12'>
                        <div className='card'>
                            <div className='card-header bg-white border-0 d-flex mt-2'>
                                <small className='card-title'>
                                PROJECT SUMMARY
                                </small>
                            </div>
                            <div className='card-body'>
                                <div className="table-responsive">
                                <table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>CLIENT NAME</th>
                                        <th>TEAM</th>
                                        <th>PROJECT</th>
                                        <th>PROJECT COST</th>
                                        <th>PAYMENT</th>
                                        <th>STATUS</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {projectsData.map((project, index) => (
                                        <tr key={index}>
                                        <td>{project.id}</td>
                                        <td>{project.clientName}</td>
                                        <td>
                                            <ul className="list-unstyled team-info sm margin-0 w150 d-flex">
                                                {project.team.map((avatar, idx) => (
                                                <li key={idx}>
                                                    <img
                                                    className="img-thumbnail rounded-circle avatar-sml"
                                                    src={avatar}
                                                    alt={`Avatar ${idx + 1}`}
                                                    />
                                                </li>
                                                ))}
                                                {project.team.length > 4 && (
                                                <li className="ml-2">
                                                    <span>{project.team.length - 4}+</span>
                                                </li>
                                                )}
                                            </ul>     
                                        </td>
                                        <td>{project.project}</td>
                                        <td>{project.projectCost}</td>
                                        <td>{project.payment}</td>
                                        <td><span
                                            style={{
                                            backgroundColor: getStatusColor(project.status),
                                            padding: '3px',
                                            borderRadius: '5px',
                                            color: 'white',
                                            }}
                                        >
                                            {project.status}
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
                </div>
            </div>
        </div>

    </>
  )
}
