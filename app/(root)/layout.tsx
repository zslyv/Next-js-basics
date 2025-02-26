import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className="text3x1">Navbar</h1>
        {children}
    </div>
  )
}

export default Layout