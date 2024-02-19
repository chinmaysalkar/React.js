import React from 'react'
import Header from '../../../layouts/Header';
import Footer from '../../../layouts/Footer';
import avatar1 from '../../../assets/images/avatar1.jpg'
import avatar2 from '../../../assets/images/avatar2.jpg'
import avatar3 from '../../../assets/images/avatar3.jpg'
import { Card, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList,faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Sidebar from '../../../layouts/Sidebar';

export default function ContactGrid() {
    const gridData = [
        {
            imageSrc: avatar1,
            name: 'Paul Schmidt',
            email: 'Aalizeethomas@info.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt',
            status: 'Common Contact',
            avatars: [avatar1, avatar2, avatar3]
        },

        {
            imageSrc: avatar1,
            name: 'Andrew Patrick',
            email: 'Aalizeethomas@info.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt',
            status: 'Common Contact',
            avatars: [avatar1, avatar2, avatar3]
        },

        {
            imageSrc: avatar2,
            name: 'Mary Schneider',
            email: 'Aalizeethomas@info.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt',
            status: 'Common Contact',
            avatars: [avatar1, avatar2, avatar3]
        },

        {
            imageSrc: avatar3,
            name: 'Sean Black',
            email: 'Aalizeethomas@info.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt',
            status: 'Common Contact',
            avatars: [avatar1, avatar2, avatar3]
        },

        {
            imageSrc: avatar2,
            name: 'David Wallace',
            email: 'Aalizeethomas@info.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt',
            status: 'Common Contact',
            avatars: [avatar1, avatar2, avatar3]
        },

        {
            imageSrc: avatar3,
            name: 'Paul Schmidt',
            email: 'Aalizeethomas@info.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt',
            status: 'Common Contact',
            avatars: [avatar1, avatar2, avatar3]
        },

        {
            imageSrc: avatar1,
            name: 'Paul Schmidt',
            email: 'Aalizeethomas@info.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt',
            status: 'Common Contact',
            avatars: [avatar1, avatar2, avatar3]
        },
        
      ];
  return (
   <>
   <div className='main d-flex'>
    <Sidebar/>
    <div className='main-sidebar-pages px-3'>
        <Header/>
        <div className="section-body mt-3">
            <div className="container-fluid">
                <div className="row clearfix">
                <div className="col-lg-12 col-md-6 col-sm-12">
                    <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                       
                        <div className='contact-gridtop mb-3'>
                            <Link to='/contact' className='text-secondary mx-2'>
                            <FontAwesomeIcon icon={faList} className='mx-2' />
                            List 
                            </Link>

                            <Link to='/contactgrid' className='text-secondary mx-2'>
                            <FontAwesomeIcon icon={faList} className='mx-2' />
                            Grid </Link>

                            <Link to='/contactaddnew' className='text-secondary mx-2'>
                            <FontAwesomeIcon icon={faPlus} className='mx-2' />
                            Add New
                            </Link>                          
                        </div>

                        <div className="d-flex align-grids-center sort_stat">
                            <div className="d-flex">
                            <div className="ml-2">
                                <h6 className="mb-0 mx-3 text-secondary">MY INCOME</h6>
                                <h6 className="mb-0 mx-3">$5,510</h6>
                            </div>
                            </div>
                            <div className="d-flex ml-3">
                            <div className="ml-2">
                                <h6 className="mb-0 mx-3 text-secondary">SITE TRAFFIC</h6>
                                <h6 className="mb-0 mx-3">53% Up</h6>
                            </div>
                            </div>
                        </div>
                        </div>

                        <InputGroup className="mt-2">
                        <FormControl type="text" placeholder="Search..." />
                        </InputGroup>
                    </Card.Body>
                    </Card>
                </div>
                </div>
            </div>
        </div>



            <div className='mx-3 mt-3'>
                <div className="row row-deck">
                    {gridData.map((grid) => (
                    <div key={grid.id} className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-3">
                            <div className="card-body">

                                <div className="card-status"></div>
                                <div className="mb-3">
                                    <img className="rounded-circle  avatar-sml" src={grid.imageSrc} alt='fake_url'/>                           
                                </div>

                                <div className="mb-2">
                                    <h5 className="mb-0">{grid.name}</h5>
                                    <p className="text-muted">{grid.email}</p>
                                    <span>{grid.description}</span>
                                </div>

                                <p className="text-secondary">{grid.status}</p>
                                <ul className="list-unstyled team-info margin-0 pt-2 d-flex">
                                {grid.avatars.map((avatar, index) => (
                                    <li key={index}><img src={avatar} className='rounded-circle w100 avatar-sml' alt={`Avatar ${index + 1}` } /></li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>


        <Footer/>
    </div>
   </div>
   </>
  )
}
