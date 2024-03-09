namespace homework2
{
    public class utilities
    {
        public static bool converttoNumber(string number)
        {
            if (!string.IsNullOrEmpty(number))
            {
                try
                {
                    Int32.Parse(number);
                    return true;
                }
                catch
                {
                    Console.WriteLine("This is not a number");
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
    
        public static bool CheckMathOperator(char mathoperator)
        {
            switch (mathoperator)
            {
                case '+':
                    return true;
                case '-':
                    return true;
                case '*':
                    return true;
                case '/':
                    return true;
                case '=':
                    return true;
                default:
                    Console.WriteLine("Wrong Operator: chose one from: +, -, *, /, =");
                    return false;

            }
        }

        public static float enterNumber()
        {
            string number;
            while (true)
            {
                Console.WriteLine("Enter Number");
                number = Console.ReadLine();

                if (converttoNumber(number))
                {
                    return float.Parse(number);
                }
                else
                {
                    Console.WriteLine("Wrong Number");
                }
            }


        }
    }

}
