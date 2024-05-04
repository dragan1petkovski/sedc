using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1
{
    internal class User
    {
        public int Id { get; set; } 

        public string Name { get; set; }

        public int age { get; set; }

        public User(string name, int age, int id)
        {
            this.Name = name;
            this.age = age;
            Id = id;
        }

        public override string ToString()
        {
            return Name;
        }
    }
}
