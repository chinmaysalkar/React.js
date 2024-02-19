import React, { useState } from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../layouts/Sidebar';

const Search = () => {
  const [activeTab, setActiveTab] = useState('All');
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'All':
        return (
          <div role="tabpanel" className="tab-pane vivify fadeIn active" id="All">
            {/* Your All tab content here */}
            
            <div className="table-responsive search-table">
              <table className="table table-hover card-table table_custom">
                <tbody>
                  <tr>
                    <td className='p-3'>
                      <h6>
                        <a target="_blank" href="fake_url" className='text-black'>Bootstrap 4 Light &amp; Dark Admin with Free VueJs</a>
                      </h6>
                      <small className="text-secondary font-13">https://themeforest.net/user/puffintheme</small><br />
                      <small className="mt-10 mb-0 text-muted">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </small>
                    </td>
                    <td className='p-3'>
                      <span className="custom-badge d-flex mt-4 mx-1"><FontAwesomeIcon icon={faEye} className="mx-1 mt-1"/> 1501</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-3'>
                      <h6>
                        <a target="_blank" href="fake_url"className='text-black'>Bootstrap 4 Admin Dashboard Template</a>
                      </h6>
                      <small className="text-secondary font-13">https://themeforest.net/user/puffintheme</small><br />
                      <small className="mt-10 mb-0 text-muted">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                      </small>
                    </td>
                    <td className='p-3'>
                      <span className="custom-badge d-flex mt-4 mx-1"><FontAwesomeIcon icon={faEye} className="mx-1 mt-1"/> 1894</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-3'>
                      <h6>
                        <a target="_blank" href="fake_url" className='text-black'>The ultimate Bootstrap 4 Admin Dashboard</a>
                      </h6>
                      <small className="text-secondary font-13">https://themeforest.net/user/puffintheme</small><br />
                      <small className="mt-10 mb-0 text-muted">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                      </small>
                    </td>
                    <td className='p-3'>
                      <span className="custom-badge d-flex mt-4 mx-1"><FontAwesomeIcon icon={faEye} className="mx-1 mt-1"/> 1205</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-3'>
                      <h6>
                        <a target="_blank" href="fake_url" className='text-black'>Bootstrap 4 Admin Dashboard Template</a>
                      </h6>
                      <small className="text-secondary font-13">https://themeforest.net/user/puffintheme</small><br />
                      <small className="mt-10 mb-0 text-muted">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </small>
                    </td>
                    <td className='p-3'>
                      <span className="custom-badge d-flex mt-4 mx-1"><FontAwesomeIcon icon={faEye} className="mx-1 mt-1"/> 985</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
        );

      case 'Images':
        return (
          <div role="tabpanel" className="tab-pane vivify fadeIn" id="Images">
            {/* Your Images tab content here */}
            
            
              <div className="card">
                <div className="card-body text-center py-5">
                  <img src="assets/images/search.svg" className="width360 mb-3" alt="fake_url" />
                  <h4>No Images Found</h4>
                  <span>Choose a different filter to view test results to you</span>
                </div>
              </div>
            
          </div>
        );

      case 'Video':
        return (
          <div role="tabpanel" className="tab-pane vivify fadeIn" id="Video">
            {/* Your Video tab content here */}
            
            <div className="card">
              <div className="card-body text-center py-5">
                <img src="assets/images/search.svg" className="width360 mb-3" alt="fake_url" />
                <h4>No Video Found</h4>
                <span>Choose a different filter to view test results to you</span>
              </div>
            </div>
            
          </div>
        );

      case 'News':
        return (
          <div role="tabpanel" className="tab-pane vivify fadeIn" id="News">
            {/* Your News tab content here */}
            <div className="card">
              <div className="card-body">
                <article className="media">
                  <div className="mr-3">
                    <img className="w150" src="../assets/images/gallery/1.jpg" alt="fake_url" />
                  </div>
                  <div className="media-body">
                    <div className="content">
                      <p className="h5">John Smith <small>@johnsmith</small> <small className="float-right text-muted">31 minutes ago</small></p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                      </p>
                    </div>
                    <nav className="d-flex text-muted">
                      <a href="/#" className="icon mr-3"><i className="fe fe-repeat"></i></a>
                      <a href="/#" className="icon mr-3"><i className="fe fe-twitter"></i> 24</a>
                      <a href="/#" className="icon mr-3"><i className="fe fe-heart"></i> 43</a>
                      <a href="fake_url" className="text-muted ml-auto">5 notes</a>
                    </nav>
                  </div>
                </article>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className="main-sidebar-pages px-3">
      <Header />

      <div className="section-body mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search here..." />
                  </div>
                  <p className="mb-0">Search Result For "Bootstrap 4 admin"</p>
                  <small className="text-secondary"> About 16,853 results (0.13 seconds)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3">
        <ul className="nav nav-tabs mx-0" role="tablist">
        {/* Your tab items here */}
        <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'All' ? 'active' : ''}`}
              data-toggle="tab"
              href="#All"
              aria-expanded="true"
              onClick={() => handleTabClick('All')}
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'Images' ? 'active' : ''}`}
              data-toggle="tab"
              href="#Images"
              aria-expanded="true"
              onClick={() => handleTabClick('Images')}
            >
              Images
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'Video' ? 'active' : ''}`}
              data-toggle="tab"
              href="#Video"
              aria-expanded="false"
              onClick={() => handleTabClick('Video')}
            >
              Video
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'News' ? 'active' : ''}`}
              data-toggle="tab"
              href="#News"
              aria-expanded="false"
              onClick={() => handleTabClick('News')}
            >
              News
            </a>
          </li>
          
        </ul>

        <div className="tab-content mt-3">
          {/* Render tab content based on activeTab */}
          {renderTabContent()}
        </div>
      </div>

      <Footer />
    </div>
    </div>
    </>
  );
};

export default Search;
