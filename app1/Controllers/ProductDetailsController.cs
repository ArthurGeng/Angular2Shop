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
    public class ProductDetailsController : ApiController
    {
        private app1Context db = new app1Context();

        // GET: api/ProductDetails
        public IQueryable<ProductDetails> GetProductDetails()
        {
            return db.ProductDetails;
        }

        // GET: api/ProductDetails/5
        [ResponseType(typeof(ProductDetails))]
        public async Task<IHttpActionResult> GetProductDetails(int id)
        {
            ProductDetails productDetails = await db.ProductDetails.FindAsync(id);
            if (productDetails == null)
            {
                return NotFound();
            }

            return Ok(productDetails);
        }

        // PUT: api/ProductDetails/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutProductDetails(int id, ProductDetails productDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productDetails.Id)
            {
                return BadRequest();
            }

            db.Entry(productDetails).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductDetailsExists(id))
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

        // POST: api/ProductDetails
        [ResponseType(typeof(ProductDetails))]
        public async Task<IHttpActionResult> PostProductDetails(ProductDetails productDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ProductDetails.Add(productDetails);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProductDetailsExists(productDetails.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = productDetails.Id }, productDetails);
        }

        // DELETE: api/ProductDetails/5
        [ResponseType(typeof(ProductDetails))]
        public async Task<IHttpActionResult> DeleteProductDetails(int id)
        {
            ProductDetails productDetails = await db.ProductDetails.FindAsync(id);
            if (productDetails == null)
            {
                return NotFound();
            }

            db.ProductDetails.Remove(productDetails);
            await db.SaveChangesAsync();

            return Ok(productDetails);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductDetailsExists(int id)
        {
            return db.ProductDetails.Count(e => e.Id == id) > 0;
        }
    }
}