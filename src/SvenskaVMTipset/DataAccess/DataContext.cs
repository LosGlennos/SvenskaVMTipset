using Microsoft.EntityFrameworkCore;
using SvenskaVMTipset.DataAccess.Models;

namespace SvenskaVMTipset.DataAccess
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
    }
}
