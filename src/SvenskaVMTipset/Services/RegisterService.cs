using System;
using SvenskaVMTipset.Controllers.Registration;
using SvenskaVMTipset.DataAccess.Repositories;
using SvenskaVMTipset.Services.Interfaces;

namespace SvenskaVMTipset.Services
{
    public class RegisterService : IRegisterService
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordService _passwordService;

        public RegisterService(IUserRepository userRepository, IPasswordService passwordService)
        {
            _userRepository = userRepository;
            _passwordService = passwordService;
        }

        public bool RegisterUser(RegisterModel registerModel)
        {
            var user = _userRepository.GetUserByEmail(registerModel.Email);
            if (user != null)
            {
                return false;
            }

            var passwordComponents = _passwordService.EncryptPassword(registerModel.Password);

            var success = _userRepository.AddUser(new DataAccess.Models.User
            {
                Email = registerModel.Email,
                Password = passwordComponents.Password,
                Salt = passwordComponents.Salt
            });

            return success;
        }
    }
}
