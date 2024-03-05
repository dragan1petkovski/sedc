using System.Diagnostics.Metrics;
using System.Reflection;
using System.Xml;

namespace homework
{
    internal class Program
    {
        static void Main(string[] args)
        {
            if (args[0] == "averagenumber")
            {
                Console.WriteLine("Calculate Average of Numbers");
                Console.WriteLine("Average number is {0}", averageNumber());
            }
            else if (args[0] == "NumberArray")
            {
                Console.WriteLine("Revers order of numbers");
                reversOrderOfNumbers();
            }
        }

        static bool converttoNumber(string number)
        {
            if(!string.IsNullOrEmpty(number))
            {
                try
                {
                    Int32.Parse(number);
                    return true;
                }
                catch
                {
                    Console.WriteLine("This is not a number");
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        static float averageNumber()
        {
            string number;
            int sum =0 ;
            int counter = 0;
            
            while(true)
            {
                Console.WriteLine("Enter number");
                number = Console.ReadLine();
                if(converttoNumber(number))
                {
                    sum += Int32.Parse(number);
                    counter++;
                }
                else
                {
                    if(counter == 0)
                    {
                        return 0;
                    }
                    else
                    {
                        break;
                    }
                }
            }
            return ((float)sum / (float)counter);
        }

        static void reversOrderOfNumbers()
        {
            string number;
            string inputString = "";
            string output = "";
            string[] inputArray;

            while(true)
            {
                Console.WriteLine("Enter Number");
                number = Console.ReadLine();
                if(converttoNumber(number))
                {
                    inputString += number + ',';
                }
                else
                {
                    break;
                }
            }
            inputArray = inputString.Split(",");
            for(int i = 1; i <= inputArray.Length; i++)
            {
                if(!string.IsNullOrEmpty(inputArray[inputArray.Length - i]))
                {
                    output += inputArray[inputArray.Length - i] + ",";
                }

            }
            Console.WriteLine("Input Numbers: {0}\nOutput Numbers: {1}",inputString, output);
        }
    }
}
