using System.Linq;
using SvenskaVMTipset.DataAccess.Models;

namespace SvenskaVMTipset.DataAccess.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _dataContext;

        public UserRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public User GetUser(string username)
        {
            return _dataContext.Users.SingleOrDefault(x => x.Username == username);
        }

        public bool AddUser(User user)
        {
            var addedUser =_dataContext.Add(new User
            {
                Username = user.Username,
                Password = user.Password,
                Salt = user.Salt
            });

            return addedUser != null;
        }
    }
}
