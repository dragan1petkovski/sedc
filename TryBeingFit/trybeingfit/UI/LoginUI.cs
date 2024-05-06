using trybeingfit._Database;
using trybeingfit.Roles;
using trybeingfit.UI;

namespace trybeingfit.UI
{
    internal static class LoginUI
    {
        public static void UILogin()
        {
            string username;
            string password;
            bool exitLoginUI = false; 
            while(!exitLoginUI)
            {
                Console.WriteLine("Try Being Fit");
                Console.WriteLine("NOTE: To return to Homepage leave username empty");

                Console.Write("\nEnter username: ");
                username = Console.ReadLine();

                Console.Write("Enter passwoed: ");
                password = Console.ReadLine();


                
                if(!string.IsNullOrEmpty(username) && !string.IsNullOrWhiteSpace(username))
                {
                    if (Database.Login(username, password, out User.User loggedInUser))
                    {
                        exitLoginUI = !UI.UIChooser(loggedInUser);
                    }
                    else
                    {
                        Console.WriteLine("Invalid Username or password");
                    }
                }
                else
                {
                    exitLoginUI = true;
                }


            }
        }
    }
}
