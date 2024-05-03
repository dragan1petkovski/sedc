using Homework.Roles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Homework.User
{
    internal class User
    {
        public string firstName {  get; set; }
        public string lastName { get; set; }
        public SHA512 password { get; set; }


        public User(string firstName, string lastName, string password)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            if(TryValidPasswordString(password,out SHA512 hashedPassword))
            {
                this.password = hashedPassword;
            }
            else
            {
                throw new Exception("Invalid Password. User can not be created");
            }

        }

        // Validate input
        private bool TryValidPasswordString(string password, out SHA512 validPassword)
        {
            if(!string.IsNullOrEmpty(password))
            {
                SHA512 hashedPassword = SHA512.Create();
                hashedPassword.ComputeHash(Encoding.UTF8.GetBytes(password));
                validPassword = hashedPassword;
                return true;
            }
            else
            {
                validPassword = null;
                return false;
            }
        }
        
        //Loingad
        public bool TryLogin(string inputPassword)
        {
            SHA512 hashedInputPassword = SHA512.Create();
            hashedInputPassword.ComputeHash(Encoding.UTF8.GetBytes(inputPassword));
            if(this.password.Hash.SequenceEqual(hashedInputPassword.Hash))
            {
                return true;
            }
            else
            {
                return false;
            }

        }
    
        public string FullName()
        {
            return $"{firstName} {lastName}";
        }

        public string Username()
        {
            return $"{firstName}.{lastName}";
        }

        public static bool LogOff() => false;
    }
}
