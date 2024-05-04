using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace homework
{
    internal static class HomeworkTasks
    {

        public static void CreateFileAndFolder() //Task 1
        {
            if(!Directory.Exists("Files"))
            {
                Directory.CreateDirectory("Files");
            }
            
            if(!File.Exists("name.txt"))
            {
                using (File.Open("name.txt", FileMode.CreateNew)) ;
            }
            
        } 

        public static void WriteNamesInFile() //Task 2
        {
            bool newName = true;
            string name;
            while (newName)
            {
                Console.WriteLine("Enter new name");
                name = Console.ReadLine();
                if (!string.IsNullOrEmpty(name))
                {
                    using (StreamWriter sw = new StreamWriter("name.txt", true))
                    {
                        sw.WriteLine(name);

                    }
                }
                else
                {
                    newName = false;
                }
            }
        } 
    
        public static void MoveNamesToDifferentFile() //Task 3 
        {
            using(StreamReader sr = new StreamReader("name.txt"))
            {
                while (!sr.EndOfStream)
                {
                    string name = sr.ReadLine();
                    if (name.StartsWith("a") || name.StartsWith("A"))
                    {
                        using (StreamWriter sw = new StreamWriter("NamesThatStartWith_A.txt", true))
                        {
                            sw.WriteLine(name);
                        }
                    }
                }
            }
        }
    
        public static void Calculations()
        {
            string directorypath = "Exercise";
            string filePath = @"Exercise\Calculations.txt";
            bool anotherCalculation = true; 

            if (!Directory.Exists(directorypath))
            {
                Directory.CreateDirectory(directorypath);
            }

            if (!File.Exists(filePath))
            {
                using (File.Open(filePath, FileMode.CreateNew));
                
            }

            while(anotherCalculation)
            {
                int firstNumber;
                int secondNumber;

                Console.Write("Enter first number: ");
                if(int.TryParse(Console.ReadLine(), out firstNumber) )
                {
                    Console.Write("Enter second number: ");
                    if(int.TryParse(Console.ReadLine(),out secondNumber))
                    {
                        string output = $"{firstNumber} + {secondNumber} = {firstNumber + secondNumber}\t-\t{DateTime.Now}";
                        using (StreamWriter sw = new StreamWriter(filePath, true))
                        {

                            sw.WriteLine(output);
                            Console.WriteLine(output);
                        }
                    }
                    else
                    {
                        Console.WriteLine("NOT a number");
                    }
                }
                else
                {
                    Console.WriteLine("NOT a number");
                }
            }
        }
    }
}
