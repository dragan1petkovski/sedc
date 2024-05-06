
using trybeingfit._Database;
using trybeingfit.Items;

namespace trybeingfit.Roles
{
    internal static class PremiumUser
    {
        public static Action<User.User> LiveVideo = (loggedUser) =>
        {
            bool chooseAnotherVideoFlag;
            List<OnlineTraining> liveVideos = Database.GetAllLiveTrainings();
            Dictionary<int, OnlineTraining> displayVideos = new Dictionary<int, OnlineTraining>();

            for (int j = 1; j <= liveVideos.Count; j++)
            {
                displayVideos[j] = liveVideos[j - 1];
            }

            int chooseVideo;
            int i = 1;
            foreach (OnlineTraining livevideo in liveVideos)
            {
                Console.WriteLine($"{i}. {livevideo.scheduledTraining}\t-\t{livevideo.titleOfTheTraining}");
                i++;
            }
            Console.WriteLine($"{i}. Exit");
            do
            {
                if (int.TryParse(Console.ReadLine(), out chooseVideo))
                {
                    if(chooseVideo == i)
                    {
                        break;
                    }
                    else if (displayVideos.TryGetValue(chooseVideo, out OnlineTraining live))
                    {
                        DateTime dateTimeNow = DateTime.Now;
                        if (live.scheduledTraining > dateTimeNow && live.scheduledTraining < dateTimeNow.AddMinutes(1))
                        {
                            Console.WriteLine("Start Training");
                        }
                        else
                        {
                            Console.WriteLine($"Traning will start in {live.scheduledTraining - dateTimeNow}");
                        }
                    }
                    else
                    {
                        Console.WriteLine("You choose incorrect option");
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

    }
}
