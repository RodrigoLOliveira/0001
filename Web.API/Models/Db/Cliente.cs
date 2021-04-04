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
        [RegularExpression(@"^[A-Za-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$", ErrorMessage = "Email inválido.")]
        [Required]
        public string Email { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Username { get; set; }
        
        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Website { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public Address Address { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public Company Company { get; set; }

        public Cliente CreateExemple (string email)
        {
            this.Email = email;
            this.Name = "Cliente exemplo";
            this.Username = "Username";
            this.Phone = "00000-0000";
            this.Website = "www.com.br";
            
            this.Company = new Company
            {
                Name = "Teste Compania",
                Bs = "Teste",
                CatchPhrase = "Teste"
            };

            this.Address = new Address
            {
                Street = "Rua de teste",
                Suite = "12",
                City = "TST",
                Zipcode = "0000-000",
                Geo = new Geo
                {
                    Lat = "123123",
                    Lng = "2312"
                }
            };

            return this;
        }
    }
}
