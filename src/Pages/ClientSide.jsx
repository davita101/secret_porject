import React, { useState } from 'react'
import TableOfStudents, { arrOfTitle } from '../Components/Client/TableOfStudents'
import StudentFilter from '../Components/Client/StudentFilter'
import StudentSearch from '../Components/Client/StudentSearch'

const ClientSide = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGroup, setSelectedGroup] = useState(arrOfTitle)

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleGroupChange = (group) => {
    setSelectedGroup(group)
  }
  const handleSelectGroup = () => {
    return selectedGroup
  }
  return (
    <div className='container'>
      <div className='flex items-center gap-2'>
        <div className='flex-1 pt-3'>
          <StudentSearch onSearch={handleSearch} />
        </div>
        <div>
          <StudentFilter onFilterChange={handleGroupChange} onHandleSelectGroup={handleSelectGroup} />
        </div>
      </div>
      <div className='relative '>
        <div className="border-2 border-black/10 rounded-lg p-2 overflow-x-auto">
          <TableOfStudents searchQuery={searchQuery} selectedGroup={handleSelectGroup()} />
        </div>
      </div>
    </div>
  )
}

export default ClientSide
