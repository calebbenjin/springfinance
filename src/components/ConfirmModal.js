import React from 'react'
import Modal from './Modal'
import { formatToCurrency } from '../helpers'
import { BsCheckCircleFill } from 'react-icons/bs'
import Link from 'next/link'

const ConfirmModal = ({ data, show, onClose}) => {

  console.log(data)

  return (
    <Modal show={show} onClose={onClose}>
      <div className="confirmCard">
        <h4>Confirm Client details</h4>
        <div className="confirmList">
          <div>
            <p>Account Name</p>
            <p className="bold">{data.accountName}</p>
          </div>
          <div>
            <p>Account Number</p>
            <p className="bold">{data.accountNumber}</p>
          </div>
          <div>
            <p>Amount</p>
            <p className="bold">{formatToCurrency(Number(data?.amount))}</p>
          </div>
          <div>
            <p>Bank Name</p>
            <p className="bold">{data.bankName}</p>
          </div>
        </div>
        
        <button onClick={onClose}>PROCEED</button>
      </div>
    </Modal>
  )
}

export default ConfirmModal
