using SvenskaVMTipset.DataAccess.Models;

namespace SvenskaVMTipset.DataAccess.Repositories
{
    public interface IUserRepository
    {
        User GetUserByEmail(string email);
        bool AddUser(User user);
    }
}
