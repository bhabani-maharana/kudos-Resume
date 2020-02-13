using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole
{
    class Filter
    {
        public void EvenFilter(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
                if (arr[i] % 2 == 0)
                    Console.Write(arr[i] + ", ");
        }

        public void GreaterThanFilter(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
                if (arr[i] > 10)
                    Console.Write(arr[i] + ", ");
        }

        public void DivByFilter(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
                if (arr[i] % 5 == 0)
                    Console.Write(arr[i] + ", ");
        }
    }
}
