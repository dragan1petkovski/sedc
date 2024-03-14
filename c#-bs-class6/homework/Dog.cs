using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace homework
{
    internal class Dog
    {
        public string Name { get; set; }
        public string Breed { get; set; }
        public string Color {get; set; }

        public Dog()
        { }

        public Dog(string name, string breed, string color)
        {
            Name = name;
            Breed = breed;
            Color = color;
        }

        public void Eating()
        {
            Console.WriteLine($"{Name} is eating");
        }

        public void Playing()
        {
            Console.WriteLine($"{Name} is playing");
        }

        public override string ToString()
        {
            return $"Dog name: {Name}\nDog breed: {Breed}\nDog Color: {Color}";
        }
    }
}
