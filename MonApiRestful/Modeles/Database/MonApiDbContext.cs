using Microsoft.EntityFrameworkCore;
using MonApiRestful.Modeles.ProduitSave;

namespace MonApiRestful.Modeles.Database
{

    public class MonApiDbContext : DbContext
    {
        public MonApiDbContext(DbContextOptions<MonApiDbContext> options) : base(options) { }

        public DbSet<Produit> Produits { get; set; }

    }
}

