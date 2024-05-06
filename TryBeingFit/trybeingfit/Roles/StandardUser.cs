using trybeingfit._Database;
using trybeingfit.Items;


namespace trybeingfit.Roles
{
    internal static class StandardUser
    {
        public static Action<User.User> UserProfile = (user) =>
        {
            Console.WriteLine($"First name: {user.firstname}");
            Console.WriteLine($"Last name: {user.lastname}");
            Console.WriteLine($"User type: {user.Role}");
            Console.WriteLine("\n\n");
        };

        public static Action<User.User> VideoTraining = (user) =>
        {
            bool chooseAnotherVideoFlag;
            Dictionary<int, Video> DisplayVideos = GetAllVideoTrainings();
            int chooseVideo;
            string inputChoice;
            do
            {
                foreach (int i in DisplayVideos.Keys)
                {
                    Console.WriteLine($"{i}. {DisplayVideos[i].title}");
                }
                Console.WriteLine($"{DisplayVideos.Keys.Count+1}. Exit");
                Console.WriteLine("\n\nChoose Video");
                inputChoice = Console.ReadLine();
                if (int.TryParse(inputChoice, out chooseVideo))
                {
                    if(DisplayVideos.Keys.Count+1 == chooseVideo)
                    {
                        break;
                    }
                    else
                    {
                        VideoAction(DisplayVideos[chooseVideo]);
                    }
                }
                else
                {
                    Console.WriteLine("You choose incorrect option");
                }
                Console.WriteLine("Do you want to choose another video? (Y/N)");
                string chooseAnotherVideo = Console.ReadLine();
                if (chooseAnotherVideo.ToLower() == "y")
                {
                    chooseAnotherVideoFlag = true;
                }
                else
                {
                    chooseAnotherVideoFlag = false;
                }
            } while (chooseAnotherVideoFlag);
        };

        public static Func<User.User,bool> Logoff = (user) => true;

        public static Action<User.User> UpgradeToPremium = (user) =>
        {
            try
            {
                User.User validUser = Database.ValidUser(user.username);
                validUser.Role = RoleEnum.Premium;
                Database.UpdateUser(validUser);
                Console.WriteLine("Thank you for upgrading to Permium, enjoy our live trainings");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Inccorect username",Console.ForegroundColor = ConsoleColor.Red);
            }
        };
        private static Dictionary<int, Video> GetAllVideoTrainings()
        {
            Dictionary<int, Video> output = new Dictionary<int, Video>();
            int i = 1;
            foreach (Video video in Database.GetAllVideoTrainings().OrderBy(video => video.CalculateRaiting()).ToList())
            {
                output[i] = video;
                i++;
            }
            return output;
        }
        private static void VideoAction(Video video)
        {
            bool loopcheck = true;
            while (loopcheck)
            {
                int chooseFlag;
                Console.WriteLine("Choose Option:");
                Console.WriteLine("1. Start Training");
                Console.WriteLine("2. Rate trainig video");
                Console.WriteLine("3. Exit Video");
                if (int.TryParse(Console.ReadLine(), out chooseFlag))
                {
                    if (chooseFlag == 2)
                    {
                        int rating;
                        Console.WriteLine("Rating the traning video, with grade from 1 to 5. 1 beeing Very bad and 5 beeing Very good");
                        if (int.TryParse(Console.ReadLine(), out rating))
                        {
                            if (rating > 0 && rating < 6)
                            {
                                Database.RemoveVideo(video);
                                video.AddRaiting(rating);
                                Database.AddNewVideo(video);
                                Console.WriteLine($"Thank you for rating the video \"{video.title}\"");
                            }
                        }
                    }
                    else if (chooseFlag == 1)
                    {
                        Console.WriteLine("Start Training");
                    }
                    else if( chooseFlag == 3)
                    {
                        break;
                    }
                    Console.WriteLine("Exit Video (Y/N)");
                    string exitflag = Console.ReadLine();
                    if (exitflag.ToLower() != "n")
                    {
                        loopcheck = true;
                    }
                    else
                    {
                        loopcheck = false;
                    }

                }


            }

        }
    }
}
