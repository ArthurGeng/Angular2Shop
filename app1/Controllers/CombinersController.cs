using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using app1.Models;
using app1.Models.Entities;

namespace app1.Controllers
{
    public class CombinersController : ApiController
    {
        private app1Context db = new app1Context();

        // GET: api/Combiners
        public IQueryable<Combiner> GetCombiners()
        {
            return db.Combiners;
        }

        // GET: api/Combiners/5
        [ResponseType(typeof(Combiner))]
        public async Task<IHttpActionResult> GetCombiner(int id)
        {
            Combiner combiner = await db.Combiners.FindAsync(id);
            if (combiner == null)
            {
                return NotFound();
            }

            return Ok(combiner);
        }

        // PUT: api/Combiners/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCombiner(int id, Combiner combiner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != combiner.Id)
            {
                return BadRequest();
            }

            db.Entry(combiner).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CombinerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Combiners
        [ResponseType(typeof(Combiner))]
        public async Task<IHttpActionResult> PostCombiner(Combiner combiner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var product = new Product() { ProductName = combiner.ProductName, Price = combiner.Price, InStock = combiner.InStock };
            product.ProductDetails = new ProductDetails() { ProductCompany = combiner.ProductCompany };

            db.Products.Add(product);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = combiner.Id }, combiner);
        }

        // DELETE: api/Combiners/5
        [ResponseType(typeof(Combiner))]
        public async Task<IHttpActionResult> DeleteCombiner(int id)
        {
            Combiner combiner = await db.Combiners.FindAsync(id);
            if (combiner == null)
            {
                return NotFound();
            }

            db.Combiners.Remove(combiner);
            await db.SaveChangesAsync();

            return Ok(combiner);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CombinerExists(int id)
        {
            return db.Combiners.Count(e => e.Id == id) > 0;
        }
    }
}