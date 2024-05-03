using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework.UI
{
    internal class DataObject
    {
        public string type {get; set;}
        public string description { get; set;}

        public DataObject(string type, string description)
        {
            this.type = type;
            this.description = description;
        }
    }
}
