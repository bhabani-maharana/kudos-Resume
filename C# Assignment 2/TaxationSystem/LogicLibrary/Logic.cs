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
        public void incomeRange(double salary, double atc)      //stores slab values by determining salary range.
        {
            if (atc > 150000)
                salary = salary - 150000;
            else
                salary = salary - atc;

            if (salary <= 250000)
            {
                Console.WriteLine("No Tax Charged");
            }

            else if (salary > 250000 && salary <= 500000)
            {
                slab1 = (salary - 250000) * 0.05;
                displaySlab(slab1, 0, 0);
            }

            else if (salary > 500000 && salary <= 1000000)
            {
                slab2 = 0.2 * (salary - 500000);
                displaySlab(12500, slab2, 0);
            }

            else if (salary > 1000000)
            {
                slab3 = 0.3 * (salary - 1000000);
                displaySlab(12500, 100000, slab3);
            }

        }

        public void displaySlab(double s1, double s2, double s3)        //Displays the output UI
        {
            Console.WriteLine("Salary > Rs. 2,50,000= Rs." + s1.ToString("#,##0") + "\nSalary > Rs. 5,00,000= Rs." + s2.ToString("#,##0") + "\nSalary > Rs. 10,00,000= Rs." + s3.ToString("#,##0"));
            Console.WriteLine("----------------------------------");
            Console.WriteLine("Total Tax Charged: Rs." + (s1 + s2 + s3).ToString("#,##0"));
            Console.WriteLine("----------------------------------");
        }


    }
}
