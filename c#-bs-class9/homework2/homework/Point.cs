namespace homework
{
    internal class Point
    {
        public double x {get; set;}
        public double y { get; set;}

        public Point(double x, double y)
        {
            this.x = x;
            this.y = y;
        }

        public static double DistanceBetweenPoints(Point a, Point b) => Math.Sqrt(Math.Pow((a.x - b.x), 2) + Math.Pow((a.y - b.y), 2));
        
    }
}
