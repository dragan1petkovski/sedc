namespace Task1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> list = new List<string>();
            list.Add("a");
            list.Add("b");
            list.Add("c");
            list.Add("d");
            list.Add("e");
            list.Add("f");
            list.Add("g");

            List<int> list2 = new List<int>();

            list2.Add(1);
            list2.Add(2);
            list2.Add(3);
            list2.Add(4);
            list2.Add(5);
            list2.Add(6);


            PrintInConsole<int> t = new PrintInConsole<int>();
            t.PrintCollection(list2);

            PrintInConsole<string> t2 = new PrintInConsole<string>();
            t2.PrintCollection(list);
            
        }
    }
}
