using Database;

namespace account
{
    public class Account
    {
        public Int128 CardNumber;

        private string PIN;
        public int Balance { get; set; }

        public Account(string pIN)
        {
            PIN = pIN;
            Balance = 0;
            CardNumber = GenerateCardNumber();
        }

        public static Int128 ToCardNumber(string cardnumber)
        {
            Int128 output=0;
            if(cardnumber.Contains("-"))
            {
                string[] parts = cardnumber.Split("-");
                if(parts.Length == 4)
                {
                    for (int i = 0; i < parts.Length; i++)
                    {
                        Int128 LongNumberPart;
                        if (Int128.TryParse(parts[i], out LongNumberPart))
                        {
                            output = (output * 10000) + LongNumberPart;

                        }
                    }
                    return output;
                }
                else
                {
                    return 0;
                }
                
            }
            else if (cardnumber.Length == 16)
            {
                if(Int128.TryParse(cardnumber,out output))
                {
                    return output;
                }
                else
                {
                    return 0;
                }
            }
            else
            {
                return 0;
            }
        }
        
        public string FromCardNumber()
        {
            string temp = CardNumber.ToString();
            return $"{temp.Substring(0, 4)}-{temp.Substring(4, 4)}-{temp.Substring(8, 4)}-{temp.Substring(12,4)}";
        }

        private Int128 GenerateCardNumber()
        {
            Int128 output = 0;
            do
            {
                
                Random CardNumber = new Random();
                for (int i = 0; i < 4; i++)
                {
                    output = output * 10000 + CardNumber.Next(1000, 9999);

                }
            }
            while (DataBase.GetCustomer(output) != null);
            return output;
            
        }
        
        private bool CheckAmount(int AmountOfMoney) => AmountOfMoney % 100 == 0 ? true : false;

        public void MoneyWithdrawal(int AmountOfMoney)
        {
            if(CheckAmount(AmountOfMoney))
            {
                if(AmountOfMoney < Balance)
                {
                    Console.WriteLine("Successful withdrawal");
                    Balance = Balance - AmountOfMoney;
                }
                else
                {
                    Console.WriteLine("Not enough funds");
                }
            }
            else
            {
                Console.WriteLine("The ATM's smalles denomitaion is 100 bil");
            }
        }

        public void MoneyDeposit(int AmountOfMoney)
        {
            if (CheckAmount(AmountOfMoney))
            {

                    Console.WriteLine("Successful Deposit");
                    Balance = Balance + AmountOfMoney;
            }
            else
            {
                Console.WriteLine("The ATM's smalles denomitaion is 100 bil");
            }
        }
    
        public static string CreateNewPIN()
        {
            string pin;
            while(true)
            {
                Console.WriteLine("Please enter your PIN for the card");
                pin = Console.ReadLine();
                if (pin.Length == 5)
                {
                    if (int.TryParse(pin, out int value)) //instead of using try catch
                    {
                        break;
                    }
                    else
                    {
                        Console.WriteLine("PIN have to contain only numbers");

                    }
                }
                else
                {
                    Console.WriteLine("PIN have to contain 5 digits");

                }
            }
            return pin;

        }
        
        public bool ValidatePIN(string pin)
        {
            if(pin == PIN)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public string getBalance() => $"Your Balance have: {Balance}";

        public string getPIN() => PIN;
    }
}
