using customer;
namespace Database
{
    public static class DataBase
    {
        private static Dictionary<Int128, Customer> data = new Dictionary<Int128, Customer>();

        public static void AddCustomer(Int128 accound, Customer customer)
        {
            data.Add(accound, customer);
        }

        public static Customer GetCustomer(Int128 CardNumber)
        {
            
            if(data.TryGetValue(CardNumber,out Customer output))
            {
                return output;
            }
            else
            {
                return null;
            }
        }

        public static bool TryGetCustomer(Int128 CardNumber, out Customer output)
        {
            if(GetCustomer(CardNumber) != null)
            {
                output = GetCustomer(CardNumber);
                return true;
            }
            else
            {
                output = null;
                return false; 
            }

        }
    
        public static List<Int128> GetAllCardNumbers()
        {
            return data.Keys.ToList<Int128>();
        }
    }


}
