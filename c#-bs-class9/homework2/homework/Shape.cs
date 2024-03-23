namespace homework
{
    internal class Shape
    {
        public List<Point> Points;
        public string Name;
        public string Color;

        public Shape () { }

        public Shape(List<Point> Points)
        {
            this.Points = Points;
        }
        public Shape(string Name, string color) 
        {
            string inputValue;
            int numberOfPoints;
            List<Point> TempPoints = new List<Point>();


            while (true)
            {
                Console.WriteLine("Enter number of points");
                inputValue = Console.ReadLine();
                if (Utilities.TryIntInput(inputValue,out int output))
                {
                    
                    for (int i = 0; i < output; i++)
                    {
                        Console.WriteLine("Enter coordinate x:");
                        if(Utilities.TryDoubleInput(Console.ReadLine(),out double x))
                        {
                            Console.WriteLine("Enter coordinate y:");
                            if(Utilities.TryDoubleInput(Console.ReadLine(), out double y))
                            {
                                Point temp = new Point(x, y);
                                TempPoints.Add(temp);
                            }
                            else
                            {
                                Console.WriteLine("Wrong coordinate y");
                            }
                        }
                        else
                        {
                            Console.WriteLine("Wrong coordinate x");
                        }
                    }
                    break;
                }


            }
            if (TempPoints.Count > 0)
            {
                this.Name = Name;
                Color = color;
                Points = TempPoints;

            }

        }
        public double getPerimiter()
        {
            double Perimiter = 0;
            int i = 0;
            while(i+1<Points.Count)
            {

                Perimiter += Point.DistanceBetweenPoints(Points[i+1], Points[i]);
                i++;
            }
            Perimiter += Point.DistanceBetweenPoints(Points[Points.Count - 1], Points[0]);
            return Perimiter;
        }

        public void SetColor(string color)
        {
            this.Color = color;
        }

        public void setName(string name)
        {
            this.Name = name;
        }

        public string getName() => this.Name;

        public string getColor() => this.Color;
    }
}
