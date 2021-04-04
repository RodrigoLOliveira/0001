using Microsoft.EntityFrameworkCore;

namespace Web.API.Models.Db
{
    public partial class WebContext : DbContext
    {
        public virtual DbSet<Cliente> Clientes { get; set; }

        public static string ConnectionString { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(ConnectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cliente>().ToTable("Cliente");

            modelBuilder.Entity<Cliente>(cliente =>
            {
                cliente.OwnsOne(e => e.Address).OwnsOne(e => e.Geo);
                cliente.OwnsOne(e => e.Company);
            });
        }
    }
}

