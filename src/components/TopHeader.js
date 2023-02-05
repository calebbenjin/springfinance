import React from 'react'
import { AiFillLock } from 'react-icons/ai'
import { RiMapPinLine } from 'react-icons/ri'
import { FaQuestion } from 'react-icons/fa'
import Link from 'next/link'

const TopHeader = () => {
  return (
    <div className='topHeader'>
      <div className='container'>
        <nav>
          <Link href="/login"><button className='btnActive'>Personal</button></Link>
          <Link href="/login"><button>Business</button></Link>
          <Link href="/login"><button>Private Banking</button></Link>
          <Link href="/login"><button>International Banking</button></Link>
        </nav>
        <nav>
          <a>
            <div>
              <FaQuestion className='icon' />
            </div>
            <small>Help & support</small>
          </a>
          <a>
            <div>
              <RiMapPinLine className='icon' />
            </div>
            <small>Branch finder</small>
          </a>
          <Link href="/login">
            <a className='loginIcon'>
              <div>
                <AiFillLock className='icon' />
              </div>
              <small>Login</small>
            </a>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default TopHeader
