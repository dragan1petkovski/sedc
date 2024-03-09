namespace homework2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int number;
            string flag;
            while(true)
            {
                Console.WriteLine("Enter 'asc' or 'desc' for ascending and descending order of numbers");
                flag = Console.ReadLine();
                if (flag == "asc")
                {
                    number = (int)utilities.enterNumber();
                    for (int i = 0; i < number; i++)
                    {
                        Console.WriteLine(i);
                    }
                    Environment.Exit(0);
                }
                else if (flag == "desc")
                {
                    number = (int)utilities.enterNumber();
                    for (int i = 0; i < number; i++)
                    {
                        Console.WriteLine(number - i - 1);
                    }
                    Environment.Exit(0);
                }

            }
   
        }
    }
}
