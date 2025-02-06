import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full border-b">Header
    <div className="wrapper flex items-center justify-between">
    <Link href="/" className="w-36">
    <Image 
    src= "/assets/images/logo.svg" width={128} height={38} 
    alt="Event app logo"/>
    </Link>
    <div className='flex w-32 justify-end gap-3'>
        
    </div>
    </div>
    </header>
  )
}

export default Header