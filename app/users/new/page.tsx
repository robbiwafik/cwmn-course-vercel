'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const NewUsersPage = () => {
  const router = useRouter();

  const handleClick = () => {
    // do something
    router.push('/users')
  }

  return (
    <div>
      <button onClick={handleClick} className='btn'>Create</button>
    </div>
  )
}

export default NewUsersPage