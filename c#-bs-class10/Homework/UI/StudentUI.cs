using Homework.Roles;
using Homework.Subjects;
namespace Homework.UI
{
    internal static class StudentUI
    {
        public delegate void ListItems(StudentRole trainer);
        public delegate bool SignOut();
        public static void UIStudent(StudentRole student)
        {
            ListItems listSubjects = new ListItems(ListAllSubjects);
            SignOut signOut = new SignOut(User.User.LogOff);
            bool trainerMenuFlag = true;
            while (trainerMenuFlag)
            {


                Console.WriteLine($"Currently attending class - {student.currentSubject}");

                Dictionary<DataObject, Delegate> OptionMapper = new Dictionary<DataObject, Delegate>();
                OptionMapper.Add(new DataObject("Subject", "List all subjects"), listSubjects);
                OptionMapper.Add(new DataObject("Trainer", "Logoff"), signOut);


                trainerMenuFlag = UI.UIChooser(OptionMapper,student);
            }




        }

        public static void ListAllSubjects(StudentRole student)
        {
            Console.WriteLine("List all subjects ");
            foreach (Subject subject in student.subjects)
            {
                Console.WriteLine($"Subject: {subject.subjectName}\t-\tGrade: {subject.subjectGrade}");

            }
        }
    }
}
