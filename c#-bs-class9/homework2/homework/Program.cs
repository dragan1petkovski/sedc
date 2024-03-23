namespace homework
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Shape
            Console.WriteLine("Triangle Information");
            List<Point>points = new List<Point>();

            Point p1 = new Point(1, 1);
            Point p2 = new Point(1, -1);
            Point p3 = new Point(2, 0);

            points.Add(p1);
            points.Add(p2);
            points.Add(p3);

            Shape triagolnik = new Shape(points);

            Console.WriteLine($"Perimeter is: {triagolnik.getPerimiter()}");
            #endregion

            #region Rectangle
            Console.WriteLine("Rectangle Information");
            Rectangle t = new Rectangle(5, 3);

            t.SetColor("red");
            Console.WriteLine($"Perimeter is {t.getPerimiter()}");
            Console.WriteLine($"Area is {t.GetAreat()}");

            #endregion

            #region Circle
            Console.WriteLine("Circle Information");
            Circle c = new Circle(5);
            Console.WriteLine($"Perimeter is {c.getPerimiter()}");
            Console.WriteLine($"Area is {c.GetAreat()}");
            #endregion

        }
    }
}
