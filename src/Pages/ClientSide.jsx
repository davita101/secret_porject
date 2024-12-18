import React, { useState } from 'react'
import StudentFilter from '../Components/Client/StudentFilter'
import StudentSearch from '../Components/Client/StudentSearch'
import { DataObj } from '../constants'
import TableOfStudents from '../Components/Client/TableOfStudents'

const ClientSide = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGroup, setSelectedGroup] = useState(DataObj.title.arrOfTitle)

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleGroupChange = (group) => {
    setSelectedGroup(group)
  }
  return (
    <div className='container'>
      <div className='flex items-center gap-2'>
        <div className='flex-1 pt-3'>
          <StudentSearch onSearch={handleSearch} />
        </div>
        <div>
          <StudentFilter onFilterChange={handleGroupChange}/>
        </div>
      </div>
      <div className='relative '>
        <div className="border-2 border-black/10 rounded-lg p-2 overflow-x-auto">
          <TableOfStudents searchQuery={searchQuery} selectedGroup={selectedGroup} />
        </div>
      </div>
    </div>
  )
}

export default ClientSide
