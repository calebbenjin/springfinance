import { useState } from 'react'
import Layout from '../../../components/AccountLayout'
import { useForm } from 'react-hook-form'
import { Col, Row, Spinner } from 'react-bootstrap'
import TaskCodeModal from '../../../components/TaskCodeModal'
import { parseCookies } from '../../../config/parseCookies'
import { formatToCurrency } from '../../../helpers'
import { IoWalletSharp } from 'react-icons/io5'
import { API_URL, IMG_URL } from '../../../config/index'
import VoulcherModal from '../../../components/VoulcherModal'
import CardModal from '../../../components/CardModal'
import SuccessModal from '../../../components/SuccessModal'
import { useRouter } from 'next/router'
import ConfirmModal from '../../../components/ConfirmModal'
import Modal from '../../../components/Modal'

const SupportPage = ({ user, token }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isFund, setIsFund] = useState(false)
  const [isLoading, setIsLoding] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isConfirm, setIsConfirm] = useState(false)
  const [confirmData, setConfirmData] = useState({})
  const data = user

  const router = useRouter()

  // const handleCardSubmit = () => {
  //   setIsLoding(true)
  //   setIsSuccessful(true)
  //   setShowSuccessModal(true)
  //   setShowCardModal(false)
  // }

  const handleVerify = () => {
    setShowModal(true)
  }


  const pendSubmit = async (data) => {
    setConfirmData(data)
    setIsConfirm(true)
  }

  const onSubmit = async (data) => {
    setConfirmData(data)
    setIsConfirm(true)
  }


  const handleTransfer = async () => {
    setIsLoding(true)
    if (user.amount < data.amount || user.amount === undefined) {
      
      setIsLoding(false)
    } else {
      const currentAmount = user.amount - Number(confirmData.amount)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          'currentAmount',
          JSON.stringify(currentAmount)
        )
      }
      setIsLoding(true)
      const response = await fetch(`${API_URL}/users/${user?._id}/amount`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: currentAmount,
        }),
      })
      const { amount, accountNumber, bankName, accountName, narration } = confirmData
      if (response.ok) {
        const res = await fetch(
          `${API_URL}/users/${user?._id}/transactions`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              amount,
              type: 'debit',
              bankName,
              accountNumber,
              accountName,
              narration,
            }),
          }
        )
        if (res.ok) {
          setIsConfirm(false)
          setShowSuccessModal(true)
          setTimeout(() => {
            router.push('/account')
          }, 2000);
        } else {
          console.log('error')
          setIsLoding(false)
        }
      }
    }
  }


  const handlePendingTransfer = async () => {
    setIsLoding(true)
    const { amount, accountNumber, bankName, accountName, narration } = confirmData
    const res = await fetch(
      `${API_URL}/users/${user?._id}/transactions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount,
          type: 'pending',
          bankName,
          accountNumber,
          accountName,
          narration,
        }),
      }
    )
    if (res.ok) {
      setIsConfirm(false)
      setShowSuccessModal(true)
      setTimeout(() => {
        router.push('/account')
      }, 1000);
    } else {
      console.log('error')
      setIsLoding(false)
    }
  }


  return (
    <Layout data={user}>
      <header className='account-header'>
        <div className='container'>

          <div className="userProfile">
            <div className="imageBox">
              <img src={`${IMG_URL}${data.passport}`} className="logoImg" alt="Profile Image" />
            </div>
            <div className="userName">
              <h4 className="welcome">
                Welcome back, <span>{`${data?.firstname}  ${data?.lastname}`}</span>
              </h4>
              <small>Managing your money through Internet Banking is quick and secure</small>
            </div>
          </div>

          <div className="balanceSheet">
            <div className="sheetBox">
              <p><IoWalletSharp className='balanceIcon' /> Total Balance</p>
              <h3 className='balance'>
                <span className='currency'>{data?.currency} </span>
                {!data?.amount ? '0.00' : formatToCurrency(data?.amount)}
                <p className={isFund ? 'alert' : 'hide'}>Insuficent Balance!!</p>
              </h3>
            </div>
          </div>
        </div>
      </header>
      <SuccessModal
        title='Thank You'
        message='Transfer Successful'
        onClose={() => setShowSuccessModal(false)}
        show={showSuccessModal}
      />
      <Modal show={isConfirm} onClose={() => setIsConfirm(false)}>
        <div className="confirmCard">
          <h4>Confirm Client details</h4>
          <div className="confirmList">
            <div>
              <p>Account Name</p>
              <p className="bold">{confirmData.accountName}</p>
            </div>
            <div>
              <p>Account Number</p>
              <p className="bold">{confirmData.accountNumber}</p>
            </div>
            <div>
              <p>Amount</p>
              <p className="bold">{formatToCurrency(Number(confirmData?.amount))}</p>
            </div>
            <div>
              <p>Bank Name</p>
              <p className="bold">{confirmData.bankName}</p>
            </div>
          </div>
          {user.transactions.length >= 0 ? <button onClick={handlePendingTransfer}>{isLoading ? (
            <>
              <Spinner
                as='span'
                animation='grow'
                size='sm'
                role='status'
                aria-hidden='true'
              />{' '}
              Transfering...
            </>
          ) : (
            'PROCEED'
          )}</button> : <button onClick={handleTransfer} className="transBtn"> {isLoading ? (
            <>
              <Spinner
                as='span'
                animation='grow'
                size='sm'
                role='status'
                aria-hidden='true'
              />{' '}
              Transfering...
            </>
          ) : (
            'PROCEED'
          )}</button>}
          
        </div>
      </Modal>
      <section className='accSection'>
        <div className='row'>
          <div className='col-lg-7 mx-auto'>
            <div className='formCard'>
              <form onSubmit={handleSubmit(user.transactions.length >= 0 ? pendSubmit : onSubmit)}>
                <h4 className='formTitle'> Enter Account Details</h4>
                {isAlert ? <p className='errAlert'>Insuficent Fund</p> : null}
                <Row>
                  <Col lg="6">
                    <div className='formControl'>
                      <label htmlFor='name'>ACCOUNT NAME</label>
                      <input
                        type='text'
                        placeholder='Beneficiary Account Name'
                        {...register('accountName', { required: true })}
                      />
                      {errors.accName && <small>Account Name is required</small>}
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className='formControl'>
                      <label htmlFor='accountNum'>ACCOUNT NUMBER</label>
                      <input
                        type='text'
                        placeholder='Beneficiary Account Number'
                        {...register('accountNumber', { required: true })}
                      />
                      {errors.accountNum && (
                        <small>Account Number is required</small>
                      )}
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className='formControl'>
                      <label htmlFor='accountNum'>BANK NAME</label>
                      <input
                        type='text'
                        placeholder='Bank Name'
                        {...register('bankName', { required: true })}
                      />
                      {errors.bankName && <small>Bank Name is required</small>}
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className='formControl'>
                      <label htmlFor='accountNum'>AMOUNT</label>
                      <input
                        type='text'
                        placeholder='Amount'
                        {...register('amount', { required: true })}
                      />
                      {errors.amount && <small>Amount is required</small>}
                    </div>
                  </Col>
                  <Col lg="12">
                    <div className='formControl'>
                      <label htmlFor='narration'>NARRATION</label>
                      <input
                        type='text'
                        placeholder='Narration'
                        {...register('narration', { required: true })}
                      />
                      {errors.narration && <small>Narration is required</small>}
                    </div>
                  </Col>
                </Row>
                <div className='formBtn'>
                  <button className='paymentBtn'>COMPLETE TRANSACTION</button>
                </div>
              </form>
              {/* {!isSuccessful ? (
                <button onClick={handleVerify} className='paymentBtnOutline'>
                  {isLoading ? (
                    <>
                      <Spinner
                        as='span'
                        animation='grow'
                        size='sm'
                        role='status'
                        aria-hidden='true'
                      />{' '}
                      Transfering...
                    </>
                  ) : (
                    'Proceed Transfer'
                  )}
                </button>
              ) : null} */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const resUser = await fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const user = await resUser.json()

  return {
    props: {
      user: user,
      token: token,
    },
  }
}

export default SupportPage
