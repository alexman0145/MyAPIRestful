using Microsoft.EntityFrameworkCore;
using MonApiRestful.Modeles.ProduitSave;

namespace MonApiRestful.Modeles.Database
{

    public class MonApiDbContext : DbContext
    {

        public DbSet<Produit> Produits { get; set; }

        public MonApiDbContext(DbContextOptions<MonApiDbContext> options) : base(options)
        {
            Produits = Set<Produit>();
        }


    }
}

