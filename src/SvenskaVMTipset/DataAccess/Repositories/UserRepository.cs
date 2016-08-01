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

        public User GetUserByEmail(string email)
        {
            return _dataContext.Users.SingleOrDefault(x => x.Email == email);
        }

        public bool AddUser(User user)
        {
            var addedUser =_dataContext.Add(new User
            {
                Email = user.Email,
                Password = user.Password,
                Salt = user.Salt
            });

            if (addedUser == null) return false;

            _dataContext.SaveChanges();
            return true;
        }
    }
}
