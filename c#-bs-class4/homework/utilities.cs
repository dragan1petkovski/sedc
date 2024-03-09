namespace homework
{
    public class utilities
    {
        public static bool CheckForValidInput(string something)
        {
            if (!string.IsNullOrEmpty(something))
            {
                return true;
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

        public static int enterNumber(string exceptionmessage)
        {
            string number;
            while (true)
            {
                Console.WriteLine("Enter Number");
                number = Console.ReadLine();

                if (CheckForValidInput(number))
                {
                    if(Int32.TryParse(number,out int output));
                    {
                        return output;
                    }
                }
                else
                {
                    Console.WriteLine(exceptionmessage);
                }
            }


        }
    
        public static int[] IncreaseArraySizeByOne (int[] ints)
        {
            Array.Resize(ref ints, ints.Length+1);
            return ints;
        }
    }

}
