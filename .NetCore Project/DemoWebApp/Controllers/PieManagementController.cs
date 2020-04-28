using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DemoWebApp.Controllers
{
    [Authorize(Roles = "Administrators")]
    [Authorize(Policy = "DeletePie")]
    public class PieManagementController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}