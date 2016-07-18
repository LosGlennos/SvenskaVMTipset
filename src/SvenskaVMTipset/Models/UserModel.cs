using Microsoft.EntityFrameworkCore;

namespace SvenskaVMTipset.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
            
        }
        
        public DbSet<User> Users { get; set; }
    }

    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] Password { get; set; }
        public byte[] Salt { get; set; }
    }
}
