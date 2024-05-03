

namespace Homework.UI
{
    internal static class LoginUI
    {
        public static void UILogin()
        {
            string userName;
            string userPassword;
            while(true)
            {
                Console.Write("Enter Useraname (role\\username): ");
                userName = Console.ReadLine();

                Console.Write("Enter Password: ");
                userPassword = Console.ReadLine();

                string[] splitUserName= userName.Split("\\");
                string domain = splitUserName[0].ToLower();
                userName = splitUserName[1].ToLower();
                if (splitUserName.Count() > 0)
                {
                    if(domain == "admin")
                    {
                        if (DataBase.TryGetAdminByUsername(userName, out Roles.AdminRole Admin))
                        {
                            if (Admin.TryLogin(userPassword))
                            {
                                AdminUI.UIAdmin(Admin);
                            }
                            else
                            {
                                Console.WriteLine("Incorrect Username or Password");
                            }
                        }
                        else
                        {
                            Console.WriteLine("Incorrect Username or Password");
                        }
                    }
                    else if(domain == "student")
                    {
                        if (DataBase.TryGetStudentByUsername(userName, out Roles.StudentRole Student))
                        {
                            if (Student.TryLogin(userPassword))
                            {
                                StudentUI.UIStudent(Student);
                            }
                            else
                            {
                                Console.WriteLine("Incorrect Username or Password");
                            }
                        }
                        else
                        {
                            Console.WriteLine("Incorrect Username or Password");
                        }
                    }
                    else if( domain == "trainer")
                    {
                        if (DataBase.TryGetTrainerByUsername(userName, out Roles.TrainerRole Trainer))
                        {
                            if (Trainer.TryLogin(userPassword))
                            {
                                TrainerUI.UITrainer(Trainer);
                            }
                            else
                            {
                                Console.WriteLine("Incorrect Username or Password");
                            }
                        }
                        else
                        {
                            Console.WriteLine("Incorrect Username or Password");
                        }
                        break;
                    }
                    else
                    {
                        Console.WriteLine("Incorrect Username or Password");
                    }
                }
                else
                {
                    Console.WriteLine("Inccorect username or password");
                }
            }
        }
    }
}
