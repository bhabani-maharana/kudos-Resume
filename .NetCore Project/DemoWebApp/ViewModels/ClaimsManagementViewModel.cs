using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoWebApp.ViewModels
{
    public class ClaimsManagementViewModel
    {
        public string UserId { get; set; }
        public string ClaimId { get; set; }
        public List<string> AllClaimsList { get; set; }

        //public ClaimsManagementViewModel()
        //{
        //    AllClaimsList = new List<IdentityUserClaim<string>>();
        //}
    }

    //public class UserClaim
    //{
    //    public string ClaimType { get; set; }
    //    public string ClaimValue { get; set; }
    //}
}
