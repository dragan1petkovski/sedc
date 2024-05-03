using Homework.Roles;
using System.Security.Cryptography;

namespace Homework
{
    internal static class DataBase
    {
        private static Dictionary<string, StudentRole> StudentsDB = new Dictionary<string, StudentRole>();

        private static Dictionary<string, TrainerRole> TrainerDB = new Dictionary<string, TrainerRole>();

        public static Dictionary<string, AdminRole> AdminDB = new Dictionary<string, AdminRole>();


        static DataBase()
        {
            GenerateAdmins();
            GenerateStudents();
            GenerateTrainer();
        }

        static void GenerateAdmins()
        {
            AdminDB.Add("dragan.petkovski", new AdminRole("dragan", "petkovski", "12345"));
            AdminDB.Add("bob.bobsky", new AdminRole("bob", "bobsky", "12345"));
        }

        static void GenerateStudents()
        {
            List<string> subjects = new List<string>();
            subjects.Add("HTML/CSS");
            subjects.Add("Basic Javascript");
            subjects.Add("Advanced Javascript");
            subjects.Add("Basic SQL");
            subjects.Add("Advanced SQL");
            subjects.Add("Basic NodeJS");
            subjects.Add("Advanced NodeJS");
            subjects.Add("Basic AngularJS");
            subjects.Add("Advanced AngularJS");


            StudentsDB.Add("dragan.petkovski", new StudentRole("dragan", "petkovski", $"12345","Advanced C#"));
            StudentsDB.Add("petar.dimitrovski", new StudentRole("petar", "dimitrovski", $"T3$t1234!", "Basic C#"));
            StudentsDB.Add("trajce.madenov", new StudentRole("trajce", "madenov", $"T3$t1234!", "Advanced C#"));
            StudentsDB.Add("daniel.mihajlovski", new StudentRole("daniel", "mihajlovski", $"T3$t1234!", "Basic C#"));
            StudentsDB.Add("stefan.kostadinovski", new StudentRole("stefan", "kostadinovski", $"T3$t1234!", "Advanced C#"));
            StudentsDB.Add("alen.aleksov", new StudentRole("alen", "aleksov", $"T3$t1234!", "Basic C#"));
            StudentsDB.Add("marina.nikolovska", new StudentRole("marina", "nikolovska", $"T3$t1234!", "Advanced C#"));
            StudentsDB.Add("silvana.trajkovska", new StudentRole("silvana", "trajkovska", $"T3$t1234!", "Basic C#"));
            StudentsDB.Add("martina.simjanovska", new StudentRole("martina", "simjanovska", $"T3$t1234!", "Advanced C#"));
            StudentsDB.Add("simona.trajkova", new StudentRole("simona", "trajkova", $"T3$t1234!", "Basic C#"));
            StudentsDB.Add("bosko.petkova", new StudentRole("bosko", "petkova", $"T3$t1234!", "Advanced C#"));
            StudentsDB.Add("maja.simonovska", new StudentRole("maja", "simonovska", $"T3$t1234!", "Basic C#"));
            StudentsDB.Add("liljana.dolgovska", new StudentRole("liljana", "dolgovska", $"T3$t1234!", "Advanced C#"));
            StudentsDB.Add("bojan.pavlevski", new StudentRole("bojan", "pavlevski", $"T3$t1234!", "Basic C#"));
            StudentsDB.Add("dushanka.nikolov", new StudentRole("dushanka", "nikolov", $"T3$t1234!", "Advanced C#"));
            StudentsDB.Add("neda.trajanov", new StudentRole("neda", "trajanov", $"T3$t1234!", "Basic C#"));
            StudentsDB.Add("nela.marinkova", new StudentRole("nela", "marinkova", $"T3$t1234!", "Advanced C#"));

            Random subjectPicker = new Random();

            foreach(string userNames in StudentsDB.Keys)
            {
                StudentRole temp = StudentsDB[userNames];
                for (int i = 0; i < 3; i++)
                {
                    
                    temp.subjects.Add(new Subjects.Subject(subjects[subjectPicker.Next(0, 8)],subjectPicker.Next(1,5)));
                }

                StudentsDB[userNames] = temp;
            }

        }

        static void GenerateTrainer()
        {
            Random randomNumber = new Random();
            TrainerDB.Add("slave.svanovski", new TrainerRole("Slave", "Ivanovski", "12345"));
            TrainerDB.Add("risto.panchevski", new TrainerRole("Risto", "Panchevski", "12345"));

            List<StudentRole> svanovskiStudents = new List<StudentRole>();
            List<StudentRole> panchevskiStudents = new List<StudentRole>();
            List<StudentRole> sqlsvanovskiStudents = new List<StudentRole>();
            List<StudentRole> sqlpanchevskiStudents = new List<StudentRole>();

            int i = 0;
            foreach(StudentRole student in StudentsDB.Values)
            {
                if(i%2==0)
                {
                    panchevskiStudents.Add(student);
                    sqlsvanovskiStudents.Add(student);
                }
                else if(i%2==1)
                {
                    svanovskiStudents.Add(student);
                    sqlpanchevskiStudents.Add(student);
                }
                i++;
            }

            TrainerRole temp = TrainerDB["slave.svanovski"];
            TrainerRole temp1 = TrainerDB["risto.panchevski"];

            temp.studentClasses.Add("Advanced C#", svanovskiStudents);
            temp1.studentClasses.Add("basic C#", panchevskiStudents);

            temp.studentClasses.Add("Advanced SQL", sqlsvanovskiStudents);
            temp1.studentClasses.Add("basic SQL", sqlpanchevskiStudents);
            
            TrainerDB["slave.svanovski"] = temp;
            TrainerDB["risto.panchevski"] = temp1;
        }

        public static bool TryGetAdminByUsername(string username, out AdminRole output)
        {
            if (AdminDB.TryGetValue(username, out AdminRole admin))
            {
                output = admin;
                return true;
            }
            else
            {
                output = null;
                return false;
            }
        
        }
        
        public static bool TryGetTrainerByUsername(string username, out TrainerRole output)
        {
            if (TrainerDB.TryGetValue(username, out TrainerRole trainer))
            {
                output = trainer;
                return true;
            }
            else
            {
                output = null;
                return false;
            }
        
        }
        
        public static bool TryGetStudentByUsername(string username, out StudentRole output)
        {
            if (StudentsDB.TryGetValue(username, out StudentRole student))
            {
                output = student;
                return true;
            }
            else
            {
                output = null;
                return false;
            }
        
        }

        public static void AddNewAdmin(AdminRole adminRole)
        {
            AdminDB.Add($"{adminRole.firstName.ToLower()}.{adminRole.lastName.ToLower()}",adminRole);
        }

        public static void AddNewStudent(StudentRole studentRole)
        {
            StudentsDB.Add($"{studentRole.firstName.ToLower()}.{studentRole.lastName.ToLower()}", studentRole);
        }
        public static void AddNewTrainer(TrainerRole trainerRole)
        {
            TrainerDB.Add($"{trainerRole.firstName.ToLower()}.{trainerRole.lastName.ToLower()}", trainerRole);
        }


        public static void RemoveAdmin(string username)
        {
            if(AdminDB.TryGetValue(username, out AdminRole adminRole))
            {
                AdminDB.Remove(username);
            }
            else
            {
                throw new Exception($"Admin user {username} DO NOT exist");
            }
        }

        public static void RemoveStudent(string username)
        {
            
            if (StudentsDB.TryGetValue(username, out StudentRole student))
            {
                if (StudentsDB.Remove(username))
                {
                    foreach (TrainerRole trainers in TrainerDB.Values)
                    {
                        foreach (List<StudentRole> students in trainers.studentClasses.Values)
                        {
                            students.Remove(student);
                        }
                    }
                }

            }
            else
            {
                throw new Exception($"Student user: {username} DO NOT exist");
            }
        }

        public static void RemoveTrainer(string username)
        {
            if (TrainerDB.TryGetValue(username, out TrainerRole trainer))
            {
                TrainerDB.Remove(username);
            }
            else
            {
                throw new Exception($"Trainer user {username} DO NOT exist");
            }
        }
    }

    
}
