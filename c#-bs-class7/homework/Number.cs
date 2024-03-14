
namespace homework
{
    internal class Number
    {
        private string Value;

        private string Type;

        private bool Even;

        private bool Positive;

        public Number(string value)
        {
            dynamic result = ConvertToNumber(value);
            if (result is not bool) 
            {
                if(result.GetType().Equals(typeof(Int32)))
                {
                    Value = value;
                    Type = "Integer";
                    Even = IsEvenNumber(result);
                    Positive = IsPositiveNumber(result);

                }
                else
                {
                    Value = value;
                    Type = "Decimal";
                    Even = IsEvenDecimal(result);
                    Positive = IsPositiveDecimal(result);
                }
            }
            else
            {
                Console.WriteLine("Error: Not a number");
            }
        }

        private bool IsPositiveNumber(int value)
        {
            if (value > 0)
            {
                return true;
            }
            else
            {
                return false;
            }

        }

        private bool IsPositiveDecimal(decimal value)
        {
            if (value > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private bool IsEvenNumber(int value)
        {
            if (value % 2 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private bool IsEvenDecimal(decimal value)
        {
            string temp = value.ToString();
            int NumberOfDecimalPlaces = temp.Split(".")[1].Length;
            value = value * (decimal)Math.Pow(10, NumberOfDecimalPlaces);
            if (value % 2m == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private dynamic ConvertToNumber(string value)
        {
            if (!string.IsNullOrEmpty(value))
            {
                if (Int32.TryParse(value, out int resultint))
                {
                    return resultint;
                }
                else
                {
                    if (decimal.TryParse(value, out decimal resultdecimal))
                    {
                        return resultdecimal;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            return false;
        }

        public override string ToString()
        {
            if(string.IsNullOrEmpty(Value))
            {
                return "";
            }
            string output = $"Status for number: {Value}\n";

            if (Positive)
            {
                output += "Positive\n";
            }
            else
            {
                output += "Negative\n";
            } 
            output += $"{Type}\n";
            if (Even)
            {
                output += "Even\n";
            }
            else
            {
                output += "Odd\n";
            }

            return output;
        }
    }
}
