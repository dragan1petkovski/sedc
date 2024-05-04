using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace class2_adv
{
    internal class Document: iSearchable
    {

        public void DocumentSearch()
        {
            string searchword;
            Console.Write("Enter search word: ");
            searchword = Console.ReadLine();
            Console.WriteLine($"Wrod \"{searchword}\" is appearing {Search(searchword)} times");
        }
        public int Search(string word)
        {
            int counter = 0;
            using(StreamReader sr = new StreamReader(@"..\..\..\skupstina logs.log"))
            {
                while(!sr.EndOfStream)
                {
                    string line = sr.ReadLine();
                    if(line.Contains(word))
                    {
                        counter++;
                    }
                }
            }
            return counter;
        }
    }
}
