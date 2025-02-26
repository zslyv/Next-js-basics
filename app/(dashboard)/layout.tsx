import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className='text-3xl'>This is a layout h1 upside the children in Dashboard</h1>
        {children}
        <h1 className='text-3xl'>This is a layout h1 down the children in Dashboard</h1>
    </div>
  )
}

export default Layout