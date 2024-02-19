import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Button } from 'react-bootstrap'
import Sidebar from '../../layouts/Sidebar'
import Invoices from '../../components/Accounts/Invoices'
import Expenses from '../../components/Accounts/Expenses'
import Payments from '../../components/Accounts/Payments'


export default function Accounts() {
  const [activeButton, setActiveButton] = useState('invoice');

  const [currentComponent, setCurrentComponent] = useState('invoice');

  const handleButtonClick = (componentName) => {
      setCurrentComponent(componentName);
      setActiveButton(componentName);
  };
 
  return (
    <>
    <div className='main d-flex'>
    <Sidebar/>
    <div className='account-main px-3'>
      <Header/>

        <div className='d-flex justify-content-between top-change-btn'>
          <div className='all-top'>
            <button onClick={() => handleButtonClick('invoice')} className={`top-bar-btn mx-2 ${activeButton === 'invoice' ? 'text-secondary border-top-2' : ''}`}>Invoices</button>
            <button onClick={() => handleButtonClick('payments')} className={`top-bar-btn mx-2 ${activeButton === 'payments' ? 'text-secondary border-top-2' : ''}`}>Payments</button>
            <button onClick={() => handleButtonClick('expenses')} className={`top-bar-btn mx-2 ${activeButton === 'expenses' ? 'text-secondary border-top-2' : ''}`}>Expenses</button>
          </div>

          <div className='d-flex pt-2'>
            <Button variant="primary" className='mx-3 btn-top'>
              +Add
            </Button>
          </div>
        </div>

        <div>
        {currentComponent === 'invoice' && <Invoices />}
        {currentComponent === 'payments' && <Payments />}
        {currentComponent === 'expenses' && <Expenses />}
        </div>

      
      


      
      <Footer/>
    </div>
    </div>
    </>
  )
}
