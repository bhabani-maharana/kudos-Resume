using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LogicLibrary;

namespace Progam.UI
{
    class Program
    {
        static void Main(string[] args)
        {
            Logic l1 = new Logic(); double sal = 0, atc = 0;
            
            while (sal == 0 || sal <0)                            //Gives Exception Message untill user enters a Valid Input
            {
                try
                {
                    Console.Write("Enter Your Salary: ");
                    sal = Convert.ToDouble(Console.ReadLine());
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
            while (atc == 0 || sal < 0)
            {
                try
                {
                    Console.Write("\nTax Saving Investment(80C): ");
                    atc = Convert.ToDouble(Console.ReadLine());
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
            string tax = l1.incomeRange(sal, atc);       //calls incomeRange() in Logic.cs and prints output
            if (!tax.Equals("0"))
            {
                string[] slabs = tax.Split(',');
                double s1 = Convert.ToDouble(slabs[0]);
                double s2 = Convert.ToDouble(slabs[1]);
                double s3 = Convert.ToDouble(slabs[2]);
                Console.WriteLine("\n\nSalary > Rs. 2,50,000= Rs." + s1.ToString("#,##0") + "\nSalary > Rs. 5,00,000= Rs." + s2.ToString("#,##0") + "\nSalary > Rs. 10,00,000= Rs." + s2.ToString("#,##0"));
                Console.WriteLine("----------------------------------");
                Console.WriteLine("Total Tax Charged: Rs." + (s1+s2+s3).ToString("#,##0"));
                Console.WriteLine("----------------------------------");
            }
            else
            {
                Console.WriteLine("No Tax Deducted");
            }
            

            Console.ReadKey();

        }
    }
}