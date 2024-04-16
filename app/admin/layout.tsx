import React, { Children, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const AdminLayout = ( { children } : Props ) => {
  return (
    <div className='flex'>
        <div className='bg-slate-500 p-5 mr-5'>AdminLayout</div>
        <div>{children}</div>
    </div>
  )
}

export default AdminLayout