using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace homework
{
    internal class Circle: Shape
    {
        public double Radius;

        public Circle(double radius)
        {
            Radius = radius;
        }
        public double getPerimiter() => Math.PI * Math.Pow(Radius, 2);

        public double GetAreat() => 2 * Math.PI * Radius;
    }
}
