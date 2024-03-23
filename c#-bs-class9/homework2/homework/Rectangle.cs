namespace homework
{
    internal class Rectangle : Shape
    {
        public decimal SideA { get; set; }
        public decimal SideB { get; set; }

        public Rectangle() { }

        public Rectangle(decimal sideA, decimal sideB)
        {
            SideA = sideA;
            SideB = sideB;
        }

        public decimal getPerimiter() => 2*SideA + 2*SideB;

        public decimal GetAreat() => SideA * SideB;
    }
}
