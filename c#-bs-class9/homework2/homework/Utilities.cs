namespace homework
{
    internal static class Utilities
    {
        public static bool TryIntInput(string inputString, out int output)
        {
            if (!string.IsNullOrEmpty(inputString) && !string.IsNullOrWhiteSpace(inputString))
            {
                if (int.TryParse(inputString, out int inputValue))
                {
                    output = inputValue;
                    return true;
                }
                else
                {
                    output = 0;
                    return false;
                }
            }
            else
            {
                output = 0;
                return false;
            }

        }

        public static bool TryDoubleInput(string inputString, out double output)
        {

            if (!string.IsNullOrEmpty(inputString) && !string.IsNullOrWhiteSpace(inputString))
            {
                if (Double.TryParse(inputString, out double inputValue))
                {
                    output= inputValue;
                    return true;
                }
                else
                {
                    output = 0;
                    return false;
                }
            }
            else
            {
                output = 0;
                return false;
            }
        }
    
    }
}
