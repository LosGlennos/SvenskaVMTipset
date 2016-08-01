using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace SvenskaVMTipset.DataAccess.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Salt { get; set; }
    }
}
