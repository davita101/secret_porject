import React, { useState } from 'react'
import { HiDotsVertical } from 'react-icons/hi'
export const arrOfTitle = [
  "მოსწავლის სახელი",
  "მოსწავლის ასაკი",
  "მოსწავლის ჯგუფი",
  "სიჩქარე",
  "Facebook",
  "მშობლის სახელი",
  "მშობლის Facebook",
  "დონე",
  "როლი",
  "მოსწავლის ლიდერი",
  "ქულა ლიდერისგან",
  "ქულა გამოცდიდან",
  "ქულა GitHub-ზე"
]

export const studentsData = [
  {
    student_name: "დავით გრძელშივლიდასდა",
    student_age: 19,
    student_group: 33,
    student_speed: 4,
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
  {
    student_name: "დავით გრძელშივლიდასდა",
    student_age: 19,
    student_group: 33,
    student_speed: 4,
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
  {
    student_name: "დავით გრძელშივლიდასდა",
    student_age: 19,
    student_group: 33,
    student_speed: 4,
    student_facebook: "https://www.facebook.com/daviti",
    parent_name: "გიორგი სმითი",
    parent_facebook: "https://www.facebook.com/giorgis",
    student_level: 1,
    student_role: "მოსწავლე",
    leader_of_student: "მარიამი",
    Score_from_leader: 85,
    score_from_quiz: 92,
    score_from_github: 78,
  }
  // დაამატეთ მეტი სტუდენტი აქ
]
const arrOfStudentDataKeys = Object.keys(studentsData[0])
const TableOfStudents = ({ searchQuery }) => {
  const filteredStudents = studentsData.filter(student =>
  (student.student_name.includes(searchQuery) ||
    student.student_group.toString().includes(searchQuery))
  )
  return (
    <div>
      <table className='overflow-auto w-[1550px]'>
        <thead className='border-b-2 border-gray-500 table-auto w-full'>
          <tr className='text-gray-600'>
            {arrOfTitle.map((item, index) => (
              <th className={`p-1`} key={`_title--name-${index}`}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className=' border-spacing-5'>
          {filteredStudents.length === 0 ? (
            <tr className='bg-red-500'>
              <td colSpan={arrOfTitle.length} className="text-center text-gray-500">სტუდენტი არ მოიძებნება</td>
            </tr>
          ) : (
            filteredStudents.map((student, index) => (
              <tr onClick={() => console.log("bro")} className=' text-gray-800 text-center' key={index}>
                {arrOfStudentDataKeys.map((key) => (

                  <td key={key} className={` ${index % 2 === 0 ? "bg-gray-400" : "bg-gray-500"} w-[780px]`}>
                    {key === "student_facebook" || key === "parent_facebook" ? (
                      <a href={student[key]} target="_blank" rel="noopener noreferrer">Facebook</a>
                    ) : (
                      student[key]
                    )}
                  </td>
                ))}
                <td className=''>
                  <div className='absolute right-0 mt-[-.5rem] text-xl text-slate-900 cursor-pointer'>
                    <HiDotsVertical />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TableOfStudents