import { useContext } from 'react'
import Sidebar from './Sidebar'
import { AuthContext } from '../context/Authcontext'
import TradingWiget from './TradingWiget'
import { IMG_URL } from '../config/index'
import Head from 'next/head'

const Layout = ({ children, data }) => {
  const { logout } = useContext(AuthContext)

  return (
    <div className="layoutContainer">
      <Head>
        <title>Spring Financial Bank</title>
      </Head>
      {/* <TradingWiget /> */}
      <main className='adminMain'>
        <Sidebar />  
        <article className="mainContainer">
          {children}
        </article>
      </main>
    </div>
  )
}

export default Layout
