import React, { useState } from 'react'
import { DataObj } from '../../constants'

const StudentFilter = ({ onFilterChange }) => {
  const [arrOfTlle, setArrOfTlle] = useState(DataObj.title.arrOfTitle)
  const [selectedItems, setSelectedItems] = useState(DataObj.title.arrOfTitle) // State to store selected items
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const handleOptionClick = (item) => {
    const newSelectedItems = [...selectedItems]
    const itemIndex = newSelectedItems.indexOf(item)

    if (itemIndex !== -1) {
      newSelectedItems.splice(itemIndex, 1) // Remove if already selected
    } else {
      newSelectedItems.push(item) // Add if not selected
    }

    setSelectedItems(newSelectedItems)
    onFilterChange(newSelectedItems) // Pass updated selection to onFilterChange
  }

  const handleSelectAll = () => {
    if (selectedItems.length === arrOfTlle.length) {
      // Deselect all
      setSelectedItems([])
      onFilterChange([]) // Notify parent
    } else {
      // Select all
      setSelectedItems(arrOfTlle)
      onFilterChange(arrOfTlle) // Notify parent
    }
  }

  const handleOptionFocus = () => {
    setIsOpen(!isOpen)
  }

  const filteredOptions = arrOfTlle.filter(item =>
    item[1].toLowerCase().includes(query.toLowerCase())
  )

  const isSelected = (item) => selectedItems.includes(item) // Helper function to check selection

  return (
    <div className='relative w-full z-[99]'>
      <span
        className='cursor-pointer w-full p-3 rounded-lg text-white bg-gray-600 hover:bg-gray-700 transition'
        onClick={handleOptionFocus}
      >
        {selectedItems.length === 0 ? 'Select' : `${selectedItems.length} selected`}
      </span>
      {isOpen && (
        <div className='absolute top-8 right-0 bg-white border rounded shadow-md mt-1'>
          <div className='flex flex-col p-2'>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder='Enter filter'
              className='border rounded p-2 mb-2 focus:outline-none focus:ring focus:ring-blue-300'
            />
            <span
              className='absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-800'
              onClick={() => setQuery('')}
            >
              ✖
            </span>
          </div>
          <ul className='max-h-40 overflow-y-auto border-t border-gray-300'>
            <li onClick={() => handleSelectAll()} className='flex justify-between p-2 cursor-pointer hover: transition-colors'>
              <span onClick={() => selectedItems.length === arrOfTlle.length}>Select All</span>
              <input
                type="checkbox"
                checked={selectedItems.length === arrOfTlle.length}
                onChange={handleSelectAll}
              />
            </li>
            {filteredOptions.length === 0 ? (
              <li className='p-2 text-gray-500'>No options found</li>
            ) : (
              filteredOptions.map((item, index) => (
                <div
                  key={item} // Use a unique key for each item
                  onClick={() => handleOptionClick(item)}
                  className={`flex justify-between p-2 cursor-pointer hover: transition-colors ${isSelected(item) ? 'bg-blue-200' : ''}`}
                >
                  {item[1]}
                  <input type="checkbox" checked={isSelected(item)} disabled /> {/* Disabled checkbox for visual representation */}
                </div>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default StudentFilter
