using account;

namespace customer
{
    public class Customer : Account
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        

        public Customer(string firstName, string lastName, string pin) : base (pin)
        {
            FirstName = firstName;
            LastName = lastName;
        }

        public override string ToString() => $"{FirstName} {LastName}";

        public string Greeting() => $"Welcome to DBank {FirstName} {LastName}";
    }
}
