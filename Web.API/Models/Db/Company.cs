using System.ComponentModel.DataAnnotations;

namespace Web.API.Models.Db
{
    public class Company
    {
        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string CatchPhrase { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Bs { get; set; }
    }
}