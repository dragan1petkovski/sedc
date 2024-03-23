namespace homework
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string flag;
            string inputString;
            int inputNumber;
            Queue<int> intQueue = new Queue<int>();
            do
            {
                Console.WriteLine("Do you want to add number in the queue? (Y/N)");
                flag = Console.ReadLine();
                if(!string.IsNullOrEmpty(flag) && !string.IsNullOrWhiteSpace(flag))
                {
                    if(flag.ToUpper() == "Y")
                    {
                        Console.Write("Nuber is: ");
                        inputString = Console.ReadLine();
                        if (!string.IsNullOrEmpty(inputString) && !string.IsNullOrWhiteSpace(inputString))
                        {
                            if (int.TryParse(inputString, out inputNumber))
                            {
                                intQueue.Enqueue(inputNumber);
                            }
                            else
                            {
                                break;
                            }
                        }
                        else
                        {
                            break;
                        }
                    }
                    else if(flag.ToUpper() == "N")
                    {
                        break;
                    }
                }
                else
                {
                    Console.WriteLine("Enter one of the provides answers 'Y' or 'N'");
                }



            }
            while (true);


            while (true)
            {
                if(intQueue.TryDequeue(out int outputNumber))
                {
                    Console.WriteLine($"Number is: {outputNumber}");
                }
                else
                {
                    break;
                }
                
            }

        }
    }
}
