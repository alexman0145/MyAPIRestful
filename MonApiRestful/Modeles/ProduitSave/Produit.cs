/// <summary>
/// Modèle d'un produit
/// </summary>
namespace MonApiRestful.Modeles.ProduitSave
{
    public class Produit
    {
        public int Id { get; set; }
        public string Nom { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public double Prix { get; set; }
    }
}


// public Produit()
// {
//     Nom = string.Empty;
//     Description = string.Empty;

//     ///
//     /// <summary>
//     /// Constructeur d'un produit
//     /// </summary>


// }