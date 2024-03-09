

using System.Text.Json;

namespace homework
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Result of calculation is: {0}",calculator());
        }
        
        static double calculator()
        {
            float result = 0;
            float temp;
            string number;
            string mathoperator;
            Console.WriteLine("Enter Number");
            number = Console.ReadLine();
            while (true)
            {
                if (utilities.converttoNumber(number))
                {
                    temp = float.Parse(number);
                    while (true)
                    {
                        Console.WriteLine("Enter Operator");
                        mathoperator = Console.ReadLine();
                        if (utilities.CheckMathOperator(mathoperator.ToCharArray()[0]))
                        {

                            switch (mathoperator)
                            {
                                case "+":
                                    result = temp + utilities.enterNumber();
                                    temp = result;

                                    break;
                                case "-":
                                    result = temp - utilities.enterNumber();
                                    temp = result;

                                    break;
                                case "*":
                                    result = temp * utilities.enterNumber();
                                    temp = result;

                                    break;
                                case "/":
                                    float tempnumber = utilities.enterNumber();
                                    
                                    if (tempnumber != 0)
                                    {
                                        result = temp / tempnumber;
                                        temp = result;

                                        break;
                                    }
                                    else
                                    {
                                        Console.WriteLine("Divisoin with ZERO is forbiden");
                                        break;
                                    }
                                    
                                case "=":
                                    return result;
                            }
                            
                        }
                        else
                        {
                            Console.WriteLine("Wrong operator:\nUse one of: +, -, *, /, = ");

                        }

                    }

                }
                else
                {
                    Console.WriteLine("Wrong Number");
                }
            }
            return result;
        }
        
    }
}
