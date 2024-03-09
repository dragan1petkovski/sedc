namespace homework
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int flagnumber;
            
            Console.WriteLine("For Task 1 type '1'\nFor Task 4 type '2'");
            flagnumber = utilities.enterNumber("Enter number 1 or 2"); 
            if( flagnumber == 1)
            {
                Console.WriteLine("Start Task 1: Write 'N' to stop entering numbers");
                int[] arraysOfNumbers = new int[1];
                int tempnumber;
                string tempstring;
                int counter = 0;
                while (true)
                {
                    Console.WriteLine("Enter Number");
                    tempstring = Console.ReadLine();
                    if (utilities.CheckForValidInput(tempstring))
                    {
                        if (Int32.TryParse(tempstring, out tempnumber))
                        {
                            arraysOfNumbers[counter] = tempnumber;
                            arraysOfNumbers = utilities.IncreaseArraySizeByOne(arraysOfNumbers);
                            counter++;
                        }
                        else if (tempstring == "N")
                        {
                            break;
                        }
                        else
                        {
                            Console.WriteLine("Wrong Number or Exit letter");
                        }
                    }
                    
                }
                int sum = 0;
                foreach(int i in arraysOfNumbers)
                {
                    if(i%2==0)
                    {
                        sum = sum + i;
                    }
                }
                Console.WriteLine($"Sum of all even numbers is {sum}");

            }
            else if ( flagnumber == 2)
            {
                Console.WriteLine("Start Task 4");
                string stringOfNames = "";
                string tempstring;
                string tempflag;

                while (true)
                {
                    Console.WriteLine("Do you want to enter name? (Y/N)");
                    tempflag = Console.ReadLine();
                    if (tempflag.ToUpper() == "N")
                    {
                        break;
                    }
                    else if (tempflag.ToUpper() == "Y")
                    {
                        Console.WriteLine("Enter Name");
                        tempstring = Console.ReadLine();
                        stringOfNames += $"{tempstring},";
                    }
                }

                foreach(string name in stringOfNames.Split(","))
                { Console.WriteLine(name); }
            }
            else
            {
                Console.WriteLine("Enter number 1 or 2");
            }

        }

    }
}
