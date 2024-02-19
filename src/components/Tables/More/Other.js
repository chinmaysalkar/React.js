import React, {useState} from 'react'
import DropdownMenu from '../../DropdownMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faMaximize, faX, faGear, faEdit, faTrash, faPhone, faMapMarker, faCircle, faCaretUp, faCaretDown,   } from '@fortawesome/free-solid-svg-icons';
import { faComment, faThumbsUp  } from '@fortawesome/free-regular-svg-icons';
import avatar1 from '../../../assets/images/avatar1.jpg'
import { faEbay, faPaypal, faCcVisa, faGoogleWallet, faLinkedin, faTwitter, faFacebook, faGooglePlus, faYoutube,  } from '@fortawesome/free-brands-svg-icons';

export default function Other() {
  const data = [
    { id: 1, patient: 'John', address: '70 Bowman St. South Windsor, CT 06074', startDate: 'Sept 13, 2019', endDate: 'Sept 16, 2019', status: 'Admit' },
    { id: 2, patient: 'Jack Bird', address: '123 6th St. Melbourne, FL 32904', startDate: 'Sept 13, 2019', endDate: 'Sept 22, 2019', status: 'Discharge' },
    { id: 3, patient: 'Dean Otto', address: '123 6th St. Melbourne, FL 32904', startDate: 'Sept 13, 2019', endDate: 'Sept 23, 2019', status: 'Admit' },
    { id: 4, patient: 'Jack Bird', address: '4 Shirley Ave. West Chicago, IL 60185', startDate: 'Sept 17, 2019', endDate: 'Sept 16, 2019', status: 'Discharge' },
    { id: 5, patient: 'Hugh L.', address: '4 Shirley Ave. West Chicago, IL 60185', startDate: 'Sept 18, 2019', endDate: 'Sept 18, 2019', status: 'Admit' },
  ];


  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'admit':
        return '#D3F161';
      case 'discharge':
        return '#C6C8BF';
      default:
        return '#C4F4F3';
    }
  };



// User List

  const userData = [
    {
      avatar: avatar1,
      status: 'bg-secondary',
      name: 'Teresa Reyes',
      registeredDate: 'Mar 4, 2018',
      usage: 36,
      dateRange: 'Jun 11, 2019 - Jul 10, 2019',
      progressBarColor: 'bg-red',
      paymentMethod: 'ebay',
      lastLogin: '2 minutes ago',
      satisfaction: 36,
      detailsUrl: 'fake_url'
    },
    {
      avatar: avatar1,
      status: 'bg-warning',
      name: 'Emma Wade',
      registeredDate: 'Mar 20, 2018',
      usage: 7,
      dateRange: 'Jun 11, 2019 - Jul 10, 2019',
      progressBarColor: 'bg-red',
      paymentMethod: 'paypal',
      lastLogin: 'a minute ago',
      satisfaction: 7,
      detailsUrl: 'fake_url'
    },
    {
      avatar: avatar1,
      status: 'bg-success',
      name: 'Carol Henderson',
      registeredDate: 'Feb 22, 2018',
      usage: 80,
      dateRange: 'Jun 11, 2019 - Jul 10, 2019',
      progressBarColor: 'bg-green',
      paymentMethod: 'visa',
      lastLogin: '9 minutes ago',
      satisfaction: 80,
      detailsUrl: 'fake_url'
    },
    {
      avatar: avatar1,
      status: 'bg-success',
      name: 'Christopher Harvey',
      registeredDate: 'Jan 22, 2018',
      usage: 65,
      dateRange: 'Jun 11, 2019 - Jul 10, 2019',
      progressBarColor: 'bg-green',
      paymentMethod: 'googlewallet',
      lastLogin: '8 minutes ago',
      satisfaction: 83,
      detailsUrl: 'fake_url'
    },
  ];

  // For Payemets Icons
  const getPaymentMethodIcon = (paymentMethod) => {
    switch (paymentMethod) {
      case 'ebay':
        return <FontAwesomeIcon icon={faEbay} />;
      case 'paypal':
        return <FontAwesomeIcon icon={faPaypal} />;
      case 'visa':
        return <FontAwesomeIcon icon={faCcVisa} />;
      case 'googlewallet':
        return <FontAwesomeIcon icon={faGoogleWallet} />;
      default:
        return <FontAwesomeIcon icon={faGoogleWallet} />; 
    }
  };


  // User Details

  const UserData = [
    {
      name: 'John Smith',
      avatar: avatar1,
      phone: '264-625-2583',
      address: '123 6th St. Melbourne, FL 32904',
    },
    {
      name: 'Hossein Shams',
      avatar: avatar1,
      phone: '264-625-5689',
      address: '44 Shirley Ave. West Chicago, IL 60185',
    },
    {
      name: 'Frank Camly',
      avatar: avatar1,
      phone: '264-625-9999',
      address: '123 6th St. Melbourne, FL 32904',
    },
    {
      name: 'Tim Hank',
      avatar: avatar1,
      phone: '264-625-1212',
      address: '70 Bowman St. South Windsor, CT 06074',
    },
  ];


  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (value) => {
    const updatedRows = [...selectedRows];
    if (updatedRows.includes(value)) {
      updatedRows.splice(updatedRows.indexOf(value), 1);
    } else {
      updatedRows.push(value);
    }
    setSelectedRows(updatedRows);
  };


// Basic Example 2 

  const data1 = [
    { status1:'success',platform: 'Twitter', records: 862, percentage: 35, trend: 'up', sparkbar: [5, 8, 6, 3, 5, 9, 2] },
    { platform: 'Facebook', records: 451, percentage: 15, trend: 'up', sparkbar: [8, 2, 1, 5, -2, 6, -4] },
    { platform: 'Mailchimp', records: 502, percentage: -20, trend: 'down', sparkbar: [2, 3, 3, -2, -8, 4, 8] },
    { platform: 'Google', records: 502, percentage: 20, trend: 'up', sparkbar: [5, 5, 5, 6, 3, 2, 1] },
    { platform: 'Other', records: 237, percentage: -10, trend: 'down', sparkbar: [5, 8, 6, 3, 5, 9, 2] },
  ];
  
  const getStatus1Color = (status1) => {
    switch (status1) {

      case 'success':
        return 'text-success';
      case 'info':
        return 'text-info';
      case 'warning':
        return 'text-warning';
      case 'danger':
        return 'text-danger';
      default:
        return '';
    }
  };

// BASIC EXAMPLE 3
  const data2 = [
    { platform: 'Twitter', records: 862, bubbleCount: 241, likeCount: 595, progressValue: 40 },
    { platform: 'Facebook', records: 451, bubbleCount: 540, likeCount: 1000, progressValue: 15 },
    { platform: 'LinkedIn', records: 502, bubbleCount: 102, likeCount: 201, progressValue: 100 },
    { platform: 'Google', records: 502, bubbleCount: 21, likeCount: 28, progressValue: 85 },
    { platform: 'Other', records: 237, bubbleCount: 9, likeCount: 15, progressValue: 40 },
  ];

  
// SOCIAL STATISTICS
  
const socialMediaData = [
  {
    icon: faLinkedin,
    name: 'Linked In',
    location: 'Florida, United States',
    like: '19K',
    comments: '14K',
    share: '10K',
    members: '2341',
  },
  {
    icon: faTwitter,
    name: 'Twitter',
    location: 'Arkansas, United States',
    like: '7K',
    comments: '11K',
    share: '21K',
    members: '952',
  },
  {
    icon: faFacebook,
    name: 'Facebook',
    location: 'Illinois, United States',
    like: '15K',
    comments: '18K',
    share: '8K',
    members: '6127',
  },
  {
    icon: faGooglePlus,
    name: 'GooglePlus',
    location: 'Arizona, United States',
    like: '15K',
    comments: '18K',
    share: '154',
    members: '325',
  },
  {
    icon: faYoutube,
    name: 'YouTube',
    location: 'Alaska, United States',
    like: '15K',
    comments: '18K',
    share: '200',
    members: '160',
  },
  {
    icon: faTwitter,
    name: 'Twitter',
    location: 'Arkansas, United States',
    like: '7K',
    comments: '11K',
    share: '21K',
    members: '952',
  },
  ];

  const getMembersColor = (member) => {
    switch (member.toLowerCase()) {
      default:
        return '#9BCA2E';
    }
  };

// STORE DATA

  const orders = [
    { orderNo: 'Q01', productName: 'Iphone 7', purchasedOn: '12 Jan 2018', shippingStatus: 'Dispatched', paymentMethod: 'Credit card', paymentStatus: 'Approved' },
    { orderNo: 'Q02', productName: 'Galaxy S8', purchasedOn: '18 Jan 2018', shippingStatus: 'Dispatched', paymentMethod: 'Internet banking', paymentStatus: 'Pending' },
    { orderNo: 'Q03', productName: 'Amazon Echo', purchasedOn: '22 Feb 2018', shippingStatus: 'Dispatched', paymentMethod: 'Credit card', paymentStatus: 'Approved' },
    { orderNo: 'Q04', productName: 'Google Pixel', purchasedOn: '22 Feb 2018', shippingStatus: 'Dispatched', paymentMethod: 'Cash on delivery', paymentStatus: 'Rejected' },
    { orderNo: 'Q05', productName: 'Mac Mini', purchasedOn: '8 March 2018', shippingStatus: 'Dispatched', paymentMethod: 'Debit card', paymentStatus: 'Approved' },
  ];
  
  const getpaymentStatusColor = (paymentStatus) => {
    switch (paymentStatus.toLowerCase()) {

     case 'approved':
        return '#88E70F';

     case 'pending':
        return '#FCF807';

     case 'rejected':
        return '#F90000';

      default:
        return '#9BCA2E';
    }
  };
  return (
    <>
    <div className='section-body mt-3 mb-3'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card p-3 border-0'>
              <div className="card-header bg-white border-0 d-flex justify-content-between">
                <h6 className="card-title">BASIC EXAMPLE 1</h6>
                <div className="card-options d-flex">
                <DropdownMenu/>
                </div>
              </div>

              <div className='card-body'>
              <div className="table-responsive">
                <table className="table text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Patients</th>
                      <th>Address</th>
                      <th>START Date</th>
                      <th>END Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td><span>{row.patient}</span></td>
                        <td><span>{row.address}</span></td>
                        <td>{row.startDate}</td>
                        <td>{row.endDate}</td>
                        <td>
                        <span style={{
                          backgroundColor: getStatusColor(row.status),
                          padding: '3px',
                          borderRadius: '5px',
                          color: 'white',
                        }}>{row.status}</span>
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

    <div className='section-gray mb-3'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12 mb-3'>
            <div className='card bg-none p-3 border-0'>
              <div className="card-header bg-white border-0 d-flex justify-content-between">
                <h6 className="card-title">USER LIST</h6>
                <div className="card-options d-flex">
                <FontAwesomeIcon icon={faChevronUp} className='mx-2'/> 
                <FontAwesomeIcon icon={faMaximize} className='mx-2'/> 
                <FontAwesomeIcon icon={faX} /> 
                </div>
              </div>

              <div className='card-body'>
              <div className="table-responsive">
                <table className="table table-hover table-vcenter text-nowrap table_custom spacing8 mb-0">
                  <thead>
                    <tr>
                      <th></th>                     
                      <th>User</th>
                      <th>Usage</th>
                      <th>Payment</th>
                      <th>Activity</th>
                      <th>Satisfaction</th>
                      <th>
                      <FontAwesomeIcon icon={faGear} /> 
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((user, index) => (
                      <tr key={index}>
                        <td className="text-center">
                          <div className="avatar d-block">
                            <img
                              className="rounded-circle"
                              src={user.avatar}
                              alt="avatar"
                            />
                            <span className={`avatar-status ${user.status}`}></span>
                          </div>
                        </td>
                        <td>
                          <div>{user.name}</div>
                          <div className="small text-muted">{`Registered: ${user.registeredDate}`}</div>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>{`${user.usage}%`}</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">{user.dateRange}</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className={`progress-bar ${user.progressBarColor}`}
                              role="progressbar"
                              aria-valuenow={user.usage}
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: `${user.usage}%` }}
                            ></div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className='card card-pay p-2'>{getPaymentMethodIcon(user.paymentMethod)}</div>  
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <div>{user.lastLogin}</div>
                        </td>
                        <td>{user.satisfaction}%</td>                       
                        <td><DropdownMenu/></td>                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>

          <div className='col-lg-12'>
            <div className='card p-3 border-0'>
              <div className="card-header bg-white border-0 d-flex justify-content-between">
                <h6 className="card-title">USER DETAILS</h6>
                <div className="card-options d-flex">
                <FontAwesomeIcon icon={faChevronUp} className='mx-2'/> 
                <FontAwesomeIcon icon={faMaximize} className='mx-2'/> 
                <FontAwesomeIcon icon={faX} className='mx-3'/> 
                <DropdownMenu/>
                </div>
              </div>

              <div className='card-body'>
              <div className="table-responsive table_e2">
                <table className="table table-hover table-vcenter table_custom text-nowrap spacing5 text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>
                        <label className="custom-control custom-checkbox mb-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={() => handleCheckboxChange('header')}
                            checked={selectedRows.length === UserData.length}
                          />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {UserData.map((user, index) => (
                      <tr key={index}>
                        <td className="width45">
                          <label className="custom-control custom-checkbox mb-0">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              onChange={() => handleCheckboxChange(index)}
                              checked={selectedRows.includes(index)}
                            />
                            <span className="custom-control-label">&nbsp;</span>
                          </label>
                        </td>
                        <td>
                          <img src={user.avatar} className="rounded-circle avatar avatar-sml" alt={`fake_url ${index}`} />
                          <span className="c_name mx-2">{user.name}</span>
                        </td>
                        <td>
                          <span className="phone">
                          <FontAwesomeIcon icon={faPhone} className='mx-1'/>
                            {user.phone}
                          </span>
                        </td>
                        <td>
                          <span>
                          <FontAwesomeIcon icon={faMapMarker} className='mx-1'/>
                            {user.address}
                          </span>
                        </td>
                        <td>
                          <button type="button" className="btn btn-primary btn-sm" title="Edit">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button type="button" className="btn btn-danger btn-sm" title="Delete">
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
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


    <div className='section-body'>
      <div className='container-fluid'>
        <div className='row d-flex flex-wrap mb-3'>
          <div className='col-lg-6 col-md-12 mb-2'>
            <div className='card p-3 border-0'>
              <div className="card-header bg-white border-0 d-flex justify-content-between">
                <h6 className="card-title">BASIC EXAMPLE 2</h6>
                <div className="card-options d-flex">
                <FontAwesomeIcon icon={faChevronUp} className='mx-2'/> 
                <FontAwesomeIcon icon={faMaximize} className='mx-2'/> 
                <FontAwesomeIcon icon={faX} className='mx-3'/> 
                <DropdownMenu/>
                </div>
              </div>

              <div className='card-body'>
              <div className="table-responsive">
                <table className="table table-hover text-nowrap mb-0">
                  <tbody>
                    {data1.map((item, index) => (
                      <tr key={index}>
                        <th>
                        <FontAwesomeIcon icon={faCircle} className={getStatus1Color(item.status1)} />
                        </th>
                        <td>{item.platform}</td>
                        <td>
                          <span>{`${item.records} Records`}</span>
                        </td>
                        <td>
                          {`${item.percentage}% `}
                          
                          {item.trend === 'up' ? (
                            <FontAwesomeIcon icon={faCaretUp} />
                          ) : (
                            <FontAwesomeIcon icon={faCaretDown} />
                          )}
                        </td>
                        <td>
                          <span className="sparkbar">{item.sparkbar.join(',')}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-12'>
            <div className='card p-3 border-0'>
              <div className="card-header bg-white border-0 d-flex justify-content-between">
                <h6 className="card-title">BASIC EXAMPLE 3</h6>
                <div className="card-options d-flex">
                <FontAwesomeIcon icon={faChevronUp} className='mx-2'/> 
                <FontAwesomeIcon icon={faMaximize} className='mx-2'/> 
                <FontAwesomeIcon icon={faX} className='mx-3'/> 
                <DropdownMenu/>
                </div>
              </div>

              <div className='card-body'>
                <div className="table-responsive">
                <table className="table table-hover text-nowrap mb-0">
                  <tbody>
                    {data2.map((item, index) => (
                      <tr key={index}>
                        <td>{item.platform}</td>
                        <td>
                          <span>{`${item.records} Records`}</span>
                        </td>
                        <td>
                        <FontAwesomeIcon icon={faComment}/>
                        <span className="mx-1">{item.bubbleCount}</span> 
                        </td>
                        <td>
                        <FontAwesomeIcon icon={faThumbsUp}/>
                        <span className="mx-1">{item.likeCount}</span>
                        </td>
                        <td style={{ width: '150px' }}>
                          <div className="progress progress-xs">
                            <div
                              className={`progress-bar ${item.progressValue <= 40 ? 'progress-bar-warning' :
                                (item.progressValue <= 70 ? 'progress-bar-success' : 'progress-bar-danger')}`}
                              role="progressbar"
                              aria-valuenow={item.progressValue}
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: `${item.progressValue}%` }}>
                              <span className="sr-only">{`${item.progressValue}% Complete`}</span>
                            </div>
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


        <div className='row mb-3'>
          <div className='col-lg-12 col-md-12'>
            <div className='card p-3 border-0'>
              <div className="card-header bg-white border-0 d-flex justify-content-between">
                <h6 className="card-title">SOCIAL STATISTICS</h6>
                <div className="card-options d-flex">
                  <FontAwesomeIcon icon={faChevronUp} className='mx-2'/> 
                  <FontAwesomeIcon icon={faMaximize} className='mx-2'/> 
                  <FontAwesomeIcon icon={faX} className='mx-3'/> 
                  <DropdownMenu/>
                </div>
              </div>
                <div className='card-body'>
                  <div className="table-responsive">
                    <table className="table table-hover table-vcenter text-nowrap card-table table_custom">
                      <thead>
                        <tr>
                          <th>Media</th>
                          <th>Name</th>
                          <th>Like</th>
                          <th>Comments</th>
                          <th>Share</th>
                          <th>Members</th>
                        </tr>
                      </thead>
                      <tbody>
                        {socialMediaData.map((media, index) => (
                          <tr key={index}>
                            <td>
                              <FontAwesomeIcon icon={media.icon}/>
                            </td>
                            <td>
                              <span className="list-name">{media.name}</span>
                              <span className="text-muted">{media.location}</span>
                            </td>
                            <td>{media.like}</td>
                            <td>{media.comments}</td>
                            <td>{media.share}</td>
                            <td>
                      
                            <span style={{
                              backgroundColor: getMembersColor(media.members),
                              padding: '3px',
                              borderRadius: '5px',
                              color: 'white',
                            }}>{media.members}
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

        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='card p-3 border-0'>
               <div className="card-header bg-white border-0">
                <h6 className="card-title">STORE</h6>
              </div>

              <div className='card-body'>
              <div className="table-responsive">
                <table className="table table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Order No</th>
                      <th>Product Name</th>
                      <th>Purchased On</th>
                      <th>Shipping Status</th>
                      <th>Payment Method</th>
                      <th>Payment Status</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.orderNo}>
                        <td>{order.orderNo}</td>
                        <td>{order.productName}</td>
                        <td>{order.purchasedOn}</td>
                        <td>{order.shippingStatus}</td>
                        <td>{order.paymentMethod}</td>
                        <td>
                        <span style={{
                              backgroundColor: getpaymentStatusColor(order.paymentStatus),
                              padding: '3px',
                              borderRadius: '5px',
                              color: 'white',
                            }}>{order.paymentStatus}
                            </span></td>
                        <td><a href="fake_url;" className="btn btn-success btn-sm">View Order</a></td>
                        <td><button className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrash} /></button></td>
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
 