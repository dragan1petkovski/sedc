namespace homework
{
    internal class Program
    {
        static void Main(string[] args)
        {
            
            while (true)
            {
                string flag;
                Console.WriteLine("Do you want to enter new number (y/n)");
                flag = Console.ReadLine();
                if( flag.ToLower() == "y" )
                {
                    string inputnumber;
                    Console.WriteLine("Enter new number");
                    inputnumber = Console.ReadLine();
                    Number number = new Number(inputnumber);
                    Console.WriteLine(number);

                }
                else if( flag.ToLower() == "n" ) 
                {
                    Console.WriteLine("Goodbye");
                    break;
                }
                else
                {
                    Console.WriteLine("Only 'y'es or 'n'o are accepted");
                }

            }
            
            
        }


        
    }
}
