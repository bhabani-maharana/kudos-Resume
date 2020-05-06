using DemoWebApp.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoWebApp.ViewModels
{
    public class PieEditViewModel
    {
        public List<SelectListItem> Categories { get; set; }
        public Pie Pie { get; set; }
        public int CategoryId { get; set; }
    }
}
