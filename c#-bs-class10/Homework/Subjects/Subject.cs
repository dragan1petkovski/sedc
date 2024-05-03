using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework.Subjects
{
    internal class Subject
    {
        public string subjectName { get; set; }

        public int subjectGrade { get; set; }

        public Subject(string SubjectName, string SubjectGrade)
        {
            subjectName = SubjectName;
            if(int.TryParse(SubjectGrade, out int intSubjectGrade))
            {
                if(intSubjectGrade > 0 && intSubjectGrade < 6)
                {
                    subjectGrade = intSubjectGrade;
                }
                else
                {
                    throw new Exception("Invalid Grade, grades are from 1 to 5. Subject CANNOT be created");
                }
            }
            else
            {
                throw new Exception("Invalid input, grades are numbers from 1 to 5. Subject CANNOT be created");
            }
        }

        public Subject(string SubjectName, int SubjectGrade)
        {
            
            
            if (SubjectGrade > 0 && SubjectGrade < 6)
            {
                
                subjectGrade = SubjectGrade;
                subjectName = SubjectName;
            }
            else
            {
                throw new Exception("Invalid Grade, grades are from 1 to 5. Subject CANNOT be created");
            }
        }
    }
}
