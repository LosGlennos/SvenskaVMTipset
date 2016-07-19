using Microsoft.AspNetCore.Mvc;

namespace SvenskaVMTipset.Controllers.Registration
{
    [Route("api/[controller]")]
    public class RegisterController : Controller
    {
        private readonly RegisterService _registerService;

        public RegisterController(RegisterService registerService)
        {
            _registerService = registerService;
        }

        [HttpPost]
        public IActionResult Register([FromBody] RegisterModel registerModel)
        {
            var registerResponse = _registerService.RegisterUser(registerModel);
            if (registerResponse)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
