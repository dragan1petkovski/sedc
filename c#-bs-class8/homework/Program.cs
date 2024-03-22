
using customer;
using Database;
using account;

namespace homework
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region TestData
            DataBase.AddCustomer(2000101032054840, new Customer("Dragan", "Petkovski", "12345"));
            DataBase.AddCustomer(2000304068395847, new Customer("Bob", "Bobsky", "23456"));
            DataBase.AddCustomer(2000848593573496, new Customer("Test", "Testovski", "34567"));
            #endregion

            int numberflag;



            while (true)
            {

                #region WelcomeToTheBank
                Console.WriteLine("Welcome to DBank");
                Console.WriteLine("Please choose one of the following services");
                Console.WriteLine("1. Login");
                Console.WriteLine("2. Regiseter");
                #endregion

                if (int.TryParse(Console.ReadLine(), out numberflag))
                {
                    if (numberflag == 1)
                    {
                        string CardNumber;
                        string pin;
                        Console.WriteLine("Enter Card Number");
                        CardNumber = Console.ReadLine();
                        Console.WriteLine("Enter PIN");
                        pin = Console.ReadLine();
                        if (DataBase.TryGetCustomer(Account.ToCardNumber(CardNumber), out Customer customer))
                        {
                            
                            if (customer.ValidatePIN(pin))
                            {
                                Console.WriteLine(customer.Greeting());
                                Console.WriteLine("Choose one of the following options");
                                string exitflag = "N";
                                do
                                {

                                    Console.WriteLine("1. Check your balance");
                                    Console.WriteLine("2. Money Withdrawal");
                                    Console.WriteLine("3. Money Deposit");
                                    Console.WriteLine("0. Exit");

                                    if (int.TryParse(Console.ReadLine(), out numberflag))
                                    {
                                        switch (numberflag)
                                        {
                                            case 0:
                                                Console.WriteLine("Exit");
                                                exitflag = "N";
                                                break;
                                            case 1:
                                                Console.WriteLine(customer.getBalance());
                                                exitflag = Question();
                                                break;
                                            case 2:
                                                iMoneyWithdrawal(customer);
                                                exitflag = Question();
                                                break;
                                                
                                            case 3:
                                                iMoneyDeposit(customer);
                                                exitflag = Question();
                                                break;
                                        }
                                    }
                                    else
                                    {
                                        Console.WriteLine("Choose valid option (0, 1, 2 or 3)");
                                    }
                                }
                                while (exitflag == "Y");
                                Console.WriteLine($"Goodbye {customer}");

                            }
                            else
                            {
                                Console.WriteLine("Incorrect Card Number or PIN");
                            }
                        }
                        else
                        {
                            Console.WriteLine("Incorrect Card Number or PIN");
                        }

                    }
                    else if (numberflag == 2)
                    {
                        while (true)
                        {
                            Console.WriteLine("Thank you for choosing DBank");
                            Console.WriteLine("Please Enter your First name");
                            string customerFistName = Console.ReadLine();

                            if (!string.IsNullOrEmpty(customerFistName) && !string.IsNullOrWhiteSpace(customerFistName))
                            {
                                Console.WriteLine("Please enter your last name");
                                string customerLastName = Console.ReadLine();
                                if(!string.IsNullOrEmpty(customerLastName) && !string.IsNullOrWhiteSpace(customerLastName))
                                {
                                    
                                    string pin = Account.CreateNewPIN();
                                    Customer newCustomer = new Customer(customerFistName, customerLastName, pin);
                                    DataBase.AddCustomer(newCustomer.CardNumber, newCustomer);
                                    foreach(Int128 t in DataBase.GetAllCardNumbers())
                                    {
                                        Console.WriteLine(t);
                                    }
                                    Console.WriteLine(newCustomer.RegisteringInformation());
                                    string flag = Question();
                                    if("N" == flag)
                                    {
                                        Console.WriteLine("We are greatfull for choosing our services");
                                        Environment.Exit(0);
                                    }
                                    else if( "Y" == flag)
                                    {
                                        break;
                                    }
                                }
                            }
 
                        }

                    }
                    else
                    {
                        Console.WriteLine("Choose valid option (1 or 2)");
                    }
                }
            
            
            }

        }
        public static string Question() 
        {
            while (true)
            {
                Console.WriteLine($"Do you have additional requests? (Y/N)");
                string flag = Console.ReadLine();
                if(flag.ToUpper() == "Y")
                {
                    return "Y";
                }
                else if (flag.ToUpper() == "N")
                {
                    return "N";
                }
                else
                {
                    Console.WriteLine("Choose valid option (Y or N)");
                }
            }
            
        }
        public static void iMoneyWithdrawal(Customer customer)
        {
            Console.WriteLine("How much money do you want to withdrow");
            if (int.TryParse(Console.ReadLine(), out int amountOfMoney))
            {
                customer.MoneyWithdrawal(amountOfMoney);
            }
            else
            {
                Console.WriteLine("Enter valind number");
            }
        }

        public static void iMoneyDeposit(Customer customer)
        {
            Console.WriteLine("How much money do you want to depoit");
            if (int.TryParse(Console.ReadLine(), out int amountOfMoney))
            {
                customer.MoneyDeposit(amountOfMoney);
            }
            else
            {
                Console.WriteLine("Enter valind number");
            }
        }
    }
}
