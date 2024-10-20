import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import { MdEdit } from 'react-icons/md'

export const arrOfTitle = [
  ["student_name", "მოსწავლის სახელი",],
  ["student_age", "მოსწავლის ასაკი",],
  ["student_group", "მოსწავლის ჯგუფი",],
  ["student_speed", "სიჩქარე"],
  ["student_github", "git"],
  ["student_facebook", "Facebook"],
  ["parent_name", "მშობლის სახელი"],
  ["parent_facebook", "მშობლის Facebook"],
  ["student_level", "დონე"],
  ["student_role", "როლი"],
  ["leader_of_student", "მოსწავლის ლიდერი"],
  ["Score_from_leader", "ქულა ლიდერისგან"],
  ["score_from_quiz", "ქულა გამოცდიდან"],
  ["score_from_github", "ქულა GitHub-ზე"]
]

export const studentsData = [
  {
    student_name: "დავით გრძელშივლიდასდა",
    student_age: 19,
    student_group: 33,
    student_speed: 4,
    student_github: "https://github.com",
    student_facebook: "https://www.facebook.com/daviti",
    parent_name: "გიორგი სმითი",
    parent_facebook: "https://www.facebook.com/giorgis",
    student_level: 1,
    student_role: "მოსწავლე",
    leader_of_student: "მარიამი",
    Score_from_leader: 85,
    score_from_quiz: 92,
    score_from_github: 78,
  },

]

const TableOfStudents = ({ searchQuery, selectedGroup }) => {
const arrOfStudentDataKeys = selectedGroup.map(item => item[0])
  const [students, setStudents] = useState(studentsData)
  const [menuEdit, setMenuEdit] = useState(null)
  const [editingIndex, setEditingIndex] = useState(null)
  const [editedStudent, setEditedStudent] = useState(null)

  const filteredStudents = students.filter((student) =>
    student.student_name.includes(searchQuery) ||
    student.student_group.toString().includes(searchQuery)
  )

  const handleMenuEdit = (index) => {
    setMenuEdit(menuEdit === index ? null : index)
  }

  const handleDelete = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this student?")
    if (confirmed) {
      const newStudents = students.filter((_, i) => i !== index)
      setStudents(newStudents)
      setMenuEdit(null)
    }
  }

  const handleEdit = (index) => {
    setEditingIndex(index)
    setEditedStudent({ ...students[index] })
  }

  const handleSaveEdit = () => {
    if (editedStudent) {
      const updatedStudents = [...students]
      updatedStudents[editingIndex] = editedStudent
      setStudents(updatedStudents)
      setEditingIndex(null)
      setMenuEdit(null)
    }
  }

  const handleChange = (key, value) => {
    setEditedStudent(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div>
      <table className='overflow-auto'>
        <thead className='border-b-2 border-gray-500 table-auto w-full'>
          <tr className='text-gray-600'>
            {selectedGroup.map((item, index) => (
              <th className='p-1' key={`_title--name-${index}`}>{item[1]}</th>
            ))}
          </tr>
        </thead>
        <tbody className='border-spacing-1'>
          {selectedGroup.length === 0 ? (
            <tr className='bg-red-500'>
              <td colSpan={1} className="text-center text-gray-500">სტუდენტი არ მოიძებნება</td>
            </tr>
          ) : (
            filteredStudents.map((student, index) => (
              <tr className='text-gray-800 text-center' key={index}>
                {arrOfStudentDataKeys.map((key) => (
                  <td key={key} className={`${index % 2 === 0 ? "bg-gray-400" : "bg-gray-500"} w-full`}>
                    {editingIndex === index ? (
                      <input
                        className={` outline-none p-2 border-none ${index % 2 === 0 ? "bg-gray-400" : "bg-gray-500"}`}
                        type="text"
                        value={editedStudent[key]}
                        placeholder='edit...'
                        onChange={(e) => handleChange(key, e.target.value)}
                      />
                    ) : (
                        key === "student_facebook" || key === "parent_facebook" || key === "student_github" ? (
                          <a href={student[key]} target="_blank" rel="noopener noreferrer">Click to enter</a>
                      ) : (
                        student[key]
                      )
                    )}
                  </td>
                ))}
                <td>
                  <div onClick={() => handleMenuEdit(index)} className='absolute right-3 mt-[-.5rem] text-xl text-white cursor-pointer'>
                    <HiDotsVertical />
                    <div className="absolute z-[2] mt-[-.4rem] right-3 p-1">
                      {(menuEdit === index) &&
                        <div className="flex justify-between gap-1 flex-col bg-white p-1 rounded-md">
                          <div
                            className="flex items-center gap-2 rounded-md bg-red-500 p-2 text-white cursor-pointer"
                            onClick={() => handleDelete(index)}
                          >
                            <span>delete</span>
                            <FaRegTrashAlt />
                          </div>
                          <div
                            className="flex justify-between items-center gap-2 rounded-md bg-blue-500 p-2 cursor-pointer"
                            onClick={() => handleEdit(index)}
                          >
                            <span>edit</span>
                            <MdEdit />
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {editingIndex !== null && (
        <div>
          <button onClick={handleSaveEdit} className="absolute mt-[2rem] bg-green-500 text-white p-2 rounded">
            Save Changes
          </button>
        </div>
      )}
    </div>
  )
}

export default TableOfStudents
