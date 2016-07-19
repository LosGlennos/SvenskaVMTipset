using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using SvenskaVMTipset.DataAccess.Repositories;

namespace SvenskaVMTipset.Controllers.Registration
{
    public class RegisterService : IRegisterService
    {
        private readonly IUserRepository _userRepository;

        public RegisterService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public bool RegisterUser(RegisterModel registerModel)
        {
            var user = _userRepository.GetUser(registerModel.Email);
            if (user != null)
            {
                return false;
            }

            var salt = new byte[128/8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            var hash = KeyDerivation.Pbkdf2(
                password: registerModel.Password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 256000,
                numBytesRequested: 256/8);

            var success = _userRepository.AddUser(new DataAccess.Models.User
            {
                Username = registerModel.Email,
                Password = Convert.ToBase64String(hash),
                Salt = Convert.ToBase64String(salt)
            });

            return success;
        }
    }
}
