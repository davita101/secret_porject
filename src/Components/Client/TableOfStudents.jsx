import React, { useState } from 'react';
import { FaBars, FaRegTrashAlt } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import { DataObj } from '../../constants';

const TableOfStudents = ({ searchQuery, selectedGroup }) => {
  const arrOfStudentDataKeys = selectedGroup.map(item => item[0]);
  const [students, setStudents] = useState(DataObj.title.studentsData);
  const [menuEdit, setMenuEdit] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedStudent, setEditedStudent] = useState({});
  const [openEditMenu, setOpenEditMenu] = useState(false);

  const filteredStudents = students.filter((student) =>
    student.student_name.includes(searchQuery) ||
    student.student_group.toString().includes(searchQuery)
  );

  const handleMenuEdit = (index) => {
    setMenuEdit(menuEdit === index ? null : index);
  };

  const handleDelete = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this student?");
    if (confirmed) {
      const newStudents = students.filter((_, i) => i !== index);
      setStudents(newStudents);
      setMenuEdit(null);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedStudent({ ...students[index] });
    setOpenEditMenu(true);
  };

  const handleSaveEdit = () => {
    const confirmed = window.confirm("Are you sure you want to save this student?");
    if (editedStudent && confirmed) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = editedStudent;
      setStudents(updatedStudents);
      setEditingIndex(null);
      setOpenEditMenu(false);
      setMenuEdit(null);
    }
  };

  const handleChange = (key, value) => {
    setEditedStudent(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <table className='overflow-auto'>
        <thead className='border-b-2 border-gray-500 table-auto w-full'>
          <tr className='text-gray-600 w-full'>
            {selectedGroup.map((item, index) => (
              <th className='p-1' colSpan={1} key={`_title--name-${index}`}>{item[1]}</th>
            ))}
          </tr>
        </thead>
        <tbody className='border-spacing-1'>
          {filteredStudents.length === 0 ? (
            <tr className='bg-red-500'>
              <td className="text-center text-gray-500">სტუდენტი არ მოიძებნება</td>
            </tr>
          ) : (
            filteredStudents.map((student, index) => (
              <tr className='text-gray-800 text-center' key={index}>
                {arrOfStudentDataKeys.map((key) => (
                  <td key={key} colSpan={1} className={`${index % 2 === 0 ? "bg-gray-400" : "bg-gray-500"} w-full`}>
                    {editingIndex === index ? (
                      <input
                        className={`p-2 border-none bg-teal-200`}
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
                  <div onClick={() => handleMenuEdit(index)} className='absolute right-3 mt-[-1.1rem] text-xl cursor-pointer'>
                    <div className='text-white bg-black/[.5] p-2 rounded-lg'>
                      <FaBars />
                    </div>
                    <div className='relative'>
                      {editingIndex === index && openEditMenu && (
                        <div className='flex gap-2 absolute top-[-1.9rem] right-11'>
                          <button
                            onClick={handleSaveEdit}
                            className="bg-green-500 text-white p-2 rounded flex items-center justify-center h-6 W-6">
                            &#10003;
                          </button>
                          <button onClick={() => {
                            setEditingIndex(null);
                            setOpenEditMenu(false);
                            setMenuEdit(null);
                          }} className="bg-red-500 text-white p-2 rounded flex items-center justify-center h-6  ">
                            &#10005;
                          </button>
                        </div>
                      )}
                    </div>

                    {menuEdit === index && (
                      <div className="absolute z-[2] mt-[-.4rem] right-3 p-1">
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
                        
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableOfStudents;
 