import React from 'react'
import avatar2 from '../../assets/images/avatar2.jpg'
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPrint } from '@fortawesome/free-solid-svg-icons';
import Payrollindex from './Payrollindex';

export default function Payslip() {
    const tableRows = [
        { id: '01', description: 'Basic Salary', earnings: '$1,500', deductions: '-', total: '$380' },
        { id: '02', description: 'House Rent Allowance (H.R.A.)', earnings: '$62', deductions: '-', total: '$250' },
        { id: '03', description: 'Tax Deducted at Source (T.D.S.)', earnings: '-', deductions: '$80', total: '$120' },
        { id: '04', description: 'C/Bank Loan', earnings: '-', deductions: '$120', total: '$120' },
        { id: '05', description: 'Other Allowance', earnings: '$121', deductions: '-', total: '$120' },
      ];
    
  return (
    <div>
       
        <Payrollindex/>
        <div className="card mx-3 mt-4">
            <div className="card-body">

            <div className="media mb-4">
                <div className='d-flex'>
                <div className="mr-3">
                    <img className="rounded payslip-img" src={avatar2} alt="fake_url" />
                </div>
                
                <div className="mx-3">
                    <div className="content">
                        <span><strong>Order ID: </strong> C09</span>
                        <p className="h5">John Smith</p>
                        <p>795 Folsom Ave, Suite 546 San Francisco, CA 54656</p>
                    </div>
                    <nav className="d-flex text-muted">
                    <a href="fake_url" className="icon mr-3"><FontAwesomeIcon icon={faEnvelope} className='text-warning'/></a>
                    <a href="fake_url" className="icon mr-3"><FontAwesomeIcon icon={faPrint} className='text-info'/></a>
                    </nav>
                </div>
                <div className='col'><h5 className='d-flex justify-content-end'><Badge bg="primary">Jun 15, 2019</Badge></h5></div>
                </div>
                </div>

                <div className='table-responsive'>
                <table className="table table-striped table-vcenter">
                <thead className="dark-mode">
                    <tr>
                    <th className="w60">#</th>
                    <th></th>
                    <th className="w100">Earnings</th>
                    <th className="w100">Deductions</th>
                    <th className="w100 text-right">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map(row => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td><span>{row.description}</span></td>
                        <td>{row.earnings}</td>
                        <td>{row.deductions}</td>
                        <td className="text-right">{row.total}</td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                    <td colSpan="2">
                        <span><strong>Note:</strong> Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </td>
                    <td>$1683</td>
                    <td>$200</td>
                    <td className="text-right"><strong className="text-success">$1483.00</strong></td>
                    </tr>
                </tfoot>
                </table>
                <button className="btn btn-top float-right text-white"><i className="icon-printer"></i> Print</button>
                </div>

                
            </div>
        </div>
    </div>
  )
}
