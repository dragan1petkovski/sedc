using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1
{
    internal static class UserDatabase
    {
        private static List<User> userDB = new List<User>();

        static UserDatabase()
        {
            userDB.Add(new User("dragan", 20,0));
            userDB.Add(new User("petko", 21,1));
            userDB.Add(new User("trajce", 33,2));
            userDB.Add(new User("pero", 23,3));
            userDB.Add(new User("maja", 42,4));
            userDB.Add(new User("jovan", 34,5));
            userDB.Add(new User("slavco", 54,6));
            userDB.Add(new User("marika", 65,7));
            userDB.Add(new User("marija", 12,8));
            userDB.Add(new User("simona", 34,9));
            userDB.Add(new User("martina", 28,10));
            userDB.Add(new User("zlatko", 25,11));
            userDB.Add(new User("daniel", 43,12));
            userDB.Add(new User("petar", 41,13));
            userDB.Add(new User("bobi", 24,14));
    
        }

        public static User SearchByName(string name)
        {
            return userDB.Find(user => user.Name == name);

        }

        public static List<User> SearchByAge(int age)
        {
            return userDB.Where(user => user.age == age).ToList();
        }

        public static  User SearchById(int id)
        {
            return userDB.Find(user => user.Id == id);
        }
    }


}
