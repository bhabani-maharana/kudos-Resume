using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPIDemo.Models
{
    public class ToDoViewModel
    {
        public string Name { get; set; }
        public string Details { get; set; }
        public bool IsComplete { get; set; }
    }
}
