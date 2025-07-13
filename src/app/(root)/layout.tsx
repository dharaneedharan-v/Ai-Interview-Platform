import Link from 'next/dist/client/link'
import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link className='flex' href="/">
          <img src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className='text-primary-100'>InterView-Prep</h2>
        </Link>
      </nav>
    
        {children}
    
    </div>
  )
}

export default RootLayout