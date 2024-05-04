using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1
{
    internal class PrintInConsole<T>
    {
        public  void Print(T obj)
        {
            Console.WriteLine(obj);
        }

        public  void PrintCollection(List<T> collection)
        {
            foreach(var item in collection)
            {
                Console.WriteLine(item);
            }
            
        }
    }
}
