using SvenskaVMTipset.Controllers.Login;
using SvenskaVMTipset.DataAccess.Repositories;
using SvenskaVMTipset.Services.Interfaces;

namespace SvenskaVMTipset.Services
{
    public class LoginService : ILoginService
    {
        private readonly IPasswordService _passwordService;
        private readonly IUserRepository _userRepository;

        public LoginService(IPasswordService passwordService, IUserRepository userRepository)
        {
            _passwordService = passwordService;
            _userRepository = userRepository;
        }

        public bool Login(LoginModel loginModel)
        {
            var user = _userRepository.GetUserByEmail(loginModel.Email);

            if (user == null)
            {
                return false;
            }

            var passwordMatches = _passwordService.ComparePasswords(user, loginModel.Password);

            return passwordMatches;
        }
    }
}
