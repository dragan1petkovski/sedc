using class2_adv;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1
{
    internal class WebPage : iSearchable
    {
        public void HtmlSearch()
        {
            string searchword;
            Console.Write("Enter search word: ");
            searchword = Console.ReadLine();
            Console.WriteLine($"Wrod \"{searchword}\" is appearing {Search(searchword)} times");
        }
        public int Search(string word)
        {
            int counter = 0;
            using (StreamReader sr = new StreamReader(@"..\..\..\html.html"))
            {
                while (!sr.EndOfStream)
                {
                    string line = sr.ReadLine();
                    if (line.Contains(word))
                    {
                        counter++;
                    }
                }
            }
            return counter;
        }
    }
}
