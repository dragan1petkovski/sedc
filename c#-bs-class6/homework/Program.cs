namespace homework
{
    internal class Program
    {
        static void Main(string[] args)
        {
            

            while (true)
            {
                string flag;
                Console.WriteLine("Add new dog (y/n)");
                flag = Console.ReadLine();
                if (flag.ToLower() == "y")
                {
                    Console.WriteLine("Enter dog name");
                    string dogname = Console.ReadLine();

                    Console.WriteLine("Enter dog breed");
                    string dogbreed = Console.ReadLine();

                    Console.WriteLine("Etner dog color");
                    string dogcolor = Console.ReadLine();

                    Dog newdog = new Dog(dogname, dogbreed, dogcolor);

                    Console.WriteLine(newdog);
                    continue;
                }
                else if (flag.ToLower() == "n")
                {
                    Console.WriteLine("Goodbye");
                    Environment.Exit(0);
                }
                else
                {
                    Console.WriteLine("Write proper flag!!!");
                }
            }

            
        }
    }
}
