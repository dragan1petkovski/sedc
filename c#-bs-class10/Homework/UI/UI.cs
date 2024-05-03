using Homework.Roles;
using Newtonsoft.Json;
using System.Runtime.InteropServices;

namespace Homework.UI
{
    internal static class UI
    {
        public static bool UIChooser(Dictionary<DataObject, Delegate> inputOptions, dynamic User)
        {
            Dictionary<int,DataObject> outputOptions = new Dictionary<int, DataObject>();
            int i = 1;

            foreach(DataObject key in inputOptions.Keys)
            {
                outputOptions.Add(i++, key);
            }

            for(int j =  1; j <= outputOptions.Count; j++)
            { 
                Console.WriteLine($"{j}. {outputOptions[j].description}");
            }

            string optionFlag;
            Console.Write("Choose Option: ");
            optionFlag = Console.ReadLine();


            if (int.TryParse(optionFlag, out int intOptionflag))
            {
                if (outputOptions.TryGetValue(intOptionflag, out DataObject functionParameter))
                {
                    if (User.GetType() == typeof(AdminRole))
                    {
                        if (functionParameter.description.Contains("Remove"))
                        {
                            inputOptions[functionParameter].DynamicInvoke(functionParameter.type, User);
                            return true;
                        }
                        else if (functionParameter.description.Contains("Logoff"))
                        {
                            inputOptions[functionParameter].DynamicInvoke();
                            return false;
                        }
                        else
                        {
                            inputOptions[functionParameter].DynamicInvoke(functionParameter.type);
                            return true;
                        }
                    }
                    else if (User.GetType() == typeof(TrainerRole))
                    {
                        if(functionParameter.type == "filterStudent")
                        {
                            inputOptions[functionParameter].DynamicInvoke(User);
                            return true;
                        }
                        else if (functionParameter.description.Contains("Logoff"))
                        {
                            inputOptions[functionParameter].DynamicInvoke();
                            return false;
                        }
                        else
                        {
                            inputOptions[functionParameter].DynamicInvoke(User, functionParameter.type);
                            return true;
                        }
                        
                    }

                    else if (User.GetType() == typeof(StudentRole))
                    {
                        if (functionParameter.description.Contains("Logoff"))
                        {
                            inputOptions[functionParameter].DynamicInvoke();
                            return false;
                        }
                        else
                        {
                            inputOptions[functionParameter].DynamicInvoke(User);
                            return true;
                        }

                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    Console.WriteLine("Incorrect option");
                    return true;
                }
    
            }
            else
            {
                Console.WriteLine("Incorrect option");
                return true;
            }
        }
    }
}
