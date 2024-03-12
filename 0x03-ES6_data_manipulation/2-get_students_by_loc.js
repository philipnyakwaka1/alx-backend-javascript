export default function getStudentsByLocation(students, city) {
  return (Array.isArray(students) && typeof (city) === 'string') ? students.filter((student) => student.location === city) : null;
}
