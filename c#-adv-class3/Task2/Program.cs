namespace Task2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Vechicle car = new Car();
            Vechicle motorbike = new MotorBike();
            Vechicle plane = new Plane();
            Vechicle boat = new Boat();

            car.DisplayInfo();
            motorbike.DisplayInfo();
            plane.DisplayInfo();
            boat.DisplayInfo();

        }
    }
}
