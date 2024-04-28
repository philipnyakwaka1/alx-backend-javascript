export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((student) => student.location === city).map(
    (elem) => {
      const newGrade = newGrades.find((grade) => grade.studentId === elem.id);
      if (newGrade) {
        return {
          ...elem,
          grade: newGrade.grade,
        };
      }
      return {
        ...elem,
        grade: 'N/A',
      };
    },
  );
}
