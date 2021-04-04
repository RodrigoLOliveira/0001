using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Web.API.Models.Db
{
    public class Geo
    {
        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Lat { get; set; }

        [Required(ErrorMessage = "Campo {0} é obrigatório")]
        public string Lng { get; set; }
    }
}
