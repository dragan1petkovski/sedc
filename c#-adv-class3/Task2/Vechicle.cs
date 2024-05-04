using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection.Metadata;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Task2
{
    internal abstract class Vechicle
    {
        public int numberOfWheels;

        public string name;

        public virtual void DisplayInfo()
        { }

    }

}
