import React from 'react'
import { sort } from 'fast-sort'
import Link from 'next/link'

interface Props {
    sortOrder: string
}

interface Users {
    id: number,
    name: string,
    email: string,
}

const UserTable = async ( {sortOrder} : Props ) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/xusers', {cache: 'no-cache'})
    const users: Users[] = await res.json()

    let sortedUsers: Users[] = users;
    if (sortOrder === 'name')
        sortedUsers = sort(users).asc(user => user.name)
    else if (sortOrder === 'email')
        sortedUsers = sort(users).asc(user => user.email)

  return (
    <table className='table'>
        <thead>
            <tr>
                <th>
                    <Link href='?sortOrder=name'>Name</Link>
                </th>
                <th>
                    <Link href='?sortOrder=email'>Email</Link>
                </th>
            </tr>
        </thead>
        <tbody>
        {sortedUsers.map(user => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        ))}
        </tbody>
    </table>
  )
}

export default UserTable