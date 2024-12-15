using System.Linq; // Pour accéder à la méthode Count()
using System.Threading.Tasks; // Pour accéder à Task
using MonApiRestful; // Pour accéder à la classe Produit
using MonApiRestful.Controllers; // Teste du contrôleur 
using Microsoft.EntityFrameworkCore; // Pour accéder à DbContextOptionsBuilder
using MonApiRestful.Modeles.ProduitSave; // Pour accéder à MonApiDbContext
using MonApiRestful.Modeles.Database;
using Xunit; // Utilisation de Xunit

namespace MonApiTests
{
    public class ProduitsControllerTests
    {
        [Fact]
        public async Task GetProduits_ReturnsList()
        {
            // Configuration de la base de données InMemory
            var options = new DbContextOptionsBuilder<MonApiDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDb")
                .Options;

            // Ajout de données pour les tests
            using (var context = new MonApiDbContext(options))
            {
                context.Produits.Add(new Produit { Nom = "Produit1", Prix = 10.99M });
                context.Produits.Add(new Produit { Nom = "Produit2", Prix = 20.99M });
                await context.SaveChangesAsync();
            }

            // Exécution du test
            using (var context = new MonApiDbContext(options))
            {
                var controller = new ProduitsController(context);
                var result = await controller.GetProduits();
                Assert.NotNull(result.Value);
                Assert.Equal(2, result.Value.Count());
            }
        }
    }
}

