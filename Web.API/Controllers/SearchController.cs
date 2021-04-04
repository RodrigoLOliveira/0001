using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.API.Interfaces;
using Web.API.Models;

namespace Web.API.Controllers
{
    public class SearchController : GenericController
    {
        readonly IClienteRepository clienteRepository;

        public SearchController(IClienteRepository clienteRepository)
        {
            this.clienteRepository = clienteRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Result>> Search([FromQuery] string email)
        {
            try
            {
                var cliente = await clienteRepository.SearchClienteByEmailAsync(email);

                if (cliente != null)
                    return Result(cliente);
                else
                    return BadResult("Nenhum resultado encontrado.");
            }
            catch (Exception ex)
            {
                return BadResult(ex.Message);
            }
        }
    }
}
