using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.API.Models.Db
{
    [Table("Cliente")]
    public partial class Cliente
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(100)]
        [Required]
        public string Email { get; set; }

    }
}
