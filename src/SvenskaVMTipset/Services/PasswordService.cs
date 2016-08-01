using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using SvenskaVMTipset.DataAccess.Models;
using SvenskaVMTipset.Services.Interfaces;

namespace SvenskaVMTipset.Services
{
    public class PasswordService : IPasswordService
    {
        public PasswordComponents EncryptPassword(string password)
        {
            var salt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            var hash = KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 256000,
                numBytesRequested: 256 / 8);

            return new PasswordComponents
            {
                Password = Convert.ToBase64String(hash),
                Salt = Convert.ToBase64String(salt)
            };
        }

        public bool ComparePasswords(User user, string enteredPassword)
        {
            var hashedEnteredPassword = Convert.ToBase64String(
                KeyDerivation.Pbkdf2(
                password: enteredPassword,
                salt: Convert.FromBase64String(user.Salt),
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 256000,
                numBytesRequested: 256 / 8));

            return hashedEnteredPassword == user.Password;
        }
    }

    public class PasswordComponents
    {
        public string Password { get; set; }
        public string Salt { get; set; }
    }
}
