using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task2
{
    internal class Manager : Employee, iEmployee
    {
        double salaryCoefficient;

        public Manager(string firstName, string lastName, int baseSalary, double salaryCoefficient) : base(firstName, lastName, baseSalary)
        {
            role = RoleEnum.Manager;
            this.salaryCoefficient = salaryCoefficient;
        }
        public void DisplayInformation() => Console.WriteLine($"{firstName} {lastName} - {role}");

        public double CalculateSalary() => GetBaseSalary() * this.salaryCoefficient;
    }
}
