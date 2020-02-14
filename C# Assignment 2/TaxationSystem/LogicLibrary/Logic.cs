using Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicLibrary
{
    public class Logic : Interface1
    {
        double slab1, slab2, slab3;             
        public string incomeRange(double salary, double atc)      //stores slab values by determining salary range.
        {
            if (atc > 150000)
                salary = salary - 150000;
            else
                salary = salary - atc;

            if (salary <= 250000)
            {
                return "0";
            }

            else if (salary > 250000 && salary <= 500000)
            {
                slab1 = (salary - 250000) * 0.05;
                return slab1 + ",0,0";
            }

            else if (salary > 500000 && salary <= 1000000)
            {
                slab2 = 0.2 * (salary - 500000);
                return 12500 + "," + slab2 + ",0";
            }

            else if (salary > 1000000)
            {
                slab3 = 0.3 * (salary - 1000000);
                return 12500 + ",100000," + slab3;
            }
            else return "";

        }
    }
}
