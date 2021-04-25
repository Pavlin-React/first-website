import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='logo' >
        <Image src='/PI_Logo.jpg' width={ 128 } height={ 77 }/>
      </div>
      <Link href='/'><a>Home</a></Link>
      <Link href='/about'><a>About</a></Link>
      <Link href='/ninjas'><a>Ninja List</a></Link>
      
    </nav>
  )
}

export default Navbar
