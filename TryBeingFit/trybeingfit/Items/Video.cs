using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using trybeingfit.Roles;

namespace trybeingfit.Items
{
    internal class Video
    {
        public int rating;
        public string title;
        public User.User trainer;
        private int visitors;

        public Video(string title, User.User trainer)
        {
            if(!string.IsNullOrEmpty(title) && !string.IsNullOrWhiteSpace(title))
            {
                this.rating = 0;
                this.title = title;
                this.trainer = trainer;
                this.visitors = 0;
            }
            else
            {
                throw new Exception("The title of the video cannot be empty");
            }
        }

        public void AddRaiting(int rating)
        {
            visitors++;
            this.rating += rating;
        }

        public double CalculateRaiting()
        {
            return (double)rating / (double)visitors;
        }
    }
}
