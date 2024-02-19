import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer mt-4 pb-3 mx-3'>

      <div className='row'>

        <div className='col-md-6 col-sm-12 mb-3 mb-sm-0 footer-sml'>
          <h6 className='mb-0 mt-2'>Copyright © 2020 <Link to="/">PuffinTheme.</Link></h6>
        </div>

        <div className='col-md-6 col-sm-12 d-flex  justify-content-end footer-sml'>
          <h6 className='mb-2 mx-3 mt-2'>Documentation FAQ</h6>
          <button type="button" className="btn btn-outline-secondary btn-sm mx-0">Buy Now</button>
        </div>

      </div>  
    </div>
  )
}
