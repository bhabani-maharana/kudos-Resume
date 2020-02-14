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
            l1.incomeRange(sal, atc);       //calls incomeRange() in Logic.cs and prints output

            Console.ReadKey();

        }
    }
}
