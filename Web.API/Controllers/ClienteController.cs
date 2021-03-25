using Web.API.Models;
using Web.API.Models.Db;
using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace Web.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private WebContext _context = null;

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                using (_context = new WebContext())
                {
                    var collection = _context.Clientes;
                    return Ok(collection?.ToList());
                }
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}