import React from 'react'
import avatar1 from '../../../assets/images/avatar1.jpg'
import avatar2 from '../../../assets/images/avatar2.jpg'
import avatar3 from '../../../assets/images/avatar3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faMapMarked } from '@fortawesome/free-solid-svg-icons';

export default function GridView() {
  const data = [
    {
      name: 'Michelle Green',
      role: 'Web Developer',
      skills: ['Java', 'CSS', 'HTML'],
      rate: 55,
      location: 'Akron, OH',
      imageUrl: avatar1,
    },

    {
      name: 'Michelle Green',
      role: 'Web Developer',
      skills: ['Java', 'CSS', 'HTML'],
      rate: 55,
      location: 'Akron, OH',
      imageUrl: avatar3,
    },

    {
      name: 'Michelle Green',
      role: 'Web Developer',
      skills: ['Java', 'CSS', 'HTML'],
      rate: 55,
      location: 'Akron, OH',
      imageUrl: avatar1,
    },


    {
      name: 'Michelle Green',
      role: 'Web Developer',
      skills: ['Java', 'CSS', 'HTML'],
      rate: 55,
      location: 'Akron, OH',
      imageUrl: avatar2,
    },


    {
      name: 'Michelle Green',
      role: 'Web Developer',
      skills: ['Java', 'CSS', 'HTML'],
      rate: 55,
      location: 'Akron, OH',
      imageUrl: avatar3,
    },


    {
      name: 'Michelle Green',
      role: 'Web Developer',
      skills: ['Java', 'CSS', 'HTML'],
      rate: 55,
      location: 'Akron, OH',
      imageUrl: avatar1,
    },


    {
      name: 'Michelle Green',
      role: 'Web Developer',
      skills: ['Java', 'CSS', 'HTML'],
      rate: 55,
      location: 'Akron, OH',
      imageUrl: avatar2,
    },

    {
      name: 'Michelle Green',
      role: 'Web Developer',
      skills: ['Java', 'CSS', 'HTML'],
      rate: 55,
      location: 'Akron, OH',
      imageUrl: avatar3,
    },
    
  ];
  return (
    <>
    <div className='section-body mt-3'>   
      <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-xl-3 col-lg-4 col-md-6 mb-3">
          <div className="card">  
            <div className="body text-center p-4">
              <img className="rounded-circle w100 img-thumbnail" src={item.imageUrl} alt={`${item.name}'s avatar`} />
              <h6 className="mt-3 mb-0">{item.name}</h6>
              <span className='text-secondary'>{item.role}</span>
              <ul className="mt-3 mb-4 list-unstyled d-flex justify-content-center">
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}><a className="p-3 text-secondary" target="_blank" href="/#">{skill}</a></li>
                ))}
              </ul>
              <hr />
              <div className="d-flex justify-content-between">
                <div><FontAwesomeIcon icon={faDollar} /> {item.rate} / hour</div>
                <div><FontAwesomeIcon icon={faMapMarked} /> {item.location}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>  
    </div>
    </>
  )
}
