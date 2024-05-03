using Homework.Roles;


namespace Homework.UI
{
    internal static class AdminUI
    {
        public delegate void AddNewItem(string type);
        public delegate void RemoveExistingItem(string type, AdminRole adminUser);
        public delegate bool SignOut();
        public static void UIAdmin(AdminRole admin)
        {
            bool adminMenuFlag = true;
            while(adminMenuFlag)
            {
                AddNewItem newItem = new AddNewItem(AddNew);
                RemoveExistingItem removeItem = new RemoveExistingItem(RemoveItem);
                SignOut SignOut = new SignOut(User.User.LogOff);

                Dictionary<DataObject, Delegate> OptionMapper = new Dictionary<DataObject, Delegate>();

                OptionMapper.Add(new DataObject("Student", "Add New Student"), newItem);
                OptionMapper.Add(new DataObject("Trainer", "Add New Trainer"), newItem);
                OptionMapper.Add(new DataObject("Admin", "Add New Admin"), newItem);

                OptionMapper.Add(new DataObject("Student", "Remove Student"), removeItem);
                OptionMapper.Add(new DataObject("Trainer", "Remove Trainer"), removeItem);
                OptionMapper.Add(new DataObject("Admin", "Remove Admin"), removeItem);

                OptionMapper.Add(new DataObject("Admin", "Logoff"),SignOut);

                adminMenuFlag = UI.UIChooser(OptionMapper, admin);
            }


        }

        public static void AddNew(string type)
        {
            while(true)
            {
                string questionFlag;
                Console.Write($"Do you want to add new {type}? (Y/N)");
                questionFlag = Console.ReadLine();
                if(questionFlag.ToLower() == "y") 
                {
                    string firstName;
                    string lastName;
                    string password;

                    Console.Write($"Add {type} first name: ");
                    firstName = Console.ReadLine();

                    Console.Write($"Add {type} last name: ");
                    lastName = Console.ReadLine();

                    Console.Write($"Add {type} password: ");
                    password = Console.ReadLine();



                    switch (type.ToLower())
                    {
                        case "admin":
                            try
                            {
                                AdminRole admin = new AdminRole(firstName, lastName, password);
                                DataBase.AddNewAdmin(admin);
                                break;
                            }
                            catch
                            {
                                break;
                            }
                        case "student":
                            try
                            {
                                Console.Write("Current Subject of the student: ");
                                string currentSubject;
                                currentSubject = Console.ReadLine();
                                StudentRole student = new StudentRole(firstName, lastName, password, currentSubject);
                                DataBase.AddNewStudent(student);
                                break;
                            }
                            catch
                            {
                                break
;                            }
                        case "trainer":
                            try
                            {
                                TrainerRole trainer = new TrainerRole(firstName, lastName, password);
                                DataBase.AddNewTrainer(trainer);
                                break;

                            }
                            catch
                            {
                                break;
                            }
                        default:
                            break;
                    }
                }
                else if(questionFlag.ToLower() == "n") 
                {
                    break;
                }
            }

        }

        public static void RemoveItem(string type, AdminRole currentAdmin)
        {

            while (true)
            {
                string questionFlag;
                Console.Write($"Do you want to remove {type}? (Y/N)");
                questionFlag = Console.ReadLine();
                if (questionFlag.ToLower() == "y")
                {
                    string username;
                    Console.Write($"To remove {type}, enter username: ");
                    username = Console.ReadLine();


                    if (type.ToLower() == "admin")
                    {
                        if ($"{currentAdmin.Username()}" != username)
                        {
                            try
                            {
                                DataBase.RemoveAdmin(username);
                                break;
                            }
                            catch (Exception e)
                            {
                                Console.WriteLine(e.Message);
                                break;
                            }

                        }
                        else
                        {
                            Console.WriteLine("CANNOT delete logged on user");
                            break;
                        }
                    }
                    else if (type.ToLower() == "trainer")
                    { 
                        try
                        {
                            DataBase.RemoveTrainer(username);
                            break;
                        }
                        catch (Exception e)
                        {
                            Console.WriteLine(e.Message);
                            break;
                        }
                    }
                    else if(type.ToLower() == "student")
                    {
                        try
                        {
                            DataBase.RemoveStudent(username);
                            break;
                        }
                        catch (Exception e)
                        {
                            Console.WriteLine(e.Message);
                            break;
                        }
                    }
                    else
                    {
                        break;
                    }
        
                }
                else if( questionFlag.ToLower() == "n")
                {
                    break;
                }
            }
           
            
        }

        
    }
}
