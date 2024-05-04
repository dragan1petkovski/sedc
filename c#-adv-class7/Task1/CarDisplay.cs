using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Task1
{
    internal static class CarFilter
    {
        public static void DisplayCarModel(List<Car> carlist) 
        {
            foreach(Car item in carlist)
            {
                Console.WriteLine(item.Model);
            }
        }

        public static void Filter1() //Filter 1
        {
             DisplayCarModel(CarsData.Cars.Where(car => car.Origin == "Europe").ToList());
        }
  
        public static void Filter2() //Filter 2
        {
            List<Car> sixCylynder = new List<Car>();
            sixCylynder = CarsData.Cars.Where(car => car.Cylinders > 6).ToList();
            
            List<Car> fourCylynder = new List<Car>();
            fourCylynder = CarsData.Cars.Where(car => car.Cylinders == 4).Where(car => car.HorsePower > 110.0).ToList();
            
            List<Car> output = new List<Car>();
            output.Concat(sixCylynder).Concat(fourCylynder);
            DisplayCarModel(output);
        }
    
        public static void Filter3() //Filter 3
        {
            foreach (var item in CarsData.Cars.GroupBy(car => car.Origin))
            {
                Console.WriteLine($"{item.Key} {item.Count()} models");
            }
        }
    
        public static void Filter4()
        {
            IEnumerable<Car> filtered = CarsData.Cars.Where(car => car.HorsePower > 200);
            Console.WriteLine($"Maximum Miles per garlon is {filtered.Max(car => car.MilesPerGalon)}");
            Console.WriteLine($"Minimum miles per garlon is {filtered.Min(car => car.MilesPerGalon)}");
            Console.WriteLine($"Average Mile per Galon is {filtered.Average(car => car.MilesPerGalon)}");
        }
    
        public static void Filter5()
        {
            IEnumerable<Car> filtered = CarsData.Cars.OrderBy(car => car.AccelerationTime).Take(3);
            foreach (Car car in filtered.ToList())
            {
                Console.WriteLine($"{car.Model} - {car.AccelerationTime}");
            }

        }

        public static void Filter7()
        {
            double filtered = CarsData.Cars.Where(car => car.Cylinders > 6).Sum(car => car.Weight);
            Console.WriteLine($"Total weight of all cars with more then 6 cylynders is {filtered} kg");
        }

        public static void Filter8()
        {
            double filtered = CarsData.Cars.Where(car => car.Cylinders % 2 == 0).Sum(car => car.Weight);
            Console.WriteLine($"Total weight for even cylynder car is {filtered}");
        }

        public static void Filter9()
        {
            double filtered = CarsData.Cars.Where(car => car.Cylinders % 2 == 0).Average(car => car.MilesPerGalon);
            Console.WriteLine($"Average miles per garlon for even cylynder car is {filtered}");
        }
    }
}
