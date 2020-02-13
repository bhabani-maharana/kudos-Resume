using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole
{
    public delegate void CallbackDelegate(int[] arr);

    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[10];
            int i = 0;
            
            Console.WriteLine("Enter 10 Integer Values:");
            while (i < arr.Length)
            {
                string val = Console.ReadLine();
                int input;
                if (int.TryParse(val, out input))
                {
                    arr[i] = input;
                    i++;
                }
                else
                        Console.WriteLine("Please Enter a Number\n");
            }
            while (true)
            {
                Console.WriteLine("1. Return all Even Numbers");
                Console.WriteLine("2. Return numbers greater than 10");
                Console.WriteLine("3. Return numbers divisible by 5");
                Filter f = new Filter();
                Console.Write(">>");
                int choice = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("-------------------");
                switch (choice)
                {
                    case 1: GetResult(arr, f.EvenFilter);
                        break;
                    case 2: GetResult(arr, f.GreaterThanFilter);
                        break;
                    case 3: GetResult(arr, f.DivByFilter);
                        break;
                    default:
                        Console.WriteLine("Select a Valid Option\n");
                        break;
                }
            }
            
        }

        static void GetResult(int[] arr, CallbackDelegate cbd) 
        {
            cbd(arr);
            Console.WriteLine("\n-------------------");
        }


       
    }
}
