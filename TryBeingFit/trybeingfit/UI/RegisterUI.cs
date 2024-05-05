using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using trybeingfit._Database;

namespace trybeingfit.UI
{
    internal static class RegisterUI
    {
        public static void UIRegister()
        {
            string firstname;
            string lastname;
            string username;
            string password;
            bool isUsernameUnique = false;

            Console.WriteLine("Register to Try Being Fit");
            Console.Write("Enter first name: ");
            firstname = Console.ReadLine();

            Console.Write("Enter last name: ");
            lastname = Console.ReadLine();

            do
            {
                Console.Write("Etner username: ");
                username = Console.ReadLine();
                isUsernameUnique = Database.IsUniqueUsername(username);
            } while (!isUsernameUnique) ;


            Console.Write("Enter password: ");
            password = Console.ReadLine();

            try
            {
                Database.AddNewUser(new User.User(username, firstname, lastname, password, Roles.RoleEnum.Standard));
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
