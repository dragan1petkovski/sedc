using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trybeingfit.Items
{
    internal class OnlineTraining
    {
        public DateTime scheduledTraining;
        public string titleOfTheTraining;

        public OnlineTraining()
        { }

        public OnlineTraining(DateTime scheduledTraining, string titleOfTheTraining)
        {
            if(ValidTimeSchedule(scheduledTraining))
            {
                this.scheduledTraining = scheduledTraining;
                this.titleOfTheTraining = titleOfTheTraining;
            }
            else
            {
                throw new Exception("Cannot schedule trainig in the past");
            }
        }

        private bool ValidTimeSchedule(DateTime scheduledTraining)
        {
            if(DateTime.Now < scheduledTraining) 
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
