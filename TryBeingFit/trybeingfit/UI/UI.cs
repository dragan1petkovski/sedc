using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using trybeingfit._Database;
using trybeingfit.Items;

namespace trybeingfit.UI
{
    internal static class UI
    {
        public static bool UIChooser(User.User loggedUser)
        {
            bool isLoggedIn = true;
            do
            {
                Dictionary<string, dynamic> permissions = Database.GetPermissions(loggedUser.Role);
                Dictionary<int, string> displayOptions = new Dictionary<int, string>();

                int chooseOption;

                int i = 1;
                foreach (string option in permissions.Keys)
                {
                    displayOptions[i] = option;
                    Console.WriteLine($"{i}. {option}");
                    i++;
                }
                Console.WriteLine("\nChoose Option");

                if (int.TryParse(Console.ReadLine(), out chooseOption))
                {
                    if (displayOptions.TryGetValue(chooseOption, out string option))
                    {
                        try
                        {
                            isLoggedIn = !permissions[option](loggedUser);
                        }
                        catch
                        {
                            permissions[option](loggedUser);
                        }
                    }
                    else
                    {
                        Console.WriteLine("You chose invalid option");
                    }
                }
                else
                {
                    Console.WriteLine("You chose invalid option");

                }

            } while (isLoggedIn);
            return false;
        }
    }
}
