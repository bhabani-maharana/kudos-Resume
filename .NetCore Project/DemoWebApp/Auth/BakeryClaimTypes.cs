﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoWebApp.Auth
{
    public class BakeryClaimTypes
    {
        public static List<string> ClaimsList { get; set; } = new List<string> { "Delete Pie", "Add Pie", "Age for ordering" };
    }
}
