import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/banklogo.png'

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <a><Image src={logo} alt="Logo" width="150" height="100" /></a>
      </Link>
    </div>
  )
}

export default Logo
