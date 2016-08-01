using SvenskaVMTipset.DataAccess.Models;

namespace SvenskaVMTipset.Services.Interfaces
{
    public interface IPasswordService
    {
        PasswordComponents EncryptPassword(string password);
        bool ComparePasswords(User user, string enteredPassword);
    }
}