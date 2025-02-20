import React from 'react'
import { AdminInfoList } from '../types'

type AdminInfoProps={
    admin:AdminInfoList
}
const AdminInfo:React.FC<AdminInfoProps> = ({admin}) => {
  return (
   <div>
    <h2>Admin Information</h2>
    <p>{admin.id}</p>
    <p>{admin.email}</p>
    <p>{admin.name}</p>
    <p>{admin.role}</p>
    <p>{admin.lastLogin}</p>
   </div>
  )
}

export default AdminInfo