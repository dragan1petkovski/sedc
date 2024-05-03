using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Homework.Roles
{
    internal class TrainerRole: User.User
    {
        public Dictionary<string,List<StudentRole>> studentClasses = new Dictionary<string, List<StudentRole>>();

        public TrainerRole(string firstName, string lastName, string password) : base (firstName, lastName, password)
        {

        }
        public bool TryFindStudent(string studentName,out Dictionary<string, List<string>> output)
        {
            Dictionary<string,List<string>> filteredStudentList = new Dictionary<string, List<string>> ();
            foreach( string subjectName in studentClasses.Keys )
            {
                filteredStudentList.Add(subjectName,studentClasses[subjectName].Where(student => student.FullName().Contains(studentName)).Select(student => student.FullName()).ToList<string>());
            }
            output = filteredStudentList;
            return true;
            
        }
    
        public List<string> GetAllStudents()
        {
            List<string> output = new List<string>();
            foreach(List<StudentRole> students in studentClasses.Values)
            {
                output.AddRange(students.Select(student => student.FullName()));
            }
            return output;
        }

        public List<string> GetAllSubjects()
        {
            List<string> output = new List<string>();

            foreach(string subject in studentClasses.Keys)
            {
                output.Add($"{subject}: {studentClasses[subject].Count} students attend");
            }

            return output;
        }
    }
}
