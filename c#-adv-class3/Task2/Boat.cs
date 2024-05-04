using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Task2
{
    internal class Boat : Vechicle
    {
        public override void DisplayInfo()
        {
            Console.WriteLine("I am a boat and i don't have wheels :(");
        }
    }
}
