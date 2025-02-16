﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Web.API.Interfaces;
using Web.API.Models.Db;

namespace Web.API.Repositories
{
    public class ClienteRepository : IClienteRepository
    {
        WebContext _context;
        const string URI = "https://jsonplaceholder.typicode.com/users";

        public ClienteRepository(WebContext context)
        {
            _context = context;
        }

        public async Task<Cliente> GetOneByIdAsync(int id)
        {
            return await _context.Clientes?.FindAsync(id);
        }

        public async Task<List<Cliente>> GetAllAsync()
        {
            return await _context.Clientes?.ToListAsync();
        }

        public async Task<Cliente> SearchClienteByEmailAsync(string email)
        {
            using (var http = new HttpClient())
            {
                if (string.IsNullOrWhiteSpace(email))
                    return null;
                else if (email.Length == 1)
                    email = char.ToUpper(email[0]).ToString();
                else
                    email = char.ToUpper(email[0]) + email.Substring(1);

                var get = await http.GetAsync($"{URI}?email={email}");
                var content = await get.Content.ReadAsStringAsync();

                var opt = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

                var result = JsonSerializer.Deserialize<List<Cliente>>(content, opt);

                return result.FirstOrDefault();
            }
        }

        public async Task<Cliente> GetOneByEmailAsync(string email)
        {
            return await _context.Clientes.FirstOrDefaultAsync(e => e.Email.ToUpper() == email.ToUpper());
        }

        public async Task<Cliente> AddAsync(Cliente cliente)
        {
            var exists = _context.Clientes.Any(e => e.Email == cliente.Email);

            if (!exists)
            {
                await _context.Clientes.AddAsync(cliente);
                _context.SaveChanges();
                return cliente;
            }
            else
            {
                throw new Exception("Email já está em uso.");
            }
        }

        public void Update(Cliente cliente)
        {
            var emailIsValid = !_context.Clientes.Any(e => e.Email.ToUpper() == cliente.Email.ToUpper() && e.Id != cliente.Id);
            if (emailIsValid)
            {
                _context.Clientes.Update(cliente);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Email já está sendo usado.");
            }            
        }

        public async Task DeleteAsync(int clienteId)
        {
            var cliente = await GetOneByIdAsync(clienteId);

            if (cliente != null)
            {
                _context.Clientes.Remove(cliente);
                _context.SaveChanges();
            }
            else
            {
                throw new Exception("Usuário não encontrado.");
            }
        }

        public async Task<List<Cliente>> GetAllAsync(Expression<Func<Cliente, bool>> expression)
        {
            return await _context.Clientes?.Where(expression).ToListAsync();
        }
    }
}
