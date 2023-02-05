import React from 'react'
import Modal from './Modal'
import { BsCheckCircleFill } from 'react-icons/bs'
import Link from 'next/link'

const SuccessModal = ({ title, message, show, onClose}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <div className="successCard">
        <BsCheckCircleFill className="successIcon" />
        <h3>{title}</h3>
        <p>{message}</p>

        <Link href="/account">
          <a className="modalBtn">Return to Home</a>
        </Link>
      </div>
    </Modal>
  )
}

export default SuccessModal
