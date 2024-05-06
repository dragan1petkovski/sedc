using Microsoft.VisualBasic.FileIO;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using System.Text;
using System.Threading.Tasks;
using trybeingfit._Database;
using trybeingfit.Items;

namespace trybeingfit.Roles
{
    internal static class Trainer
    {
        public static Action<User.User> UploadVideo = (user) => 
        {
            bool isUploadingVideos;
            if(user.Role == RoleEnum.Trainer)
            {
                do
                {
                    string titleOfVideo;

                    Console.WriteLine("Update new training video");

                    Console.Write("Enter title of the training video: ");
                    titleOfVideo = Console.ReadLine();
                    try
                    {
                        Database.AddNewVideo(new Video(titleOfVideo, user));
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message, Console.ForegroundColor = ConsoleColor.Red);
                    }
                    Console.WriteLine("Do you want to Upload new video? (Y/N)");
                    if(Console.ReadLine().ToLower() == "y")
                    {
                        isUploadingVideos = true;
                    }
                    else
                    {
                        isUploadingVideos = false;
                    }
                } while (isUploadingVideos);
            }
            else
            {
                throw new Exception("Access Denied");
            }

        };
        
        public static Action<User.User> ScheduleTraining = (user) =>
        {
            bool isSchedulingTrainings;
            do
            {
                Console.WriteLine("Schedule a new training session");
                string trainingtitle;
                string trainingSchedule;

                Console.Write("Enter training title: ");
                trainingtitle = Console.ReadLine();

                Console.Write("Enter time and date of start (HH:mm dd.mm.yyyy - ex 18:30 05.05.2024): ");
                trainingSchedule = Console.ReadLine();
                if (DateTime.TryParseExact(trainingSchedule, "HH:mm dd.MM.yyyy", null, DateTimeStyles.None, out DateTime parsedTime))
                {
                    Database.ScheduleNewTraining(new OnlineTraining(parsedTime, trainingtitle), user);
                }

                Console.WriteLine("Do you want to schedule new session? (Y/N)");
                if(Console.ReadLine().ToLower() == "y")
                {
                    isSchedulingTrainings = true;
                }
                else
                {
                    isSchedulingTrainings = false;
                }

            } while (isSchedulingTrainings);

        };
        
        public static Action<User.User> RecheduleTraining = (user) =>
        {
            Dictionary<int, string> rescheduleTraining = new Dictionary<int, string>();
            List<OnlineTraining> onlineTrainings = Database.GetAllTrainersLiveTrainings(user);
            for (int i = 1; i <= onlineTrainings.Count(); i++) 
            {
                rescheduleTraining.Add(i, $"{onlineTrainings[i - 1].titleOfTheTraining}/{onlineTrainings[i-1].scheduledTraining.ToString("HH:mm dd.MM.yyyy")}");
                Console.WriteLine($"{i}. {onlineTrainings[i - 1].titleOfTheTraining}/{onlineTrainings[i - 1].scheduledTraining.ToString("HH:mm dd.MM.yyyy")}");
            }
            rescheduleTraining.Add(onlineTrainings.Count() + 1, "Exit");
            Console.WriteLine($"{onlineTrainings.Count() + 1}. Exit");
            Console.WriteLine("Choose video to reschedule");
            if(int.TryParse(Console.ReadLine(), out int id))
            {
                if(rescheduleTraining.TryGetValue(id,out string video))
                {
                    if( video != "Exit")
                    {
                        string[] splitVideo = video.Split(@"/");

                        OnlineTraining oldVideo = onlineTrainings.Find(livevideo => livevideo.titleOfTheTraining == splitVideo[0] && livevideo.scheduledTraining.ToString("HH:mm dd.MM.yyyy") == splitVideo[1]);


                        bool isSchedulingTrainings;
                        string trainingSchedule;
                        onlineTrainings.Remove(oldVideo);
                        do
                        {
                            Console.Write("Enter time and date of start (HH:mm dd.mm.yyyy - ex 18:30 05.05.2024): ");
                            trainingSchedule = Console.ReadLine();
                            if (DateTime.TryParseExact(trainingSchedule, "HH:mm dd.MM.yyyy", null, DateTimeStyles.None, out DateTime parsedTime))
                            {
                                OnlineTraining recheduledVideo = new OnlineTraining(parsedTime, oldVideo.titleOfTheTraining);
                                onlineTrainings.Add(recheduledVideo);
                            }

                            Console.WriteLine("Do you want to reschedule it again? (Y/N)");
                            if (Console.ReadLine().ToLower() == "y")
                            {
                                isSchedulingTrainings = true;
                            }
                            else
                            {
                                isSchedulingTrainings = false;
                            }

                        } while (isSchedulingTrainings);
                    }


                }
            
            }
            
        };
    }
}
