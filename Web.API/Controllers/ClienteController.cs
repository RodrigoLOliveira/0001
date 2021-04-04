using Web.API.Models;
using Web.API.Models.Db;
using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Web.API.Interfaces;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Web.API.Controllers
{
    
    public class ClienteController : GenericController
    {
        readonly IClienteRepository clienteRepository;

        public ClienteController(IClienteRepository clienteRepository)
        {
            this.clienteRepository = clienteRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Result>> Search([FromQuery] string clienteEmail = "")
        {
            try
            {
                List<Cliente> cliente;

                if (string.IsNullOrEmpty(clienteEmail))
                    cliente = await clienteRepository.GetAllAsync();
                else
                    cliente = await clienteRepository.GetAllAsync(e => e.Email.ToUpper().Contains(clienteEmail.ToUpper()));

                if (cliente.Count > 0)
                    return Result(cliente);
                else
                    return BadResult("Nenhum resultado encontrado.");
            }
            catch (Exception ex)
            {
                return BadResult(ex.Message);
            }
        }

        [HttpGet("{clienteId:int}")]
        public async Task<ActionResult<Result>> GetById(int clienteId)
        {
            try
            {
                var cliente = await clienteRepository.GetOneByIdAsync(clienteId);

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

        [HttpPost]
        public async Task<ActionResult<Result>> Post(Cliente cliente)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var clienteRegistrado = await clienteRepository.AddAsync(cliente);
                    return Result(clienteRegistrado);
                }
                else
                {
                    return BadResult("Dados inválidos.");
                }
            }
            catch (Exception ex)
            {
                return BadResult(ex.Message);
            }

        }

        [HttpPut("{idCliente}")]
        public async Task<ActionResult<Result>> Put(int idCliente, Cliente cliente)
        {
            if (idCliente == cliente?.Id)
            {
                try
                {
                    clienteRepository.Update(cliente);
                    return Result(null, true, "Registro atualizado com sucesso.");
                }
                catch (Exception ex)
                {
                    return BadResult(ex.Message);
                }
            }
            else
            {
                return BadResult();
            }
        }

        [HttpDelete("{idCliente}")]
        public async Task<ActionResult<Result>> Delete(int idCliente)
        {
            try
            {
                await clienteRepository.DeleteAsync(idCliente);
                return Result(null, false, "Registro removido com sucesso!");
            }
            catch (Exception e)
            {
                return BadResult(e.Message);
            }
        }
    }
}