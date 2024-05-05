using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trybeingfit.UI
{
    internal static class HomepageUI
    {
        public static void UIHomepage()
        {
            while(true)
            {
                Console.WriteLine("Thank you for visitng Try Being Fit");
                Console.WriteLine("1. Login");
                Console.WriteLine("2. Register");
                Console.Write("\n Choose option: ");
                if (int.TryParse(Console.ReadLine(),out int inputflag))
                {
                    if(inputflag == 1)
                    {
                        LoginUI.UILogin();
                    }
                    else if(inputflag == 2)
                    {
                        RegisterUI.UIRegister();
                    }
                    else
                    {
                        Console.WriteLine("Choose viable option");
                    }
                }
            }

        }
    }
}
