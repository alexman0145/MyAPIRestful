using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MonApiRestful.Modeles.Database;
using MonApiRestful.Modeles.ProduitSave;

namespace MonApiRestful.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProduitsController : Controller
    {
        private readonly MonApiDbContext _context;

        public ProduitsController(MonApiDbContext context)
        {
            _context = context;
        }

        // GET: Produit
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Produit>>> GetProduits()
        {
            return await _context.Produits.ToListAsync();
        }


        // GET: Produit/Details/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Produit>> GetProduit(int id)
        {
            var produit = await _context.Produits.FindAsync(id);
            if (produit == null)
            {
                return NotFound();
            }

            return produit;
        }

        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Produit>>> SearchProduit([FromQuery]string? nom)
        {
            var query = _context.Produits.AsQueryable();
            if (!string.IsNullOrEmpty(nom))
            {
                query = query.Where(p => p.Nom.Contains(nom));
            }


            return await query.ToListAsync();
        }


        // POST: Produit/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<ActionResult<Produit>> PostProduit(Produit produit)
        {

                _context.Produits.Add(produit);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetProduit), new { id = produit.Id }, produit);
            
        }

        // PUT: Produit/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduit(int id, Produit produit)
        {
            if (id != produit.Id)
            {
                return BadRequest();
            }

            _context.Entry(produit).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Produits.Any(e => e.Id == id))
                {
                    return NotFound();
                }
 
                    throw;
            }

            return NoContent();
        }

        // DELETE: Produit/Delete/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduit(int id)
        {
            var produit = await _context.Produits.FindAsync(id);
            if (produit == null)
            {
                return NotFound();
            }

            _context.Produits.Remove(produit);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}