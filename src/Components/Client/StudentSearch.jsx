import React, { useState } from 'react'

const StudentSearch = ({ onSearch }) => {
  const [query, setQuery] = useState()

  const handleSearch = (event) => {
    setQuery(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <div className='flex mb-4'>
      <input
        type='text'
        placeholder='მოსწავლის სახელი ან ჯგუფი'
        value={query}
        onChange={handleSearch}
        className=' p-2 w-full  outline-none bg-inherit border-b-2 border-r-2 border-black/50'
      />
    </div>
  )
}

export default StudentSearch
