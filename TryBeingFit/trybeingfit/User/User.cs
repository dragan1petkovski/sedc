using System.Security.Cryptography;
using System.Text;
using trybeingfit.Roles;

namespace trybeingfit.User
{
    internal class User
    {
        public string username;
        public string firstname;
        public string lastname;
        public SHA512 password;
        //public Delegate Authorization;
        public RoleEnum Role;
        public User(string UserName, string FirstName, string LastName, string Password,RoleEnum role)
        {
            if(ValidateName(FirstName)) 
            {
                if (ValidateName(LastName) )
                {
                    if(ValidatePassword(Password))
                    {
                        username = UserName;
                        firstname = FirstName;
                        lastname = LastName;
                        SHA512 temp = SHA512.Create();
                        temp.ComputeHash(Encoding.UTF8.GetBytes(Password));
                        password = temp;
                        Role = role;
                    }
                    else
                    {
                        throw new Exception("Password should be longer then 6 character and have at least one number");
                    }
                }
                else
                {
                    throw new Exception("Last name should be longer then 2 characters");
                }

            }
            else
            {
                throw new Exception("First name should be longer then 2 characters");
            }
        }

        public bool ValidatePassword(string Password)
        {
            if(Password.Any(c => char.IsDigit(c)) && Password.Count() >= 6)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    
        public bool ValidateName(string name)
        {
            if(name.Length >= 2) 
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    
    }

}
