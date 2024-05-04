namespace Task2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Programmer p1 = new Programmer("bob", "bobsky", 30000, 1.5);
            Manager m1 = new Manager("Test", "testovski", 30000, 2.5);


            p1.DisplayInformation();
            m1.DisplayInformation();

            Console.WriteLine(p1.CalculateSalary());
            Console.WriteLine(m1.CalculateSalary());
        }
    }
}
