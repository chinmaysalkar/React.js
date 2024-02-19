import React,{useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear,faAlignRight,faPlus,faRefresh,faCamera,faVideoCamera,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../../assets/images/avatar1.jpg'
import Sidebar from '../../layouts/Sidebar';


export default function FriendsGroup() {

  const [showChatList, setShowChatList] = useState(false);

  const toggleChatList = () => {
    setShowChatList(!showChatList);
  };

  const [messageInput, setMessageInput] = useState('');

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Message submitted:', messageInput);
    setMessageInput('');
  };

  const messages = [
    {
      type: 'other-message',
      avatar: avatar1,
      content: 'Are we meeting today?',
      time: '10:10 AM, Today',
    },
    {
      type: 'other-message',
      avatar: avatar1,
      content: 'Hi Aiden, how are you? How is the project coming along? Are we meeting today?',
      time: '10:15 AM, Today',
    },
    {
      type: 'my-message',
      content: 'Project has been already finished and I have results to show you.',
      files: [
        { icon: 'fa-file-excel-o', color: 'success', name: 'Report2017.xls', size: '68KB' },
        { icon: 'fa-file-word-o', color: 'primary', name: 'Report2017.doc', size: '68KB' },
      ],
      time: '10:17 AM, Today',
    },
    {
      type: 'other-message',
      avatar: avatar1,
      content: 'Are we meeting today I have results?',
      time: '10:18 AM, Today',
    },
    {
      type: 'my-message',
      content: 'Well, we have a good budget for the project',
      time: '10:25 AM, Today',
    },
    {
      type: 'my-message',
      content: '',
      files: [
        { name: '3.jpg', size: 'w100 img-thumbnail' },
        { name: '4.jpg', size: 'w100 img-thumbnail' },
        { name: '5.jpg', size: 'w100 img-thumbnail' },
        { name: '6.jpg', size: 'w100 img-thumbnail' },
      ],
      time: '10:25 AM, Today',
    },
  ];


  // Chat List

  const users = [
    { name: 'Ava Phillip Smith', message: 'Are we meeting today?', status: 'online', avatarSrc: avatar1 },
    { name: 'Ava Phillip Smith', message: 'Are we meeting today?', status: 'online', avatarSrc: avatar1 },
    { name: 'Ava Phillip Smith', message: 'Are we meeting today?', status: 'online', avatarSrc: avatar1 },
    { name: 'Ava Phillip Smith', message: 'Are we meeting today?', status: 'online', avatarSrc: avatar1 },
    { name: 'Ava Phillip Smith', message: 'Are we meeting today?', status: 'online', avatarSrc: avatar1 },
    { name: 'Ava Phillip Smith', message: 'Are we meeting today?', status: 'online', avatarSrc: avatar1 },
    { name: 'Ava Phillip Smith', message: 'Are we meeting today?', status: 'online', avatarSrc: avatar1 },
    
    
  ];

  const groups = [
    { name: 'PHP Groups', message: 'How is the project coming', status: 'online', avatarSrc: avatar1 },
    { name: 'PHP Groups', message: 'How is the project coming', status: 'online', avatarSrc: avatar1 },
    { name: 'PHP Groups', message: 'How is the project coming', status: 'online', avatarSrc: avatar1 },
    { name: 'PHP Groups', message: 'How is the project coming', status: 'online', avatarSrc: avatar1 },
    { name: 'PHP Groups', message: 'How is the project coming', status: 'online', avatarSrc: avatar1 },
    
    
  ];

  const renderListItems = (list) => {
    return list.map((item, index) => (
    <li key={index} className={`bg-white ${item.status === 'online' ? 'online' : 'offline'}`}>
        <a href="/#">
          <div className="media d-flex mb-4 p-2">
            <img className="media-object rounded-circle avatar-sml" src={item.avatarSrc} alt={item.name} />
            <div className="media-body mx-2">
              <span className="name text-black">{item.name}</span><br />
              <span className="message text-secondary">{item.message}</span>
              <span className="badge badge-outline status"></span>
            </div>
          </div>
        </a>
      </li>
    ));
  };



  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='main-sidebar-pages px-3'>
        <Header/>


      <div className="section-light py-3 chat_app">
      {/* ... Other components and containers */}
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-lg-8 col-md-12'>
          <div className='card bg-none b-none'>
          <div className='card-header pt-1 d-flex justify-content-between bg-white border-0 border-bottom mx-2 top-change-btn'>
            <h6 className="card-title mt-3">Friends Group <br /><small className='text-secondary'>Last seen: 2 hours ago</small></h6>
            <div className="card-options mt-3 chat-group-btn d-flex">
              <div className="p-1 chat_list_btn"><FontAwesomeIcon icon={faAlignRight} onClick={toggleChatList}/></div>              
              <div className="p-1 mx-2"><FontAwesomeIcon icon={faPlus} /></div>
              <div className="p-1 mx-2"><FontAwesomeIcon icon={faGear} /></div>
              <div className="p-1"><FontAwesomeIcon icon={faRefresh} /></div>
            </div>
          </div>
      <div className="chat_windows">
        {/* Chat messages */}
        <ul className="mb-0 mx-5">
          {messages.map((message, index) => (
            <li key={index} className={message.type}>
              {message.avatar && <img className="avatar mr-3 mb-0" src={message.avatar} alt="avatar" />}
              <div className="message mx-5">
                {message.type === 'my-message' ? (
                  <>
                    <p className={`bg-light-blue ${message.type}`}>{message.content}</p>
                    {message.files && (
                      <div className="file_folder">
                        {message.files.map((file, fileIndex) => (
                          <div key={fileIndex} className="icon">
                            <i className={`fa ${file.icon} text-${file.color}`}></i>
                            <div className="file-name">
                              <p className="mb-0 text-muted">{file.name}</p>
                              <small>{`Size: ${file.size}`}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <p className={`bg-light-cyan ${message.type}`}>{message.content}</p>
                  </>
                )}
                <span className="time">{message.time}</span>
              </div>
            </li>
          ))}
        </ul>

        
        {/* Message input and options */}
        <div className="chat-message clearfix mx-3 mb-5 mt-5 border p-4">
          <div className='d-flex mb-5'>
          <div className='mx-2'><FontAwesomeIcon icon={faCamera}  /></div>
          <div className='mx-2'><FontAwesomeIcon icon={faVideoCamera} /></div>
          <div className='mx-2'><FontAwesomeIcon icon={faPaperPlane} /></div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-0 mt-2">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter text here..."
                value={messageInput}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
      </div>

    </div>
    </div>
    </div>
    </div>


      
    {/* Chat List */}
    <div className='mt-5'>
    {showChatList && (
      <div className="chat_list section-white mt-5" id="users">
        <ul className="nav nav-tabs border-bottom" role="tablist">
          <li className="nav-item">
            <a className="nav-link bg-gray text-secondary" id="users-tab" data-toggle="tab" href="#users-list" role="tab" aria-controls="users-list" aria-selected="true">Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" id="groups-tab" data-toggle="tab" href="#groups" role="tab" aria-controls="groups" aria-selected="false">Groups</a>
          </li>
        </ul>
        <div className="chat_list_btn"><FontAwesomeIcon icon={faAlignRight} onClick={toggleChatList}/></div> 
        <div className="input-group mt-2 mb-2">
          <input type="text" className="form-control search" placeholder="Search..." />
        </div>

        <div className="tab-content">
          {/* Users Tab */}
          <div className="tab-pane fade show active " id="userslist" role="tabpanel" aria-labelledby="users-tab">
            <ul className="right_chat list-unstyled list">
              {renderListItems(users)}
            </ul>
          </div>

          {/* Groups Tab */}
          <div className="tab-pane fade" id="groups" role="tabpanel" aria-labelledby="groups-tab">
            <ul className="right_chat list-unstyled list">
              {renderListItems(groups)}
            </ul>
          </div>
        </div>
      </div>
      )}
    </div>

    </div>

    <Footer/>
    </div>
    </div>
    </>
  )
}
