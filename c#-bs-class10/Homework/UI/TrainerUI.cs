using Homework.Roles;
using Homework.Subjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework.UI
{
    internal static class TrainerUI
    {
        public delegate void ListItems(TrainerRole trainer, string type);
        public delegate void FilterStudents(TrainerRole trainer);
        public delegate bool SignOut();
        
        public static void UITrainer(TrainerRole trainer)
        {
            ListItems listItems = new ListItems(ListAllItems);
            FilterStudents filterStudents = new FilterStudents(FilterByStudentName);
            SignOut signOut = new SignOut(User.User.LogOff);

            bool trainerMenuFlag = true;
            while(trainerMenuFlag)
            {
                Dictionary<DataObject, Delegate> OptionMapper = new Dictionary<DataObject, Delegate>();



                OptionMapper.Add(new DataObject("Student", "List all students"), listItems);
                OptionMapper.Add(new DataObject("Subject", "List all subjects"), listItems);
                OptionMapper.Add(new DataObject("filterStudent", "Filter by student name"), filterStudents);
                OptionMapper.Add(new DataObject("Trainer", "Logoff"), signOut);

                trainerMenuFlag = UI.UIChooser(OptionMapper,trainer);

            }
        }

        public static void ListAllItems(TrainerRole trainer, string type)
        {

            if (type == "Student")
            {
                foreach (string currentSubject in trainer.studentClasses.Keys)
                {
                    Console.WriteLine($"Subject: {currentSubject}");
                    foreach (StudentRole student in trainer.studentClasses[currentSubject])
                    {
                        Console.WriteLine($"\t- {student.FullName()}");
                    }
                }
            }
            else if (type == "Subject")
            {
                Console.WriteLine("List of all Subjects");
                foreach(string subjectName in trainer.studentClasses.Keys.ToList())
                {
                    Console.WriteLine($"\t- {subjectName}");
                }
            }

            
        }

        public static void FilterByStudentName(TrainerRole trainer)
        {
            while(true)
            {
                string inputFlag;
                Console.WriteLine("Sreach by Student name? (Y/N)");
                inputFlag = Console.ReadLine();
                if(inputFlag.ToLower() == "y")
                {
                    string fullName;
                    Console.Write("Enter student name: ");
                    fullName = Console.ReadLine();
                    List<StudentRole> filteredStudents = new List<StudentRole>();
                    foreach (List<StudentRole> students in trainer.studentClasses.Values)
                    {

                        filteredStudents = students.Where(student => student.FullName().Contains(fullName)).ToList();
                        foreach (StudentRole student in filteredStudents)
                        {
                            Console.WriteLine(student.FullName());
                            Console.WriteLine($"\t - {student.currentSubject}");
                            foreach (string subject in student.subjects.Select(subject => subject.subjectName).ToList())
                            {
                                Console.WriteLine($"\t - {subject}");
                            }
                            
                        }
                    }
                }
                else if(inputFlag.ToLower() == "n")
                {
                    break;
                }
            }


        }
    
    }
}
