import React from 'react';

const ClientSide = () => {
  const arrOfTitle = [
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

  const studentsData = [
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
      student_name: "მარიამი",
      student_age: 18,
      student_group: 34,
      student_speed: 5,
      student_facebook: "https://www.facebook.com/mariam",
      parent_name: "ანა მიქაძე",
      parent_facebook: "https://www.facebook.com/ana",
      student_level: 2,
      student_role: "მოსწავლე",
      leader_of_student: "გიორგი",
      Score_from_leader: 90,
      score_from_quiz: 85,
      score_from_github: 80,
    },
    // დაამატეთ მეტი სტუდენტი აქ
  ];
  const handleKey= (key, col) => {
    return ["student_name", 'parent_name', "leader_of_student", "score_from_github"].includes(key) && col
  }
  const handleKeyTitles= (key, col) => {
    return ["მოსწავლის სახელი", 'მშობლის სახელი', "მოსწავლის ლიდერი", "ქულა GitHub-ზე"].includes(key) && col
  }
  const arrOfStudentDataKeys = Object.keys(studentsData[0])
  return (
    <div className='container'>
      <div className='border-2 border-black/10 rounded-lg p-2 overflow-x-auto'>
        <table className='overflow-x-scroll'>
          <thead className='border-b-2 border-gray-500 table-auto'>
            <tr className='text-gray-600 '>
             {arrOfTitle.map((item, index)=> (
               <th colSpan={handleKeyTitles(item, 2)} className={`p-1`} key={`_title--name-${index}`}>{item}</th>
             ))}
            </tr>
          </thead>
          <tbody className='border-spacing-5'>
             {studentsData.map((student, index) => (
              <tr className='text-gray-800 text-center' key={index}>
                {arrOfStudentDataKeys.map((key) => (
                  <td colSpan={handleKey(key, 2)} key={key} className={`${index % 2 == 0 ? "bg-gray-400" : "bg-gray-500"} w-[780px]`}>
                    {key === "student_facebook" || key === "parent_facebook" ? (
                      <a href={student[key]} target="_blank" rel="noopener noreferrer">Facebook</a>
                    ) : (
                      student[key]
                    )}
                  </td>
                ))}
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientSide;
