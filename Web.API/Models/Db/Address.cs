using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web.API.Models.Db
{
    public class Address
    {
        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Street { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Suite { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string City { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Zipcode { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public Geo Geo { get; set; }

    }
}
