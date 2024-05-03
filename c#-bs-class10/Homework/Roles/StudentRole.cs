using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Homework.Roles
{
    internal class StudentRole : User.User
    {
        public string currentSubject { get; set; }
        public List<Subjects.Subject> subjects = new List<Subjects.Subject>();

        public StudentRole(string firstName, string lastName, string password,string currentSubjectName) : base(firstName, lastName, password)
        {
            currentSubject = currentSubjectName;
        }
    }
}
