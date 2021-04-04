using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.API.Interfaces.Generics;
using Web.API.Models.Db;

namespace Web.API.Interfaces
{
    public interface IClienteRepository : IGenericRepository<Cliente>
    {
        Task<Cliente> SearchClienteByEmailAsync(string email);
    }
}
