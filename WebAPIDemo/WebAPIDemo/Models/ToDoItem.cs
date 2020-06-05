using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPIDemo.Models
{
    public class ToDoItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Describe { get; set; }
        public bool IsComplete { get; set; }
        public string Secret { get; set; }
    }
}
