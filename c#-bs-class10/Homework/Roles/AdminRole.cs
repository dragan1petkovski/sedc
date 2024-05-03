using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework.Roles
{
    internal class AdminRole : User.User
    {

        public AdminRole(string firstName, string lastName, string password) : base(firstName, lastName, password)
        {

        }
        public void AddNewUser()
        {

        }
    }
}
