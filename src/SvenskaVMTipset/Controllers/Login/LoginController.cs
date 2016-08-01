using Microsoft.AspNetCore.Mvc;
using SvenskaVMTipset.Services.Interfaces;

namespace SvenskaVMTipset.Controllers.Login
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly ILoginService _loginService;
        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        // POST api/login
        [HttpPost]
        public IActionResult Login([FromBody]LoginModel credentials)
        {
            if (_loginService.Login(credentials))
            {
                return Ok();
            }

            return Unauthorized();
        }
    }
}
