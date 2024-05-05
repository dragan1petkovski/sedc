using trybeingfit.Roles;
using trybeingfit.Items;
using System.Security.Cryptography;
using System.Text;
using trybeingfit.User;
using System.Globalization;


namespace trybeingfit._Database
{
    internal static class Database
    { 
        private static Dictionary<string, User.User> AuthenticationDB = new Dictionary<string, User.User>();

        private static Dictionary<RoleEnum, Dictionary<string,dynamic>> AuthorizationDB = new Dictionary<RoleEnum, Dictionary<string,dynamic>>();

        private static Dictionary<User.User, List<OnlineTraining>> TrainingScheduler = new Dictionary<User.User, List<OnlineTraining>>(); 

        private static List<Video> videos = new List<Video>();

        static Database()
        {
            GenerateAuthorizationDB();
            GenerateAuthenticationDB();
            GenerateVideos();
            GenerateScheduledLiveTrainings();
        }

        public static bool Login(string username, string password, out User.User loggedInUser)
        {
            if (AuthenticationDB.TryGetValue(username.ToLower(), out User.User user))
            {
                SHA512 temp = SHA512.Create();
                temp.ComputeHash(Encoding.UTF8.GetBytes(password));
                if (user.password.Hash.SequenceEqual(temp.Hash))
                {
                    if (AuthorizationDB.TryGetValue(user.Role, out Dictionary<string, dynamic> permissions))
                    {
                        //user.Authorization = permissions;
                        loggedInUser = user;
                        return true;
                    }
                    else
                    {
                        loggedInUser = null;
                        return false;
                    }

                }
                else
                {
                    loggedInUser = null;
                    return false;
                }
            }
            else
            {
                loggedInUser = null;
                return false;
            }
        }

        #region Database
        private static void GenerateAuthorizationDB()
        {
            Dictionary<string,dynamic> standard = new Dictionary<string,dynamic>();
            Dictionary<string, dynamic> permium = new Dictionary<string, dynamic>();
            Dictionary<string, dynamic> trainer = new Dictionary<string, dynamic>();
            //Standard user
            standard.Add("Upgrade2Premium", StandardUser.UpgradeToPremium);
            standard.Add("Account",StandardUser.UserProfile);
            standard.Add("Training",StandardUser.VideoTraining);
            standard.Add("Logoff",StandardUser.Logoff);
            
            AuthorizationDB.Add(RoleEnum.Standard, standard);

            //Premium User
            permium.Add("LiveTraining", PremiumUser.LiveVideo);
            permium.Add("Account", StandardUser.UserProfile);
            permium.Add("Training", StandardUser.VideoTraining);
            permium.Add("Logoff", StandardUser.Logoff);
            
            AuthorizationDB.Add(RoleEnum.Premium, permium);

            //Trainer

            trainer.Add("Upload Video", Trainer.UploadVideo);
            trainer.Add("Schedule New live traning", Trainer.ScheduleTraining);
            trainer.Add("Reschedule live traning", Trainer.RecheduleTraining);
            trainer.Add("Account", StandardUser.UserProfile);
            trainer.Add("Training", StandardUser.VideoTraining);
            trainer.Add("Logoff", StandardUser.Logoff);
            AuthorizationDB.Add(RoleEnum.Trainer, trainer);

        }
        
        private static void GenerateAuthenticationDB()
        {
            AuthenticationDB.Add("dragan.petkovski", new User.User("dragan.petkovski", "Dragan", "Petkovski", "123456",RoleEnum.Standard));
            AuthenticationDB.Add("bob.bobsky", new User.User("bob.bobsky", "bob", "bobsky", "123456", RoleEnum.Premium));
            AuthenticationDB.Add("john.doe", new User.User("john.doe", "John", "Doe", "123456", RoleEnum.Standard));
            AuthenticationDB.Add("jane.doe", new User.User("jane.doe", "Jane", "Doe", "123456", RoleEnum.Premium));
            AuthenticationDB.Add("sotka.piskulo", new User.User("sotka.piskulo", "Stoka", "Piskulo", "123456", RoleEnum.Standard));
            AuthenticationDB.Add("adzi.jankula", new User.User("adzi.jankula", "Adzi", "Jankula", "123456", RoleEnum.Standard));
            AuthenticationDB.Add("pizza.napolitana", new User.User("pizza.napolitana", "pizza", "napolitana", "123456", RoleEnum.Premium));
            AuthenticationDB.Add("james.bond", new User.User("james.bond", "James", "Bond", "123456", RoleEnum.Trainer));
            AuthenticationDB.Add("sungerotbob.pantalonovski", new User.User("sungerotbob.pantalonovski", "sungerotbob", "pantalonovski", "123456",RoleEnum.Trainer));
            AuthenticationDB.Add("test.testovski", new User.User("test.testovski", "test", "testovski", "123456", RoleEnum.Premium));

        }
        
        private static void GenerateVideos()
        {
            videos.Add(new Video("Chest training", AuthenticationDB["james.bond"]));
            videos.Add(new Video("Back training", AuthenticationDB["james.bond"]));
            videos.Add(new Video("Leg training", AuthenticationDB["james.bond"]));
            videos.Add(new Video("Arm training", AuthenticationDB["james.bond"]));

            videos.Add(new Video("Chest training", AuthenticationDB["sungerotbob.pantalonovski"]));
            videos.Add(new Video("Back training", AuthenticationDB["sungerotbob.pantalonovski"]));
            videos.Add(new Video("Leg training", AuthenticationDB["sungerotbob.pantalonovski"]));
            videos.Add(new Video("Arm training", AuthenticationDB["sungerotbob.pantalonovski"]));
        }
        
        public static void GenerateScheduledLiveTrainings()
        {
            List<OnlineTraining> jbtrainings = new List<OnlineTraining>();
            List<OnlineTraining> sbtrainings = new List<OnlineTraining>();
            DateTime now = DateTime.Now;
            jbtrainings.Add(new OnlineTraining(now.AddHours(1), "basic yoga"));
            jbtrainings.Add(new OnlineTraining(now.AddHours(2), "advanced yoga"));
            jbtrainings.Add(new OnlineTraining(now.AddDays(2).AddHours(1), "basic yoga"));
            jbtrainings.Add(new OnlineTraining(now.AddDays(2).AddHours(2), "advanced yoga"));
            jbtrainings.Add(new OnlineTraining(now.AddHours(3), "pilates"));


            sbtrainings.Add(new OnlineTraining(now.AddHours(1), "crossfit"));
            sbtrainings.Add(new OnlineTraining(now.AddHours(2), "streaching"));
            sbtrainings.Add(new OnlineTraining(now.AddDays(2).AddHours(1), "crossfit"));
            sbtrainings.Add(new OnlineTraining(now.AddDays(2).AddHours(2), "streaching"));
            sbtrainings.Add(new OnlineTraining(now.AddHours(3), "Kundalini yoga"));

            TrainingScheduler.Add(AuthenticationDB["sungerotbob.pantalonovski"], sbtrainings);
            TrainingScheduler.Add(AuthenticationDB["james.bond"], jbtrainings);
        }

        #endregion

        #region User
        public static User.User ValidUser(string username)
        {
            if (AuthenticationDB.TryGetValue(username, out User.User validUser))
            {
                return validUser;
            }
            else
            {
                throw new Exception("Invalid Username");
            }
        }

        public static void UpdateUser(User.User user)
        {
            if(AuthenticationDB.TryGetValue(user.username,out User.User validUser))
            {
                AuthenticationDB[user.username] = user;
            }
        }

        public static bool IsUniqueUsername(string username)
        {
            if (AuthenticationDB.TryGetValue(username, out User.User user))
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public static void AddNewUser(User.User user) => AuthenticationDB.Add(user.username, user);

        #endregion

        #region Video
        //Video related methods
        public static List<Video> GetAllVideoTrainings() => videos;

        public static void RemoveVideo(Video video) => videos.Remove(video);
        public static void AddNewVideo(Video video)
        {
            videos.Add(video);
        }

        #endregion

        #region OnlineTraining(live Video)

        public static void RemoveOldLiveTrainings(User.User user)
        {
            try
            {
                if(TrainingScheduler.TryGetValue(user, out List<OnlineTraining> validVideos ))
                {
                    TrainingScheduler[user] = validVideos.Where(liveTraining => liveTraining.scheduledTraining > DateTime.Now).ToList();
                }
                
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message, Console.ForegroundColor = ConsoleColor.Red);
            }
        }

        public static List<OnlineTraining> GetAllLiveTrainings()
        {
            List<OnlineTraining> output = new List<OnlineTraining>();
            foreach (List<OnlineTraining> liveVideos in TrainingScheduler.Values)
            {
                output = output.Concat(liveVideos).ToList();
            }
            return output.OrderBy(liveVideo => liveVideo.scheduledTraining).ToList();
        }

        public static List<OnlineTraining> GetAllTrainersLiveTrainings(User.User trainer)
        {
            RemoveOldLiveTrainings(trainer);
            if(trainer.Role == RoleEnum.Trainer)
            {
                if(TrainingScheduler.TryGetValue(trainer,out List<OnlineTraining> trainingList))
                {
                    return trainingList;
                }
                else
                {
                    Console.WriteLine("No live tranings scheduled yet", Console.ForegroundColor = ConsoleColor.Yellow);
                    return new List<OnlineTraining>();

                }
            }
            else
            {
                throw new Exception("Access Denied");
            }
        }

        public static void ScheduleNewTraining(OnlineTraining training, User.User trainer)
        {
            if (TrainingScheduler.TryGetValue(trainer, out List<OnlineTraining> trainingList))
            {
                TrainingScheduler[trainer].Add(training);
            }
            else
            {
                throw new Exception("This user name is not a trainer");
            }
        }
    
        public static Dictionary<string,dynamic> GetPermissions(RoleEnum role)
        {
            if(AuthorizationDB.TryGetValue(role,out Dictionary<string,dynamic> Permissions))
            {
                return Permissions;
            }
            else
            {
                throw new Exception("Authorization failed");
            }

        }

        #endregion
    }
}
