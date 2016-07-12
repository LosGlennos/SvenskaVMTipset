using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace SvenskaVMTipset.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        // POST api/login
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
    }
}
