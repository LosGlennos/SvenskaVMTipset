using Microsoft.AspNetCore.Mvc;

namespace SvenskaVMTipset.Controllers.Login
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        // POST api/login
        [HttpPost]
        public IActionResult Post([FromBody]LoginModel credentials)
        {
            if (credentials.Username == "admin" && credentials.Password == "admin")
            {
                return Ok();
            }

            return Unauthorized();
        }
    }
}
