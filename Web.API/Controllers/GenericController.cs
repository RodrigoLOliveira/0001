using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.API.Models;

namespace Web.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenericController : ControllerBase
    {
        protected ActionResult Result(object data, bool success = true, string message = "")
        {
            return Ok(new Result() { Data = data, Success = success, Message = message });
        }

        protected ActionResult BadResult(string message = "", object data = null)
        {
            return Ok(new Result() { Data = data, Success = false, Message = message });
        }
    }
}
