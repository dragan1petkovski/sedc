using System.Globalization;

namespace homework
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string taskFlag;
            Console.WriteLine("For Task 1 type '1'\nFor Task 2 type '2'");
            taskFlag = Console.ReadLine();

            if(utilities.CheckForValidInput(taskFlag))
            {
                if(Int32.TryParse(taskFlag, out int tempnumber))
                {
                    if(tempnumber == 1) 
                    {
                        while (true)
                        {
                            DateTime Today = DateTime.Now;
                            string inputdatestring;
                            Console.WriteLine("Start Task 1");
                            Console.WriteLine("Enter date of birth in following format dd.mm.yyyy or dd/mm/yyyy");
                            inputdatestring = Console.ReadLine();
                            if(DateTime.TryParseExact(inputdatestring,"dd.MM.yyyy",new CultureInfo("mk-MK"),DateTimeStyles.None,out DateTime inputdate))
                            {
                                Console.WriteLine((int)((Today - inputdate).Days / 365.25)); //356.25 e poradi prestapnata godina :D
                                break;
                            }
                            else if (DateTime.TryParseExact(inputdatestring, "dd/MM/yyyy", new CultureInfo("mk-MK"), DateTimeStyles.None, out  inputdate))
                            {
                                Console.WriteLine((int)((Today - inputdate).Days / 365.25)); //356.25 e poradi prestapnata godina :D
                                break;
                            }
                            else
                            {
                                Console.WriteLine("Wrong Date format");
                            }
                        }

                    }
                    else if (tempnumber == 2)
                    {
                        Console.WriteLine("Start Task 2");
                        string greeting = "Hello from SEDC Codeacademy 2024";
                        string stringnumber;

                        while (true)
                        {
                            Console.WriteLine($"Insert number between 1 and {greeting.Length}");
                            stringnumber = Console.ReadLine();

                            if (utilities.CheckForValidInput(stringnumber))
                            {
                                if (Int32.TryParse(stringnumber, out int len))
                                {
                                    if (len > 0 & len <= greeting.Length)
                                    {
                                        Console.WriteLine($"{greeting.Substring(0, len)}");
                                        break;
                                    }
                                    else
                                    {
                                        Console.WriteLine($"ERROR: write number between 1 and {greeting.Length}");
                                    }
                                }
                                else
                                {
                                    Console.WriteLine("ERROR: Not a number");
                                }
                            }
                        }

                    }
                    else
                    {
                        Console.WriteLine("You entered wrong option");
                        Environment.Exit(0);
                    }
                }
                else
                {
                    Console.WriteLine("You entered wrong option");
                    Environment.Exit(0);
                }
            }
        }
    }
}
