using SvenskaVMTipset.DataAccess.Models;

namespace SvenskaVMTipset.DataAccess.Repositories
{
    public interface IUserRepository
    {
        User GetUser(string username);
        bool AddUser(User user);
    }
}
