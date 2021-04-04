using Web.API.Models;
using Web.API.Models.Db;
using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Web.API.Interfaces;
using System.Threading.Tasks;

namespace Web.API.Controllers
{
    
    public class ClienteController : GenericController
    {
        readonly WebContext _context;
        readonly IClienteRepository clienteRepository;

        public ClienteController(WebContext context, IClienteRepository clienteRepository)
        {
            _context = context;
            this.clienteRepository = clienteRepository;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                return Result(await clienteRepository.GetAllAsync());
            }
            catch (Exception ex)
            {
                return BadResult(ex.Message);
            }
        }
    }
}