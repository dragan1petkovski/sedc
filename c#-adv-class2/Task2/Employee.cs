using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task2
{
    internal abstract class Employee
    {
        public string firstName;
        public string lastName;
        public Guid id;
        public RoleEnum role;
        int baseSalary;

        public Employee(string firstName, string lastName, int baseSalary) 
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = baseSalary;
            id = Guid.NewGuid();
        }

        public int GetBaseSalary() => baseSalary;
    }

    internal interface iEmployee
    {
        void DisplayInformation();

        double CalculateSalary();
    }
}
