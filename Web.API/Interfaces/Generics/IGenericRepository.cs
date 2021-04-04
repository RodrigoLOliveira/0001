using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Web.API.Interfaces.Generics
{
    public interface IGenericRepository<T>
    {
        Task<T> GetOneByIdAsync(int id);
        Task<List<T>> GetAllAsync();
        Task<List<T>> GetAllAsync(Expression<Func<T, bool>> expression);
        Task<T> AddAsync(T entidade);
        void Update(T entidade);
        Task DeleteAsync(int clienteId);
    }
}
